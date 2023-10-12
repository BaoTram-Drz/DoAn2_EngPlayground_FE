
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaVolumeUp } from 'react-icons/fa'

import { BigText } from '../../../style/GlobalStyles';


export const PageName = styled(BigText)`
  color: #F47068;
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

export const TableHeader = styled.thead`
  margin: 12px auto;
  padding: 12px 24px;
  font: normal 400 2rem 'Autour One';
  color: #f47068;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

export const TableHeaderLeft = styled.div`
  border-bottom: 3px dashed #ffc24b;
  border-bottom-left-radius: 20px;
  
`;
export const TableHeaderCenterOn = styled.div`
  border-bottom: 3px dashed #ffc24b;  
  @media (max-width: 540px) {
    border-bottom-right-radius: 20px;
  }
`;

export const TableHeaderCenter = styled.div`
  border-bottom: 3px dashed #ffc24b;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const TableHeaderRight = styled.div`
  border-bottom: 3px dashed #ffc24b;
  border-bottom-right-radius: 20px;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  text-align: center;
  background-color: white;
`;

export const TableCellEng = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Autour One';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 540px) {
    display: none;
  }
  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

export const TableCellViet = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Roboto';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 540px) {
    display: none;
  }

  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;
export const TableCellEngOn = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Autour One';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

export const TableCellVietOn = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Roboto';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

export const ImageAcc = styled.img`
  width: 100%;
  max-width: 100px;
  min-width: 30px;
  height: 100%;
  padding: 3px;
  border: 2px dashed #ffb3ae;
  border-radius: 25%;
`;

export const Button = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-decoration: none;
  text-align: center;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;

  @media (max-width: 1200px) {
    width: 200px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;
export const LoadIconContainer = styled.div`
  margin: 3% auto;
  text-align: center;
  color: #F47068;
`;