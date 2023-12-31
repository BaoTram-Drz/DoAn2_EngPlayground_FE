import React, {
  useEffect,
  useRef,
  useCallback,
  useReducer,
  useState,
} from "react";
import {
  GameDiv,
  Container,
  Header,
  Component,
  HeaderRight,
  WrongColor,
  OverDiv,
  OverText,
} from "./DropGame.styled";
import { getVocab } from "../../../../API/vocabApi";
import { getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase/firebase";
import { ref } from "firebase/storage";
const initialState = {
  words: [],
  scoreCorrect: 0,
  scoreIncorrect: 0,
  gameOver: false,
  isContact: false,
  fallingSpeed: 0.95,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORDS":
      return {
        ...state,
        words: action.payload.words,
      };
    case "ADD_WORD":
      return {
        ...state,
        words: [...state.words, action.payload.word],
      };
    case "UPDATE_POSITION":
      return {
        ...state,
        words: state.words.map((word) => ({
          ...word,
          position: {
            ...word.position,
            y: word.position.y + state.fallingSpeed + 0.5,
          },
        })),
      };
    case "SET_GAME_OVER":
      return {
        ...state,
        gameOver: true,
      };
    case "SET_IS_CONTACT":
      return {
        ...state,
        isContact: action.payload.isContact,
      };
    case "INCREMENT_SCORE_CORRECT":
      return {
        ...state,
        scoreCorrect: state.scoreCorrect + 1,
      };
    case "INCREMENT_SCORE_INCORRECT":
      return {
        ...state,
        scoreIncorrect: state.scoreIncorrect + action.payload.count,
      };
    case "REMOVE_WORD":
      return {
        ...state,
        words: state.words.filter((word) => word !== action.payload.word),
      };
    default:
      return state;
  }
};
const textContainerStyle = {
  background: "rgba(255, 255, 255, 0.8)", // Màu nền của chữ

  borderRadius: "4px",
  border: "1px solid transparent", // Set a transparent border
  marginBottom: "5px", // Khoảng cách giữa chữ và hình ảnh
};

const imageStyle = {
  width: "100%", // Đảm bảo ảnh đầy đủ chiều rộng của container
  aspectRatio: "1/1",
  objectFit: "cover",
  objectPosition: "center",
};

function FallingWord({ word, isContact, onClick }) {
  const imagePath = word.image;
  const wordStyle = {
    position: "absolute",
    left: `${word.position.x}%`,
    top: `${word.position.y}px`,
    cursor: word.isActive ? "pointer" : "default",
    display: word.isActive ? "block" : "none",
    transition: "top 0.1s",
  };
  return (
    <Component style={wordStyle} onClick={onClick}>
      <div style={textContainerStyle}>{word.text}</div>
      <img src={imagePath} style={imageStyle} />
    </Component>
  );
}

