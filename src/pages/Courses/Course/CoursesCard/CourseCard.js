import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase/firebase";
import { ref } from "firebase/storage";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideos } from "../../../../API/videoApi";
import { getCoursesData } from "../../../../API/coursesApi";
import {
  Container,
  CoursesName,
  CoursesNameText,
  CoursesTopicNameText,
  CardListContainer,
  Card,
  ImgContainer,
  Img,
  Name,
  Description,
  PrevButton,
  NextButton,
  LearnBtn,
  LoadIconContainer,
  BiLoaderCircleIcon,
} from "./CourseCard.styled";

function CardList() {
  const location = useLocation();
  const [coursesType, setCoursesType] = useState();
  const [coursesData, setCoursesData] = useState([]);
  const [coursesDataLevel, setCoursesDataLevel] = useState([]);
  const [userLevel, setUserLevel] = useState(
    JSON.parse(localStorage.getItem("user")).level
  );

  useEffect(() => {
    if (location.state && location.state.type) {
      console.log(location.state.type);
      setCoursesType(location.state.type);
    }
    console.log(location.state);
    setUserLevel((prev) => JSON.parse(localStorage.getItem("user")).level);
  }, [location.state]);

  useEffect(() => {
    if (!userLevel || !coursesData || coursesData.length == 0) {
      return;
    }
    const filteredCourses = coursesData.filter(
      (course) => course.level === userLevel.toString()
    );
    console.log(userLevel);
    console.log(coursesData);
    console.log(filteredCourses);
    setCoursesDataLevel(filteredCourses);
  }, [coursesData, userLevel]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseUserList = await getCoursesData(coursesType);
        for (let i = 0; i < courseUserList.length; i++) {
          const path = "courses/" + courseUserList[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          courseUserList[i].image = downloadURL;
        }
        setCoursesData(courseUserList);
        // Trả về một Promise để đảm bảo sự hoàn thành trước khi gọi handleGetDataLevel
        return Promise.resolve();
      } catch (error) {
        console.error(error);
        // Trả về một Promise với lỗi để đảm bảo rằng handleGetDataLevel sẽ không bị gọi
        return Promise.reject(error);
      }
    };

    // Sử dụng async/await để đảm bảo rằng fetchCourses hoàn thành trước khi gọi handleGetDataLevel
    const fetchDataAndHandleLevel = async () => {
      try {
        await fetchCourses();
      } catch (error) {
        // Xử lý lỗi nếu cần thiết
      }
    };
    if (coursesType) {
      fetchDataAndHandleLevel();
    }
  }, [coursesType, userLevel]);

  const handleSaveCourseDetail = (name, image, type) => {
    localStorage.setItem("productName", name);
    localStorage.setItem("image", image);
    localStorage.setItem("lessonType", type);
  };

  return (
    <Container>
      <CoursesName>Courses for You</CoursesName>
      <CoursesTopicNameText>
        {" "}
        ~ Recommend for you~ Level {userLevel}
      </CoursesTopicNameText>
      <CardListContainer>
        {coursesDataLevel.map((item, index) => (
          <Card key={index}>
            <ImgContainer>
              <Img imageUrl={item.image} alt={item.name} />
            </ImgContainer>
            <Name>{item.name}</Name>
            <Name>Level: {item.level}</Name>
            <Description>People: {item.amount}</Description>
            <LearnBtn
              onClick={() =>
                handleSaveCourseDetail(item.name, item.image, coursesType)
              }
              to={"/coursesinfo"}
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
            <ImgContainer>
              <Img imageUrl={item.image} alt={item.name} />
            </ImgContainer>
            <Name>{item.name}</Name>
            <Name>Level: {item.level}</Name>
            <Description>People: {item.amount}</Description>
            <LearnBtn
              onClick={() =>
                handleSaveCourseDetail(item.name, item.image, coursesType)
              }
              to={"/coursesinfo"}
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
