import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase'
import { ref } from 'firebase/storage'
import { useState, useEffect } from 'react';
import { getCoursesVocab, getContinueCourses} from '../../../../API/coursesApi';
import {getVideos} from '../../../../API/videoApi';
import { Container,PageName, CoursesName, CoursesNameText, CoursesTopicNameText, CardListContainer, 
    Card, ImgContainer, Img, Name, Description, PrevButton, NextButton, LearnBtn, LoadIconContainer, BiLoaderCircleIcon} from './GameScreen.styled'


const PrevArrow = (props) => (
    <PrevButton {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6" />
        </svg>
    </PrevButton>
    );
    
const NextArrow = (props) => (
    <NextButton {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
        </svg>
    </NextButton>
);
function GameScreen() {
    const [coursesListen, setCoursesListen] = useState([]);
    const [miniGame, setMiniGame] = useState([]);
    const [isUser, setIsUser] = useState(true);
    const [sliderSettings, setSliderSettings] = useState({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: window.innerWidth < 500 ? 1 : window.innerWidth < 700 ? 2 : window.innerWidth < 1000 ? 3 : 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    });
    const [user, setUser] = useState(null);  
    const [isLoadFull, setIsLoadFull] = useState(false);
  
    const handleLearnCourse = (namecourse) => {   
      localStorage.setItem('productName', namecourse);
    };
    
    useEffect(() => {
      const handleResize = () => {
        setSliderSettings(prevState => ({
          ...prevState,
          slidesToShow: window.innerWidth < 600 ? 1 : window.innerWidth < 1000 ? 2 : 3,
        }));
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const courseVocabList = await getCoursesVocab();
  
          for (let i = 0; i < courseVocabList.length; i++) {
            const path = 'courses/' + courseVocabList[i].image;
            const downloadURL = await getDownloadURL(ref(storage, path));
            courseVocabList[i].image = downloadURL;
          }
          setMiniGame(courseVocabList)
  
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCourses();
    }, []);
    
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const videos = await getVideos();
  
          for (let i = 0; i < videos.length; i++) {
            const path = 'video/' + videos[i].image;
            const downloadURL = await getDownloadURL(ref(storage, path));
            videos[i].image = downloadURL;
          }
          setCoursesListen(videos);
  
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCourses();
    }, []);

    return (
      <Container>
        <PageName>Game for you</PageName>      
        <CoursesTopicNameText> -  Drop Game - </CoursesTopicNameText>
        <CardListContainer>
        <Card >
                <ImgContainer><Img />
                </ImgContainer>
                <Name>Drop GAME</Name>
                <Description> test</Description>
                <LearnBtn
                  // onClick={() => {handleLearnCourse(item.name)}}
                  to={
                    '/dropgame'
                  }
                  // state={{ productname: item.name }}
                >
                  Play
                </LearnBtn>
              </Card>
        </CardListContainer>   

        <CoursesTopicNameText> -  Mini Game - </CoursesTopicNameText>
        <CardListContainer>
          <Slider {...sliderSettings}>
            {miniGame.map((item, index) => (
              <Card key={index}>
                <ImgContainer><Img imageUrl={item.image} alt={item.name} />
                </ImgContainer>
                <Name>{item.name} GAME</Name>
                <Description>Number of participants: {item.amount}</Description>
                <LearnBtn
                  onClick={() => {handleLearnCourse(item.name)}}
                  to={
                    '/minigame'
                  }
                  state={{ productname: item.name }}
                >
                  Play
                </LearnBtn>
              </Card>
            ))}
          </Slider>
        </CardListContainer>      
  
        <CoursesTopicNameText> -  Listen stories - </CoursesTopicNameText>
        <CardListContainer>
          <Slider {...sliderSettings}>
            {coursesListen.map((item, index) => (
              <Card key={index}>
                <ImgContainer><Img imageUrl={item.image} alt={item.name} />
                </ImgContainer>
                <Name>{item.name}</Name>
                <Description>Description: {item.des}</Description>
                <LearnBtn
                  onClick={() => {handleLearnCourse(item.name)}}
                  to={
                    '/listenstories'
                  }
                  state={{ productname: item.name, image: item.image, lessonType: item.lessonType }}
                  
                >
                  Learn
                </LearnBtn>
              </Card>
            ))}
          </Slider>
        </CardListContainer>

      </Container>
    );
    }

export default GameScreen;