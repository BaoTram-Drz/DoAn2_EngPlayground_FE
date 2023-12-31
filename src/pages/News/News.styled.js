import styled from "styled-components";
import { BigText, Content } from "../style/GlobalStyles";
import { IoSendSharp } from "react-icons/io5";

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  margin: auto;
`;
export const SendIcon = styled(IoSendSharp)`
  position: relative;
  margin: auto auto auto -20px;
  color: gray;
  :hover {
    color: #0e606b;
  }
`;
export const PageName = styled(BigText)`
  color: #f47068;
`;
export const AddPostButton = styled.button`
  margin: 3% auto auto 10%;
  padding: 12px 24px;
  color: #1697a6;
  font-size: bold;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  border: 1px dashed #1697a6;
  :hover {
    color: #0e606b;
    border: 1px dashed #0e606b;
  }
`;
export const NewsItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2% auto 2% auto;
  width: 80%;
  max-height: 500px;
  border: 2px solid #1697a6;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: auto;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    border: 1px solid #1697a6;
    width: 90%;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
`;
//left
export const Inform = styled.div`
  border-right: 1px solid #1697a6;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
//user
export const User = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 6fr 4fr 1fr;
  margin: 12px 12px;
`;
export const SpaceBetween = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
`;
export const UserAvatar = styled.div`
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-color: pink;
`;
export const AvaCmt = styled.div`
  @media (max-width: 1200px) {
  }
  @media (max-width: 820px) {
    display: none;
  }
  @media (max-width: 540px) {
  }
  @media (max-width: 440px) {
    display: none;
  }
  @media (max-width: 376px) {
    display: none;
  }
  @media (max-width: 280px) {
  }
`;
export const UserName = styled.p`
  margin: auto 12px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bold;
  color: #0e606b;
`;
export const Time = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  color: gray;
`;
export const Description = styled.p`
  margin: 12px 24px;
  font-family: "roboto";
  font-size: 16px;
  color: black;
  white-space: pre-line;
`;
export const Titles = styled(Content)`
  margin: 12px 24px;
  font-family: monospace;
  color: black;
`;

export const Img = styled.div`
  margin: 12px auto;
  max-width: 90%;
  height: 300px;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
`;

//right
export const AllComments = styled.div`
  height: ${(props) => (props.allCommentsUpdated ? "auto" : "100%")};
`;
export const Comments = styled.div`
  max-height: 430px;

  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
export const CommentTime = styled.div`
  display: flex;
  width: 100%;
`;
export const CommentDiv = styled.div`
  width: 93%;
  display: flex;
  flex-direction: row;
  padding: 12px 24px;
  @media (max-width: 1280px) {
    width: 93%;
  }
  @media (max-width: 1024px) {
    width: 91%;
    padding: 12px 12px;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
  @media (max-width: 770px) {
    width: 100%;
  }
`;
export const Comment = styled.p`
  width: 80%;
  margin: auto auto auto 12px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;
export const CommentContent = styled.p`
  margin: auto 12px;
  font-family: "roboto";
  font-size: 16px;
`;
export const Cmt = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
`;
export const NewComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px 24px;

  @media (max-width: 1024px) {
    padding: 12px 12px;
  }
`;
export const BoxComment = styled.textarea`
  margin-left: 12px;
  padding: 6px 12px;
  width: 80%;
  height: 40px;
  font-family: "roboto";
  font-size: 14px;
  border: none;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid gray;
    background-color: white;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5); /* Màu chữ cho placeholder */
  }
`;
