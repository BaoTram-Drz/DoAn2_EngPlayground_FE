
import styled from "styled-components";

export const Container = styled.p`
  margin: 1% auto 5% auto;

  @media (max-width: 540px) {
    margin: 5% auto 10% auto;
  }    
`;
export const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 28px 'Autour One';
    @media (max-width: 1200px) {
      font-size: 2rem;
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
export const ButtonsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1%;
  margin: 3% auto 5% auto;
  @media (max-width: 912px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
  }
`;