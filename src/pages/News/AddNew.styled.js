import styled from 'styled-components';
const primaryColor = '#1877f2'; // Màu xanh của Facebook
const deleteIcon = 'your-delete-icon.png'; 


export const AddPostContainer = styled.div`

`;
export const AddPost = styled.div`
  background-color: white;
  margin: 2% auto;
  width: 40%;
  max-height: 500px;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 1050px) {
    width: 80%;
  }
  @media (max-width: 912px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 540px) {
    width: 85%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
  @media (max-width: 300px) {
    width: 95%;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
export const UserAvatar = styled.div`
  background-image: url(${props => props.bgImage});
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;
export const Content = styled.div`
  max-height: 400px;
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

export const InputStatus = styled.textarea`
  width: 90%;
  height: ${props => props.value.split('\n').length + 1.5}em;
  border: none;
  border-radius: 10px;
  background-color: none;
  font-size: 14px;
  padding: 10px;
  resize: none;
  outline: none;
  overflow: hidden;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ImageDiv = styled.div`
  margin: 2%;
  width: 100%;
  height: 300px;
  display: ${(props) => (props.bgImage ? 'block' : 'none')};
  background-image: ${props => props.bgImage !== null ? `url(${props.bgImage})` : `url('https://via.placeholder.com/200x200.png')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  text-align: right;

`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% auto;
`;

export const AddImage = styled.input`
  display: none;
`;

export const AddButton = styled.button`
  margin: auto 2%;
  padding: 5px 10px;
  color: #0e606b;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0 ,0.05);
  }
`;

export const RemoveButton = styled.button`
  margin: auto 5px auto auto; 
  color: gray;
  background-color: transparent;
  border: none;
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #f47068;
  }
`;