import styled from 'styled-components';
import { FaVolumeUp } from 'react-icons/fa'
import { CiMicrophoneOn } from "react-icons/ci";



export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 10%;

`;
export const Vocabulary = styled.p`
  font: normal 400 2rem 'Autour One';
`;
const ListButton = styled.div`
    width: 100%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;
const Button = styled.button`
    width: 20%;
    padding: 5px 24px;
    font: normal 400 2rem 'Autour One';
    color: #ffc24b;
    background-color: white;
    border: 3px solid #f47068;
    border-radius: 14px;
    text-align: center;
    text-decoration: none;
`;
const ListenButton = styled(Button)`

`;
const SpeakButton = styled(Button)`

`;
const SubmitButton = styled(Button)`
    margin-top: 5%;
`;
function TestReading() {
    return ( 
        <Container>  
            <h1>Test Reading</h1>
            <Vocabulary> Vocabulary</Vocabulary>
            <ListButton>
                <ListenButton> <FaVolumeUp/> </ListenButton>
                <SpeakButton> <CiMicrophoneOn/></SpeakButton>
            </ListButton>
            <SubmitButton> Submit</SubmitButton>
            <p> lời nhận xét</p>
        </Container>
     );
}

export default TestReading;