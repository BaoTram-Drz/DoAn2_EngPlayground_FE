import { React, useState, useContext, useRef } from 'react';
import CustomMap from './Map/Map'
import { SnackBarContext } from "../../App";
import emailjs from '@emailjs/browser';
import color_constants from '../../color';
import {FormContainer, FormStyled, FormTitle, Title, FormInput, FormTextArea
  , SubButton, GlobalStyle, ImageContainer} from './Contact.styled'

function ContactForm() {
  const [message, setContent] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_name, setUsername] = useState('');
  const handleOpenSnackbar = useContext(SnackBarContext);

  const form = useRef();

  const sendEmail = (e) => {
    const green_color = '#b7efb7';
    const red_color = '#ff6230';
    const yellow_color = '#dcdcaa';
    e.preventDefault();

    emailjs.sendForm('service_sd16yvc', 'template_7rj7oah', form.current, 'qm6ilYQAuidMm9QOz')
      .then((result) => {
        console.log(result.text);
        handleOpenSnackbar(color_constants.green_color, 'Success', 3000);
      })
      .catch((error) => {
        console.log(error.text);
        handleOpenSnackbar(color_constants.red_color, 'Failor', 3000);
      });
  };

  return (
    <>
      <GlobalStyle />
      <FormTitle>Contact Us</FormTitle>
      <FormContainer>
        <FormStyled ref={form} onSubmit={sendEmail}>
          <Title>Your name:</Title>
          <FormInput
            type="text"
            value={user_name}
            onChange={(e) => setUsername(e.target.value)}
            name="user_name"
          />

          <Title>Your email:</Title>
          <FormInput
            type="email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
          />

          <Title>Your message:</Title>
          <FormTextArea
            type="text"
            value={message}
            onChange={(e) => setContent(e.target.value)}
            name="message"
          />

          <SubButton type="submit">Send</SubButton>
        </FormStyled>
        <ImageContainer>
          <CustomMap />
        </ImageContainer>
      </FormContainer>
    </>
  );
}

export default ContactForm;
