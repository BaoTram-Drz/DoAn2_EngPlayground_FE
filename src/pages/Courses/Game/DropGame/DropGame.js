import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  position: relative;
`;

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

const Square = styled.div`
  font-size: 24px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  animation: ${DropAnimation} ${props => props.speed}s linear infinite;
  animation-delay: ${props => props.delay}s;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DropGame = () => {
  const [words, setWords] = useState([]);
  const [displayedWords, setDisplayedWords] = useState([]);
  const [shouldDrop, setShouldDrop] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const vocabulary = [
        'Hello',
        'World',
        'React',
        'Styled',
        'Components',
        'OpenAI',
        // Thêm các từ vựng khác tại đây
      ];

      const availableWords = vocabulary.filter(
        word => !displayedWords.includes(word)
      );

      if (availableWords.length === 0 || !shouldDrop) return;

      const index = Math.floor(Math.random() * availableWords.length);
      const word = availableWords[index];
      const speed = 20; // Tốc độ rơi là 20s
      const delay = words.length === 0 ? 0 : 0.5; // Delay là 0.5s nếu đã có từ đầu tiên rơi

      const top = -100 * words.length;

      setWords(prevWords => [
        ...prevWords,
        { word, speed, delay, left: Math.random() * (window.innerWidth - 100), top },
      ]);

      setDisplayedWords(prevDisplayedWords => [...prevDisplayedWords, word]);
    }, 500);

    // Dừng rơi các từ sau 30 giây
    const stopTimeout = setTimeout(() => {
      setShouldDrop(false);
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, [displayedWords, shouldDrop]);

  return (
    <Container>
      {words.map((word, index) => (
        <Square
          key={index}
          speed={word.speed}
          delay={word.delay}
          left={word.left}
          top={word.top}
        >
          {word.word}
        </Square>
      ))}
    </Container>
  );
};

export default DropGame;