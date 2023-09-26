import React, { useState, useEffect } from "react";
import A from './image/A.png'
import B from './image/B.png'
import C from './image/C.png'
import D from './image/D.png'
import {Answers, TableWrapper, Table, TableRow, TableCell, ImageAns, CellText} from './Game1.styled'


const Game1 = ({ data, onSelectAnswer }) => {

  
  const [activeId, setActiveId] = useState("null");
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);

  const dataAnswer = {
    id: data._id,
    answerState: state,
    score: score,
  };

  useEffect(() => {    
    if (activeId === data.correctAnswer) {
      setScore(data.score);
      setState(true)
    } else {
      setScore(0);
      setState(false)
    }
    const answerString = JSON.stringify(dataAnswer);
    onSelectAnswer(answerString);
  },  [activeId, state, score]);


  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Answers>{data.question}</Answers>
      <TableWrapper>
        <Table>
          <tbody>
            <TableRow>
              <td>
                <TableCell 
                  onClick={() => setActiveId(data.answerOptions[0].id)}
                  isActive={activeId === data.answerOptions[0].id}
                >
                  <ImageAns src={A} alt="A" /> 
                    <CellText>{data.answerOptions[0].text}</CellText>
                </TableCell>
              </td>
              <td>
                <TableCell 
                  onClick={() => setActiveId(data.answerOptions[1].id)}
                  isActive={activeId === data.answerOptions[1].id}
                >
                  <ImageAns src={B} alt="B" /> 
                    <CellText>{data.answerOptions[1].text}</CellText>
                </TableCell>
              </td>
            </TableRow>
            <TableRow>
              <td>
                <TableCell 
                  onClick={() => setActiveId(data.answerOptions[2].id)}
                  isActive={activeId === data.answerOptions[2].id}
                >
                  <ImageAns src={C} alt="C" /> 
                    <CellText>{data.answerOptions[2].text}</CellText>
                </TableCell>
              </td>
              <td>
                <TableCell 
                  onClick={() => setActiveId(data.answerOptions[3].id)}
                  isActive={activeId === data.answerOptions[3].id}
                >
                  <ImageAns src={D} alt="D" /> 
                    <CellText>{data.answerOptions[3].text}</CellText>
                </TableCell>
              </td>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>
     
    </>
  );
};

export default Game1;
