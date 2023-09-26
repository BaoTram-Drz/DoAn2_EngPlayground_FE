import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const CircleContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
`;
const dropWord = keyframes`
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(100vh);
    opacity: 1;
  }
`;
const WordCircle = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  animation: ${({ visible }) => (visible ? dropWord : 'none')} 10s linear infinite;
`;



const words = ['Word 1', 'Word 2', 'Word 3', 'Word 4', 'Word 5'];

const CircleComponent = () => {
  const [circlePositions, setCirclePositions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const visibleCircles = circlePositions.filter((circle) => circle.visible);
      const lastVisibleCircle = visibleCircles[visibleCircles.length - 1];

      if (!lastVisibleCircle) {
        const { left, top } = getRandomPosition();
        setCirclePositions((prevPositions) => [
          ...prevPositions,
          { left, top, index: prevPositions.length, visible: true },
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [circlePositions]);

  const getRandomPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomLeft = Math.floor(Math.random() * (screenWidth - 100));
    const top = -100;

    return { left: randomLeft, top };
  };

  const hideCircle = (index) => {
    setCirclePositions((prevPositions) =>
      prevPositions.map((position) =>
        position.index === index ? { ...position, visible: false } : position
      )
    );
  };

  const renderWordCircles = () => {
    return circlePositions.map(({ left, top, index, visible }) => {
      const word = words[index];

      if (!visible) {
        return null;
      }

      return (
        <WordCircle
          key={index}
          style={{
            animationDelay: `${index * 2}s`,
          }}
          left={left}
          top={top}
          visible={visible}
          onAnimationEnd={() => hideCircle(index)}
        >
          {word}
        </WordCircle>
      );
    });
  };

  return <CircleContainer>{renderWordCircles()}</CircleContainer>;
};

export default CircleComponent;
