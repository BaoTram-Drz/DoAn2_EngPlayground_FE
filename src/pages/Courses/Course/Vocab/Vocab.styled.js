
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaVolumeUp } from 'react-icons/fa'

import { BigText,Button, Content, Title } from '../../../style/GlobalStyles';


export const PageName = styled(BigText)`
  color: #F47068;
`;

export const Div = styled.div`
  margin-bottom: 100px;
`;

export const TableWrapper = styled.div`
  width: 80%;
  margin: 5% auto;

  @media (max-width: 912px) {
    width: 90%;
  }

  @media (max-width: 412px) {
    width: 100%;
  }
`;

export const VoiceIcon = styled(FaVolumeUp)`
  cursor: pointer;

  &:active {
    color: pink;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const HText = styled(Content)`
  font-family: 'Roboto';
  color: #f47068;
`;
export const TIB = styled(Content)`
`;
export const TableHeader = styled.thead`
  margin: 12px auto;
`;

export const TableHeaderLeft = styled.div`
  border-bottom: 2px dashed #ffc24b;
  border-bottom-left-radius: 10px;
  
`;
export const TableHeaderCenterOn = styled.div`
  border-bottom: 2px dashed #ffc24b;  
  @media (max-width: 540px) {
    border-bottom-right-radius: 10px;
  }
`;

export const TableHeaderCenter = styled.div`
  border-bottom: 2px dashed #ffc24b;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const TableHeaderRight = styled.div`
  border-bottom: 2px dashed #ffc24b;
  border-bottom-right-radius: 10px;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  padding: 5px auto;
  text-align: center;
  background-color: white;
`;

export const TableCellEng = styled.td`
  font-family:'Autour One';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 540px) {
    display: none;
  }

`;

export const TableCellViet = styled.td`
  font-family:'Roboto';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;
  @media (max-width: 540px) {
    display: none;
  }
`;
export const TableCellEngOn = styled.td`
  font-family: monospace;
  font-weight: bold;
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;
`;

export const TableCellVietOn = styled.td`
  font-family:monospace;
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;
`;

export const ImageAcc = styled.img`
  width: 100%;
  max-width: 100px;
  min-width: 30px;
  height: 100%;
  padding: 2px;
  border: 2px dashed #ffb3ae;
  border-radius: 25%;
`;


export const Buttons = styled(Button)`
  color: #ffc24b;
  border: 3px solid #f47068;
  border-radius: 25px;
  font-family: 'Autour One';
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;
export const LoadIconContainer = styled.div`
  margin: 3% auto;
  margin-bottom: 50px;
  text-align: center;
  color: #F47068;
`;

export const DropdownLevel = styled.div`
  position: relative;
  width: 50%;
  max-width: 200px;
  margin: -2% 15% 3% auto;
  background-color: white;
  text-align: center;
  font-family: "Autour One";
  font-size: 16px;
`;
export const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 24px;
  font-family: monospace;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.active ? '#ffc24b' : '#0e606b'};

  &:hover {
    background-image: linear-gradient(to top, #f1f1f1, #ffffff);
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0.5em;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 0.3em;
  }
`;