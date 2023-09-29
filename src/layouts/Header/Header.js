import React from 'react';
import { useState, useEffect } from 'react';
import { HeaderStyled, LogoImage, LogoText, NavMenuStyled, NavLinkStyled, DropdownContent,
  DropdownItem, StyledFaBars, StyledFaEllipsisV} from './Header.styled'



function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpenCourses, setIsOpenCourses] = useState(false);
  const [isOpenUserIcon, setIsOpenUserIcon] = useState(false);
  const [isOpenSmallHeader, setIsOpenSmallHeader] = useState(false);
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
  const handleCoursesClick = () => {
    setIsOpenCourses(!isOpenCourses);
  };
  const handleUserIconClick = () => {
    setIsOpenUserIcon(!isOpenUserIcon);
  };
  const handleSmallHeaderButtonClick = () => {
    setIsOpenSmallHeader(!isOpenSmallHeader);
  };

  return (
    <HeaderStyled>
      <LogoImage to="/" />
      <LogoText to="/">EngPlayground</LogoText>
      {/* Full Header */}
      <NavMenuStyled>
        <NavLinkStyled
          to="/"
          active={activeSection === 'home'}
          onClick={() => {
            setActiveSection('home');
            setIsOpenCourses(false);
            setIsOpenUserIcon(false);
          }}
        >
          Home
        </NavLinkStyled>
        {/* Courses */}
        <NavLinkStyled
          active={activeSection === 'coursesCard'}
          onClick={() => {
            setActiveSection('coursesCard');
            setIsOpenUserIcon(false);
            handleCoursesClick();
          }}
        >
          Courses
        </NavLinkStyled>
        {isOpenCourses && (   // courses detail 
              <DropdownContent>
                <DropdownItem
                  to="/cardlist"
                  active={activeSection === 'profitest'}
                  onClick={() => {
                    setActiveSection('profitest');
                  }}
                >
                  Proficiency Test
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  active={activeSection === 'listensing'}
                  onClick={() => {
                    setActiveSection('listensing');
                  }}
                >
                  Listensing
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  active={activeSection === 'speaking'}
                  onClick={() => {
                    setActiveSection('speaking');
                  }}
                >
                  Speaking
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  active={activeSection === 'reading'}
                  onClick={() => {
                    setActiveSection('reading');
                  }}
                >
                  Reading
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  active={activeSection === 'writing'}
                  onClick={() => {
                    setActiveSection('writing');
                  }}
                >
                  Writing
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  active={activeSection === 'mocktest'}
                  onClick={() => {
                    setActiveSection('mocktest');
                  }}
                >
                  Mock Test
                </DropdownItem>
              </DropdownContent>
            )}


        {/* check user login */}
        {isLoggedIn ? (
          <> {/* user login */}
            <NavLinkStyled
              to="/changeinfo"
              active={activeSection === 'changeinfo'}
              onClick={() => {
                setActiveSection('changeinfo');
                setIsOpenCourses(false);
                setIsOpenUserIcon(false);
              }}
            >
               {user ? user.username: "a"}
            </NavLinkStyled>
            <NavLinkStyled 
              active={activeSection === 'userIcon'}
              onClick={() => {
                setActiveSection('userIcon');
                setIsOpenCourses(false);
                handleUserIconClick();
              }}
            > 
              <StyledFaEllipsisV /> 
            </NavLinkStyled>
            {isOpenUserIcon && (   // user icon 
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
          <> {/* no user */}
            <NavLinkStyled
              to="/signup"
              active={activeSection === 'signup'}
              onClick={() => {
                setActiveSection('signup');
                setIsOpenCourses(false);
                setIsOpenUserIcon(false);
              }}
            >
              Sign Up
            </NavLinkStyled>
            <NavLinkStyled
              to="/login"
              active={activeSection === 'login'}
              onClick={() => {
                setActiveSection('login');
                setIsOpenCourses(false);
                setIsOpenUserIcon(false);
              }}
            >
              Login
            </NavLinkStyled>
          </>
        )}
      </NavMenuStyled>
      {/* small header */}
      <StyledFaBars onClick={handleSmallHeaderButtonClick} />
      {isOpenSmallHeader && (
        <DropdownContent>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'home'}
            onClick={() => {
              setActiveSection('home');
              setIsOpenSmallHeader(false);
            }}
          >
            Home
          </DropdownItem>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'profitest'}
            onClick={() => {
              setActiveSection('profitest');
            }}
          >
            Proficiency Test
          </DropdownItem>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'listensing'}
            onClick={() => {
              setActiveSection('listensing');
            }}
          >
            Listensing
          </DropdownItem>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'speaking'}
            onClick={() => {
              setActiveSection('speaking');
            }}
          >
            Speaking
          </DropdownItem>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'reading'}
            onClick={() => {
              setActiveSection('reading');
            }}
          >
            Reading
          </DropdownItem>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'writing'}
            onClick={() => {
              setActiveSection('writing');
            }}
          >
            Writing
          </DropdownItem>
          <DropdownItem
            to="/cardlist"
            active={activeSection === 'mocktest'}
            onClick={() => {
              setActiveSection('mocktest');
            }}
          >
            Mock Test
          </DropdownItem>
          {isLoggedIn ? (
            <>
              <DropdownItem
                to="/changeinfo"
                active={activeSection === 'changeinfo'}
                onClick={() => {
                  setActiveSection('changeinfo');
                  setIsOpenSmallHeader(false);
                }}
              >
                Change Info
              </DropdownItem>
              <DropdownItem
                to="/login"
                active={activeSection === 'login'}
                onClick={() => {
                  setActiveSection('login');
                  setIsOpenSmallHeader(false);
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
                  setIsOpenSmallHeader(false);
                }}
              >
                Sign Up
              </DropdownItem>
              <DropdownItem
                to="/login"
                active={activeSection === 'login'}
                onClick={() => {
                  setActiveSection('login');
                  setIsOpenSmallHeader(false);
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