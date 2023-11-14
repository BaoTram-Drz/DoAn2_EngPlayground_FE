import React from 'react';
import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.correct ? 'green' : 'red')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
`;

const Square = ({ correct, value, onClick }) => {
  return <StyledSquare correct={correct} onClick={onClick}>{value}</StyledSquare>;
};

export default Square;