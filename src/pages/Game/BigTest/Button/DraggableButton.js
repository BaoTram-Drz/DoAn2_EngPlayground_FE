import React from 'react';
import styled, { css } from 'styled-components';
import { useDrag } from 'react-dnd';

const StyledButton = styled.button`
  width: 100%;
  padding: 5px 24px;
  font: normal 400 2rem "Roboto";
  background-color: white;
  border: 3px solid #0e606b;
  border-radius: 50px;
  cursor: move;
  ${({ isDragging }) =>
    isDragging &&
    css`
      opacity: 0.5;
    `}
  ${({ isNotDragging }) =>
    isNotDragging &&
    css`
      opacity: 1;
    `}

    @media (max-width: 1200px) {
      font-size: 2rem;
    }
    
    @media (max-width: 540px) {
      width: 100%;
      font-size: 1.5rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
const DraggableButton = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'button',
    item: { id, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StyledButton ref={drag} isDragging={isDragging} isNotDragging={!isDragging}>
        {text}
    </StyledButton>
  );
};

export default DraggableButton;
