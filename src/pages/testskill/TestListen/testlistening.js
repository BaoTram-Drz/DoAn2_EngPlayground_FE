import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaVolumeUp } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 10%;
`;

export const Vocabulary = styled.p`
  font: normal 400 2rem 'Autour One';
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
const Input = styled.input`
  width: 20%;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  background-color: white;
  border: none;
  outline: none;
  border-bottom: 3px solid #f47068;
  border-radius: 14px;
  text-decoration: none;
  cursor: pointer;
  ::placeholder{
    font-size: 16px;
  }
`;
const ListenButton = styled(Button)``;
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

const RedText = styled.span`
  color: red;
`;

const OrangeText = styled.span`
  color: orange;
`;

const GreenText = styled.span`
  color: green;
`;

function TestListening() {
  const [Answer, setAnswer] = useState('');


  return (
    <Container>
      <h1>Test listening</h1>
      <Vocabulary> </Vocabulary>
      <ListButton>
        <ListenButton > <FaVolumeUp /> </ListenButton>
        <Input
          placeholder='enter your answer here'
          value={Answer}
          onChange={e => setAnswer(e.target.value)}
        />
      </ListButton>
      <SubmitButton> Submit</SubmitButton>

    </Container>
  );
}

export default TestListening;
