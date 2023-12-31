import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  saveUser_Course,
  saveHistory_Course,
} from "../../../../API/saveUserCourseApi";

import {
  BackHome,
  PageName,
  Container,
  TableWrapper,
  TableHeader,
  TableRow,
  TableCellId,
  TableCell,
  RightDiv,
  DivWrapper,
  DivWrapper2,
  DivWrapper2Text,
  Button,
  ButtonGray,
  ButtonL,
  LinkText,
  LoginNoti,
} from "./CourseDetail.styled";

const CoursesInfo = () => {
  const [lessonType, setLessonType] = useState();
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        setUser(true);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  // set value course name
  useEffect(() => {
    setLessonType((prev) => localStorage.getItem("lessonType"));
    setProductName((prev) => localStorage.getItem("productName"));
    setProductImage((prev) => localStorage.getItem("image"));
  }, []);

  useEffect(() => {
    const data = [
      { id: 1, name: "Học từ vựng" },
      { id: 2, name: "Chọn level để học" },
      { id: 3, name: "Làm các câu hỏi nhỏ" },
      { id: 4, name: "Làm bài tập tổng hợp - BigTest" },
    ];
    setData(data);
  }, []);
  const saveUserCourse = async (course, user) => {
    const user_course = {
      course: course,
      user: user,
    };
    try {
      const response = await saveUser_Course(user_course);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const saveHistoryCourse = async (course, user, lessonType) => {
    const user_course = {
      course: course,
      user: user,
      lessonType: lessonType,
      status: "In progress",
    };
    try {
      const response = await saveHistory_Course(user_course);
    } catch (error) {
      console.log("Error:", error);
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
              <Button to="/listenstories">Listen Stories</Button>
            ) : (
              <>
                {user ? (
                  <Button
                    to="/vocab"
                    onClick={() => {
                      saveUserCourse(
                        productName,
                        JSON.parse(localStorage.getItem("user"))._id
                      );
                      saveHistoryCourse(
                        productName,
                        JSON.parse(localStorage.getItem("user"))._id,
                        lessonType
                      );
                    }}
                  >
                    Start Learn
                  </Button>
                ) : (
                  <>
                    <ButtonGray>Start Learn</ButtonGray>
                    <LoginNoti> Bạn chưa đăng nhập.....</LoginNoti>
                  </>
                )}
              </>
            )}
          </DivWrapper>
          {user && (
            <ButtonL>
              <LinkText to="/league" state={{ productname: productName }}>
                Top League
              </LinkText>
            </ButtonL>
          )}
        </RightDiv><br/><br/>
      </Container>
    </>
  );
};

export default CoursesInfo;
