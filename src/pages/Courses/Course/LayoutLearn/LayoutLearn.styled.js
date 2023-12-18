
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { BigText,Button, Content, Title } from '../../../style/GlobalStyles';

export const PageName = styled(BigText)`
  color: #F47068;
`;

export const PreButton = styled(FaArrowLeft)`
    width: 20px;
    height: 20px;
    @media (max-width: 8210px) {
      width: 18px;
      height: 18px;
    }
    @media (max-width: 770px) {
      width: 16px;
      height: 16px;
    }
    @media (max-width: 440px) {
      width: 14px;
      height: 14px;
    }
    @media (max-width: 376px) {
      width: 12px;
      height: 12px;
    }
`;
export const NextButton = styled(FaArrowRight)`
    width: 20px;
    height: 20px;
    @media (max-width: 8210px) {
      width: 18px;
      height: 18px;
    }
    @media (max-width: 770px) {
      width: 16px;
      height: 16px;
    }
    @media (max-width: 440px) {
      width: 14px;
      height: 14px;
    }
    @media (max-width: 376px) {
      width: 12px;
      height: 12px;
    }
`;


export const Header = styled(Title)`
  padding: 6px 12px;
  font-weight: 400;
  font-family: "Autour One";
  color: #ffc24b;
  border-bottom: 2px dashed #0e606b;
  border-radius: 5px;
  text-align: center;
`;

export const HeadersContainer = styled.div`
  margin: 1% auto;
  display: flex;
  justify-content: space-around;
`;
export const ButtonLeft = styled(Button)`
  color: #ffc24b;
  border: 2px solid #f47068;
`;
export const TIB = styled(Content)`
  font-family: 'Autour One';
`;

export const ButtonRight = styled(Button)`
  color: ${(props) => (props.isAnswerCorrect ? '#ffc24b' : 'gray')};
  border: 2px solid ${(props) => (props.isAnswerCorrect ? '#f47068' : 'gray')};
`;

export const SubButton = styled(Button)`
  color: #f47068;
  background-color: white;
  border: 2px solid #f47068;

  z-index: 2;

  &:hover{
    color: white;
    background-color: #f47068;
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