
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { BigText } from '../../../style/GlobalStyles';

export const PageName = styled(BigText)`
  color: #F47068;
`;

export const PreButton = styled(FaArrowLeft)`
    width: 20px;
    height: 20px;
`;
export const NextButton = styled(FaArrowRight)`
    width: 20px;
    height: 20px;
`;


export const Header = styled.div`
  padding: 12px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;
  text-align: center;
  @media (max-width: 1200px) {
    margin-top: -5%;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    padding: 5px 12px;
    font-size: 1rem;
    border-width: 2px;
  }
  @media (max-width: 280px) {
    width: 40%;
    padding: 5px 0px;
    font-size: 0.8rem;
  }
`;

export const HeadersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5% auto auto auto;
`;

export const ButtonLeft = styled(Link)`
  width: 150px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

export const ButtonRight = styled(Link)`
  width: 150px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: ${(props) => (props.isAnswerCorrect ? '#ffc24b' : 'gray')};
  background-color: white;
  border: 3px solid ${(props) => (props.isAnswerCorrect ? '#f47068' : 'gray')};
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 60px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

export const SubButton = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: white;
  background-color: #f47068;
  border: 3px solid #f47068;
  border-radius: 20px;
  font: normal 400 2rem 'Autour One';
  color: #f47068;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  z-index: 2;

  &:hover{
    color: white;
    background-color: #f47068;
  }

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
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;

export const Text1 = styled.p`
  width: 40%;
  padding: 12px 24px;
  margin: 0 auto;
  font: normal 400 2rem 'Autour One';
  text-align: center;
  color: black;
`;