
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { BigText, BigTextWBH, Content } from '../../../style/GlobalStyles';


export const PageName = styled(BigTextWBH)`
  color: #F47068;
`;
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
export const VideoContainer = styled.div`
  width: 60%;
  margin: -5% auto 5% auto;
  border: 2px solid #1697a6;
  border-radius: 10px;
  font-family: 'Autour One';
  font-weight: 400;
  font-size: 20px;
  overflow: hidden;

  .video-react-button {
    border-radius: 50px;
    background-color: #f47068;
    color: #ffffff;
  }

  @media (max-width: 1100px) {
    width: 80%;
    margin: 2% auto;
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: 2% auto;
  }
`;

export const Video = styled.video`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: auto;
`;
export const QuestionDiv = styled.div`
  margin: 2% auto;
  width: 60%;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: 1100px) {
    width: 80%;
    margin: 2% auto;
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: 2% auto;
  }
`;
export const AnswerDiv = styled.div`
  margin: auto;
  width: 100%;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1100px) {
    margin: 2% auto;
  }

`;
export const Question = styled(Content)`
  display: block; 
  padding: 3px 6px;
  font-weight: bold;
  font-family: monospace;
  color: #0e606b;
`;
export const OptionLabel = styled(Content)`
  display: block; 
  padding: 3px 6px;
  font-weight: normal;
  font-family: monospace;
  color: #0e606b;
`;
export const FloatRight = styled.div`
  width: 70%;
  margin: 2%;
  text-align: right;
`;
export const Button = styled.button`
  margin: auto 0 auto auto;
  padding: 8px 12px;
  font-size: 16px;
  background-color: #f47068;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;