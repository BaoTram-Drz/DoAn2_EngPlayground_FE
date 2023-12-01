
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import logo from './logo.png';


export const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  font-family: 'Autour One', cursive;
  font-weight: bold;
  color: #0e606b;
  padding: 0rem 1rem;
  z-index: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const LogoImage = styled(Link)`
  width: 80px;
  height: 80px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 2%;
  border-radius: 50%;
  @media screen and (max-width: 821px) {
    display: none; 
  }
  @media screen and (max-width: 820px) {
    display: block; 
  }
`;
export const LogoText = styled(Link)`
  margin: auto auto auto 1%;
  font-family: 'Bungee Inline', cursive;
  font-size: 1.5rem;
  font-weight: 300;
  color: #0e606b;
  text-decoration: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1%; 
  
  @media screen and (max-width: 768px) {
    margin-right: 0; 
  }
  @media screen and (max-width: 820px) {
    display: none;
  }
  
`;

export const NavLinkStyled = styled(Link)`
  display: flex; 
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: 40px;
  padding: 0.5%;
  text-align: center;
  color: ${props => props.active ? '#ffc24b' : '#0e606b'};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px) translateX(-2px);
    color: #ffc24b;
  }

  @media screen and (max-width: 768px) {
    width: 70px; /* giảm giá trị từ 80px xuống 70px */
    margin: 0.25%; /* giảm giá trị từ 0.5% xuống 0.25em */
    padding: 0.5% 0.5%;
    font-size: 0.8rem; /* giảm kích thước font chữ */
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 3%;
  border: 1px solid #0e606b;
  border-radius: 10px;
  background-color: white;
`;
export const DropdownCourses = styled.div`
  position: absolute;
  top: 100%;
  right: 12%;
  border: 1px solid #0e606b;
  border-radius: 10px;
  background-color: white;
`;
export const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  color: ${props => props.active ? '#ffc24b' : '#0e606b'};

  &:hover {
    background-color: #f1f1f1;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0.5em;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 0.3em;
  }
`;
export const StyledFaBars = styled(FaBars)`
  margin: auto 30px auto auto;
  display: none;  
  cursor: pointer;
  color: #0e606b;
  
  @media (max-width: 820px) {
    display: block;
  }
`;
export const StyledFaEllipsisV = styled(FaEllipsisV)`
  margin-right: 25px;
  padding: 2px;
  border: 2px solid ${props => props.active ? '#ffc24b' : '#0e606b'};
  border-radius:50%;
`;
