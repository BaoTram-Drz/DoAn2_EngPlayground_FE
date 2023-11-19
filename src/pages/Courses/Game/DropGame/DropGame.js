// Game.js

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Styled components
const Container = styled.div`
  margin: 7% auto;
  width: 40%;
  align-items: center;
  height: 70vh;
  position: relative;
`;

const ScoreContainer = styled.div`
  margin: auto;
  width: 100%;
  font-size: 20px;
  display: flex;
  text-align: center;
`;

const HeartIcon = styled.span`
  color: red;
  margin-left: 5px;
`;

const WordDiv = styled.div`
  margin: auto;
  width: 100%;
  height: 60vh;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ccc;
`;

const WordSquare = styled.div`
  font-size: 16px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  animation: ${props => props.animation} ${props => props.speed}s ;
  animation-delay: ${props => props.delay}s;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  margin: auto;
  width: 100%;
`;

const Image = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Animation keyframes
const DropAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(100vh);
    opacity: 1;
  }
`;

const Game = () => {
  // State variables
  const [words, setWords] = useState([]);
  const [displayedWords, setDisplayedWords] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    // Game logic
    const interval = setInterval(() => {
      // Check game outcome
      if (isGameWon || isGameOver) {
        clearInterval(interval);
        if (isGameOver) {
          alert('Game Over! Your final score is: ' + score);
        } else if (isGameWon) {
          alert('Congratulations! You won!');
        }
        return;
      }

      // Vocabulary data
      const vocabularyData = [
        { word: '200', imageKey: 'https://via.placeholder.com/200x200.png' },
        { word: '300', imageKey: 'https://via.placeholder.com/300x300.png' },
        { word: '400', imageKey: 'https://via.placeholder.com/400x400.png' },
        { word: '500', imageKey: 'https://via.placeholder.com/500x500.png' },
        { word: '600', imageKey: 'https://via.placeholder.com/600x600.png' },
        { word: '700', imageKey: 'https://via.placeholder.com/700x700.png' },
        { word: '800', imageKey: 'https://via.placeholder.com/800x800.png' },
        // Add more vocabulary items here
      ];

      const availableWords = vocabularyData.filter(
        item => !displayedWords.includes(item.word)
      );

      // Check game outcome based on lives
      if (availableWords.length === 0 && lives > 0) {
        setIsGameWon(true);
        return;
      }

      if (lives === 0) {
        setIsGameOver(true);
        return;
      }

      // Randomly select a word
      const randomImageIndex = Math.floor(Math.random() * availableWords.length);
      const { word, imageKey } = availableWords[randomImageIndex];

      // Generate incorrect words
      const incorrectWords = vocabularyData
        .filter(item => item.word !== word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const wordsToDisplay = [{ word, imageKey }, ...incorrectWords];

      // Shuffle and set falling words
      const shuffledWords = wordsToDisplay.sort(() => 0.5 - Math.random());
      setWords(prevWords => [
        ...prevWords,
        ...shuffledWords.map((word, index) => ({
          ...word,
          speed: 5, // Falling speed in seconds
          delay: prevWords.length === 0 ? 0 : 0.5,
          left: index * 50,
          top: -100 * prevWords.length,
        })),
      ]);

      // Update displayed words
      setDisplayedWords(prevDisplayedWords => [...prevDisplayedWords, word]);
    }, 500);

    // Cleanup interval
    return () => {
      clearInterval(interval);
    };
  }, [displayedWords, lives, isGameWon, isGameOver, score]);

  // Handle word click
  const handleWordClick = (clickedWord) => {
    const correctWord = displayedWords[0];
    if (clickedWord.word === correctWord) {
      // If correct word is clicked, increase score and clear displayed words
      setScore(score + 1);
      setDisplayedWords([]);
    } else {
      // If incorrect word is clicked, decrease lives
      setLives(lives - 1);
    }
  };

  // Handle word container click
  const handleWordDivClick = () => {
    // Decrease lives when word container is clicked
    setLives(lives - 1);
  };

  // Render game components
  return (
    <Container>
      {/* Display score and lives */}
      <ScoreContainer>
        Score: {score}
        <HeartIcon>❤️</HeartIcon>
        {lives}
      </ScoreContainer>

      {/* Display falling words */}
      <WordDiv onClick={handleWordDivClick}>
        {words.map((word, index) => (
          <WordSquare
            key={index}
            speed={word.speed}
            delay={word.delay}
            left={word.left}
            top={word.top}
            animation={DropAnimation}
            onClick={() => handleWordClick(word)}
          >
            {word.word}
          </WordSquare>
        ))}
      </WordDiv>

      {/* Display image */}
      <ImageContainer>
        <Image>
          {displayedWords.length > 0 && <img src={displayedWords[0].imageKey} alt={displayedWords[0].imageKey} />}
        </Image>
      </ImageContainer>
    </Container>
  );
};

export default Game;
