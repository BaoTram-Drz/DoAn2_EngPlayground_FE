import styled from 'styled-components';

export const BigText = styled.p`
  margin: 6% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
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