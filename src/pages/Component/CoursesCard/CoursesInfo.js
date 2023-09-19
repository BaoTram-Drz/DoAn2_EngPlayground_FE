import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getCourseDetail } from '../../../API/coursesDetailApi'
import {saveUser_Course} from '../../../API/saveUserCourseApi'
import { FaArrowLeft } from 'react-icons/fa';

const BackHome = styled(FaArrowLeft)`
    width: 30px;
    height: 30px;
    margin: 7% auto auto 5%;  
    color: #0E606B;
    cursor: pointer;
    z-index: 10;

    @media (max-width: 1100px) {
      margin-top: 10%;
      margin-bottom: -10%;
    }
    @media (max-width: 768px) {
      margin-top: 15%;
      margin-bottom: -15%;
    }
    @media (max-width: 540px) {
      margin-top: 20%;
      margin-bottom: -25%;
    }
    @media (max-width: 420px) {
      margin-left: 1%;
      margin-top: 25%;
      margin-bottom: -25%;
      width: 15px;
      height: 15px;
    }
    @media (max-width: 300px) {
      margin-top: 30%;
      margin-bottom: -30%;
    }
`;
const BigText = styled.p`
  margin: -5% auto -3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1rem;
  }
`;
const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 2% 0% 5% auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 2%;
    margin: 5% auto 10% auto;
  }
`;

const TableWrapper = styled.table`
  width: 100%;
  text-align: center;
`;

const TableHeader = styled.div`
  padding: 12px 24px;
  font: normal 400 2rem 'Autour One';
  color: #FFC24B;
  border-bottom: 3px dashed #FFB3AE;
  border-radius: 20px;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 912px) {
    font-size: 2.3rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

const TableRow = styled.tr`
  background-color: white;
`;

const TableCellId = styled.div`
  width: 80%;
  float: right;
  font: normal 400 28px/1.5 'Roboto';
  color: #FFC24B;
  border: 2px dashed #FFB3AE;
  border-radius: 50%;
`;

const TableCell = styled.td`
  padding: 12px 24px 12px 40px;
  font: normal 400 28px 'Roboto';
  color: #0E606B;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 2.3rem;
  }

  @media (max-width: 912px) {
    font-size: 2rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

const RightDiv = styled.div`
  width: 100%;
`;

const DivWrapper = styled.div`
  margin: auto auto 5% auto;
  width: 80%;
  height: 535px;
  text-align: center;
  background-image: linear-gradient(#0E606B, #1697A6);
  border: 3px solid #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 0 2px gray;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const DivWrapper2 = styled.div`
  margin: 5%;
  width: 90%;
  height: 372px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border: 3px dashed #1697A6;
  border-radius: 30px;
  text-align: center;
  box-shadow: inset 200px 200px 200px rgba(0, 0, 0, 0.2);
`;

const DivWrapper2Text = styled.p`
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 200px;
  color: #FFC24B;
  text-shadow:
    -3px -3px 0 #fff,
     3px -3px 0 #fff,
    -3px  3px 0 #fff,
     3px  3px 0 #fff;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.3rem;
    text-shadow:
      -2px -2px 0 #fff,
       2px -2px 0 #fff,
      -2px  2px 0 #fff,
       2px  2px 0 #fff;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    text-shadow:
    -3px -3px 0 #fff,
     3px -3px 0 #fff,
    -3px  3px 0 #fff,
     3px  3px 0 #fff;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    text-shadow:
    -2px -2px 0 #fff,
     2px -2px 0 #fff,
    -2px  2px 0 #fff,
     2px  2px 0 #fff;
  }

`;

const Button = styled(Link)`
  width: 60%;
  min-width: 100px;
  margin: auto;
  padding: 5px 24px;
  text-decoration: none;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px dashed #1697A6;
  border-radius: 20px;

  @media (max-width: 912px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;
const ButtonGray = styled(Link)`
  width: 60%;
  min-width: 100px;
  margin: auto;
  padding: 5px 24px;
  text-decoration: none;
  font: normal 400 2rem "Autour One";
  color: gray;
  background-color: rgb(240, 240, 240);
  border: 3px dashed #1697A6;
  border-radius: 20px;

  @media (max-width: 912px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

const ButtonL = styled.button`
  margin: auto 10%;
  width: 80%;
  min-width: 300px;
  padding: 5px 24px;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;

  @media (max-width: 800px) {
    margin: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const LinkText = styled(Link)`
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  text-decoration: none;

  @media (max-width: 800px) {
    margin: auto;
  }

  @media (max-width: 912px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

const LoginNoti = styled.p`
  margin: auto;
  padding: 12px 24px 12px 40px;
  font: normal 400 1.5rem 'Roboto';
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 912px) {
    font-size: 1.2rem;
  }

  @media (max-width: 540px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }
`;

const CoursesInfo = () => {
  const location = useLocation();
  //const [lessonType, setLessonType] = useState('Listen');
  const [lessonType, setLessonType] = useState('a');
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [data, setData] = useState([]);  
  const [user, setUser] = useState(null);  
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        setUser(true);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
    if (location.state && location.state.image) {
      setProductImage(location.state.image);
    }
    if (location.state && location.state.lessontype) {
      setLessonType(location.state.lessontype);
    }
  }, [location.state]);

  useEffect(() => {
    const data = [
      { id: 1, name: "Học từ vựng" },
      { id: 2, name: "Làm bài tập chọn nghĩa từ vựng - Game 1" },
      { id: 3, name: "Làm bài tập viết từ vựng - Game 2" },
      { id: 4, name: "Làm bài tập ghép nối từ vựng - Game 3" },
      { id: 5, name: "Làm bài tập nối câu - Game 4" },
      { id: 6, name: "Làm bài tập tổng hợp - BigTest" },
    ];
    setData(data);
  }, []);
  const saveUserCourse = async (course, user) => {
    const user_course = {
     course: course,
     user: user
    };
    try {
      const response = await saveUser_Course(user_course);
    
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  return (
    <>
    <Link to="/cardList"><BackHome /></Link>
      <BigText>Course Detail</BigText>
      <Container>
        <TableWrapper>
          <thead>
            <TableRow>
              <th colSpan="2">
                <TableHeader>Course List</TableHeader>
              </th>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <td>
                  <TableCellId>{item.id}</TableCellId>
                </td>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableWrapper>
        <RightDiv>
          <DivWrapper>
            <DivWrapper2 imageUrl={productImage}>
              <DivWrapper2Text>{productName}</DivWrapper2Text>
            </DivWrapper2>
            {lessonType === "Listen" ? (
              <Button to="/listenstories" state={{ productname: productName }}>Listen Stories</Button>
            ) : (
              <>
                { user ? (
                  <Button to="/vocab" state={{ productname: productName }} onClick={() => saveUserCourse(productName, (JSON.parse(localStorage.getItem('user')))._id)}>
                    Start Learn
                  </Button>
                  ): 
                  (
                  <>
                      <ButtonGray>
                        Start Learn
                      </ButtonGray>
                    <LoginNoti> Bạn chưa đăng nhập..... 
                      
                    </LoginNoti>
                  </>
                  )}
                </>
            )}
          </DivWrapper>
          { user && 
            <ButtonL>
              <LinkText to="/league" state={{ productname: productName }} >Top League</LinkText>
            </ButtonL>
          }
                
          
        </RightDiv>
      </Container>
    </>
  );
};

export default CoursesInfo;
