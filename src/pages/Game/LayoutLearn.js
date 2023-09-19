import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import Game1 from './BigTest/Game1';
import Game2 from './BigTest/Game2';
import Game3 from './BigTest/Game3';
import Game4 from './BigTest/Game4';
import Game5 from './BigTest/Game5';
import datas from './data.json';
import { getGamesData } from '../../API/coursesData';
import MyLottieAnimation from './LottieAnimation/MyLottieAnimation';
import Incorrect from './LottieAnimation/Incorrect'
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';


const PreButton = styled(FaArrowLeft)`
    width: 20px;
    height: 20px;
`;
const NextButton = styled(FaArrowRight)`
    width: 20px;
    height: 20px;
`;
const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #F47068;
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
  padding: 12px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;
  text-align: center;
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

const ButtonLeft = styled(Link)`
  width: 150px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

const ButtonRight = styled(Link)`
  width: 150px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: ${(props) => (props.isAnswerCorrect ? '#ffc24b' : 'gray')};
  background-color: white;
  border: 3px solid ${(props) => (props.isAnswerCorrect ? '#f47068' : 'gray')};
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

const SubButton = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: white;
  background-color: #f47068;
  border: 3px solid #f47068;
  border-radius: 20px;
  font: normal 400 2rem 'Autour One';
  color: #f47068;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  z-index: 2;

  &:hover{
    color: white;
    background-color: #f47068;
  }

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

const Text1 = styled.p`
  width: 40%;
  padding: 12px 24px;
  margin: 0 auto;
  font: normal 400 2rem 'Autour One';
  text-align: center;
  color: black;
`;

const LayoutLearn = () => {
  const [data, setData] = useState([]);
  const [productName, setProductName] = useState('Product A');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerData, setAnswerData] = useState();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isFireWork, setIsFireWork] = useState(null);
  const location = useLocation();

  //nếu ban đầu đã đúng
  useEffect(() => {
    if (data[currentIndex]?.state === 'true') {
      setIsAnswerCorrect(true);
    }
    if (data[currentIndex]?.state === 'false') {
      setIsAnswerCorrect(false);
    }
  }, [currentIndex]);
  //kiểm tra bài này đã pass chưa
  useEffect(() => {
    if (data[currentIndex]?.state === 'true') {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setIsFireWork(null);
  }, [currentIndex]);

  //lấy tên chủ đề từ trang trước 
  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
  }, [location.state]);

  //Api lấy dữ liệu
  useEffect(() => {
    setProductName(localStorage.getItem('productName'));
    const fetchLearns = async () => {
      try {
        const learnData = await getGamesData(productName);

        // const learnData = datas;
        setData(learnData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLearns();
  }, []);

  const handlePrevButtonClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex < data.length - 1 && isAnswerCorrect) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswerCorrect(false);
    }
    console.log(data[currentIndex + 1]?.lesson)

  };


  const handleGetAnswerScore = (dataAnswer) => {
    setAnswerData(JSON.parse(dataAnswer));
  };

  const submitAnswerSelected = () => {
    console.log(answerData)
    if (data[currentIndex]?.state === 'true') { //trường hợp đã pass
      setIsAnswerCorrect(true);
    } else if (answerData.answerState === true) { //trường hợp so sánh điểm => full
      setIsAnswerCorrect(true);
      setIsFireWork(true);
    } else { //trường hợp so sánh điểm => bằng 0
      setIsAnswerCorrect(false);
      setTimeout(() => {
        setIsFireWork(false);
      }, 500);
      setIsFireWork(null);
    }
  };

  const handleVoice = (item) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(item);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Trình duyệt không hỗ trợ SpeechSynthesis API.');
    }
  };
  useEffect(() => {
    if (isFireWork) {
      handleVoice('correct'); // Gọi hàm xử lý âm thanh khi isFireWork === true
    }
  }, [isFireWork]);
  return (
    <>
      <BigText>Word pairing</BigText>
      <HeadersContainer>
        <Header>{data[currentIndex]?.category}</Header>
        <Header>LESSON {data[currentIndex]?.lesson}</Header>
      </HeadersContainer>

      <>
        {data[currentIndex]?.category === 'Game1' && (
          <Game1 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {data[currentIndex]?.category === 'Game2' && (
          <Game2 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {data[currentIndex]?.category === 'Game3' && (
          <Game3 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {data[currentIndex]?.category === 'Game4' && (
          <Game4 data={data[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}

      </>

      {isFireWork === true &&
        <>
          <MyLottieAnimation />
        </>
      }
      <ButtonsContainer>
        {currentIndex === 0 ? (
          <ButtonLeft to="/vocab" state={{ productname: productName }}>
            <PreButton />Pre
          </ButtonLeft>
        ) : (
          <ButtonLeft onClick={handlePrevButtonClick}>Pre</ButtonLeft>
        )}

        <SubButton onClick={submitAnswerSelected}>Submit</SubButton>

        {data[currentIndex + 1]?.kind === 'Game' ? (
          <ButtonRight
            onClick={isAnswerCorrect ? handleNextButtonClick : ""}
            isAnswerCorrect={isAnswerCorrect}
          >
            Next<NextButton />
          </ButtonRight>
        ) : (
          <ButtonRight
            to={isAnswerCorrect ? "/bigtest" : ""}
            state={{ productname: productName }}
            isAnswerCorrect={isAnswerCorrect}
          >
            Next<NextButton />
          </ButtonRight>

        )}
      </ButtonsContainer>

      {isFireWork === false && <Incorrect />}
    </>

  );
};

export default LayoutLearn;
