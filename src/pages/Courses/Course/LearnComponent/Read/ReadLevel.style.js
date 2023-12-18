import styled from 'styled-components';
import { Container,Content, Title } from '../../../../style/GlobalStyles';

export const Containers = styled(Container)`
  margin: 4% auto 6% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled(Content)`
    text-align: left;
    padding: 0px 22px;
    font-family: monospace;
    font-weight: 400;
    color: #0e606b;
    line-height: 30px;
    @media (max-width: 440px) {
      line-height: 25px;
    }
    @media (max-width: 300px) {
      line-height: 20px;
    }
`;
export const Question = styled(Content)`
  margin-top: 2%;
  text-align: left;
  padding: 0px 24px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: #f47068;
`;
export const AnswerDiv = styled.div`
  margin-top: 2%;
  text-align: left;
`;

export const OptionLabel = styled(Content)`
  margin-top: 1%;
  display: block;
  font-weight: 400;
  font-family: monospace;
  color: #0e606b;
  line-height: 30px;
  @media (max-width: 440px) {
    line-height: 25px;
  }
  @media (max-width: 300px) {
    line-height: 20px;
  }
`;