import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 10%;
`;

export const Vocabulary = styled.p`
  font: normal 400 2rem 'Autour One';
`;

const Button = styled(Link)`
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

const SubmitButton = styled(Button)`
  margin-top: 5%;
`;


function TestSkill
() {

  return (
    <Container>
        <SubmitButton to='/testreading'> Test Reading</SubmitButton>
        <SubmitButton to='/testlistening'> Test Listening</SubmitButton>
    </Container>
  );
}

export default TestSkill
;
