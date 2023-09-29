import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase'
import { ref } from 'firebase/storage'
import { useState, useEffect } from 'react';
import { getCoursesVocab, getContinueCourses, getCoursesListen, getCoursesUser } from '../../../../API/coursesApi';
import {getVideos} from '../../../../API/videoApi';
import { Container, CoursesName, CoursesNameText, CoursesTopicNameText, CardListContainer, 
    Card, ImgContainer, Img, Name, Description, PrevButton, NextButton, LearnBtn, LoadIconContainer, BiLoaderCircleIcon} from './CourseCard.styled'

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
function CardList() {
  const [coursesVocab, setCoursesVocab] = useState([]);
  const [coursesRead, setCoursesRead] = useState([]);
  const [coursesListen, setCoursesListen] = useState([]);
  const [coursesUser, setCoursesUser] = useState([]);
  const [miniGame, setMiniGame] = useState([]);
  const [isUser, setIsUser] = useState(true);
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 600 ? 1 : window.innerWidth < 1000 ? 2 : 3,
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
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user1 = JSON.parse(userString);
        setUser(user1);
        setIsUser(true);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        setUser(null);
        setIsUser(false);
      }
    } else {
      setUser(null);
      setIsUser(false);
    }
  }, []);

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
        const courseUserList = await getCoursesVocab();
        console.log(courseUserList)
        for (let i = 0; i < courseUserList.length; i++) {
          const path = 'courses/' + courseUserList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseUserList[i].image = downloadURL;
        }
        setCoursesUser(courseUserList);      
        setTimeout(() => {
          setIsLoadFull(true); 
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
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
        setCoursesVocab(courseVocabList);
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
        const continueCourses = await getContinueCourses();

        for (let i = 0; i < continueCourses.length; i++) {
          const path = 'courses/' + continueCourses[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          continueCourses[i].image = downloadURL;
        }
        setCoursesRead(continueCourses);
        
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
      <CoursesName>
        <CoursesNameText>Courses for You</CoursesNameText>
      </CoursesName>

      {/* <CoursesTopicNameText> - Suggestions for you - </CoursesTopicNameText>
      <CardListContainer>
        <Slider {...sliderSettings}>
          {coursesUser.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name}</Name>
              <Description>Number of participants: {item.amount}</Description>
              <LearnBtn
                  onClick={() => {handleLearnCourse(item.name)}}
                  to={
                    '/coursesinfo'
                    }
                  state= { {productname: item.name, image: item.image, lessonType: item.lessonType }}
                >
                  Learn
                </LearnBtn>
              </Card>
            ))}
          </Slider>
          </CardListContainer>
      <LoadIconContainer>{!isLoadFull && <BiLoaderCircleIcon/> }</LoadIconContainer> */}

      {/* {isUser ? (
        <>
          <CoursesTopicNameText> - Continue Learn - </CoursesTopicNameText>
          <CardListContainer>
            <Slider {...sliderSettings}>
              {coursesRead.map((item, index) => (
                <Card key={index}>
                  <ImgContainer><Img imageUrl={item.image} alt={item.name} />
                  </ImgContainer>
                  <Name>{item.name}</Name>
                  <Description>Number of participants: {item.amount}</Description>
                  <LearnBtn
                    onClick={() => {handleLearnCourse(item.name)}}
                    to={
                      '/coursesinfo'
                    }
                    state={{ productname: item.name, image: item.image, lessonType: item.lessonType }}
                  >
                    Learn
                  </LearnBtn>
                </Card>
              ))}
            </Slider>
          </CardListContainer>
      <LoadIconContainer>{!isLoadFull && <BiLoaderCircleIcon/> }</LoadIconContainer>
        </>

      ) : (null)} */}

      {/* <CoursesTopicNameText> - Learning Vocabulary - </CoursesTopicNameText> */}
      {/* <CardListContainer>
        <Slider {...sliderSettings}>
          {coursesUser.map((item, index) => (
            <Card key={index}>
              <ImgContainer><Img imageUrl={item.image} alt={item.name} />
              </ImgContainer>
              <Name>{item.name}</Name>
              <Description>Number of participants: {item.amount}</Description>
              <LearnBtn
                to={
                  '/coursesinfo'
                }
                state={{ productname: item.name, image: item.image, lessonType: item.lessonType }}
              >
                Learn
              </LearnBtn>
            </Card>
          ))}
        </Slider>
      </CardListContainer>
      <LoadIconContainer>{!isLoadFull && <BiLoaderCircleIcon/> }</LoadIconContainer>
       */}
       <CardListContainer>
         {coursesUser.map((item, index) => (
              <Card key={index}>
                <ImgContainer><Img imageUrl={item.image} alt={item.name} />
                </ImgContainer>
                <Name>{item.name}</Name>
                <Description>People: {item.amount}</Description>
                <LearnBtn
                  to={
                    '/coursesinfo'
                  }
                  state={{ productname: item.name, image: item.image, lessonType: item.lessonType }}
                >
                  Learn
                </LearnBtn>
              </Card>
            ))}
       </CardListContainer>

      {/* <CoursesTopicNameText> -  Listen stories - </CoursesTopicNameText>
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
      <LoadIconContainer>{!isLoadFull && <BiLoaderCircleIcon/> }</LoadIconContainer> */}

      {/* <CoursesTopicNameText> -  Mini Game - </CoursesTopicNameText>
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
      <LoadIconContainer>{!isLoadFull && <BiLoaderCircleIcon/> }</LoadIconContainer> */}

    </Container>
  );
}

export default CardList;