
import styled from 'styled-components';

export const CreateManagerContainer = styled.div`
  max-width: 400px;
  margin: 7% auto;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  label {
    margin-bottom: 5px;
  }
`;

export const Title = styled.p`
  width: 80%;
  margin-bottom: 0.5rem;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #FFC24B;
  text-shadow: 0 0 10px white;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 85%;
    font-size: 16px;
  }

  @media (max-width: 415px) {
    width: 90%;
    font-size: 12px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background: #FFFFFF;
  border-bottom: 2px dashed #FFC24B;
  border-radius: 20px;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #FFC24B;
  &:active{
    outline: none;
    border: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 85%;
    height: 70px;
    border-radius: 15px;
  }
  @media (max-width: 480px) {

  }
  @media (max-width: 415px) {
    width: 90%;
    height: 60px;
    border-radius: 10px;
  }
`;

export const SubButton = styled.button`
  width: 80%;
  padding: 0.8rem;
  margin: 5% auto 0 auto;
  background: #ffc24b;
  border: none;
  border-radius: 2rem;
  text-align: center;
  
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFFFFF;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    font-size: 16px
  }
  @media (max-width: 415px) {
    width: 90%;
    height: 60px;
    border-radius: 10px;
  }

`;