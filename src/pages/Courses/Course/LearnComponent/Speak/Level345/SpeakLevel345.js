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

function SpeakLevel345({ data, onSelectAnswer }) {
  const [activeId, setActiveId] = useState("null");
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(Date.now());


  // const handleSpeechRecognition = () => {
  //   if (listening) {
  //     return;
  //   }

  //   if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  //     const recognition = new SpeechRecognition();
  //     recognition.interimResults = true;

  //     recognition.onstart = () => {
  //       setListening(true);
  //       setFeedback('Microphone is on. Speak now.');
  //     };

  //     recognition.onend = () => {
  //       setListening(false);
  //       console.log('Microphone is off.');
  //     };

  //     recognition.onresult = (event) => {
  //       const transcript = event.results[0][0].transcript;

  //       // Only proceed if the user input is different
  //       if (transcript !== userInput) {
  //         setUserInput(transcript);

  //         const distance = fastLevenshtein.get(wordTest.name, transcript);

  //         if (distance === 0) {
  //           setPlaySuccess(true);
  //           setFeedback(
  //             <div>
  //               <span>Original IPA: <GreenText>{getOriginalIPA(wordTest)}</GreenText></span>
  //               <br />
  //               <span>Your IPA: <GreenText>{transcript}</GreenText></span>
  //               <br />
  //               <span>Levenshtein distance: {distance}</span>
  //             </div>
  //           );
  //           setFeedbackColor('green'); // Set feedbackColor to green
  //         } else if (distance <= maxDistance) {
  //           setPlayWarning(true);
  //           setFeedback(
  //             <div>
  //               <span>Original IPA: <OrangeText>{getOriginalIPA(wordTest)}</OrangeText></span>
  //               <br />
  //               <span>Your IPA: <OrangeText>{transcript}</OrangeText></span>
  //               <br />
  //               <span>Levenshtein distance: {distance}</span>
  //             </div>
  //           );
  //           setFeedbackColor('orange'); // Set feedbackColor to orange
  //         } else {
  //           setPlayError(true);
  //           setFeedback(
  //             <div>
  //               <span>Original IPA: <RedText>{getOriginalIPA(wordTest)}</RedText></span>
  //               <br />
  //               <span>Your IPA: <RedText>{transcript}</RedText></span>
  //               <br />
  //               <span>Levenshtein distance: {distance}</span>
  //             </div>
  //           );
  //           setFeedbackColor('red'); // Set feedbackColor to red
  //         }
  //       }
  //     };

  //     recognition.start();
  //   } else {
  //     console.log('Speech recognition not supported in this browser.');
  //   }
  // };

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
      <Question>Đây là trường hợp nói theo từ, không được nghe để nói theo</Question><br/>
      <Question>{data.question}</Question>
      <SpeakerDiv>
        <StyledButton>
          <CiMicrophoneOn />
        </StyledButton>
      </SpeakerDiv>

    </Containers>
  );
}

export default SpeakLevel345;