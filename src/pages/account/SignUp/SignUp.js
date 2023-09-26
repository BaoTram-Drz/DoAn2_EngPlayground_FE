import React, { useContext, useState } from "react";
import image from '../image.png'
import { saveNewUser, saveNewUserWithGG } from "../../../API/signUpApi";
import { SnackBarContext } from "../../../App";
import color_constants from '../../../color';
import { useNavigate } from 'react-router-dom';
import {Container, Image, FormWrapper, BigText, Input, SubmitButton,
  LinkLoginBtn, Line, SubmitGGButton, LinkLoginGG, StyledFaGooglePlusG} from './SignUp.styled'


const signUpWithGoogle = async () => {
  try {
    const response = await saveNewUserWithGG();
    console.log('Success:', response);

  } catch (error) {
    console.log('Error:', error);

  }
}

function SignUpBtn(props) {
  const { email, username, password, repassword, bday, name } = props;
  const navigate = useNavigate();
  const handleOpenSnackbar = useContext(SnackBarContext);

  const sendInfor = async (email, username, password, repassword, bday, name) => {
    if (password === repassword) {
      const newUser = {
        username: username,
        name: name,
        password: password,
        email: email,
        dateofbirth: bday,
        image: "",
      };
      try {
        const response = await saveNewUser(newUser);
        console.log('Success:', response);
        navigate('/login')        
        handleOpenSnackbar(color_constants.green_color, 'Success', 3000);
      } catch (error) {
        console.log('Error:', error);
        handleOpenSnackbar(color_constants.red_color, 'Fail to Sign Up', 3000);
      }
    } else {
      alert(" password not same repassword !");
    }
  };
  return (
    <>
      <LinkLoginBtn
        onClick={(e) => {
          e.preventDefault();
          sendInfor(email, username, password, repassword, bday, name);
          handleOpenSnackbar('#66ff66', 'Success', 1000);
        }}
        href='/login'
      >
        Sign Up
      </LinkLoginBtn>
    </>
  )
}

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [bday, setBDay] = useState('');

  return (
    <Container>

      <Image bgImage={image}></Image>
      <FormWrapper>
        <BigText>Sign Up</BigText>
        {/* <div onClick={(e) => {
          handleOpenSnackbar('green', 'hello', 1000)
        }} style={{ background: 'red' }}>
          Hieu
        </div> */}
        <Input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name" placeholder="Your Name" />

        <Input type="date"
          value={bday}
          onChange={(e) => setBDay(e.target.value)}
          name="bday" placeholder="Date Of Birth" />

        <Input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username" placeholder="Username" />

        <Input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email" placeholder="Email" />

        <Input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="pass" placeholder="Password" />

        <Input type="password"
          value={repassword}
          onChange={(e) => setRePassword(e.target.value)}
          name="repass" placeholder="Re-Password" />


        <SubmitButton>
          <SignUpBtn
            name={name}
            email={email}
            username={username}
            password={password}
            repassword={repassword}
            bday={bday}
          />
        </SubmitButton>


        {/*  set giá trị của header là có người dùng  */}
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
