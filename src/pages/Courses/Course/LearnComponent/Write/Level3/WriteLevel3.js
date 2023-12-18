import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import image from './image.jpg';
import { FaVolumeUp } from 'react-icons/fa';
import {Container, Content, Title } from '../../../../../style/GlobalStyles'

const Containers = styled.div`
  margin: 3% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Question = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px monospace;
    color: #0e606b;

`;
export const Image = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
`;

const AnswerInput = styled.input`
  margin: 3% auto;
  padding: 6px 12px;
  width: 50%;
  line-height: 30px;
  font-family: "Autour One";
  font-size: 18px;
  text-align: center;
  border: 2px dashed #0e606b;
  border-radius: 10px;

  &:focus {
      border: 1px solid #0e606b;
      outline: none;
  }
  ::placeholder {
      padding-left: 1rem;
  }
  @media (max-width: 300px) {
    padding: 3px 6px;
    font-size: 14px;
  }
`;


function WriteLevel3({ data, onSelectAnswer }) {
  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value === data.correctAnswer) {
        setScore(data.score);
        setState(true);
      } else {
        setScore(0);
        setState(false);
      }
  };

  useEffect(() => {
    const dataAnswer = {
      id: data._id,
      answerState: state,
      score: score,
    };
    const answerString = JSON.stringify(dataAnswer);
    onSelectAnswer(answerString);

  }, [inputValue]);

  return (
    <Containers>
        <Question>{data.question}</Question>
        {data.writeImage !== null ? <Image bgImage={image} /> : null}
        <AnswerInput value={inputValue} onChange={handleInputChange} />

      </Containers>
  );
}

export default WriteLevel3;