import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableButton from '../Button/DraggableButton';
import Game3Drop from '../Button/Game3Drop';
import {Answers, TablesContainer, TableDiv, TableCell} from './Game3.styled'

const Game3 = ({ data, onSelectAnswer }) => {
  const [draggedItems, setDraggedItems] = useState([]);  
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [buttonKey, setButtonKey] = useState(0);

  const dataAnswer = {
    id: data._id,
    answerState: state,
    score: score,
  };
  useEffect(() => {
    // Hàm này xử lý việc reset các state khi nhận được data mới
    const resetData = () => {
      setDraggedItems([]);
      setState(false);
      setScore(0);
      setTableData([]);
    };

    resetData(); // Reset data khi nhận được data mới
    setButtonKey((prevKey) => prevKey + 1);

    // Các xử lý khác khi data thay đổi (nếu cần)
  }, [data]);

  useEffect(() => {
    let matchedPairs = [];
  
    if (tableData && data.correctAnswer) {
      matchedPairs = tableData.filter((selectedItem) =>
        data.correctAnswer.some((item) =>
          selectedItem.id === item.id && selectedItem.text === item.text
        )
      );
    }  
    const calculatedScore = (matchedPairs.length * parseInt(data.score)) / 4; //score
    setScore(calculatedScore);
    if(matchedPairs.length === 4){
      setState(true);
    }

    const answerString = JSON.stringify(dataAnswer);
    onSelectAnswer(answerString);
  }, [tableData, state, score]);
  

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleDrop = (id, text) => {
    setDraggedItems((prev) => [...prev, id]);
    setTableData((prev) => {
      const updatedId = prev.filter(
        (preId) => preId.id !== id
      );
      updatedId.push({ id, text });
      return updatedId;
    });
  };
 

  if (!data) {
    return <p>Loading...</p>;
  }

  const resetDraggedItems = (resetItems) => {
    setDraggedItems((prev) => prev.filter((item) => !resetItems.includes(item)));
  };

  const textOptions = data.textOptions;
  const answerOptions = data.answerOptions;

  return (
    <>
      <Answers>{data.question}</Answers>
      <DndProvider backend={HTML5Backend}>
        <TablesContainer>
          {textOptions.map((item, index) => (
              <TableDiv key={index}>
                <tbody>                
                    <TableCell>{item.text}</TableCell>                
                  <tr>
                    <td>
                      <Game3Drop
                        onDrop={(droppedText) => handleDrop(item.id, droppedText)}
                        resetDraggedItems={resetDraggedItems}
                      />
                    </td>
                  </tr>
                </tbody>
              </TableDiv>
            ))}
        </TablesContainer>
        <TablesContainer>
         {answerOptions.map((item) => {
              if (draggedItems.includes(item.id)) {
                return null;
              }
              return <DraggableButton key={`${item.id}-${buttonKey}`} id={item.id} text={item.text} />;
            })}
        </TablesContainer>
      </DndProvider>
    </>
  );
};

export default Game3;
