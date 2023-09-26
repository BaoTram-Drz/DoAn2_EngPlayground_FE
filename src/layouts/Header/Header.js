import React from 'react';
import { useState, useEffect } from 'react';
import { HeaderStyled, LogoImage, LogoText, NavMenuStyled, NavLinkStyled, DropdownContent,
  DropdownItem, StyledFaBars, StyledFaEllipsisV} from './Header.styled'



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
                  to="/history"
                  active={activeSection === 'history'}
                  onClick={() => {
                    setActiveSection('history');
                    setIsLoggedIn(true);
                  }}
                >
                  History
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