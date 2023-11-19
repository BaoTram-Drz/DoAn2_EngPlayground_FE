import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BigText2 } from '../../style/GlobalStyles';

export const CourseReviewContainer = styled.div`
  margin: 2% auto;
  max-width: 800px;
  padding: 20px;
`;

export const PageName = styled(BigText2)`
  color: #ffc24b;
`;

export const Table = styled.table`
  margin: 2% auto;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #ffc24b;
  font-family: 'Autour One';
  font-size: 16px;
  color: white;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ffffce;
  }

`;

export const TableCell = styled.td`
  padding: 10px;
  font-family: monospace;
  font-size: 16px;
  color: #0e606b;
`;

export const Links = styled(Link)`
  color: #ffc24b;
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
`;