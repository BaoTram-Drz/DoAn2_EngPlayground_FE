import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import login from '../image.png'
import { loginUser } from "../../../API/loginApi";
import { SnackBarContext } from "../../../App";
import color_constants from '../../../color';
import {Container, Image, FormWrapper, BigText, Input, LinkForgot, SubmitButton,
  LinkLoginBtn, Line} from './Login.styled'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const location = useLocation();
  const handleOpenSnackbar = useContext(SnackBarContext);
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.setItem('user','');
  const sendInfo = async (email, password) => {
    const user = {
      email: email,
      password: password
    };
    try {
      const response = await loginUser(user);

      console.log(response.user);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(response.user));
      console.log(localStorage);
      navigate('/home');
      window.location.reload();
      handleOpenSnackbar(color_constants.green_color, 'Success', 3000);
    
    } catch (error) {
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.setItem('user', '');
      console.log('Error:', error);      
      handleOpenSnackbar(color_constants.red_color, 'Fail to Login', 3000);
    }
  };

  return (
    <Container>
      <Image bgImage={login} />
      <FormWrapper>
        <BigText>Welcome back</BigText>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <LinkForgot to="/forgot">Forgot Password</LinkForgot>
        <SubmitButton type="button" onClick={() => sendInfo(email, password)}>
          <LinkLoginBtn>Send</LinkLoginBtn>
        </SubmitButton>
      </FormWrapper>
    </Container>
  );
};

export default Login;
