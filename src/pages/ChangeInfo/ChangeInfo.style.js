import styled from 'styled-components';
import { FaCarrot } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa';


export const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
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
export const BigText = styled.p`
  margin: -5% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #ffc24b;
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
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  width: 80%;
  margin: 5% auto auto auto;
  overflow: hidden;
  @media (max-width: 912px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 10% auto auto auto;
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 95%;
    margin: 15% auto auto auto;
  }
`;

export const ImageAcc = styled.img`
    width: 200px;
    height: 200px;
    padding: 3%;
    border: 2px dashed #ffc24b;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 1200px) {
      width: 200px;
      height: 200px;
    }
  
    @media (max-width: 540px) {
      width: 150px;
      height: 150px;
    }
  
    @media (max-width: 480px) {
      width: 120px;
      height: 120px;
    }
`;
export const Text = styled.div`
  margin: 10% auto;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFC24B;

  @media (max-width: 912px) {
    font-size: 1.4rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ButtonChange = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const Title = styled.p`
  width: 80%;
  margin-bottom:0.5rem;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #ffb3ae;
  text-shadow: 0 0 10px white;
  @media (max-width: 912px) {
    font-size: 1.4rem;
  }
  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const FormInput = styled.input`
  width: 90%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background: #FFFFFF;
  border-bottom: 2px dashed gray;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: gray;
  &:focus {
    outline: none;
  }
  @media (max-width: 912px) {
    font-size: 1.4rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const Left = styled.div`
  width: 100%;
  text-align: center;
`;
export const Right = styled.div`
  width: 100%;
  text-align: right;
`;
export const Carrot = styled(FaCarrot)`
  width: 30px;
  height: 30px;
  color:#ffc24b;
  cursor: pointer;
  @media (max-width: 912px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 540px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-left: auto;
  margin-right: 0;
  border-collapse: collapse;
`;
export const TableCellLeft = styled.td`
  text-align: right;
`;

export const TableCellRight = styled.td`
  text-align: left;
`;
export const But = styled.div`
  width: 90%;
  text-align: right;
  margin: auto auto 2% auto;
  @media (max-width: 912px) {
    margin: 5% auto 4% auto;
  }
  @media (max-width: 540px) {
    margin: auto auto 2% auto;
  }
  @media (max-width: 480px) {
    margin: 7% auto 5% auto;
  }
`;
export const Button = styled.button`
  width: 200px;
  padding: 5px 24px;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  cursor: pointer;
  &:hover{
    background-color: #FFFFCC;
  }
  @media (max-width: 1200px) {
    width: 150px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 100px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;