import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import logo from './logo.png';


const HeaderStyled = styled.header`
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
  border-bottom: 3px dashed #1697A6;
`;

const LogoImage = styled(Link)`
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
const LogoText = styled(Link)`
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

const NavMenuStyled = styled.div`
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

const NavLinkStyled = styled(Link)`
  width: 120px;
  margin: 2%;
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

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 7%;
  border: 1px solid #0e606b;
  border-radius: 10px;
  background-color: white;
`;

const DropdownItem = styled(Link)`
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
const StyledFaBars = styled(FaBars)`
  margin: auto 30px auto auto;
  display: none;  
  cursor: pointer;
  color: #0e606b;
  
  @media (max-width: 820px) {
    display: block;
  }
`;
const StyledFaEllipsisV = styled(FaEllipsisV)`
  padding: 2px;
  border: 2px solid ${props => props.active ? '#ffc24b' : '#0e606b'};
  border-radius:50%;
`;


function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user1 = JSON.parse(userString);
        setUser(user1);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        setUser(null);
        setIsLoggedIn(false);
      }
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogOut = () => {    
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('user', '');
  };

  const handleDropdownClick = () => {
    setIsOpenInfo(!isOpenInfo);
    setIsOpenMenu(false);
  };
  const handleMenuClick = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsOpenInfo(false);
  };

  return (
    <HeaderStyled>
      <LogoImage to="/" />
      <LogoText to="/">EngPlayground</LogoText>
      <NavMenuStyled>
        <NavLinkStyled
          to="/"
          active={activeSection === 'home'}
          onClick={() => {
            setActiveSection('home');
            setIsOpenMenu(false);
          }}
        >
          Home
        </NavLinkStyled>
        <NavLinkStyled
          to="/cardlist"
          active={activeSection === 'coursesCard'}
          onClick={() => {
            setActiveSection('coursesCard');
            setIsOpenMenu(false);
          }}
        >
          Courses
        </NavLinkStyled>
        {isLoggedIn ? (
          <>
            <NavLinkStyled
              to="/changeinfo"
              active={activeSection === 'changeinfo'}
              onClick={() => {
                setActiveSection('changeinfo');
                setIsOpenMenu(false);
              }}
            >
               {user ? user.username: "a"}
            </NavLinkStyled>
            <NavLinkStyled onClick={handleDropdownClick}> <StyledFaEllipsisV /> </NavLinkStyled>
            {isOpenInfo && (
              <DropdownContent>
                <DropdownItem
                  to="/changeinfo"
                  active={activeSection === 'changeinfo'}
                  onClick={() => {
                    setActiveSection('changeinfo');
                    setIsLoggedIn(true);
                  }}
                >
                  Change info
                </DropdownItem>
                <DropdownItem
                  to="/login"
                  active={activeSection === 'login'}
                  onClick={() => {
                    setActiveSection('login');
                    handleLogOut();
                  }}
                >
                  Logout
                </DropdownItem>
              </DropdownContent>
            )}
          </>
        ) : (
          <>
            <NavLinkStyled
              to="/signup"
              active={activeSection === 'signup'}
              onClick={() => {
                setActiveSection('signup');
                setIsOpenMenu(false);
              }}
            >
              Sign Up
            </NavLinkStyled>
            <NavLinkStyled
              to="/login"
              active={activeSection === 'login'}
              onClick={() => {
                setActiveSection('login');
                setIsOpenMenu(false);
              }}
            >
              Login
            </NavLinkStyled>
          </>
        )}
      </NavMenuStyled>
      <StyledFaBars onClick={handleMenuClick} />
      {isOpenMenu && (
        <DropdownContent>
          <DropdownItem
            to="/"
            active={activeSection === 'home'}
            onClick={() => {
              setActiveSection('home');
              setIsOpenMenu(false);
            }}
          >
            Home
          </DropdownItem>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'coursesCard'}
            onClick={() => {
              setActiveSection('coursesCard');
              setIsOpenMenu(false);
            }}
          >
            Courses
          </DropdownItem>
          {isLoggedIn ? (
            <>
              <DropdownItem
                to="/changeinfo"
                active={activeSection === 'changeinfo'}
                onClick={() => {
                  setActiveSection('changeinfo');
                  setIsOpenMenu(false);
                }}
              >
                Change Info
              </DropdownItem>
              <DropdownItem
                to="/login"
                active={activeSection === 'login'}
                onClick={() => {
                  setActiveSection('login');
                  setIsOpenMenu(false);
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </DropdownItem>
            </>
          ) : (
            <>
              <DropdownItem
                to="/signup"
                active={activeSection === 'signup'}
                onClick={() => {
                  setActiveSection('signup');
                  setIsOpenMenu(false);
                }}
              >
                Sign Up
              </DropdownItem>
              <DropdownItem
                to="/login"
                active={activeSection === 'login'}
                onClick={() => {
                  setActiveSection('login');
                  setIsOpenMenu(false);
                }}
              >
                Login
              </DropdownItem>
            </>
          )}

        </DropdownContent>
      )}
    </HeaderStyled >
  );
}

export default Header;