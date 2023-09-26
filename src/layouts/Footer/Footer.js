import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import {FooterContainer, Row, Column, Heading,Content, SocialLink, SocialLinks, Img, Copyright} from './Footer.styled'
import logo from './logo.png';


const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Column>
          <Heading>EngPlayground</Heading>
          <Content>EngPlayground is a platform for interactive English learning.</Content>
          <Content>Email: 20520183@gm.uit.edu.vn</Content>
          <Content>Email: 20522033@gm.uit.edu.vn</Content>
          <Content>Phone number: 0xxxxxxxx</Content>
        </Column>
        <Column>
          <Heading>Skill</Heading>
          <Content>Watch cartoon</Content>
          <Content>Read stories</Content>
          <Content>Learn vocabulary</Content>
          <Content>Mini game for you</Content>
        </Column>
        <Column>
          <Heading>Connect With Us</Heading>
          <SocialLinks>
            <SocialLink href="#">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="#">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
          <Img src={logo}/>
        </Column>
      </Row>
      <div>
        <Column>
          <Copyright>
            © {new Date().getFullYear()} EngPlayground. All Rights Reserved.
          </Copyright>
        </Column>
      </div>
    </FooterContainer>
  );
};

export default Footer;