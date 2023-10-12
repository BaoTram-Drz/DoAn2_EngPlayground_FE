
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { BigText } from '../../../style/GlobalStyles';


export const PageName = styled(BigText)`
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
  border: 5px solid #1697a6;
  border-radius: 50px;
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

  @media (max-width: 767px) {
    width: 100%;
    margin: 2% auto;
  }
`;

export const Video = styled.video`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: auto;
`;