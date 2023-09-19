import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import A from './image/A.png'
import B from './image/B.png'
import C from './image/C.png'
import D from './image/D.png'

const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 2rem 'Roboto';
  
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
const TableWrapper = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 912px) {
    width: 80%;
    margin-bottom: 10%;
  }

  @media (max-width: 540px) {
    width: 90%;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    width: 90%;
  }
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
      box-shadow: inset 0 0 10px yellow;
    `}
    @media (max-width: 1200px) {
      
    }
  
    @media (max-width: 912px) {
      padding: 10px 12px 5px 12px;
      margin: 2% 2%; 
    }
  
    @media (max-width: 540px) {
      padding: 10px 12px 5px 12px;
      margin: 2% 2%; 
    }
  
    @media (max-width: 480px) {
      padding: 10px 12px 5px 12px;
      margin: 2% 2%;  
    }
`;
const CellText = styled.span`
    margin-top: 50%;
    font: normal 400 2rem 'Roboto', sans-serif;
    color: #0E606B;
    text-align: center;
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
  
    @media (max-width: 912px) {
      font-size: 2rem;
    }
  
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
const ImageAns = styled.img`
    width: 40px;
    height: 40px;
    margin: auto 10px;
    text-align: center;
    @media (max-width: 912px) {
      width: 35px;
      height: 35px;
    }
  
    @media (max-width: 540px) {
      width: 30px;
      height: 30px;
    }
  
    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
`;

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
