import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase'
import { useLocation } from 'react-router-dom';
import { ref } from 'firebase/storage'
import { useState, useEffect } from 'react';
import { getCoursesData, getContinueCourses, getCoursesListen, getCoursesUser } from '../../../../API/coursesApi';
import { Container, CoursesName, CoursesNameText, CoursesTopicNameText, CardListContainer, 
    Card, ImgContainer, Img, Name, Description, LearnBtn, LoadIconContainer, BiLoaderCircleIcon} from './CourseCard.styled'
    
function CardList() {
  const location = useLocation();
  const [coursesType, setCoursesType] = useState();
  const [coursesData, setCoursesData] = useState([]);
  const [miniGame, setMiniGame] = useState([]);
  const [isUser, setIsUser] = useState(true);

  const [user, setUser] = useState(null);  
  const [isLoadFull, setIsLoadFull] = useState(false);

  const handleLearnCourse = (namecourse) => {   
    localStorage.setItem('productName', namecourse);
  };
  useEffect(() => { // lấy loại bài học từ bên header : listen, reding,...
    if (location.state && location.state.type) {
      setCoursesType((prev) => location.state.type);
    }
  }, [location.state]);

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
        setTimeout(() => {
          setIsLoadFull(true); 
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, [coursesType]);


  return (
    <Container>
      <CoursesName>
        <CoursesNameText>Courses for You</CoursesNameText>
      </CoursesName>
       <CardListContainer>
         {coursesData.map((item, index) => (
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



    </Container>
  );
}

export default CardList;