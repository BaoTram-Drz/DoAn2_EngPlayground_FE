import styled from 'styled-components';

export const Container = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const VocabRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  margin: 10px auto;
  width: 90%;
  gap: 10px;
`;
export const VocabInput = styled(Input)`
  border: 1px dashed #1697a6;
  border-radius: 3px;
  &:focus {
    outline: none;
    border: 1px solid #1697a6;
  }
  ::placeholder {
    padding-left: 1rem;
  }
`;
export const ParagraphContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px auto;
  width: 90%;
  gap: 10px;
`;
export const ParagraphInput = styled.textarea`
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

export const Button = styled.button`
  background-color: #0074d9;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;