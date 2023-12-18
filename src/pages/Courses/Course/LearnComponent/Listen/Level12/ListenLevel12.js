import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaVolumeUp } from 'react-icons/fa';
import {Container, Title, Content} from '../../../../../style/GlobalStyles'

const Containers = styled(Container)`
  margin: 4% auto 6% auto;
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
const StyledButton = styled.button`
  width: 80px;
  height: 80px;
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
const AnswerDiv = styled.div`
  margin: auto;
  text-align: left;
`;

const OptionLabel = styled(Content)`
  display: block; 
  padding: 3px 6px;
  font-weight: normal;
  font-family: monospace;
  color: #0e606b;
`;

function ListenLevel12({ data, onSelectAnswer }) {
  const [activeId, setActiveId] = useState("null");
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(Date.now());

  const handleListening = (word) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('This browser does not support the SpeechSynthesis API.');
    }
  };

  const handleRadioClick = (optionId) => {
    setActiveId(optionId);
    if (optionId === data.correctAnswer) {
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
  }, [data, activeId]);

  //set lại radio button
  useEffect(() => {
    setKey(Date.now());
  }, [data]);

  return (
    <Containers>
      <Question>{data.question}</Question>
      <SpeakerDiv>
          <StyledButton>
            <FaVolumeUp onClick={() => handleListening(data.listenText)}/>
          </StyledButton>
        </SpeakerDiv>

        <AnswerDiv key={key}>
          {data.answerOptions.map((option) => (
            <OptionLabel key={option.id}>
              <input
                type="radio"
                name="option"
                value={option.id}
                onClick={() => handleRadioClick(option.id)}
                isActive={activeId === option.id}
              />
              &ensp;{option.text}
            </OptionLabel>
          ))}
        </AnswerDiv>
    </Containers>
  );
}

export default ListenLevel12;