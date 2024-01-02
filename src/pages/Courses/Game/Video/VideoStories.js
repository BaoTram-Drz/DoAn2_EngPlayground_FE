import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase';
import { getVideos } from '../../../../API/videoApi';
import { BackHome, PageName, VideoContainer, QuestionDiv, Question, Video, AnswerDiv, OptionLabel, FloatRight, Button, AnswerLabel } from './VideoStories.styled';
import data from './data.json';

const ListenStory = () => {
  const [productName, setProductName] = useState('Product A');
  const [video, setVideo] = useState(null);
  const location = useLocation();
  const [activeIds, setActiveIds] = useState([]);
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(Date.now());
  const [value, setValue] = useState([]);
  const [submitted, setSubmitted] = useState(false); // State để theo dõi trạng thái đã submit hay chưa

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    } else {
      const storedProductName = localStorage.getItem('productName');
      if (storedProductName) {
        setProductName(storedProductName);
      }
    }
  }, [location.state]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videos = await getVideos();
        const linkVideo = videos.find((video) => video.name === productName);

        if (linkVideo) {
          const path = 'video/' + linkVideo.link;
          const downloadURL = await getDownloadURL(ref(storage, path));
          console.log(downloadURL);
          setVideo(downloadURL);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideo();
  }, [productName]);

  useEffect(() => {
    if (productName) {
      const filteredData = data.filter(item => item.type === productName.toLowerCase());
      setValue(filteredData);
      setActiveIds(Array(filteredData.length).fill(null)); // Khởi tạo mảng activeIds với giá trị null cho mỗi câu hỏi
    }
  }, [productName]);

  const handleRadioClick = (questionIndex, optionId) => {
    setActiveIds(prevActiveIds => {
      return prevActiveIds.map((activeId, index) => (index === questionIndex ? optionId : activeId));
    });

    const selectedQuestion = value[questionIndex];
    if (optionId === selectedQuestion.correctAnswer) {
      setScore(score + selectedQuestion.score);
      setState(true);
    } else {
      setScore(0);
      setState(false);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Link to="/game"><BackHome /></Link>
      <PageName>Listen Story - {productName}</PageName>
      <VideoContainer>
        {video && <Video src={video} autoPlay controls />}
      </VideoContainer>
      {value && value.map((question, index) => (
        <QuestionDiv key={question.id}>
          <Question>{question.question}</Question>
          
          <AnswerDiv>
            {question.answers.map((option) => (
              <OptionLabel key={option.id}>
                <input
                  type="radio"
                  name={`option_${index}`}
                  value={option.id}
                  onClick={() => handleRadioClick(index, option.id)}
                  checked={activeIds[index] === option.id}
                  disabled={submitted} // Disable radio buttons after submission
                />
                &ensp;{option.text}
              </OptionLabel>
            ))}
          </AnswerDiv>
          {submitted && (
            <Question correct={activeIds[index] === question.correctAnswer}>
              Answer: {question.correctAnswer}
            </Question>
          )}
        </QuestionDiv>
      ))}
      <FloatRight>
        <Button onClick={handleSubmit} disabled={submitted}>
          Submit
        </Button>
      </FloatRight>
    </>
  );
};

export default ListenStory;
