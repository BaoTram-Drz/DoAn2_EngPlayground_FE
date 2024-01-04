import styled from "styled-components";
import {BigText, Title} from '../../style/GlobalStyles'
import { Link } from "react-router-dom";


export const PageName = styled(BigText)`
  color: #ffc24b;
  margin-bottom: 2%;
`;
export const HistoryContainer = styled.div`
  margin-bottom: 2%;
  position: relative;
  width: 100%;
  overflow-y: auto;
  background-color: white;
  &::-webkit-scrollbar {
    width: 0;
  }

`;
export const StickyTableRow = styled.tr`
position: fixed;
top: 0;
background-color: white;
z-index: 1;
height: 50px; 
`;

export const Table = styled.table`
  width: 80%;
  margin: 2% auto 5% auto;
  border-spacing: 10px;
  padding: 5px;
  @media (max-width: 440px) {
    width: 95%;
    border-spacing: 2px;
 
  }
`;
export const TableRow = styled.tr`

`;
export const TableCell= styled.td`
  padding: 12px 24px;  
  background-color: white;
  border-radius: 10px;  
  box-shadow: 0 0 3px gray;

  @media (max-width: 540px) {
    padding: 8px 18px;
  }
  @media (max-width: 440px) {
    padding: 5px 12px;
  }
  @media (max-width: 376px) {
    border-radius: 5px;  
    padding: 2px 8px;
    box-shadow: 0 0 1px gray;
  }

`;

export const LinktoCourse = styled(Link)`

`;
export const TIC = styled(Title)`
  font-family: 'Roboto';    
`;

export const TableCellLink = styled(TableCell)`
  width: 5%;
  font-size: 16px;
  color: #f47068;   
  cursor: pointer; 
  :hover{
    box-shadow: 0 0 3px black;
    } 
`;
export const TableCellLeft = styled(TableCell)`
  width: 60%;
  font-size: 1.25rem;
  color: #0e606b;    
`;
export const TableCellCenter = styled(TableCell)`
width: 20%;
  font-size: 1rem;
  color: #1697a6;      
`;

export const TableCellTime= styled(TableCell)`
  width: 15%;
  font-size: 14px;;
  color: gray;    
  text-align: right;  
  @media (max-width: 440px) {
    display: none;
  }
`;

