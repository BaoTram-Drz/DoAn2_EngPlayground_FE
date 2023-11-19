import React from 'react';
import { useState, useEffect } from 'react';
import { HeaderStyled, LogoImage, LogoText, NavMenuStyled, NavLinkStyled, DropdownCourses, DropdownContent,
  DropdownItem, StyledFaBars, StyledFaEllipsisV} from './Header.styled'



function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setAdmin] = useState(true);
  const [isManager, setManager] = useState(false);

  const [isOpenCourses, setIsOpenCourses] = useState(false);
  const [isOpenUserIcon, setIsOpenUserIcon] = useState(false);
  const [isOpenSmallHeader, setIsOpenSmallHeader] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [user, setUser] = useState(null);
  const [isDropdownCoursesVisible, setIsDropdownCoursesVisible] = useState(false);

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
  //Courses
  const handleMouseEnterCourses = () => {
    setIsOpenCourses(true);
  };

  const handleMouseLeaveCourses = () => {
    setIsOpenCourses(false);
  };
  //User Icon
  const handleMouseEnterUserIcon = () => {
    setIsOpenUserIcon(true);
  };

  const handleMouseLeaveUserIcon = () => {
    setIsOpenUserIcon(false);
  };
  //small header
  const handleMouseEnterMiniMenu = () => {
    setIsOpenSmallHeader(true);
  };

  const handleMouseLeaveMiniMenu = () => {
    setIsOpenSmallHeader(false);
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
        {/* home */}
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
        {/* news */}
        <NavLinkStyled
          to="/news"
          active={activeSection === 'news'}
          onClick={() => {
            setActiveSection('news');
            setIsOpenCourses(false);
            setIsOpenUserIcon(false);
          }}
        >
          News
        </NavLinkStyled>
        {/* testskill */}
        <NavLinkStyled
          to="/testskill"
          active={activeSection === 'testskill'}
          onClick={() => {
            setActiveSection('testskill');
            setIsOpenCourses(false);
            setIsOpenUserIcon(false);
          }}
        >
          TestSkill
        </NavLinkStyled>
        {/* Courses */}
        <NavLinkStyled
          active={activeSection === 'coursesCard'}
          onClick={() => {
            setActiveSection('coursesCard');
            setIsOpenUserIcon(false);
          }}
          onMouseEnter={handleMouseEnterCourses}
          onMouseLeave={handleMouseLeaveCourses}
        >
          Courses
        </NavLinkStyled>
        {isOpenCourses  && (   // courses detail 
              <DropdownCourses
                onMouseEnter={handleMouseEnterCourses}
                onMouseLeave={handleMouseLeaveCourses}
              >
                <DropdownItem
                  to="/"
                  active={activeSection === 'profitest'}
                  onClick={() => {
                    setActiveSection('profitest');
                  }}
                >
                  Proficiency Test
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  state={{ type: 'listensing'}}              
                  active={activeSection === 'listensing'}
                  onClick={() => {
                    setActiveSection('listensing');
                  }}
                >
                  Listensing
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  state={{ type: 'speaking'}}              
                  active={activeSection === 'speaking'}
                  onClick={() => {
                    setActiveSection('speaking');
                  }}
                >
                  Speaking
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  state={{ type: 'reading'}}              
                  active={activeSection === 'reading'}
                  onClick={() => {
                    setActiveSection('reading');
                  }}
                >
                  Reading
                </DropdownItem>
                <DropdownItem
                  to="/cardlist"
                  state={{ type: 'writing'}}              
                  active={activeSection === 'writing'}
                  onClick={() => {
                    setActiveSection('writing');
                  }}
                >
                  Writing
                </DropdownItem>
                <DropdownItem
                  to="/"
                  active={activeSection === 'mocktest'}
                  onClick={() => {
                    setActiveSection('mocktest');
                  }}
                >
                  Mock Test
                </DropdownItem>
                <DropdownItem
                  to="/game"
                  active={activeSection === 'game'}
                  onClick={() => {
                    setActiveSection('game');
                  }}
                >
                  Game
                </DropdownItem>
              </DropdownCourses>
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
              }}
              onMouseEnter={handleMouseEnterUserIcon}
              onMouseLeave={handleMouseLeaveUserIcon}
            > 
              <StyledFaEllipsisV /> {/* icon : */}
            </NavLinkStyled>
            {isOpenUserIcon && (   // user icon 
              <DropdownContent
                onMouseEnter={handleMouseEnterUserIcon}
                onMouseLeave={handleMouseLeaveUserIcon}
              >
                {/* check admin to Manager list */}
                {isAdmin && (
                  <DropdownItem
                    to="/managerlist"
                    active={activeSection === 'managerlist'}
                    onClick={() => {
                      setActiveSection('managerlist');
                      setIsLoggedIn(true);
                    }}
                  >
                    Manager list
                  </DropdownItem>
                )}
                {/* check admin or manager to review course*/}
                {(isAdmin || isManager) && (
                  <DropdownItem
                    to="/coursereview"
                    active={activeSection === 'coursereview'}
                    onClick={() => {
                      setActiveSection('coursereview');
                      setIsLoggedIn(true);
                    }}
                  >
                    Course review
                  </DropdownItem>
                )}
                {/* create course */}
                <DropdownItem
                  to="/createcourse"
                  active={activeSection === 'createcourse'}
                  onClick={() => {
                    setActiveSection('createcourse');
                    setIsLoggedIn(true);
                  }}
                >
                  Create course
                </DropdownItem>
                {/* change info */}
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
                {/* history */}
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
      <StyledFaBars 
        onClick={handleMouseEnterMiniMenu} 
        onMouseEnter={handleMouseEnterMiniMenu}
        onMouseLeave={handleMouseEnterMiniMenu}
      />
      {isOpenSmallHeader && (
        <DropdownContent
          onMouseEnter={handleMouseEnterMiniMenu}
          onMouseLeave={handleMouseEnterMiniMenu}
        >
        {/* home */}
          <DropdownItem
            to="/"
            active={activeSection === 'home'}
            onClick={() => {
              setActiveSection('home');
              setIsOpenSmallHeader(false);
            }}
          >
            Home
          </DropdownItem>
          {/* news */}
          <DropdownItem
            to="/news"
            active={activeSection === 'news'}
            onClick={() => {
              setActiveSection('news');
              setIsOpenSmallHeader(false);
            }}
          >
            News
          </DropdownItem>
          {/* Proficiency Test */}
          <DropdownItem
            to=""
            active={activeSection === 'profitest'}
            onClick={() => {
              setActiveSection('profitest');
            }}
          >
            Proficiency Test
          </DropdownItem>
          {/* Listensing  */}
          <DropdownItem
            to="/cardlist"
            state={{ type: 'listensing'}}              
            active={activeSection === 'listensing'}
            onClick={() => {
              setActiveSection('listensing');
            }}
          >
            Listensing
          </DropdownItem>
          {/* speak  */}
          <DropdownItem
            to="/cardlist"
            state={{ type: 'speaking'}}              
            active={activeSection === 'speaking'}
            onClick={() => {
              setActiveSection('speaking');
            }}
          >
            Speaking
          </DropdownItem>
          {/* read  */}
          <DropdownItem
            to="/cardlist"
            state={{ type: 'reading'}}              
            active={activeSection === 'reading'}
            onClick={() => {
              setActiveSection('reading');
            }}
          >
            Reading
          </DropdownItem>
          {/* write  */}
          <DropdownItem
            to="/cardlist"
            state={{ type: 'writing'}}              
            active={activeSection === 'writing'}
            onClick={() => {
              setActiveSection('writing');
            }}
          >
            Writing
          </DropdownItem>
          {/* mocktest  */}
          <DropdownItem
            to="/"
            active={activeSection === 'mocktest'}
            onClick={() => {
              setActiveSection('mocktest');
            }}
          >
            Mock Test
          </DropdownItem>
          {/* game  */}
          <DropdownItem
            to="/game"
            active={activeSection === 'game'}
            onClick={() => {
              setActiveSection('game');
            }}
          >
            Game
          </DropdownItem>
          {isLoggedIn ? (
            <>
              {/* check admin to Manager list */}
              {isAdmin && (
                  <DropdownItem
                    to="/managerlist"
                    active={activeSection === 'managerlist'}
                    onClick={() => {
                      setActiveSection('managerlist');
                      setIsLoggedIn(true);
                    }}
                  >
                    Manager list
                  </DropdownItem>
              )}
              {/* check admin or manager to review course*/}
              {(isAdmin || isManager) && (
                <DropdownItem
                  to="/coursereview"
                  active={activeSection === 'coursereview'}
                  onClick={() => {
                    setActiveSection('coursereview');
                    setIsLoggedIn(true);
                  }}
                >
                  Course review
                </DropdownItem>
              )}
              {/* create course */}
              <DropdownItem
                to="/createcourse"
                active={activeSection === 'createcourse'}
                onClick={() => {
                  setActiveSection('createcourse');
                  setIsLoggedIn(true);
                }}
              >
                Create course
              </DropdownItem>
              {/* change info */}
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
              {/* history */}
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
              {/* logout */}
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
              {/* sign up login */}
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