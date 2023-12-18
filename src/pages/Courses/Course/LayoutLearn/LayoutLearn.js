import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Game1 from '../LearnComponent/Game1/Game1';
import Game2 from '../LearnComponent/Game2/Game2';
import Game3 from '../LearnComponent/Game3/Game3';
import Game4 from '../LearnComponent/Game4/Game4';
import Game5 from '../LearnComponent/Game5';
import ListenLevel12 from '../LearnComponent/Listen/Level12/ListenLevel12';
import ListenLevel345 from '../LearnComponent/Listen/Level345/ListenLevel345';
import WriteLevel1245 from "../LearnComponent/Write/Level1245/WriteLevel1245";
import WriteLevel3 from "../LearnComponent/Write/Level3/WriteLevel3";
import SpeakLevel12 from "../LearnComponent/Speak/Level12/SpeakLevel12";
import SpeakLevel345 from "../LearnComponent/Speak/Level345/SpeakLevel345";
import Reading12345 from "../LearnComponent/Read/ReadLevel12345"
import { getGamesData } from '../../../../API/coursesData';
import MyLottieAnimation from '../LearnComponent/LottieAnimation/MyLottieAnimation';
import Incorrect from '../LearnComponent/LottieAnimation/Incorrect'
import {PreButton, NextButton, PageName, Header, HeadersContainer, ButtonLeft, ButtonRight,
  SubButton, ButtonsContainer, TIB, Text1} from './LayoutLearn.styled'
import data from './data.json'

const LayoutLearn = () => {
  const validKinds = ['listening', 'speaking', 'writing', 'reading'];
  const location = useLocation();
  const [lessonType, setLessonType] = useState();
  const [level, setLevel] = useState();
  const [productName, setProductName] = useState('Product A');
  const [datas, setDatas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerData, setAnswerData] = useState();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isFireWork, setIsFireWork] = useState(null);
  const [hasFetchedData, setHasFetchedData] = useState(false);

    //lấy tên chủ đề từ trang trước 
  console.log(productName, lessonType, level)
  // lấy level
  useEffect(() => {
    setLessonType((prev)=>localStorage.getItem('lessonType'));
    setProductName((prev)=>localStorage.getItem('productName'));
    setLevel((prev)=>localStorage.getItem('level'));
    console.log("learlayout", localStorage);

  }, []);

  //lấy data giả
  useEffect(() => {
    const fetchData = async () => {
      const filteredData = data.filter(item => item.kind === lessonType && item.level === level);

      if (filteredData.length > 0) {
        setDatas(filteredData);
        setHasFetchedData(true);
        console.log("Data state:", filteredData);
      } else {
        setHasFetchedData(false);
      }
    }
    fetchData();
  }, [level]);
  
  // //nếu ban đầu đã đúng
  useEffect(() => {
    if (datas[currentIndex]?.state === 'true') {
      setIsAnswerCorrect(true);
    }
    if (datas[currentIndex]?.state === 'false') {
      setIsAnswerCorrect(false);
    }
  }, [currentIndex]);

  // //kiểm tra bài này đã pass chưa
  useEffect(() => {
    if (datas[currentIndex]?.state === 'true') {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setIsFireWork(null);
  }, [currentIndex]);

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
    console.log("answer: ",answerData)
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
        <Header>{datas[currentIndex]?.kind.toUpperCase()}</Header>
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
      {lessonType === "writing" && hasFetchedData && (
        <>
          {/* {level === "1" && <p>level1</p>} */}
          {level === "1" && <WriteLevel1245 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "2" && <WriteLevel1245 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "3" && <WriteLevel3 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "4" && <WriteLevel1245 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "5" && <WriteLevel1245 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
        </>
      )}
      {lessonType === "speaking" && hasFetchedData && (
        <>
          {/* {level === "1" && <p>level1</p>} */}
          {level === "1" && <SpeakLevel12 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "2" && <SpeakLevel12 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "3" && <SpeakLevel345 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "4" && <SpeakLevel345 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
          {level === "5" && <SpeakLevel345 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore} />}
        </>
      )}
      {lessonType === "reading" && hasFetchedData && (
        <Reading12345 data={datas[currentIndex]} onSelectAnswer={handleGetAnswerScore}/>
      )}

      {isFireWork === true && isAnswerCorrect && <MyLottieAnimation /> }

      <ButtonsContainer>
        {currentIndex === 0 ? (
          <ButtonLeft to="/vocab" state={{ productname: productName }}>
            <TIB><PreButton />Pre</TIB>
          </ButtonLeft>
        ) : (
          <ButtonLeft onClick={handlePrevButtonClick}><TIB><PreButton />Pre</TIB></ButtonLeft>
        )}

        <SubButton onClick={submitAnswerSelected}><TIB>Submit</TIB></SubButton>

        {validKinds.includes(datas[currentIndex + 1]?.kind) ?  (
          <ButtonRight
            onClick={isAnswerCorrect ? handleNextButtonClick : ""}
            isAnswerCorrect={isAnswerCorrect}
          >
            <TIB>Next<NextButton /></TIB>
          </ButtonRight>
        ) : (
          <ButtonRight
            to={isAnswerCorrect ? "/bigtest" : ""}
            state={{ productname: productName }}
            isAnswerCorrect={isAnswerCorrect}
          >
            <TIB>Next<NextButton /></TIB>
          </ButtonRight>

        )}
      </ButtonsContainer>

      {isFireWork === false && <Incorrect />}
    </>

  );
};

export default LayoutLearn;
