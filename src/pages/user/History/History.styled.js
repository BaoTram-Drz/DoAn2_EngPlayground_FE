import styled from "styled-components";
import {BigText} from '../../style/GlobalStyles'

export const PageName = styled(BigText)`
  color: #ffc24b;
  margin-bottom: 2%;
`;
export const HistoryContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 550px; /* Đặt chiều cao tối đa */
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
`;
export const TableRow = styled.tr`

`;
export const TableCell= styled.td`
  padding: 12px 24px;
  font-family: 'Roboto';    
  background-color: white;
  border-radius: 10px;  
  box-shadow: 0 0 3px gray;
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
`;

