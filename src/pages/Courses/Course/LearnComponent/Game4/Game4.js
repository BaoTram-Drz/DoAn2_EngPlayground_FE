import React, { useState, useEffect } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableButton from '../Button/DraggableButton'
import DropZone from '../Button/DropZone'
import {Container, Answers, ButtonsContainer} from './Game4.styled'

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
