import React, { useEffect, useRef, useCallback, useReducer } from "react";
import {GameDiv, Container, Header, Component, HeaderRight, WrongColor,OverDiv, 
  OverText} from './DropGame.styled'

const correctWords = [
  "apple", "banana", "cherry", "grape", "orange",
  "watermelon", "strawberry", "kiwi", "pineapple", "mango",
  "blueberry", "papaya", "lemon", "lime", "coconut",
  "peach", "plum", "nectarine", "pear", "raspberry",
  "blackberry", "apricot", "fig", "pomegranate", "avocado",
  "guava", "cantaloupe", "honeydew", "passionfruit", "dragonfruit",
  "kiwifruit", "starfruit", "cranberry", "apricot", "persimmon",
  "gooseberry", "elderberry", "mulberry", "boysenberry", "tangerine",
  "clementine", "mandarin", "grapefruit", "kumquat", "persimmon",
  "banana", "cherry", "grape", "orange", "watermelon",
  "strawberry", "kiwi", "pineapple", "mango", "blueberry",
  "papaya", "lemon", "lime", "coconut", "peach",
  "plum", "nectarine", "pear", "raspberry", "blackberry",
  "apricot", "fig", "pomegranate", "avocado", "guava",
  "cantaloupe", "honeydew", "passionfruit", "dragonfruit", "kiwifruit",
  "starfruit", "cranberry", "apricot", "persimmon", "gooseberry",
  "elderberry", "mulberry", "boysenberry", "tangerine", "clementine",
  "mandarin", "grapefruit", "kumquat", "persimmon",
];

const incorrectWords = [
  "elant", "gffe", "ln", "tier", "zea",
  "wtaermelon", "strwaberry", "kiw", "pineaple", "mango",
  "bluberry", "papaya", "lemonn", "limee", "ccconut",
  "pech", "plumm", "nectarne", "pearr", "raspbery",
  "blackbery", "apricott", "figg", "pomegrante", "avvocado",
  "guvaa", "canteloupe", "honeydu", "passionfuit", "dragonfuit",
  "kiwifruit", "starfruitt", "cranbery", "apricott", "persimonn",
  "goosebery", "elderbery", "mulbery", "boysnberry", "tangerrine",
  "clemntine", "mandarn", "grapefuit", "kumquatt", "persimonn",
  "banan", "cherryy", "grap", "orng", "watermlon",
  "strawbery", "kwi", "pineaplle", "mngo", "bluebery",
  "papayaa", "lemonn", "lme", "ccconut", "peachh",
  "pluum", "nectarinee", "pearr", "raspbery", "blackbery",
  "apricott", "figg", "pomegranatte", "avocadoo", "guvaa",
  "canteloupe", "honeydu", "passionfruit", "dragonfuit", "kiwifruit",
  "starfruit", "cranberryy", "apricott", "persimmonn", "gooseberry",
  "elderbery", "mulberry", "boysenberry", "tangerine", "clementine",
  "mandarn", "grapefruit", "kumquat", "persimmonn",
];

const initialState = {
  words: [],
  scoreCorrect: 0,
  scoreIncorrect: 0,
  gameOver: false,
  isContact: false,
  fallingSpeed: 2,
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
            y: word.position.y + state.fallingSpeed + 0.3,
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

function FallingWord({ word, isContact, onClick }) {
  const wordStyle = {
    position: "absolute",
    left: `${word.position.x}%`,
    top: `${word.position.y}px`,
    opacity: isContact ? 0 : 1,
    cursor: word.isActive ? "pointer" : "default",
    display: word.isActive ? "block" : "none",
    transition: "top 0.05s, opacity 0.05s",
    background:
      "url('./src/pages/Courses/Game/DropGame/strawberry.png') center/cover no-repeat",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid transparent", // Set a transparent border
  };
  return (
    <Component style={wordStyle} onClick={onClick}>
      {word.text}
    </Component>
  );
}

function GameFallingWords() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { words, gameOver, isContact } = state;
  const footerRef = useRef();

  const getRandomWord = useCallback(() => {
    const isCorrect = Math.random() < 0.5;
    const wordsArray = isCorrect ? correctWords : incorrectWords;
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    const wordText = wordsArray[randomIndex];
    const wordPosition = { x: Math.random() * 80 + 10, y: 0 };

    return {
      text: wordText,
      position: wordPosition,
      isActive: true,
    };
  }, []);

  const handleWordClick = (index) => {
    if (gameOver || !words[index].isActive) return;

    const clickedWord = words[index];
    if (correctWords.includes(clickedWord.text)) {
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
      (word) => word.position.y + 20 >= 460 && word.position.y <= 460
    );

    if (isContacting !== state.isContact) {
      dispatch({
        type: "SET_IS_CONTACT",
        payload: { isContact: isContacting },
      });
    }

    const wordsToRemove = words.filter((word) => word.position.y >= 460);
    if (wordsToRemove.length > 0) {
      const incorrectWordsCount = wordsToRemove.filter(
        (word) => !correctWords.includes(word.text)
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
      (word) => word.position.y + 20 >= 460 && word.position.y <= 460
    );

    if (isContacting !== isContact) {
      dispatch({
        type: "SET_IS_CONTACT",
        payload: { isContact: isContacting },
      });
    }

    const wordsToRemove = words.filter((word) => word.position.y >= 460);
    if (wordsToRemove.length > 0) {
      const incorrectWordsCount = wordsToRemove.filter(
        (word) => !correctWords.includes(word.text)
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
    }, 2000);

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
        <div
          ref={footerRef}
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "2px",
            background: "brown",
          }}
        ></div>
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
              isContact={isContact}
              onClick={() => handleWordClick(index)}
            />
          ))
        )}
      </Container>
    </GameDiv>
  );
}

export default GameFallingWords;
