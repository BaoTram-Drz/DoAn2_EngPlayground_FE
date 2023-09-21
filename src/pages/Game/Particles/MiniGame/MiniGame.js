import { useState, useEffect } from 'react';
import {Link,  useLocation } from 'react-router-dom';
import MyLottieAnimation from '../../LottieAnimation/MyLottieAnimation'; 
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase'
import { ref } from 'firebase/storage'
import { getVocab } from "../../../../API/vocabApi";
import { saveScore } from "../../../../API/saveMiniGameApi";
import {BackHome,BigText,Container, Row, Heading, CardContainer, hideCard, 
  hideImage, hideText, CardWrapper, CardImage, Text, Button} from './MiniGame.styled'


function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? ` active ${item.stat}` : "";

  return (
    <CardWrapper className={`card${itemClass}`} onClick={() => handleClick(id)}>
      {item.type === 'img' ? (
        <CardImage src={item.content} alt="" />
      ) : (
        <Text className="card text">{item.content}</Text>
      )}
    </CardWrapper>
  );
}

function MiniGame() {    
  const [items, setItems] = useState([]);
  const [data, setCourses] = useState([]);
  const [prev, setPrev] = useState(-1);
  const [clickCount, setClickCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [productName, setProductName] = useState('Product A');
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
  }, [location.state]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const topicCourse = { topic: productName.toLowerCase() };
        const result = await getVocab(topicCourse);
  
        for (let i = 0; i < result.length; i++) {
          const path = `${topicCourse.topic}/${result[i].image}`;
          const downloadURL = await getDownloadURL(ref(storage, path));
          result[i].image = downloadURL;
        }
  
        setCourses(result);
        result.sort(() => Math.random() - 0.5)
        const newItems = [];
        for (let i = 0; i < 6; i++) {
          const imageItem = { id: `${i + 1}.1`,  content: result[i].image,  type: 'img',  stat: '' };
          const nameItem = {  id: `${i + 1}.2`,  content: result[i].name,  type: '',  stat: ''  };
          newItems.push(imageItem, nameItem);
        }

        setItems(newItems.sort(() => Math.random() - 0.5));

        setTotalCount(newItems.length/2)
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [productName]);
  

  function check(current) {
    if ((Math.floor(items[current].id) === Math.floor(items[prev].id)) && (items[current].id !== items[prev].id)) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
      setCompletedCount(completedCount + 1);
      if(completedCount === totalCount) {
        saveMiniGame(clickCount, productName);
      }
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 500);
    }

    setClickCount(clickCount + 1);
  }

  function handleClick(id) {

    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      // Disable click events during the processing time
      document.body.style.pointerEvents = 'none';

      check(id);

      // Delay re-enabling click events
      setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
      }, 10);
    }

  }
  const saveMiniGame = async(clickCount, productName)=> {
   const response = await saveScore(clickCount, productName);
   console.log(response);
  }
  return (
    <Container>      
      
      <Link to="/cardList"><BackHome /></Link>
      <BigText>MiniGame - {productName}</BigText>
      <Row>
        <Heading>
            Click Count: {clickCount}
          </Heading>
          <Heading>
            Completed: {completedCount}
          </Heading>
      </Row>
      <CardContainer>
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
        
      </CardContainer>
      
      {completedCount === totalCount && completedCount > 0 &&(

        <MyLottieAnimation />
      )}
      <Button to="/league">League</Button>
    </Container>
  );
}

  
export default MiniGame;