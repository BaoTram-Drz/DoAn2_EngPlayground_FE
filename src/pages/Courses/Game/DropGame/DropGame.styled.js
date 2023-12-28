import styled from "styled-components";
import {Title} from '../../../style/GlobalStyles'

export const GameDiv = styled.div`
  margin: 6% auto 3% auto;
  width: 100%;

  @media (max-width: 1200px) {
    margin-top: 10%;
  }
  @media (max-width: 768px) {
    margin-top: 12%;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
  }
  @media (max-width: 440px) {
    margin-top: 20%;
  }
  @media (max-width: 380px) {
    margin-top: 25%;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 70%;
  height: 500px;
  margin: auto;
  border: 2px solid #1697a6;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 540px) {
    width: 95%;
  }
  @media (max-width: 440px) {
    width: 95%;
  }
  @media (max-width: 380px) {
    width: 95%;
  }
  @media (max-width: 300px) {
    width: 90%;
  }
`;
export const Header = styled(Title)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 70%;
    margin: 2% auto;
    color: #ffc24b;
    font-family: monospace;
    text-align: left;
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`;
export const HeaderRight = styled(Title)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #3cb043;
    font-family: monospace;
    text-align: right;
`;
export const OverDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    text-align: center;
`;
export const OverText = styled(Title)`
    color: #3cb043;
    font-family: monospace;
    text-align: center;
`;
export const WrongColor = styled(Title)`
    color: #f47068;
    font-family: monospace;
    text-align: center;
`;
const getRandomColor = () => {
    const colors = ['#f47068', '#ffb3ae', '#1697a6', '#0e606b', '#ffc24b', '#3cb043'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

export const Component = styled.div`
  margin: 20px;
  max-width: 150px;
  line-height: 1.5;
  height: fit-content;
  background-color: white;
  border: 2px solid #1697a6;
  border-radius: 10px;
  text-align: center;
  color: ${getRandomColor()};
  font-family: monospace;
  font-size: 20px;
  z-index: 1;

  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 540px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    font-size: 16px;
  }
  @media (max-width: 280px) {
    font-size: 12px;
  }
`;


