
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiLoaderCircle } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Container = styled.div`

`;

export const CoursesName = styled.div`
  width: 50%;
  height: 150px;
  margin: 10% auto 2% auto;
  background: #FFFFFF;
  border: 5px dashed #FFC24B;
  border-radius: 100px;
  text-align: center;
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin-top: 15%;
    width: 70%;
    height: 150px;
  }
  @media (max-width: 540px) {
    margin-top: 20%;
    width: 70%;
    height: 120px;
  }
  @media (max-width: 480px) {
    margin-top: 25%;
    width: 80%;
    height: 100px;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    width: 90%;
    height: 80px;
  }
`;

export const CoursesNameText = styled.p`
  margin-top: 5%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
  line-height: 45px;

  color: #F47068;
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 540px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.2rem;
  }
`;

export const CoursesTopicNameText = styled.p`
  margin: 5% 5% 0% 5%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 45px;

  color: #0e606b;
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.2rem;
  }
`;

export const CardListContainer = styled.div`
  width:80%;
  margin: auto auto 10% auto;
  padding-top: 50px;
  gap: 50px;

  .slick-slider {
    display: flex;
    align-items: center;
  }

  .slick-list {
    width: 100%;
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    margin: 0 25px;
  }
`;

export const Card = styled.div`
  height: 540px;
  background-image: linear-gradient(#ffb3ae, #FFF4F1);
  border: 1px solid #ffc24b;
  border-radius: 20px;
  text-align: center;

  @media (max-width: 912px) {
    height: 420px;
  }
  @media (max-width: 480px) {
    height: 370px;
  }
  @media (max-width: 300px) {
    height: 300px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  margin: 10% auto 5% auto;
  width: 70%;
  height: calc(50%);
  background: #FFFFFF;
  border: 5px dashed #FFC24B;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});

  transition: all 0.5s;
  
  ${Card}:hover & {
    border-radius: 20px;
    background-image: url(${props => props.imageUrl});
  }

  @media (max-width: 1200px) {
    height: calc(50%);
  }
  @media (max-width: 912px) {
    height: 160px;
  }
  @media (max-width: 540px) {
    width: 70%;
    height: 170px;
  }
  @media (max-width: 480px) {
    height: 160px;
  }
  @media (max-width: 300px) {
    width: 80%;
    height: 120px;
  }
`;

export const Img = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 50%;
  transition: all 0.5s;

  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;

  ${Card}:hover & {
    border-radius: 20px;
  }
`;

export const Name = styled.h2`
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  color: #0E606B;

  @media (max-width: 1200px) {

  }
  @media (max-width: 912px) {
    font-size: 1.7rem;
  }
  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  margin-left: 12px;
  margin-right: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #1697A6;
 
  @media (max-width: 300px) {
    font-size: 0.7rem;
  }
`;

export const PrevButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const NextButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const LearnBtn = styled(Link)`
    width: 100%;
    min-width: 200px;
    margin: auto;
    padding: 5px 24px;
    text-decoration: none;
    font: normal 400 2rem "Autour One";
    background: #F47068;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    @media (max-width: 1200px) {

    }
    @media (max-width: 912px) {
      font-size: 1.7rem;
    }
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
export const LoadIconContainer = styled.div`
  margin: 3% auto;
  text-align: center;
  color: #F47068;
`;
export const BiLoaderCircleIcon = styled(BiLoaderCircle)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  &:active {
    color: pink;
  }
`;