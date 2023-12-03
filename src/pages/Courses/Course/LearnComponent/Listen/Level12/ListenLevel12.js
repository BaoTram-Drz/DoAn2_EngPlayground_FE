import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaVolumeUp } from 'react-icons/fa';

const Container = styled.div`
  margin: 3% auto;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
export const Question = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px monospace;
    color: #0e606b;

`;
const SpeakerDiv = styled.div`
  text-align: center;
  padding: 20px;
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
`;
const AnswerDiv = styled.div`
  text-align: left;
  grid-gap: 10px;
`;

const OptionLabel = styled.label`
  display: block;
  padding: 0px 24px;
  font: normal 400 18px monospace;
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
    <>
      <Question>{data.question}</Question>
      <Container>
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
              {option.text}
            </OptionLabel>
          ))}
        </AnswerDiv>
      </Container>
    </>
  );
}

export default ListenLevel12;