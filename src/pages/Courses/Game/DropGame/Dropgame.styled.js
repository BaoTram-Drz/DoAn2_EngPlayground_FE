import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const WordContainer = styled.div`
  position: relative;
  font-size: 24px;
`;

export const Word = styled.span`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #fff4f1;
  border: 1px solid #ffb3ae;
  border-radius: 4px;
  color: #0e606b;
  cursor: pointer;
  transition: top 0.5s ease;
  &:hover {
    background-color: #1697a6;
    color: #fff4f1;
  }
`;

export const Score = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  color: #ffc24b;
`;