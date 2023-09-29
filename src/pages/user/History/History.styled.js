import styled from "styled-components";

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
export const HistoryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  background-color: #F5F5F5;
  padding-top: 10%;


  @media (max-width: 1300px) {
    margin-top: 5%;
  }
  @media (max-width: 1200px) {
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (max-width: 540px) {
    margin-top: -40%;
  }
  @media (max-width: 480px) {
    margin-top: -80%;
  }
  @media (max-width: 300px) {
    margin-top: -100%;
  }
`;

export const Table = styled.table`
  width: 80%;
  margin: 5% auto;
  border-spacing: 10px;
`;
export const TableRow = styled.tr`

`;
export const TableCell= styled.td`
  padding: 12px 24px;
  font-family: 'Roboto';    
  background-color: white;
  border-radius: 10px;  
  border-top: 1px dashed #f47068;
  border-bottom: 1px dashed #f47068;
`;
export const TableCellLeft = styled(TableCell)`
  width: 65%;
  font-size: 1.25rem;
  color: #0e606b;      
`;
export const TableCellCenter = styled(TableCell)`
width: 15%;
  font-size: 1rem;
  color: #1697a6;      
`;
export const TableCellRight = styled(TableCell)`
  width: 20%;
  font-size: 1rem;
  color: gray;      
`;


