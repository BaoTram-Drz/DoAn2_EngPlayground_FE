import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Game1 from '../LearnComponent/Game1/Game1';
import Game2 from '../LearnComponent/Game2/Game2';
import Game3 from '../LearnComponent/Game3/Game3';
import Game4 from '../LearnComponent/Game4/Game4';
import Game5 from '../LearnComponent/Game5';
import ListenLevel12 from '../LearnComponent/Listen/Level12/ListenLevel12';
import ListenLevel345 from '../LearnComponent/Listen/Level345/ListenLevel345';
import { getGamesData } from '../../../../API/coursesData';
import MyLottieAnimation from '../LearnComponent/LottieAnimation/MyLottieAnimation';
import Incorrect from '../LearnComponent/LottieAnimation/Incorrect'
import {PreButton, NextButton, PageName, Header, HeadersContainer, ButtonLeft, ButtonRight,
  SubButton, ButtonsContainer, Text1} from './LayoutLearn.styled'
import data from './data.json'

const LayoutLearn = () => {
  const [datas, setDatas] = useState([]);
  const [lessonType, setLessonType] = useState();
  const [level, setLevel] = useState();
  const [productName, setProductName] = useState('Product A');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerData, setAnswerData] = useState();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isFireWork, setIsFireWork] = useState(null);
  const location = useLocation();
  const [hasFetchedData, setHasFetchedData] = useState(false);

    //lấy tên chủ đề từ trang trước 
  console.log(productName, lessonType, level)
  // lấy level
  useEffect(() => {
    if (location.state) {
      setProductName(location.state.productname || 'Product A');
      setLessonType(location.state.lessonType || 'listening');
      setLevel(location.state.level || '1');
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchData = async () => {
        const filteredData = data.filter(item => item.kind === lessonType && item.level === level);
        console.log("Filtered data:", filteredData);
        setDatas(filteredData);
        console.log("Data state:", filteredData);
      };
      fetchData();
    };
    fetchData();
  }, [productName]);
  
  
  
  
  // //nếu ban đầu đã đúng
  // useEffect(() => {
  //   if (datas[currentIndex]?.state === 'true') {
  //     setIsAnswerCorrect(true);
  //   }
  //   if (datas[currentIndex]?.state === 'false') {
  //     setIsAnswerCorrect(false);
  //   }
  // }, [currentIndex]);

  // //kiểm tra bài này đã pass chưa
  // useEffect(() => {
  //   if (datas[currentIndex]?.state === 'true') {
  //     setIsAnswerCorrect(true);
  //   } else {
  //     setIsAnswerCorrect(false);
  //   }
  //   setIsFireWork(null);
  // }, [currentIndex]);

  // //Api lấy dữ liệu
  // useEffect(() => {
  //   // setProductName(localStorage.getItem('productName'));
  //   const fetchLearns = async () => {
  //     try {
  //       const learnData = await getGamesData(productName);

  //       // const learnData = datas;
  //       setDatas(learnData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchLearns();
  // }, [productName]);

  const handlePrevButtonClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currentIndex < datas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex < datas.length - 1 && isAnswerCorrect) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswerCorrect(false);
    }
    console.log(datas[currentIndex + 1]?.lesson)

  };


  const handleGetAnswerScore = (dataAnswer) => {
    setAnswerData(JSON.parse(dataAnswer));
  };

  const submitAnswerSelected = () => {
    console.log(answerData)
    if (datas[currentIndex]?.state === 'true') { //trường hợp đã pass
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
      <PageName>Word pairing</PageName>
      <HeadersContainer>
        <Header>{datas[currentIndex]?.kind}</Header>
        <Header>LESSON {datas[currentIndex]?.lesson}</Header>
      </HeadersContainer>

      <>
        {/* {datas[currentIndex]?.category === 'Game1' && (
          <Game1 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {datas[currentIndex]?.category === 'Game2' && (
          <Game2 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {datas[currentIndex]?.category === 'Game3' && (
          <Game3 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )}
        {datas[currentIndex]?.category === 'Game4' && (
          <Game4 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />
        )} */}

      </>{/*viết hàm load data của listening, level mấy -> đưa data vào component*/}
      {lessonType === "listening" && hasFetchedData && (
        <>
          {/* {level === "1" && <p>level1</p>} */}
          {level === "1" && <ListenLevel12 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "2" && <ListenLevel12 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "3" && <ListenLevel345 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "4" && <ListenLevel345 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "5" && <ListenLevel345 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
        </>
      )}

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

        {datas[currentIndex + 1]?.kind === 'Game' ? (
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
