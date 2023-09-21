import styled from "styled-components";


export const HistoryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
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
  margin: auto;
`;
export const TableRow = styled.tr`
  width: 80%;
  margin-bottom: 10px;
`;

export const TableCellLeft = styled.td`
  width: 75%;
  padding: 12px 24px;
  font: normal 400 1.6rem 'Roboto';
  color: #1697a6;       
  border-top: 1px dashed pink;
  border-bottom: 1px dashed pink;
`;
export const TableCellRight = styled.td`
  width: 25%;
  padding: 12px 24px;
  font: normal 400 1.5rem 'Roboto';
  color: gray;       
  border-top: 1px dashed pink;
  border-bottom: 1px dashed pink; 

`;


