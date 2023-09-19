import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {Link,  useLocation } from 'react-router-dom';
import MyLottieAnimation from './LottieAnimation/MyLottieAnimation'; 
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase'
import { ref } from 'firebase/storage'
import { getVocab } from "../../API/vocabApi";
import { saveScore } from "../../API/saveMiniGameApi";
import { FaArrowLeft } from 'react-icons/fa';

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
    z-index: 10;

    @media (max-width: 1100px) {
      margin-top: 10%;
      margin-bottom: -10%;
    }
    @media (max-width: 768px) {
      margin-top: 15%;
      margin-bottom: -15%;
    }
    @media (max-width: 540px) {
      margin-top: 20%;
      margin-bottom: -25%;
    }
    @media (max-width: 420px) {
      margin-left: 1%;
      margin-top: 25%;
      margin-bottom: -25%;
      width: 15px;
      height: 15px;
    }
    @media (max-width: 300px) {
      margin-top: 30%;
      margin-bottom: -30%;
    }
`;
const BigText = styled.p`
  margin: -5% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1rem;
  }
`;
const Container = styled.div`
    margin: 0% auto;
    width: 100%;
`;
const Row = styled.div`
  margin: 5% 2% 0% auto;
  width: 90%;
  display: flex;
  align-items: right;
  gap: 4em;
`;
const Heading = styled.h3`
  font-family: 'Autour One';
  font-size: 1.5rem;
  font-weight: bold;
  color: #F47068;
  margin-bottom: 20px;

  @media (max-width: 912px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 714px) {
    font-size: 1rem;
  }
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`;
const CardContainer = styled.div`
    margin: 2% auto 10% auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1em;

    @media (max-width: 912px) {
      width: 90%;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5em;
    }

    @media (max-width: 440px) {
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5em;
    }

`;
const hideCard = keyframes`
  0%, 70% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;
const hideImage = keyframes`
  0%, 70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const hideText = keyframes`
  0%, 70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    display: none;
  }
`;
const CardWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  transform: rotateY(180deg);
  animation: ${hideCard} 2s linear;
  transition: transform 0.5s;    
  height: 250px;

  &.active {
    transform: rotateY(0);
    img {
      transform: scale(1);
    }
    .text {
      transform: scale(1);
    }
  }

  &.correct {
    background-color: #1697A6;
  }

  &.wrong {
    background-color: #ffb3ae;
  }
  @media (max-width: 1100px) {
    height: 220px;
  }
  @media (max-width: 900px) {
    height: 200px;
  }
  @media (max-width: 700px) {
    height: 180px;
  }
  @media (max-width: 550px) {
    height: 100px;
  }
  @media (max-width: 400px) {
    height: 100px;
  }
  @media (max-width: 300px) {
    height: 80px;
  }
`;

const CardImage = styled.img`
  width: 90%;
  height: 90%;
  transition: transform 0.5s;
  transform: scale(0);
  animation: ${hideImage} 2s linear;
`;
const Text = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 1.5rem;
  color: pink;
  background-color: white;
  animation: ${hideText} 2s linear;
  transform: scale(0);
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media (max-width: 550px) {
    font-size: 1.3rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

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
    </Container>
  );
}

  
export default MiniGame;