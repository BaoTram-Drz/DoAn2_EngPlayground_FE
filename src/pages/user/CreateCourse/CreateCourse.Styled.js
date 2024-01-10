import styled from "styled-components";
import { BigText, Button, Content } from "../../style/GlobalStyles";

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
  color: #f47068;
  font-family: monospace;
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
  color: #f47068;
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid pink;
`;
export const Input = styled.input`
  margin: auto;
  width: 100%;
  line-height: 2;
  font-family: "roboto", sans-serif;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    padding-left: 1rem;
  }
`;

export const VocabRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 10px auto;
  width: 90%;
  gap: 10px;
  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 540px) {
    width: 90%;
    margin-left: 5%;
    gap: 10px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 280px) {
    width: 90%;
    gap: 10px;
    font-size: 12px;
  }
`;
export const VocabInput = styled(Input)`
  width: 100%;
  border: 1px dashed #1697a6;
  border-radius: 3px;
  &:focus {
    border: 1px solid #1697a6;
  }
`;
export const FileInput = styled.input.attrs({ type: "file" })`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px auto;
  gap: 10px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const ParagraphInput = styled.textarea`
  width: 100%;
  min-height: 200px;
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
  @media (max-width: 280px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export const OneButton = styled(Button)`
  width: 60%;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid #1697a6;
  border-radius: 3px;
`;
export const TwoButton = styled(Button)`
  width: 95%;
  cursor: pointer;
  border: 1px solid #1697a6;
  border-radius: 3px;
`;
export const TextInButton = styled(Content)`
  color: #0e606b;
  font-family: monospace;
  font-size: 16px;
`;

export const SubmitButton = styled(Button)`
  margin: 2%;
  width: 20%;
  color: gray;
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #ffc24b;
  &:hover {
    color: #f47068;
  }
`;

// CSS cho table
export const Table = styled.table`
  width: 90%;
  border-collapse: separate;
  gap: 10px;
  margin-top: 20px;
`;

// CSS cho header của table
export const TableHeader = styled.th`
  background-color: #f47068;
  color: #fff;
  font-weight: bold;
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left; /* Căn trái nội dung của header */
`;

// CSS cho cell của table
export const TableCell = styled.td`
  box-shadow: 0 0 2px #ffb3ae; /* Đổ bóng cho bảng */
  border-radius: 5px;
  padding: 6px 12px;
  text-align: left;
  font-family: monospace;
  font-size: 16px;
  color: #0e606b;
  &:last-child {
    text-align: center;
  }
  @media (max-width: 540px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`;

// CSS cho dòng trong table
export const TableRow = styled.tr`
  &:hover {
    background-color: #fffff5;
  }
`;

// CSS cho dòng chẵn trong table
export const EvenRow = styled.tr`
  background-color: #fff4f1;
`;

// CSS cho dòng lẻ trong table
export const OddRow = styled.tr`
  background-color: #ffb3ae;
`;

// CSS cho button Delete
export const DeleteButton = styled.button`
  margin: auto;
  padding: 8px 12px;
  color: #ffc24b;
  font-family: monospace;
  font-size: 18px;
  background-color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    font-weight: bold;
  }
`;

export const ImageVoc = styled.img`
  width: 200px;
  height: 200px;
  padding: 3%;
  border: 2px dashed #ffc24b;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 540px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;
// export const DeleteButton = styled.button`
//   padding: 5px 10px;
//   background-color: #f47068;
//   color: #fff;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #d9534f;
//   }
// `;
