import styled, { css } from "styled-components";

export const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 2rem 'Roboto';
  
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
export const TableWrapper = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 912px) {
    width: 80%;
    margin-bottom: 10%;
  }

  @media (max-width: 540px) {
    width: 90%;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    width: 90%;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const TableRow = styled.tr`
  background-color: white;
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
  }

`;
export const TableCell = styled.div`
    margin: 2% 10%;  
    padding: 5px 24px;
    font: normal 400 28px 'Roboto';
    color: #0E606B;
    text-align: center;
    border: 2px dashed #0e606b;
    border-radius: 50px;
    cursor: pointer;
    
    &:hover {
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    }
    ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: inset 0 0 10px yellow;
    `}
    @media (max-width: 1200px) {
      
    }
  
    @media (max-width: 912px) {
      padding: 10px 12px 5px 12px;
      margin: 2% 2%; 
    }
  
    @media (max-width: 540px) {
      padding: 10px 12px 5px 12px;
      margin: 2% 2%; 
    }
  
    @media (max-width: 480px) {
      padding: 10px 12px 5px 12px;
      margin: 2% 2%;  
    }
`;
export const CellText = styled.span`
    margin-top: 50%;
    font: normal 400 2rem 'Roboto', sans-serif;
    color: #0E606B;
    text-align: center;
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
  
    @media (max-width: 912px) {
      font-size: 2rem;
    }
  
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
export const ImageAns = styled.img`
    width: 40px;
    height: 40px;
    margin: auto 10px;
    text-align: center;
    @media (max-width: 912px) {
      width: 35px;
      height: 35px;
    }
  
    @media (max-width: 540px) {
      width: 30px;
      height: 30px;
    }
  
    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
`;