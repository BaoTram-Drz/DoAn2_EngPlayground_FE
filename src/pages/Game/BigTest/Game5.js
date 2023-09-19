import React, { useState, useEffect } from "react";
import styled, {css} from "styled-components";
import A from './image/A.png'
import B from './image/B.png'
import C from './image/C.png'
import D from './image/D.png'
import { FaVolumeUp } from 'react-icons/fa'

const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px 'Autour One';
`;
const VoiceIcon = styled(FaVolumeUp)`
  cursor: pointer;

  &:active {
    color: pink;
  }
`;
const TableWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableRow = styled.tr`
  background-color: white;
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
  }

`;
const TableCell = styled.div`
    margin: 2% 10%;  
    padding: 5px 24px;
    font: normal 400 28px 'Roboto';
    color: #0E606B;
    text-align: center;
    border: 2px dashed #0e606b;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
    ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    `}
`;
const ImageAns = styled.img`
    width: 40px;
    height: 40px;
    margin: auto 10px;
`;


const Game5 = ({ data, onSelectAnswer }) => {
  const [activeId, setActiveId] = useState("null");
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    if (activeId === data.correctAnswer) {
      setScore(data.score);
    } else {
      setScore(0);
    }
    onSelectAnswer(score);
  },  [activeId, data.correctAnswer, data.score, onSelectAnswer, score]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleVoice = (item) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(item);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Trình duyệt không hỗ trợ SpeechSynthesis API.');
    }
  };

  return (
    <>
      <Answers>{data.question}</Answers>
      <Answers>
        <VoiceIcon onClick={() => handleVoice(data.vocab)} />
      </Answers>
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
                  {data.answerOptions[0].text}
                </TableCell>
              </td>
              <td>
                <TableCell 
                  onClick={() => setActiveId(data.answerOptions[1].id)}
                  isActive={activeId === data.answerOptions[1].id}
                >
                  <ImageAns src={B} alt="B" /> 
                  {data.answerOptions[1].text}
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
                  {data.answerOptions[2].text}
                </TableCell>
              </td>
              <td>
                <TableCell 
                  onClick={() => setActiveId(data.answerOptions[3].id)}
                  isActive={activeId === data.answerOptions[3].id}
                >
                  <ImageAns src={D} alt="D" /> 
                  {data.answerOptions[3].text}
                </TableCell>
              </td>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>
     
    </>
   
  );
};

export default Game5;
