
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 40px;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.2); 
`;
export const FooterBottom = styled.div`
  display: none;
  height: 400px;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  @media (max-width: 1024px) and (min-width: 819px) {
    display: block;
  }
  @media (width: 820px) {
    display: block;
    height: 200px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 714px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Column = styled.div`
 text-align: center;
`;

export const Heading = styled.h3`
  font-family: 'Autour One';
  font-size: 1.5rem;
  font-weight: bold;
  color: #0e606b;
  margin-bottom: 20px;
  
  @media (max-width: 714px) {
    font-size: 1rem;
  }
`;

export const Content = styled.p`
  font-family: 'Autour One';
  color: #0e606b; 
  font-size: 1rem;
  line-height: 30px;
  
  @media (max-width: 714px) {
    font-size: 0.8rem;
    line-height: 24px;
  }
 `;

export const SocialLinks = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 10px; 
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0e606b;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
  background-color: #1697a6;
  }
`;
export const Img = styled.img` 
  text-align: center; 
  width: 30%;
`;

export const Copyright = styled.p` 
  text-align: center; 
  color: #0e606b;
`;