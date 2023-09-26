import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Game1 from '../LearnComponent/Game1/Game1';
import Game2 from '../LearnComponent/Game2/Game2';
import Game3 from '../LearnComponent/Game3/Game3';
import Game4 from '../LearnComponent/Game4/Game4';
import Game5 from '../LearnComponent/Game5';
import { getGamesData } from '../../../../API/coursesData';
import MyLottieAnimation from '../LearnComponent/LottieAnimation/MyLottieAnimation';
import Incorrect from '../LearnComponent/LottieAnimation/Incorrect'
import {PreButton, NextButton, BigText, Header, HeadersContainer, ButtonLeft, ButtonRight,
  SubButton, ButtonsContainer, Text1} from './LayoutLearn.styled'


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
