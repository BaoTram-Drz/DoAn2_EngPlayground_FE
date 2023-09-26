import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import image from '../image.png'
import {changePassword} from '../../../API/changeInfoApi';
import { useNavigate } from 'react-router-dom';
import {Container, Image,FormWrapper, BigText, Input, SubmitButton, LinkLoginBtn} from './VerifyCode.styled'

const VerifyCode = () => {
  const location = useLocation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  // useEffect(() => {
  //   if (location.state && location.state.userMail) {
  //     setEmail(location.state.userMail);
  //   }
  // }, [location.state]);
  const navigate = useNavigate();
  const handleSaveNewPass = async () => {
    console.log(localStorage.getItem('email'));
    if(password === rePassword)
    {
      const newPassword = {
        email: localStorage.getItem('email'),
        password: password,
      };
      const response = await changePassword(newPassword);
      navigate('/login');
      alert('Change password successfully.');
    }  
  };

  return (
    <Container>
      <Image bgImage={image}></Image>
      <FormWrapper>
        <BigText>verify</BigText>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your pass"/>
        <Input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)}  placeholder="Enter your pass again"/>
        <SubmitButton onClick={handleSaveNewPass}>
          <LinkLoginBtn  to="/login">
          Save
          </LinkLoginBtn>
        </SubmitButton> 
      </FormWrapper>
    </Container>
   
  );
};

export default VerifyCode;
