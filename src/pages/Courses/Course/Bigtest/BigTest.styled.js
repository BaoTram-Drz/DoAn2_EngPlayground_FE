
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 800px) {
    margin: 15% auto auto auto;
  }

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
    font-size: 2.5rem;
  }

  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 2rem;
  }

  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  border-bottom: 3px dashed #0e606b;
  border-radius: 20px;
  text-align: center;
  width: 15%;
  margin-top: -7%;
  margin-bottom: 5%;

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

export const Button = styled(Link)`
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
export const SubButton = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-align: center;
  text-decoration: none;
  font: normal 400 2rem "Autour One";
  color: white;
  background-color: #f47068;
  border: 3px solid #f47068;
  border-radius: 20px;
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