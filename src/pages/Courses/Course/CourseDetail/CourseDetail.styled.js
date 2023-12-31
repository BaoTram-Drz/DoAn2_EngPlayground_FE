
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { BigText } from '../../../style/GlobalStyles'

export const PageName = styled(BigText)`
  color: #F47068;
`;
export const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
    z-index: 10;

    @media (max-width: 1100px) {
      margin-top: 10%;
      margin-bottom: -10%;
    }
    @media (max-width: 768px) {
      margin-top: 15%;
      margin-bottom: -15%;
    }
    @media (max-width: 540px) {
      margin-top: 20%;
      margin-bottom: -25%;
    }
    @media (max-width: 420px) {
      margin-left: 1%;
      margin-top: 25%;
      margin-bottom: -25%;
      width: 15px;
      height: 15px;
    }
    @media (max-width: 300px) {
      margin-top: 30%;
      margin-bottom: -30%;
    }
`;

export const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 2% 0% 5% auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 2%;
    margin: 5% auto 10% auto;
  }
`;

export const TableWrapper = styled.table`
  width: 100%;
  text-align: center;
`;

export const TableHeader = styled.div`
  padding: 12px 24px;
  font: normal 400 2rem 'Autour One';
  color: #FFC24B;
  border-bottom: 3px dashed #FFB3AE;
  border-radius: 20px;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 912px) {
    font-size: 2.3rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

export const TableRow = styled.tr`
  background-color: white;
`;

export const TableCellId = styled.div`
  width: 80%;
  float: right;
  font: normal 400 28px/1.5 'Roboto';
  color: #FFC24B;
  border: 2px dashed #FFB3AE;
  border-radius: 50%;
`;

export const TableCell = styled.td`
  padding: 12px 24px 12px 40px;
  font: normal 400 28px 'Roboto';
  color: #0E606B;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 2.3rem;
  }

  @media (max-width: 912px) {
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

export const RightDiv = styled.div`
  width: 100%;
`;

export const DivWrapper = styled.div`
  margin: auto auto 5% auto;
  width: 80%;
  height: 535px;
  text-align: center;
  background-image: linear-gradient(#0E606B, #1697A6);
  border: 3px solid #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 0 2px gray;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DivWrapper2 = styled.div`
  margin: 5%;
  width: 90%;
  height: 372px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border: 3px dashed #1697A6;
  border-radius: 30px;
  text-align: center;
  box-shadow: inset 200px 200px 200px rgba(0, 0, 0, 0.2);
`;

export const DivWrapper2Text = styled.p`
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 200px;
  color: #FFC24B;
  text-shadow:
    -3px -3px 0 #fff,
     3px -3px 0 #fff,
    -3px  3px 0 #fff,
     3px  3px 0 #fff;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.3rem;
    text-shadow:
      -2px -2px 0 #fff,
       2px -2px 0 #fff,
      -2px  2px 0 #fff,
       2px  2px 0 #fff;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    text-shadow:
    -3px -3px 0 #fff,
     3px -3px 0 #fff,
    -3px  3px 0 #fff,
     3px  3px 0 #fff;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    text-shadow:
    -2px -2px 0 #fff,
     2px -2px 0 #fff,
    -2px  2px 0 #fff,
     2px  2px 0 #fff;
  }

`;

export const Button = styled(Link)`
  width: 60%;
  min-width: 100px;
  margin: auto;
  padding: 5px 24px;
  text-decoration: none;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px dashed #1697A6;
  border-radius: 20px;

  @media (max-width: 912px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;
export const ButtonGray = styled(Link)`
  width: 60%;
  min-width: 100px;
  margin: auto;
  padding: 5px 24px;
  text-decoration: none;
  font: normal 400 2rem "Autour One";
  color: gray;
  background-color: rgb(240, 240, 240);
  border: 3px dashed #1697A6;
  border-radius: 20px;

  @media (max-width: 912px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

export const ButtonL = styled.button`
  margin: auto 10%;
  width: 80%;
  min-width: 300px;
  padding: 5px 24px;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;

  @media (max-width: 800px) {
    margin: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const LinkText = styled(Link)`
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  text-decoration: none;

  @media (max-width: 800px) {
    margin: auto;
  }

  @media (max-width: 912px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

export const LoginNoti = styled.p`
  margin: auto;
  padding: 12px 24px 12px 40px;
  font: normal 400 1.5rem 'Roboto';
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 912px) {
    font-size: 1.2rem;
  }

  @media (max-width: 540px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }
`;