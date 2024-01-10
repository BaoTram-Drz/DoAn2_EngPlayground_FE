import styled from "styled-components";
import { BigText2 } from "../../../style/GlobalStyles";
import { Link } from "react-router-dom";
export const AddCourseContainer = styled.div`
  max-width: 800px;
  margin: 2% auto;
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
  font-family: "Autour One";
  font-size: 14px;
  text-align: left;
`;
export const TableHeader1 = styled(TableHeader)`
  background-color: #f47068;
  color: white;
`;
export const TableHeader2 = styled(TableHeader)`
  background-color: #ffc24b;
  color: white;
`;
export const TableRow1 = styled.tr`
  &:nth-child(even) {
    background-color: #fff4f1;
  }
`;
export const TableRow2 = styled.tr`
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

export const Text = styled.p`
  margin: 20px auto;
  width: 100%;
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid pink;
`;
export const Text1 = styled(Text)`
  color: #f47068;
  border-bottom: 1px solid pink;
`;
export const Text2 = styled(Text)`
  color: #ffc24b;
  border-bottom: 1px solid #ffc24b;
`;
export const Text3 = styled(Text)`
  color: #1697a6;
  border-bottom: 1px solid #1697a6;
`;
export const Section = styled.div`
  margin-bottom: 20px;
  font-family: monospace;
  font-size: 16px;
  text-align: left;
  color: #0e606b;
`;

export const CommentBox = styled.div`
  margin-top: 20px;
  textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #1697a6;
    outline: none;
    ::placeholder {
      color: #0e606b;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: right;
`;
export const Button = styled(Link)`
  text-decoration: none;
  margin: auto 0 auto 10px;
  padding: 8px;
  color: white;
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
  background-color: #f47068;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 20% auto 10% 0;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  gap: 0.5em;
  @media (max-width: 1280px) {
    width: 60%;
    margin: auto auto 5% auto;
  }
  @media (max-width: 912px) {
    width: 80%;
  }
  @media (max-width: 540px) {
    width: 90%;
  }
  @media (max-width: 412px) {
    width: 100%;
  }
`;
