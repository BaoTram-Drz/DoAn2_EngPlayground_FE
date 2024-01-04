import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase'
import { ref } from 'firebase/storage'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getVideos } from '../../../../API/videoApi';
import { getCoursesData } from '../../../../API/coursesApi';
import { Container, CoursesName, CoursesNameText, CoursesTopicNameText, CardListContainer, 
    Card, ImgContainer, Img, Name, Description, PrevButton, NextButton, LearnBtn, LoadIconContainer, BiLoaderCircleIcon} from './CourseCard.styled'

function CardList() {
  const location = useLocation();
  const [coursesType, setCoursesType] = useState();
  const [coursesData, setCoursesData] = useState([]);
  const [coursesDataLevel, setCoursesDataLevel] = useState([]);
  const userLevel = localStorage.getItem('level');

  useEffect(() => { // lấy loại bài học từ bên header : listen, reding,...
    if (location.state && location.state.type) {
      setCoursesType((prev) => location.state.type);
    }
  }, [location.state]);

  const handleGetDataLevel = () => {
    console.log( "coursesData: ", coursesData)
    const filteredCourses = coursesData.filter((course) => course.level === userLevel);
    setCoursesDataLevel(filteredCourses);
  }
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseUserList = await getCoursesData(coursesType); // ở trang api/ courseApi
        console.log('courses: '+ coursesType)
        for (let i = 0; i < courseUserList.length; i++) {
          const path = 'courses/' + courseUserList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseUserList[i].image = downloadURL;
        }
        setCoursesData(courseUserList);      
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
    handleGetDataLevel();
  }, [coursesType]);

  const handleSaveCourseDetail = (name, image, type) => {
    localStorage.setItem('productName', name);
    localStorage.setItem('image', image);
    localStorage.setItem('lessonType', type);
    console.log("handle save in learn button", localStorage);
  };

  return (
    <Container>
      <CoursesName>
        Courses for You
      </CoursesName>
      <CoursesTopicNameText> ~ Recomment for you~</CoursesTopicNameText>
      <CardListContainer>
         {coursesDataLevel.map((item, index) => (
              <Card key={index}>
                <ImgContainer><Img imageUrl={item.image} alt={item.name} />
                </ImgContainer>
                <Name>{item.name}</Name>
                <Description>People: {item.amount}</Description>
                <LearnBtn
                  onClick={() => handleSaveCourseDetail(item.name, item.image, coursesType)}
                  to={
                    '/coursesinfo'
                  }
                >
                  Learn
                </LearnBtn>
              </Card>
            ))}
       </CardListContainer>
       <CoursesTopicNameText> ~ All Courses ~</CoursesTopicNameText>

       <CardListContainer>
         {coursesData.map((item, index) => (
              <Card key={index}>
                <ImgContainer><Img imageUrl={item.image} alt={item.name} />
                </ImgContainer>
                <Name>{item.name}</Name>
                <Description>People: {item.amount}</Description>
                <LearnBtn
                  onClick={() => handleSaveCourseDetail(item.name, item.image, coursesType)}
                  to={
                    '/coursesinfo'
                  }
                >
                  Learn
                </LearnBtn>
              </Card>
            ))}
       </CardListContainer>

    </Container>
  );
}

export default CardList;