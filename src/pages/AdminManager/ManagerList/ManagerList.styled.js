import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BigText2, Content, Title, ContentAutourOne } from '../../style/GlobalStyles';

export const ManagerListContainer = styled.div`
  max-width: 800px;
  margin: 7% auto;
`;
export const PageName = styled(BigText2)`
  color: #f47068;
`;

export const Table = styled.table`
  margin: 2% auto;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #f47068;
  font-family: 'Autour One';
  color: white;
  text-align: left;
`;
export const TableHeaderNone = styled.th`
  padding: 10px;
  background-color: #f47068;
  font-family: 'Autour One';
  color: white;
  text-align: left;
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-width: 280px) {
    font-size: 8px;
  }
`;
export const TIH= styled(ContentAutourOne)`
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fff4f1;
  }
  td:last-child {
    text-align: center;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  font-family: monospace;
  color: #0e606b;
`;
export const TableCellNone = styled.td`
  padding: 10px;
  font-family: monospace;
  color: #0e606b;
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-width: 280px) {
    font-size: 8px;
  }
`;
export const FloatRight = styled.div`
  text-align: right;
`;
export const Button = styled.button`
  margin: auto 0 auto auto;
  padding: 8px;
  color: white;
  font-size: 16px;
  background-color: #f47068;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const Links = styled(Link)`
  color: white;
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;
