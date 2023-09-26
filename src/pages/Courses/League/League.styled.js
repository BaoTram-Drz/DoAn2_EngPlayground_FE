import styled from "styled-components";
import { FaArrowLeft } from 'react-icons/fa';

export const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
    @media (max-width: 1100px) {
      margin-top: 10%;
    }
    @media (max-width: 540px) {
      margin-top: 20%;
      margin-bottom: -25%;
    }
    @media (max-width: 420px) {
      margin-top: 25%;
      margin-bottom: -25%;
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
  @media (max-width: 800px) {
    margin: 15% auto auto auto;
  }

  @media (max-width: 1100px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 300px) {
    font-size: 1.5rem;
  }
`;

export const TableContainer = styled.div`
  height: 400px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
export const Table = styled.table`
  width: 70%;
  margin: 2% auto 5% auto;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexContainer = styled.tr`
  display: flex;
  flex-direction: row;

  @media (max-width: 912px) {
    flex-direction: column;
  }
`;

export const TableHeaderLeftRes = styled.div`
    margin: 12px auto;
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #f47068;
    border-bottom: 3px dashed #ffc24b;
    border-bottom-left-radius: 20px;
    text-align: center;
    @media (max-width: 912px) {
      border-bottom-right-radius: 20px;
    }
    @media (max-width: 1200px) {
      font-size: 1.7rem;
    }
    @media (max-width: 912px) {
      font-size: 1.5rem;
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

export const TableHeaderRightRes = styled.div`
  margin: 12px auto;
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #0e606b;
    border-bottom: 3px dashed #ffc24b;
    border-bottom-right-radius: 20px;
    text-align: center;
    @media (max-width: 912px) {
      border-bottom-left-radius: 20px;
    }
    @media (max-width: 1200px) {
      font-size: 1.7rem;
    }
    @media (max-width: 912px) {
      font-size: 1.5rem;
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

export const TableRow = styled.tr`
    width: 100%;
    text-align: center;
    background-color: white;   
`;

export const TableCellLeft = styled.td`
    padding: 12px 24px;
    font: normal 400 1.6rem 'Roboto';
    color: #ffb3ae;       
    border-bottom: 1px dashed pink; 
    
    @media (max-width: 1200px) {
      padding: 12px 12px;
      font-size: 1.5rem;    }
    
    @media (max-width: 540px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 12px 18px;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
      padding: 6px 8px;
    }
`;
export const TableCellLeftText = styled.p`
    position: relative;
    top: -20px;
`;

export const TableCellRight = styled.td`
    padding: 12px 24px;
    font: normal 400 1.6rem 'Roboto';
    color: #1697a6;
    border-bottom: 1px dashed pink; 
    
    @media (max-width: 1200px) {      
      padding: 12px 12px;
      font-size: 1.5rem;
    }
  
    @media (max-width: 540px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 12px 18px;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
      padding: 6px 8px;
    }
`;

export const TableCellRightText = styled.p`
    position: relative;
    top: -20px;
`;

export const ImageTop = styled.img`
    width: 60px;
    height: 60px;
  
    @media (max-width: 912px) {
      width: 50px;
      height: 50px;
    }
  
    @media (max-width: 540px) {
      width: 40px;
      height: 40px;
    }
  
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
`;
export const ImageAcc = styled.img`
    width: 57px;
    height: 57px;
    padding: 3px;
    border: 2px dashed #ffb3ae;
    border-radius: 50%;
    @media (max-width: 912px) {
      width: 50px;
      height: 50px;
    }
  
    @media (max-width: 540px) {
      width: 45px;
      height: 45px;
    }
  
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
`;
export const Exp = styled.td`
    text-align: right;
    font: normal 400 1rem 'Autour One';
    color: gray;
    position: relative;
    top: -20px;
    @media (max-width: 1200px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 540px) {
      font-size: 1rem;
    }
  
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  
    @media (max-width: 300px) {
      font-size: 0.5rem;
    }
`;