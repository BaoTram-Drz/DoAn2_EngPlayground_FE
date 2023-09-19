import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase'
import { ref } from 'firebase/storage'
import { FaVolumeUp } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import { getVocab } from "../../API/vocabApi";
import { BiLoaderCircle } from 'react-icons/bi';


const BigText = styled.p`
  margin: 8% auto 3% auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #F47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 1280px) {
    margin: 10% auto 5% auto;
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    margin: 20% auto 10% auto;
  }

  @media (max-width: 540px) {
    margin: 25% auto 10% auto;
    font-size: 1.5rem;
  }

  @media (max-width: 280px) {
    margin: 35% auto 10% auto;
    font-size: 1rem;
  }
`;

const TableWrapper = styled.div`
  width: 80%;
  margin: 5% auto;

  @media (max-width: 912px) {
    width: 90%;
  }

  @media (max-width: 412px) {
    width: 100%;
  }
`;

const VoiceIcon = styled(FaVolumeUp)`
  cursor: pointer;

  &:active {
    color: pink;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  margin: 12px auto;
  padding: 12px 24px;
  font: normal 400 2rem 'Autour One';
  color: #f47068;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

const TableHeaderLeft = styled.div`
  border-bottom: 3px dashed #ffc24b;
  border-bottom-left-radius: 20px;
  
`;
const TableHeaderCenterOn = styled.div`
  border-bottom: 3px dashed #ffc24b;  
  @media (max-width: 540px) {
    border-bottom-right-radius: 20px;
  }
`;


const TableHeaderCenter = styled.div`
  border-bottom: 3px dashed #ffc24b;
  @media (max-width: 540px) {
    display: none;
  }
`;

const TableHeaderRight = styled.div`
  border-bottom: 3px dashed #ffc24b;
  border-bottom-right-radius: 20px;
  @media (max-width: 540px) {
    display: none;
  }
`;

const TableRow = styled.tr`
  width: 100%;
  text-align: center;
  background-color: white;
`;

const TableCellEng = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Autour One';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 540px) {
    display: none;
  }
  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

const TableCellViet = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Roboto';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 540px) {
    display: none;
  }

  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;
const TableCellEngOn = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Autour One';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

const TableCellVietOn = styled.td`
  padding: 12px 24px;
  font: normal 400 28px 'Roboto';
  color: #1697a6;
  border-bottom: 1px dashed #ffb3ae;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 415px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 0.5rem;
  }
`;

const ImageAcc = styled.img`
  width: 100%;
  max-width: 100px;
  min-width: 30px;
  height: 100%;
  padding: 3px;
  border: 2px dashed #ffb3ae;
  border-radius: 25%;
`;

const Button = styled(Link)`
  width: 200px;
  padding: 5px 24px;
  text-decoration: none;
  text-align: center;
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;

  @media (max-width: 1200px) {
    width: 200px;
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 5px 12px;
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;
const LoadIconContainer = styled.div`
  margin: 3% auto;
  text-align: center;
  color: #F47068;
`;

const Vocab = () => {
  const [data, setCourses] = useState([]);
  const location = useLocation();
  const [productName, setProductName] = useState('Product A');
  const [isLoadFull, setIsLoadFull] = useState(false);

  // Get product name
  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
  }, [location.state]);

  // Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const topicCourse = { topic: productName.toLowerCase() };
        const result = await getVocab(topicCourse);

        for (let i = 0; i < result.length; i++) {
          const path = `${topicCourse.topic}/${result[i].image}`;
          const downloadURL = await getDownloadURL(ref(storage, path));
          result[i].image = downloadURL;
        }

        setCourses(result);
        setTimeout(() => {
          setIsLoadFull(true); 
        }, 1600);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [productName]);

  //âm thanh
  const handleVoice = (item) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(item);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Trình duyệt không hỗ trợ SpeechSynthesis API.');
    }
  };

  return (
    <>
      <BigText>Learn Vocabulary</BigText>
      <TableWrapper>
        <Table>
          <TableHeader>
            <th>
              <TableHeaderLeft>English</TableHeaderLeft>
            </th>
            <th>
              <TableHeaderCenterOn>Vietnamese</TableHeaderCenterOn>
            </th>
            <th>
              <TableHeaderCenter>Pronunciation</TableHeaderCenter>
            </th>
            <th>
              <TableHeaderCenter>Image</TableHeaderCenter>
            </th>
            <th>
              <TableHeaderRight>Voice</TableHeaderRight>
            </th>
          </TableHeader>
          <tbody>           
            
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCellEngOn>{item.name}</TableCellEngOn>
                <TableCellVietOn>{item.meaning}</TableCellVietOn>
                <TableCellViet>{item.sound}</TableCellViet>
                <TableCellEng>
                  <ImageAcc src={item.image} alt={item.name} />
                </TableCellEng>
                <TableCellEng>
                  <VoiceIcon onClick={() => handleVoice(item.name)} />
                </TableCellEng>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      
      <LoadIconContainer>{!isLoadFull && <BiLoaderCircle/> }</LoadIconContainer>
      <ButtonsContainer>
        <Button to="/coursesinfo">Pre</Button>
        <Button to={'/layoutlearn'} state={{ productname: productName, lesson: 1 }}>
          Next
        </Button>
      </ButtonsContainer>
    </>
  );
};

export default Vocab;
