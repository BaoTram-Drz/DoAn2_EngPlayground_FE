import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { saveUser_Course, saveHistory_Course } from '../../../../API/saveUserCourseApi'

import {
  BackHome, PageName, Container, TableWrapper, TableHeader, TableRow, TableCellId, TableCell, RightDiv,
  DivWrapper, DivWrapper2, DivWrapper2Text, Button, ButtonGray, ButtonL, LinkText, LoginNoti
} from './CourseDetail.styled'

const CoursesInfo = () => {
  const location = useLocation();
  //const [lessonType, setLessonType] = useState('Listen');
  const [lessonType, setLessonType] = useState();
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  console.log(productName, lessonType)

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        setUser(true);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
    if (location.state && location.state.image) {
      setProductImage(location.state.image);
    }
    if (location.state && location.state.lessonType) {
      setLessonType(location.state.lessonType);
    }
  }, [location.state]);

  useEffect(() => {
    const data = [
      { id: 1, name: "Học từ vựng" },
      { id: 2, name: "Làm bài tập chọn nghĩa từ vựng - Game 1" },
      { id: 3, name: "Làm bài tập viết từ vựng - Game 2" },
      { id: 4, name: "Làm bài tập ghép nối từ vựng - Game 3" },
      { id: 5, name: "Làm bài tập nối câu - Game 4" },
      { id: 6, name: "Làm bài tập tổng hợp - BigTest" },
    ];
    setData(data);
  }, []);
  const saveUserCourse = async (course, user) => {
    const user_course = {
      course: course,
      user: user
    };
    try {
      const response = await saveUser_Course(user_course);

    } catch (error) {
      console.log('Error:', error);
    }
  };
  const saveHistoryCourse = async (course, user) => {
    const user_course = {
      course: course,
      user: user,
      status: "In progress"
    };
    try {
      const response = await saveHistory_Course(user_course);

    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
    {/* <Link to="/cardList"><BackHome /></Link> */}
      <PageName>Course Detail</PageName>
      <Container>
        <TableWrapper>
          <thead>
            <TableRow>
              <th colSpan="2">
                <TableHeader>Course List</TableHeader>
              </th>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <td>
                  <TableCellId>{item.id}</TableCellId>
                </td>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableWrapper>
        <RightDiv>
          <DivWrapper>
            <DivWrapper2 imageUrl={productImage}>
              <DivWrapper2Text>{productName}</DivWrapper2Text>
            </DivWrapper2>
            {lessonType === "Listen" ? (
              <Button to="/listenstories" state={{ productname: productName }}>Listen Stories</Button>
            ) : (
              <>
                {user ? (
                  <Button to="/vocab" state={{ productname: productName, lessonType: lessonType }} onClick={() => {
                    saveUserCourse(productName, (JSON.parse(localStorage.getItem('user')))._id);
                    saveHistoryCourse(productName, (JSON.parse(localStorage.getItem('user')))._id)
                  }
                  }>
                    Start Learn
                  </Button>
                ) :
                  (
                    <>
                      <ButtonGray>
                        Start Learn
                      </ButtonGray>
                      <LoginNoti> Bạn chưa đăng nhập.....

                      </LoginNoti>
                    </>
                  )}
              </>
            )}
          </DivWrapper>
          {user &&
            <ButtonL>
              <LinkText to="/league" state={{ productname: productName }} >Top League</LinkText>
            </ButtonL>
          }


        </RightDiv>
      </Container>
    </>
  );
};

export default CoursesInfo;
