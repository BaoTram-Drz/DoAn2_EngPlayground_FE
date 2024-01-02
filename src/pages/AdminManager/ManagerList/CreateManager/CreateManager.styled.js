
import styled from 'styled-components';
import { BigText2, ContentAutourOne } from '../../../style/GlobalStyles';


export const CreateManagerContainer = styled.div`
  width: 60%;
  margin: 2% auto;
  padding: 20px;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 820px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const PageName = styled(BigText2)`
  color: #1697a6;
`;

export const Form = styled.form`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  
`;

export const DivRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;

  }
`;

export const Title = styled.p`
  width: 100%;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #1697a6;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 85%;
    font-size: 16px;
  }

  @media (max-width: 415px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 6px;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #0e606b;
  border: none;
  border-bottom: 1px solid #0e606b;
  border-radius: 0px;
  outline: none;
  &:active {
    border: none;
  }
  &:placeholder {
    color: #0e606b;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 85%;
    font-size: 14px;
    height: 70px;
    border-radius: 15px;
  }
  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 12px;
  }
  @media (max-width: 415px) {
    width: 90%;
    height: 60px;
    border-radius: 10px;
  }
`;

export const SubButton = styled.button`
  margin: 5% auto 0 auto;
  padding: 12px 24px;
  background: #0e606b;
  border: none;
  border-radius: 5px;
  text-align: center;
  
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
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

export const SubmitButton = styled.button`
  margin: 5% auto 0 auto;
  padding: 12px 24px;
  background: #0e606b;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: "Autour One";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
  @media (max-width: 415px) {
    width: 90%;
    height: 60px;
    border-radius: 10px;
  }
`;