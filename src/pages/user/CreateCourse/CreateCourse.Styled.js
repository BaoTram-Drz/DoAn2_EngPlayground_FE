import styled from 'styled-components';
import {BigText, Button} from '../../style/GlobalStyles'

export const Container = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PageName = styled(BigText)`
  color: pink;
`;
export const TopicName = styled.input`
  margin: 20px auto;
  width: 90%;
  color:#f47068;
  font-family:monospace;
  font-size: 20px;
  font-weight: bold;
  line-height: 2;
  border: 2px dashed #ffc24b;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 2px solid #ffc24b;
  }
  ::placeholder {
    padding-left: 1rem;
  }
`;

export const Text = styled.p`
  margin: 20px auto;
  width: 90%;
  color:#f47068;
  font-family:monospace;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid pink;
`;
export const Input = styled.input`
  margin: auto;
  width: 100%;
  line-height: 2;
  font-family: 'roboto', sans-serif;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    padding-left: 1rem;
  }
`;

export const VocabRowContainer = styled.div`
  display: block;
  justify-content: space-between;
  margin: 10px auto;
  width: 90%;
  gap: 10px;
`;
export const VocabInput = styled(Input)`
  width: 20%;
  border: 1px dashed #1697a6;
  border-radius: 3px;
  &:focus {
    border: 1px solid #1697a6;
  }
`;
export const FileInput = styled.input.attrs({ type: 'file' })`
  width: 50%;
  color: #0e606b;
  background-color: white;
  text-align: left;
  text-decoration: none;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:focus {
    outline: none;
  }
  &::before {
    content: "Choose Excel ";
    padding: 5px;
    font: normal 400 16px monospace;
    border: 1px solid #f47068;
    border-radius: 5px;
    display: inline-block;
    padding-left: 1rem;
    margin-right: 5px; /* Thêm margin để tạo khoảng cách với "No file chosen" */
  }
`;
export const ParagraphContainer = styled.div`
  width: 90%;
  display: flex;
  grid-template-columns: 1fr 1fr;
  margin: 10px auto;
  gap: 10px;
`;
export const ParagraphInput = styled.textarea`
  width: 100%;
  border: 1px dashed #ffb3ae;
  border-radius: 3px;
  &:focus {
    outline: none;
    border: 1px solid #ffb3ae;
  }
  ::placeholder {
    padding-left: 1rem;
  }
  
`;
export const ParagraphDetailContainer = styled.div`
  gap: 10px;
`;
export const ParagraphDetail = styled(Input)`
  margin-bottom: 10px;
  border: 1px dashed #ffb3ae;
  border-radius: 3px;
  &:focus {
    outline: none;
    border: 1px solid #ffb3ae;
  }
  ::placeholder {
    padding-left: 1rem;
  }
`;
export const DivOneButton = styled.div`
  width: 90%;
  text-align: left;
  justify-content: space-between;
`;
export const OneButton = styled(Button)`
  margin-right: 10px;
  cursor: pointer;
`;
export const TwoButton = styled(Button)`
  width: 10%;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  margin: 2%;
  width: 30%;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #f47068;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d9534f;
  }
`;

/* CSS cho bảng */
export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 20px; /* Khoảng cách giữa bảng và phần trên nó */
`;

export const TableHeader = styled.th`
  background-color: #f47068;
  color: #fff;
  font-weight: bold;
  padding: 8px;
  border: 1px solid #ddd; /* Đường viền dưới header */
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left; /* Căn văn bản về bên trái */
`;

/* CSS cho dòng có button Delete */
export const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const EvenRow = styled.tr`
  background-color: #fff4f1;
`;

export const OddRow = styled.tr`
  background-color: #ffb3ae;
`;