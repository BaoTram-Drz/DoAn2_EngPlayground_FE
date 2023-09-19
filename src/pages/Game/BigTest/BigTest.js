import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";
import datas from '../data.json'
import MyLottieAnimation from '../LottieAnimation/MyLottieAnimation';
import api from '../../../API/index'
import { getGamesData } from '../../../API/coursesData';

const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 800px) {
    margin: 15% auto auto auto;
  }

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
    font-size: 2.5rem;
  }

  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 2rem;
  }

  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;
  text-align: center;
  width: 15%;
  margin-top: -7%;
  margin-bottom: 5%;

  @media (max-width: 1200px) {
    margin-top: -5%;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    padding: 5px 12px;
    font-size: 1rem;
    border-width: 2px;
  }
  @media (max-width: 280px) {
    width: 40%;
    padding: 5px 0px;
    font-size: 0.8rem;
  }
`;

const HeadersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5% auto auto auto;
`;

const Button = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-decoration: none;
  text-align: center;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 200px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;
const SubButton = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-align: center;
  text-decoration: none;
  font: normal 400 2rem "Autour One";
  color: white;
  background-color: #f47068;
  border: 3px solid #f47068;
  border-radius: 20px;
  @media (max-width: 1200px) {
    width: 200px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;

const BigTest = () => {
  const [data, setData] = useState([]);  
  const [productName, setProductName] = useState(localStorage.getItem('productName'));
  const [allScore, setAllScore] = useState(0);
  const [answerScore, setAnswerScore] = useState(0);
  const [answerData, setAnswerData] = useState([]);
  const [isFireWork, setIsFireWork] = useState(false);
  const location = useLocation();
  const [correctData, setCorrectData] = useState('');
  const [wrongData, setWrongData] = useState('Answer: ::: ');
  
  // const  [userScore, setUserScore] = useState('');

  // useEffect(() => {
  //   if (location.state && location.state.productname) {
  //     setProductName(productName);
  //   }
  //   console.log(data);
  // }, [location.state]);


  useEffect(() => {
    const fetchLearns = async () => {
      try {
        const learnData = await getGamesData(productName);
        setData(learnData);
        console.log(learnData)
      } catch (error) {
        console.error(error);
      }
    };
    fetchLearns();
  }, []);

  const handleGetAnswerScore = (dataAnswer) => {
    const smallAnswerData = JSON.parse(dataAnswer);
    setAnswerData((prevData) => [...prevData, smallAnswerData]);
  };
  
  const submitAnswerSelected = () => {
    setIsFireWork(true);
  
    let allTotalScore = 0;

    const totalScore = answerData.reduce((acc, answerItem) => {
      const item = data.find((dataItem) => dataItem._id.$oid === answerItem.id.$oid);
      console.log(answerData)
      if (answerItem.answerState ===true && item && item.kind === 'Game') {
        return acc + answerItem.score;
      } 
      return acc;
    }, 0);

    data.forEach((item) => {
      allTotalScore += item.score;
      setWrongData(prevWrongData => `${prevWrongData}  ${item.question}: ::: ${item.correctText}  :::`);
    });

    setAllScore(allTotalScore)
    setAnswerScore(totalScore);

    const userScore = {
      score: totalScore,
      productName: productName,
      user: JSON.parse(localStorage.getItem('user')).name,
      image: JSON.parse(localStorage.getItem('user')).image,
    }
    // try {
    //   const response = api.post('/games/saveLeague', userScore);
    //   return response.data;
    // } catch (error) {
    //   throw new Error(error.message);
    // }

  };
 
  return (
    <>   
      <BigText>BigTest</BigText>   
      <HeadersContainer>
        <Header>Test</Header>        
        <Header>4/4</Header>
      </HeadersContainer>
      {isFireWork === true && 
          <>
            <MyLottieAnimation/>
          </>
        }
        {data.map((item) => {
            if (data.includes(item.id)) {
            return null;
            }
            return (
              <>              
                {item?.category === 'Game1' && <Game1  data={item} onSelectAnswer={handleGetAnswerScore}/>} 
                {item?.category === 'Game2' && <Game2  data={item} onSelectAnswer={handleGetAnswerScore}/>}
                {item?.category === 'Game3' && <Game3  data={item} onSelectAnswer={handleGetAnswerScore}/>}
                {item?.category === 'Game4' && <Game4  data={item} onSelectAnswer={handleGetAnswerScore}/>} 
            </>                   
            );
        })}
      
      <ButtonsContainer>        
        <Button to="/layoutlearn">Pre</Button>
        {isFireWork === false &&           
          <SubButton  onClick={() => { submitAnswerSelected()}}>Submit</SubButton>
        }
        {isFireWork === true && 
          <>
            <Button 
              to={ '/scores' }
              state={{ score: answerScore, allScore: allScore, right: correctData, wrong: wrongData}} 
            >
              Score
            </Button>
          </>
        }
      </ButtonsContainer>
      
    </>
   
  );
};

export default BigTest ;
