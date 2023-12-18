import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Container, Content, Title } from '../../../../../style/GlobalStyles'

const Containers = styled(Container)`
  margin: 3% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Question = styled(Content)`
    text-align: center;
    font-family: monospace;
    color: #0e606b;

`;
export const Text = styled(Title)`
  margin: 2%;
  width: 80%;
  text-align: center;
  font-family: monospace;
  font-weight: bold;
  color: #0e606b;
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



function WriteLevel1245({ data, onSelectAnswer }) {
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
      <Question>{data.question}</Question><br/>
      <Text>{data.writeText}</Text><br/>
      <AnswerInput value={inputValue} onChange={handleInputChange} />
    </Containers>
  );
}

export default WriteLevel1245;