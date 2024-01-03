import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Game1 from "../LearnComponent/Game1/Game1";
import Game2 from "../LearnComponent/Game2/Game2";
import Game3 from "../LearnComponent/Game3/Game3";
import Game4 from "../LearnComponent/Game4/Game4";
import datas from "./data.json";
import MyLottieAnimation from "../LearnComponent/LottieAnimation/MyLottieAnimation";
import api from "../../../../API/index";
import { getGamesData } from "../../../../API/coursesData";
import {
  PageName,
  Header,
  HeadersContainer,
  Button,
  SubButton,
  ButtonsContainer,
} from "./BigTest.styled";
import {
  updateUser_Course,
  saveHistory_Course,
} from "../../../../API/saveUserCourseApi";
const BigTest = () => {
  const [data, setData] = useState([]);
  const [productName, setProductName] = useState(
    localStorage.getItem("productName")
  );
  const [allScore, setAllScore] = useState(0);
  const [answerScore, setAnswerScore] = useState(0);
  const [answerData, setAnswerData] = useState([]);
  const [isFireWork, setIsFireWork] = useState(false);
  const location = useLocation();
  const [correctData, setCorrectData] = useState("");
  const [wrongData, setWrongData] = useState("Answer: ::: ");

  // const  [userScore, setUserScore] = useState('');

  // useEffect(() => {
  //   if (location.state && location.state.productname) {
  //     setProductName(productName);
  //   }
  //   console.log(data);
  // }, [location.state]);

  useEffect(() => {
    const fetchLearns = async () => {
      try {
        const learnData = await getGamesData(productName);
        setData(learnData);
        console.log(learnData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLearns();
  }, []);

  const handleGetAnswerScore = (dataAnswer) => {
    const smallAnswerData = JSON.parse(dataAnswer);
    setAnswerData((prevAnswerData) => {
      const updatedAnswerData = prevAnswerData.filter(
        (answer) => answer.id.$oid !== smallAnswerData.id.$oid
      );
      updatedAnswerData.push(smallAnswerData);
      return updatedAnswerData;
    });
  };

  const submitAnswerSelected = () => {
    setIsFireWork(true);

    let allTotalScore = 0;

    const totalScore = answerData.reduce((acc, answerItem) => {
      const item = data.find(
        (dataItem) => dataItem._id.$oid === answerItem.id.$oid
      );
      console.log(answerData);
      if (answerItem.answerState === true && item && item.kind === "Game") {
        return acc + answerItem.score;
      }
      return acc;
    }, 0);

    data.forEach((item) => {
      allTotalScore += item.score;
      setWrongData(
        (prevWrongData) =>
          `${prevWrongData}  ${item.question}: ::: ${item.correctText}  :::`
      );
    });

    setAllScore(allTotalScore);
    setAnswerScore(totalScore);

    const userScore = {
      score: totalScore,
      productName: productName,
      user: JSON.parse(localStorage.getItem("user")).name,
      image: JSON.parse(localStorage.getItem("user")).image,
    };
    try {
      const response = api.post("/games/saveLeague", userScore);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const saveHistoryCourse = async (course, user, lessonType) => {
    const user_course = {
      course: course,
      user: user,
      lessonType: lessonType,
      status: "Completed",
    };
    try {
      const response = await saveHistory_Course(user_course);
      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <PageName>BigTest</PageName>
      <HeadersContainer>
        <Header>Test</Header>
        <Header>4/4</Header>
      </HeadersContainer>
      {isFireWork === true && (
        <>
          <MyLottieAnimation />
        </>
      )}
      {data.map((item) => {
        if (data.includes(item.id)) {
          return null;
        }
        return (
          <>
            {item?.category === "Game1" && (
              <Game1 data={item} onSelectAnswer={handleGetAnswerScore} />
            )}
            {item?.category === "Game2" && (
              <Game2 data={item} onSelectAnswer={handleGetAnswerScore} />
            )}
            {item?.category === "Game3" && (
              <Game3 data={item} onSelectAnswer={handleGetAnswerScore} />
            )}
            {item?.category === "Game4" && (
              <Game4 data={item} onSelectAnswer={handleGetAnswerScore} />
            )}
          </>
        );
      })}

      <ButtonsContainer>
        <Button to="/layoutlearn">Pre</Button>
        {isFireWork === false && (
          <SubButton
            onClick={() => {
              submitAnswerSelected();
              saveHistoryCourse(
                localStorage.getItem("productName"),
                JSON.parse(localStorage.getItem("user"))._id,
                localStorage.getItem("lessonType")
              );
            }}
          >
            Submit
          </SubButton>
        )}
        {isFireWork === true && (
          <>
            <Button
              to={"/scores"}
              state={{
                score: answerScore,
                allScore: allScore,
                right: correctData,
                wrong: wrongData,
              }}
            >
              Score
            </Button>
          </>
        )}
      </ButtonsContainer>
    </>
  );
};

export default BigTest;
