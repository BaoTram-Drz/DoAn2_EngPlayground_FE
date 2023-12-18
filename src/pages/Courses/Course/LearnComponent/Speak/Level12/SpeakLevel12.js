import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { CiMicrophoneOn } from 'react-icons/ci';
import { FaVolumeUp } from 'react-icons/fa';
import {Container, Title } from '../../../../../style/GlobalStyles'

const Containers = styled(Container)`
  margin: 3% auto;
  text-align: center;
`;
export const Question = styled(Title)`
  font-family: monospace;
  color: #0e606b;
`;
const SpeakerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5% auto 10% auto;
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

function SpeakLevel12({ data, onSelectAnswer }) {
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


//chỉ cần trả về id, trạng thái đúng sai và điểm. Quá trình tính điểm ở tại code bên này.
    //nhớ chỉnh data giả ở layoutlearn phía trên.
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

        <StyledButton>
          <CiMicrophoneOn />
        </StyledButton>
      </SpeakerDiv>

    </Containers>
  );
}

export default SpeakLevel12;