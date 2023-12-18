import React, { useState, useEffect } from "react";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase'
import { ref } from 'firebase/storage'
import Swal from "sweetalert2";
import { getVocab } from "../../../../API/vocabApi";
import { BiLoaderCircle } from 'react-icons/bi';
import {PageName, TableWrapper, VoiceIcon, Table,HText, TableHeader, TableHeaderLeft, TableHeaderCenterOn,
  TableHeaderCenter, TableHeaderRight, TableRow, TableCellEng, TableCellViet,
  TableCellEngOn, TableCellVietOn, ImageAcc, TIB, Buttons, ButtonsContainer, LoadIconContainer, DropdownLevel, DropdownItem} from './Vocab.styled'

const Vocab = () => {
  const [data, setCourses] = useState([]);
  const [lessonType, setLessonType] = useState();
  const [productName, setProductName] = useState('Product A');
  const [isLoadFull, setIsLoadFull] = useState(false);
  const [isOpenLevel, setIsOpenLevel] = useState(false);

  // Get product name
  useEffect(() => {
    setLessonType((prev)=>localStorage.getItem('lessonType'));
    setProductName((prev)=>localStorage.getItem('productName'));
  }, []);
  
  //save level
  const handleSaveCourseLevel = (level) => {
    localStorage.setItem('level', level);
  };

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
  // chọn level
  const handleMouseEnterLevel = () => {
    setIsOpenLevel(true);
  };
  const handleMouseLeaveLevel = () => {
    setIsOpenLevel(false);
  };
  return (
    <>
      <PageName>Learn Vocabulary</PageName>
      <TableWrapper>
        <Table>
          <TableHeader>
            <th>
              <TableHeaderLeft><HText>English</HText></TableHeaderLeft>
            </th>
            <th>
              <TableHeaderCenterOn><HText>Vietnamese</HText></TableHeaderCenterOn>
            </th>
            <th>
              <TableHeaderCenter><HText>Pronunciation</HText></TableHeaderCenter>
            </th>
            <th>
              <TableHeaderCenter><HText>Image</HText></TableHeaderCenter>
            </th>
            <th>
              <TableHeaderRight><HText>Voice</HText></TableHeaderRight>
            </th>
          </TableHeader>
          <tbody>           
            
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCellEngOn><TIB>{item.name}</TIB></TableCellEngOn>
                <TableCellVietOn><TIB>{item.meaning}</TIB></TableCellVietOn>
                <TableCellViet><TIB>{item.sound}</TIB></TableCellViet>
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
        <Buttons to="/coursesinfo"><TIB>Pre</TIB></Buttons>
        <Buttons 
          onClick={ handleMouseEnterLevel}
        >
          <TIB>Next</TIB>
        </Buttons>
        
      </ButtonsContainer>
      {isOpenLevel  && (   // level
        <DropdownLevel
          onMouseEnter={handleMouseEnterLevel}
          onMouseLeave={handleMouseLeaveLevel}
        > Choose the level 
          <DropdownItem to="/layoutlearn" onClick={() => handleSaveCourseLevel(1)} >
            Level 1
          </DropdownItem>
          <DropdownItem to="/layoutlearn" onClick={() => handleSaveCourseLevel(2)} >
            Level 2
          </DropdownItem>
          <DropdownItem to="/layoutlearn" onClick={() => handleSaveCourseLevel(3)} >
            Level 3
          </DropdownItem>
          <DropdownItem to="/layoutlearn" onClick={() => handleSaveCourseLevel(4)} >
            Level 4
          </DropdownItem>
          <DropdownItem to="/layoutlearn" onClick={() => handleSaveCourseLevel(5)} >
            Level 5
          </DropdownItem>
        </DropdownLevel>
      )}
    </>
  );
};

export default Vocab;
