import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container,Content, Title } from '../../../../style/GlobalStyles';
import {Containers, Paragraph, Question, AnswerDiv, OptionLabel} from './ReadLevel.style'

function Reading12345({ data, onSelectAnswer }) {
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
      <Paragraph>"{data.paragraph}"</Paragraph><br/>
        <Question>{data.question}</Question>
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
    </Containers>
  );
}

export default Reading12345;