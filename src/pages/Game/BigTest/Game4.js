import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableButton from './Button/DraggableButton'
import DropZone from './Button/DropZone'

const Container = styled.p`
  margin: 1% auto 5% auto;

  @media (max-width: 540px) {
    margin: 5% auto 10% auto;
  }    
`;
const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px 'Autour One';
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
    
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
const ButtonsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1%;
  margin: 3% auto 5% auto;
  @media (max-width: 912px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Game4 = ({data, onSelectAnswer}) => {
  const [draggedItems, setDraggedItems] = useState([]);    
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);

  const dataAnswer = {
    id: data._id,
    answerState: state,
    score: score,
  };
    useEffect(() => {
      const ids = Object.values(draggedItems).reduce((acc, value) => acc + value, '');
      if (ids === data.correctAnswer) {
        setScore(data.score)
        setState(true)
      } else {
        setScore(0);
        setState(false)
      }
      
      const answerString = JSON.stringify(dataAnswer);
      onSelectAnswer(answerString);
    }, [draggedItems,state, score]);
    
    const handleDrop = (id) => {
      setDraggedItems((prev) => [...prev, id]);
    };

    if (!data) {
      return <p>Loading...</p>;
    }
  
    const resetDraggedItems = (resetItems) => {
      setDraggedItems((prev) => prev.filter((item) => !resetItems.includes(item)));
    };

    const answerOptions = data.answerOptions;

    return (
      <Container>
        <Answers>{data.question}</Answers>
        <DndProvider backend={HTML5Backend}>
          <DropZone onDrop={handleDrop}  resetDraggedItems={resetDraggedItems}/>
          <ButtonsContainer>
            {answerOptions.map((item) => {
              if (draggedItems.includes(item.id)) {
                return null;
              }
              return (
                <DraggableButton key={item.id} id={item.id} text={item.text} />
              );
            })}
          </ButtonsContainer>
        </DndProvider>
      </Container>
    );
};

export default Game4;
