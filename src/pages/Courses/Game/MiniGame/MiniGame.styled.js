import styled, { keyframes } from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
    z-index: 10;

    @media (max-width: 1100px) {
      margin-top: 10%;
      margin-bottom: -10%;
    }
    @media (max-width: 768px) {
      margin-top: 15%;
      margin-bottom: -15%;
    }
    @media (max-width: 540px) {
      margin-top: 20%;
      margin-bottom: -25%;
    }
    @media (max-width: 420px) {
      margin-left: 1%;
      margin-top: 25%;
      margin-bottom: -25%;
      width: 15px;
      height: 15px;
    }
    @media (max-width: 300px) {
      margin-top: 30%;
      margin-bottom: -30%;
    }
`;
export const BigText = styled.p`
  margin: -5% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1rem;
  }
`;
export const Container = styled.div`
    margin: 0% auto;
    width: 100%;
`;
export const Row = styled.div`
  margin: 5% 2% 0% auto;
  width: 90%;
  display: flex;
  align-items: right;
  gap: 4em;
`;
export const Heading = styled.h3`
  font-family: 'Autour One';
  font-size: 1.5rem;
  font-weight: bold;
  color: #F47068;
  margin-bottom: 20px;

  @media (max-width: 912px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 714px) {
    font-size: 1rem;
  }
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`;
export const CardContainer = styled.div`
    margin: 2% auto 10% auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1em;

    @media (max-width: 912px) {
      width: 90%;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5em;
    }

    @media (max-width: 440px) {
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5em;
    }

`;
export const hideCard = keyframes`
  0%, 70% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;
export const hideImage = keyframes`
  0%, 70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
export const hideText = keyframes`
  0%, 70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    display: none;
  }
`;
export const CardWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  transform: rotateY(180deg);
  animation: ${hideCard} 2s linear;
  transition: transform 0.5s;    
  height: 250px;

  &.active {
    transform: rotateY(0);
    img {
      transform: scale(1);
    }
    .text {
      transform: scale(1);
    }
  }

  &.correct {
    background-color: #1697A6;
  }

  &.wrong {
    background-color: #ffb3ae;
  }
  @media (max-width: 1100px) {
    height: 220px;
  }
  @media (max-width: 900px) {
    height: 200px;
  }
  @media (max-width: 700px) {
    height: 180px;
  }
  @media (max-width: 550px) {
    height: 100px;
  }
  @media (max-width: 400px) {
    height: 100px;
  }
  @media (max-width: 300px) {
    height: 80px;
  }
`;

export const CardImage = styled.img`
  width: 90%;
  height: 90%;
  transition: transform 0.5s;
  transform: scale(0);
  animation: ${hideImage} 2s linear;
`;
export const Text = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 1.5rem;
  color: pink;
  background-color: white;
  animation: ${hideText} 2s linear;
  transform: scale(0);
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media (max-width: 550px) {
    font-size: 1.3rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
export const Button = styled(Link)`
  margin: auto 5% auto 70%;
  width: 200px;
  padding: 5px 24px;
  text-decoration: none;
  text-align: center;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 200px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;