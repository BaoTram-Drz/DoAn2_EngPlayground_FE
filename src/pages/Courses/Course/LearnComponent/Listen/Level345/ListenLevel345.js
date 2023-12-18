import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaVolumeUp } from 'react-icons/fa';
import {Container, Title } from '../../../../../style/GlobalStyles'

const Containers = styled(Container)`
  margin: 3% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Question = styled(Title)`
  text-align: center;
  font-family: monospace;
  color: #0e606b;

`;
const SpeakerDiv = styled.div`
  text-align: center;
  padding: 20px;
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

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  padding: auto;
  font-size: 36px;
  color: #ffc24b;
  background-color: transparent;
  outline: none;
  border: none;
  border: 1px solid #ffc24b;
  border-radius:50%;
  cursor: pointer;
  &:active{
    color:white;
    background-color: #ffc24b;
    outline: none;
    border: none;
  }
  @media (max-width: 440px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
`;


function ListenLevel345({ data, onSelectAnswer }) {
  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);

  const handleListening = (word) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('This browser does not support the SpeechSynthesis API.');
    }
  };

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
      <SpeakerDiv>
        <StyledButton>
          <FaVolumeUp onClick={() => handleListening(data.listenText)}/>
        </StyledButton>
      </SpeakerDiv>
      <AnswerInput value={inputValue} onChange={handleInputChange} />
      
    </Containers>
);
}

export default ListenLevel345;