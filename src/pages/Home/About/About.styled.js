import styled from "styled-components";


export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  margin-top: 20%;
  padding-top: 2.5%;
  background: #FFB3AE;

  @media (max-width: 1300px) {
    margin-top: 5%;
  }
  @media (max-width: 1200px) {
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (max-width: 540px) {
    margin-top: -40%;
  }
  @media (max-width: 480px) {
    height: 450px;
    margin-top: -80%;
  }
  @media (max-width: 300px) {
    margin-top: -100%;
  }
`;

export const BigContainer = styled.div`
  width: 80%;
  height: 95%;
  margin-left: 15%;

  background: #FFFFFF;
  border: 5px dashed #1697A6;
  border-radius: 189px;
`;

export const BigDescription = styled.p`
  width: 60%;
  margin: 8% auto 3% auto;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 3rem; 
  line-height: 1.25;
  color: #FFC24B;
  text-shadow: 0px 0.125rem 0.125rem #FFF4F1;
  
  @media (max-width: 1300px) {
    font-size: 2.7rem;
  }
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin: 10% auto 5% auto;
    font-size: 2.2rem;
  }
  @media (max-width: 768px) {
    margin: 10% auto 5% auto;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin: 15% auto 10% auto;
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    margin: 20% auto 10% auto;
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    margin: 30% auto 15% auto;
    font-size: 1.5rem;
  }
`;

export const SmallDescription = styled.p`
  width: 60%;
  margin: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem; 
  line-height: 1.25;
  text-align: justify;
  color: #ffb3ae;
  
  @media (max-width: 1300px) {
    width: 65%;
    font-size: 1.7rem;
  }
  @media (max-width: 1200px) {
    width: 65%;
    font-size: 1.5rem;
  }
  @media (max-width: 912px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 540px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media (max-width: 300px) {
    width: 70%;
    font-size: 0.7rem;
  }
`;

export const RoundedImage = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 20%;
  height: 400px;
  left: 2%;
  top: 5%;
  border: 25px solid #FFF4F1;
  border-radius: 250px;
  background-image: url(${(props) => props.bgImage});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 120%;
  
  @media (max-width: 1300px) {
    width: 25%;
    height: 350px;
    border: 15px solid #FFF4F1;
  }
  @media (max-width: 1200px) {
    width: 25%;
    height: 320px;
  }
  @media (max-width: 912px) {
    width: 25%;
    height: 300px;
  }
  @media (max-width: 768px) {
    width: 20%;
    height: 250px;
  }
  @media (max-width: 540px) {
    width: 25%;
    height: 200px;
    border: 10px solid #FFF4F1;
  }
  @media (max-width: 480px) {
    width: 25%;
    height: 150px;
    border: 10px solid #FFF4F1;
  }
`;