import React, { useState, useRef, useContext } from "react";
import image from './image.png'
import emailjs from '@emailjs/browser';
import { SnackBarContext } from "../../App";
import { useNavigate } from 'react-router-dom';
import color_constants from '../../color';
import {Container, Image, FormWrapper, BigText, Input, InputNone, SendCodeButton, VerifyButton, LinkLoginBtn, Line} from './Forgot.styled'


const Forgot = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();
  const handleOpenSnackbar = useContext(SnackBarContext);
  const form = useRef();
  const generateVerificationCode = () => {
    const characters = '0123456789';
    const length = 6;
    let code = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  };
  const sentCode = generateVerificationCode();
  const handleGetCode = async (e) => {
    e.preventDefault();
  
    setVerificationCode(sentCode)

    emailjs.sendForm('service_sd16yvc', 'template_wkb2fci', form.current, 'qm6ilYQAuidMm9QOz')
      .then((result) => {
        handleOpenSnackbar(color_constants.green_color, 'Sent code successfully', 3000);

      })
      .catch((error) => {
        handleOpenSnackbar(color_constants.red_color, 'Fail to sent code', 3000);
      });
  };

  const handleVerify = async () => {
    if(verificationCode === code){
      navigate('/verify')
      handleOpenSnackbar(color_constants.green_color, 'Verified successfully', 3000);
      localStorage.setItem('email', email);
    }
    else{
      handleOpenSnackbar(color_constants.red_color, 'Wrong code', 3000);
    }
  };

  return (
    <Container>
      <Image bgImage={image}></Image>
      <FormWrapper ref={form}>
        <BigText>Forgot Password</BigText>
        <Input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <InputNone name='code' value={sentCode} />
        <SendCodeButton onClick={handleGetCode}>
          <LinkLoginBtn>
            Send Code
          </LinkLoginBtn>
        </SendCodeButton>

        <Line>--------Get-code-before-verify--------</Line>
        <Input type="password" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter your code" />
        <VerifyButton onClick={handleVerify}>
          <LinkLoginBtn state={{ userMail: email }}>
            Verify
          </LinkLoginBtn>
        </VerifyButton>
      </FormWrapper>
    </Container>
  );
};

export default Forgot;
