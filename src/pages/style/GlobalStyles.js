import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 40px;
  }
  @media (max-width: 912px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 12%;
    font-size: 36px;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 28px;
  }
  @media (max-width: 440px) {
    margin-top: 20%;
    font-size: 26px;
  }
  @media (max-width: 380px) {
    margin-top: 25%;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 22px;
  }
`;
export const BigText2 = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 36px;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
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
  margin: auto;
  width: 80%;
  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 1050px) {
    width: 80%;
  }
  @media (max-width: 912px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 540px) {
    width: 85%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
  @media (max-width: 300px) {
    width: 95%;
  }
`;
export const ContainerSp = styled.div`
  margin: auto;
  width: 60%;
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 1050px) {
    width: 60%;
  }
  @media (max-width: 912px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 540px) {
    width: 65%;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
  @media (max-width: 300px) {
    width: 75%;
  }
`;
export const Button = styled(Link)`
  width: 150px;
  padding: 5px 12px;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  z-index: 999;

  @media (max-width: 1200px) {
    width: 120px;    
  }
  @media (max-width: 770px) {
    width: 120px;    
  }
  @media (max-width: 540px) {
    width: 80px;    
  }
  @media (max-width: 440px) {
    width: 80px;
    padding: 5px 12px;
  }
  @media (max-width: 376px) {
    width: 70px;
    padding: 5px 8px;
  }
  @media (max-width: 280px) {
    width: 60px;
    padding: 4px 6px;
  }
`;

export const Title = styled.span`
  font-size: 24px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 540px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 380px) {
    font-size: 16px;
  }
  @media (max-width: 280px) {
    font-size: 12px;
  }
`;
export const Content = styled.span`
  font-size: 20px;

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