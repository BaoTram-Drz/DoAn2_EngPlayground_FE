import React, { useState, useEffect } from "react";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase'
import { ref } from 'firebase/storage'
import { useLocation } from 'react-router-dom';
import { getVocab } from "../../../../API/vocabApi";
import { BiLoaderCircle } from 'react-icons/bi';
import {BigText, TableWrapper, VoiceIcon, Table, TableHeader, TableHeaderLeft, TableHeaderCenterOn,
  TableHeaderCenter, TableHeaderRight, TableRow, TableCellEng, TableCellViet,
  TableCellEngOn, TableCellVietOn, ImageAcc, Button, ButtonsContainer, LoadIconContainer} from './Vocab.styled'

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
