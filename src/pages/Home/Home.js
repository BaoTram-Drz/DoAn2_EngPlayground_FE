import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Carousel from '../Component/Carousel/Carousel';
import {CiRainbow} from 'react-icons/ci'
import { Container, BigText, BigText2 } from './home.styled';

function Home() {
    return (
      <Container>
        <BigText><CiRainbow/> Welcome to Engplaygrond <CiRainbow/></BigText>
        <Carousel/>          
        <About />
        <Contact/>
        <BigText2>Thanks for visited</BigText2>            
    </Container>
    );
};

export default Home;