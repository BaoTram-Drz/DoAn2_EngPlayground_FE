import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Carousel from './Carousel/Carousel'
import SupportEngine from '../Support/SupportEngine'
import {CiRainbow} from 'react-icons/ci'
import { Container, PageName, PageName2 } from './home.styled';

function Home() {
    return (
      <Container>
        <PageName><CiRainbow/> Welcome to Engplaygrond <CiRainbow/></PageName>
        <Carousel/>          
        <About />
        <Contact/>
        <PageName2>Thanks for visited</PageName2>       
        <SupportEngine/>
    </Container>
    );
};

export default Home;