function GameFallingWords() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { words, gameOver, isContact } = state;
  const footerRef = useRef();
  const [correctWords, setCorrectWords] = useState([
    {
      name: "hello",
      image:
        "https://play-lh.googleusercontent.com/ygIRDjqZK9A-JHr3s77sIFDs4CtiOc0LE10-ufpFip4v8Khz6KMFMv-8NTURX_MYaHk",
    },
  ]);

  useEffect(() => {
    const productName = localStorage.getItem("productName") || "";
    if (productName) {
      fetchWords(productName);
    }
  }, []);

  const fetchWords = async (productName) => {
    try {
      const topicCourse = { topic: productName.toLowerCase() };
      const result = await getVocab(topicCourse);

      for (let i = 0; i < result.length; i++) {
        const path = `${topicCourse.topic}/${result[i].image}`;
        const downloadURL = await getDownloadURL(ref(storage, path));
        result[i].image = downloadURL;
      }

      setCorrectWords(
        result.map((word) => ({
          name: word.name,
          image: word.image,
        }))
      );
    } catch (error) {
      console.error("Error fetching words:", error);
      // Handle the error as needed
    }
  };
  function shuffleString(inputString) {
    const characters = inputString.split("");
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap characters[i] and characters[j]
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join("");
  }
  let currentIndex = 0;
  const getRandomWord = useCallback(() => {
    const isCorrect = Math.random() < 0.5;
    const wordsArray = isCorrect
      ? correctWords
      : correctWords.map((word) => ({
          ...word,
          name: word.name ? shuffleString(word.name) : null,
        }));

    console.log("Đang in đây nè: ", correctWords);
    const filteredWords = wordsArray.filter((word) => word.name); // Filter out undefined or null values
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const wordText = filteredWords[randomIndex].name;
    const wordImage = filteredWords[randomIndex].image;
    const xValues = [10, 30, 50, 70];

    // Hàm để lấy giá trị xoay vòng từ mảng xValues
    function getNextX() {
      const nextX = xValues[currentIndex];
      currentIndex = (currentIndex + 1) % xValues.length; // Tăng vị trí và xoay vòng khi cần
      return nextX;
    }

    // Sử dụng hàm để nhận giá trị xoay vòng
    const wordPosition = { x: getNextX(), y: 0 };
    console.log("Đang in đây nè: ", wordPosition);
    return {
      text: wordText,
      position: wordPosition,
      image: wordImage,
      isActive: true,
    };
  }, [correctWords]);

  const handleWordClick = (index) => {
    if (gameOver || !words[index].isActive) return;
    const clickedWord = words[index];
    const correctWords_name = correctWords.map((word) => word.name);
    if (correctWords_name.includes(clickedWord.text)) {
      dispatch({ type: "INCREMENT_SCORE_INCORRECT", payload: { count: 1 } });
    } else {
      dispatch({
        type: "INCREMENT_SCORE_CORRECT",
      });
    }

    dispatch({ type: "REMOVE_WORD", payload: { word: clickedWord } });
    setTimeout(() => {
      const newWord = getRandomWord();
      dispatch({ type: "ADD_WORD", payload: { word: newWord } });
    }, 1000);
  };

  useEffect(() => {
    if (gameOver) return;

    const isContacting = words.some(
      (word) => word.position.y + 20 >= 370 && word.position.y <= 370
    );

    if (isContacting !== state.isContact) {
      dispatch({
        type: "SET_IS_CONTACT",
        payload: { isContact: isContacting },
      });
    }

    const wordsToRemove = words.filter((word) => word.position.y >= 370);
    const correctWords_name = correctWords.map((word) => word.name);
    if (wordsToRemove.length > 0) {
      const incorrectWordsCount = wordsToRemove.filter(
        (word) => !correctWords_name.includes(word.text)
      ).length;

      // Thêm điều kiện để giảm vấn đề cộng vô cực
      if (!state.isContact) {
        dispatch({
          type: "INCREMENT_SCORE_INCORRECT",
          payload: { count: incorrectWordsCount },
        });
      }

      dispatch({ type: "REMOVE_WORD", payload: { word: wordsToRemove[0] } });
    }

    if (state.scoreIncorrect >= 5) {
      dispatch({ type: "SET_GAME_OVER" });
    }
  }, [words, state.isContact, state.scoreIncorrect, gameOver]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "UPDATE_POSITION" });
    }, 50);

    return () => clearInterval(intervalId);
  }, [state.fallingSpeed]);

  useEffect(() => {
    const isContacting = words.some(
      (word) => word.position.y + 20 >= 370 && word.position.y <= 370
    );

    if (isContacting !== isContact) {
      dispatch({
        type: "SET_IS_CONTACT",
        payload: { isContact: isContacting },
      });
    }

    const wordsToRemove = words.filter((word) => word.position.y >= 370);
    const correctWords_name = correctWords.map((word) => word.name);
    if (wordsToRemove.length > 0) {
      const incorrectWordsCount = wordsToRemove.filter(
        (word) => !correctWords_name.includes(word.text)
      ).length;
      dispatch({
        type: "INCREMENT_SCORE_INCORRECT",
        payload: { count: incorrectWordsCount },
      });

      dispatch({ type: "REMOVE_WORD", payload: { word: wordsToRemove[0] } });
    }

    if (state.scoreIncorrect >= 5) {
      dispatch({ type: "SET_GAME_OVER" });
      return;
    }
  }, [words, isContact, state.scoreIncorrect]);

  useEffect(() => {
    const initialWord = getRandomWord();
    dispatch({ type: "SET_WORDS", payload: { words: [initialWord] } });

    const newWordInterval = setInterval(() => {
      const newWord = getRandomWord();
      dispatch({ type: "ADD_WORD", payload: { word: newWord } });
    }, 5000);

    return () => {
      clearInterval(newWordInterval);
    };
  }, [getRandomWord]);

  return (
    <GameDiv>
      <Header style={{ marginTop: "100px" }}>
        <>Click incorrect vocab!!!</>
        <HeaderRight>
          <>Right: {state.scoreCorrect}</>
          {state.scoreIncorrect <= 5 ? (
            <WrongColor>Wrong: {state.scoreIncorrect}/5</WrongColor>
          ) : null}
        </HeaderRight>
      </Header>
      <Container>
        {gameOver ? (
          <OverDiv>
            <OverText>Game Over</OverText>
            <WrongColor>Your score: {state.scoreCorrect}</WrongColor>
          </OverDiv>
        ) : (
          words.map((word, index) => (
            <FallingWord
              key={index}
              word={word}
              isContact={word.isActive}
              onClick={() => handleWordClick(index)}
            />
          ))
        )}
      </Container>
    </GameDiv>
  );
}

export default GameFallingWords;
