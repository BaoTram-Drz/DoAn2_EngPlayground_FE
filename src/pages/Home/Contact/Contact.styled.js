
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 80%;
  margin: 10% auto;
  background: #FFF4F1;
  border: 5px solid #1697A6;
  border-radius: 50px;

  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  @media (max-width: 912px) {

  }
  @media (max-width: 540px) {
    width: 85%;
    border: 4px solid #1697A6;
    margin: 10% auto 5% auto;
    border-radius: 40px;
  }
  @media (max-width: 415px) {
    width: 90%;
    border: 3px solid #1697A6;
    margin: 10% auto 5% auto;
    border-radius: 25px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 70%;
  margin-left: 2rem;

  @media (max-width: 415px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 1200px) {

  }
  @media (max-width: 540px) {
    margin: 15% auto auto auto;
  }
  @media (max-width: 415px) {
    margin: 10% auto auto auto;
  }
`;

export const FormTitle = styled.h1`
  position: relative; 
  margin: 10% auto -12% 20%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  color: #FFC24B;
  text-shadow:
    -7px -7px 0 #fff, /* Viền trắng bên trái trên */
     7px -7px 0 #fff, /* Viền trắng bên phải trên */
    -7px  7px 0 #fff, /* Viền trắng bên trái dưới */
     7px  7px 0 #fff;

  @media (max-width: 415px) {
    font-size: 2rem;
    text-shadow:
    -4px -4px 0 #fff, /* Viền trắng bên trái trên */
     4px -4px 0 #fff, /* Viền trắng bên phải trên */
    -4px  4px 0 #fff, /* Viền trắng bên trái dưới */
     4px  4px 0 #fff;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 5% auto -15% 15%;
  }
  @media (max-width: 540px) {
    font-size: 2.5rem;
    margin: 10% auto -15% 15%;
  }
  @media (max-width: 415px) {
    margin: 10% auto -15% 15%;
  }
  @media (max-width: 281px) {
    font-size: 1.5rem;
    margin: 10% auto -15% 15%;
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
  width: 80%;
  height: 80px;
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

export const FormTextArea = styled.textarea`
  width: 80%;
  height: 180px;
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
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 415px) {
    width: 90%;
    height: 200px;
    border-radius: 10px;
  }
`;

export const SubButton = styled.button`
  width: 80%;
  height: 80px;
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
export const GlobalStyle = createGlobalStyle`
  .leaflet-red-icon {
    width: 25px;
    height: 41px;
    background-image: url('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png');
    background-size: 25px 41px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 80%;
  height: 80%;
  min-height: 300px;
  margin: auto auto 2rem auto;
  background: #FFFFFF;
  border: 3px dashed #1697A6;
  border-radius: 50px;
  z-index: 1;
  @media (max-width: 1200px) {
    
  }
  @media (max-width: 540px) {
    
  }
  @media (max-width: 480px) {
    
  }

  @media (max-width: 415px) {
    margin-top: -30%;
    width: 90%;
    border-radius: 20px;
  }
`;
