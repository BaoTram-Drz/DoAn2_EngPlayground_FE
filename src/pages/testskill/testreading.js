import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaVolumeUp } from 'react-icons/fa';
import { CiMicrophoneOn } from 'react-icons/ci';
import fastLevenshtein from 'fast-levenshtein';
import { getVocab } from '../../API/vocabApi';
import Sound from 'react-sound'; // Import the Sound component
import successSound from './success.mp3'; // Define your success sound file path
import warningSound from './success.mp3'; // Define your warning sound file path
import errorSound from './success.mp3'; // Define your error sound file path

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 10%;
`;

export const Vocabulary = styled.p`
  font: normal 400 20px 'Autour One';
`;

const ListButton = styled.div`
  width: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const Button = styled.button`
  width: 20%;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 14px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

const ListenButton = styled(Button)``;
const SpeakButton = styled(Button)``;
const StopButton = styled(Button)``;
const SubmitButton = styled(Button)`
  margin-top: 5%;
`;

const FeedbackContainer = styled.div`
  background-color:#fef0f1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #f00;
  margin-top: 10px;
  border-color: ${(props) => props.color || '#fef0f1'};
`;
export const Text = styled.p`
  margin: 20px auto 20px 0px;
  width: 100%;
  color:#f47068;
  font-family:monospace;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 1px solid pink;
`;

const RedText = styled.span`
  color: red;
`;

const OrangeText = styled.span`
  color: orange;
`;

const GreenText = styled.span`
  color: green;
`;

function TestReading() {
  const [wordTest, setWordTest] = useState({});
  const [playSuccess, setPlaySuccess] = useState(false);
  const [playWarning, setPlayWarning] = useState(false);
  const [playError, setPlayError] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState(''); // Define the feedbackColor state

  useEffect(() => {
    const getVocabulary = async () => {
      try {
        const topicCourse = { topic: 'animals' };
        const result = await getVocab(topicCourse);
        setWordTest(result[1]);

        console.log('wordTest:', wordTest);

        // Optionally set the vocabulary data in your component state
        // setVocabulary(result);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    getVocabulary();
  }, []);

  const referenceWord = 'hello';
  const maxDistance = 10;

  const [feedback, setFeedback] = useState('');
  const [listening, setListening] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleSpeechRecognition = () => {
    if (listening) {
      return;
    }

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;

      recognition.onstart = () => {
        setListening(true);
        setFeedback('Microphone is on. Speak now.');
      };

      recognition.onend = () => {
        setListening(false);
        console.log('Microphone is off.');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;

        // Only proceed if the user input is different
        if (transcript !== userInput) {
          setUserInput(transcript);

          const distance = fastLevenshtein.get(wordTest.name, transcript);

          if (distance === 0) {
            setPlaySuccess(true);
            setFeedback(
              <div>
                <span>Original IPA: <GreenText>{getOriginalIPA(wordTest)}</GreenText></span>
                <br />
                <span>Your IPA: <GreenText>{transcript}</GreenText></span>
                <br />
                <span>Levenshtein distance: {distance}</span>
              </div>
            );
            setFeedbackColor('green'); // Set feedbackColor to green
          } else if (distance <= maxDistance) {
            setPlayWarning(true);
            setFeedback(
              <div>
                <span>Original IPA: <OrangeText>{getOriginalIPA(wordTest)}</OrangeText></span>
                <br />
                <span>Your IPA: <OrangeText>{transcript}</OrangeText></span>
                <br />
                <span>Levenshtein distance: {distance}</span>
              </div>
            );
            setFeedbackColor('orange'); // Set feedbackColor to orange
          } else {
            setPlayError(true);
            setFeedback(
              <div>
                <span>Original IPA: <RedText>{getOriginalIPA(wordTest)}</RedText></span>
                <br />
                <span>Your IPA: <RedText>{transcript}</RedText></span>
                <br />
                <span>Levenshtein distance: {distance}</span>
              </div>
            );
            setFeedbackColor('red'); // Set feedbackColor to red
          }
        }
      };

      recognition.start();
    } else {
      console.log('Speech recognition not supported in this browser.');
    }
  };

  const handleListening = (word) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('This browser does not support the SpeechSynthesis API.');
    }
  };

  const getOriginalIPA = (word) => {
    return word.sound;
  };

  useEffect(() => {
    if ('Notification' in window) {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission();
      }
    }
  }, []);

  return (
    <Container>
      <Text>Test Reading</Text>
      <Vocabulary> {wordTest.name}</Vocabulary>
      <ListButton>
        <ListenButton onClick={() => handleListening(wordTest.name)}> <FaVolumeUp /> </ListenButton>
        <SpeakButton onClick={handleSpeechRecognition}> <CiMicrophoneOn /></SpeakButton>
      </ListButton>
      <SubmitButton> Submit</SubmitButton>
      <FeedbackContainer color={feedbackColor}>
        <p>{feedback}</p>
      </FeedbackContainer>

      <Sound
        url={successSound}
        playStatus={playSuccess ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlaySuccess(false)}
      />

      <Sound
        url={warningSound}
        playStatus={playWarning ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlayWarning(false)}
      />

      <Sound
        url={errorSound}
        playStatus={playError ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlayError(false)}
      />
    </Container>
  );
}

export default TestReading;
