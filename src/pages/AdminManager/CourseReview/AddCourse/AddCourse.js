import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import {AddCourseContainer, PageName, Table, TableHeader1, TableHeader2, 
  TableRow1, TableRow2, TableCell, Text1, Text2, Text3, Section, CommentBox, 
  ButtonGroup, Button} from './AddCourse.styled'
import { VocabularyData, Paragraph, QaData } from './data';


function AddCourse() {
  const [topicName, setTopicName] = useState('Topic Name');
  const [vocabulary, setVocabulary] = useState([]);
  const [qaData, setQaData] = useState([]);
  const [paragraph, setParagraph] = useState('');
  const location = useLocation();

  useEffect(() => {
      if (location.state && location.state.topicname) {
        setTopicName(location.state.topicname);
      }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-backend-api-url');
        // const data = await response.json();
        // setVocabulary(data.vocabulary);
        // setQaData(data.qaData);
        // setParagraph(data.paragraph);
        setVocabulary(VocabularyData);
        setQaData(QaData);
        setParagraph(Paragraph);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchData(); 
  }, []);

  const handleApprove = (topicName) => {
    Swal.fire({
      title: 'Are you sure you want to save it?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        // Reject logic goes here
        Swal.fire({
          title: 'Rejected',
          text: 'The data has been save.',
          icon: 'success',
        });
      }
    });
  };

  const handleRequestCorrection = () => {
    const commentTextArea = document.querySelector('textarea');
    const comment = commentTextArea.value;

    if (comment.trim() === '') {
      Swal.fire('Error', 'Please enter a comment before requesting correction.', 'error');
      return;
    }

    const sendDataToBackend = async () => {
      // try {
      //   const response = await fetch('your-backend-api-url', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ comment }),
      //   });

      //   if (response.ok) {
      //     Swal.fire('Success', 'Correction request sent successfully.', 'success');
      //     commentTextArea.value = '';
      //   } else {
      //     Swal.fire('Error', 'Failed to send correction request.', 'error');
      //   }
      // } catch (error) {
      //   console.error('Error sending data to backend:', error);
      //   Swal.fire('Error', 'An error occurred while sending correction request.', 'error');
      // }
    };

    sendDataToBackend();
  };

  return (
    <AddCourseContainer>
      <PageName>Topic name - {topicName}</PageName>
      <Text1>Vocabulary</Text1>
      <Table>
        <thead>
          <tr>
            <TableHeader1>English</TableHeader1>
            <TableHeader1>Meaning</TableHeader1>
            <TableHeader1>Example</TableHeader1>
          </tr>
        </thead>
        <tbody>
          {vocabulary.map((item, index) => (
            <TableRow1 key={index}>
              <TableCell>{item.english}</TableCell>
              <TableCell>{item.meaning}</TableCell>
              <TableCell>{item.example}</TableCell>
            </TableRow1>
          ))}
        </tbody>
      </Table>

      <Text2>Paragraph</Text2>      
      <Section>{paragraph} </Section>

      <Table>
        <thead>
          <tr>
            <TableHeader2>Question</TableHeader2>
            <TableHeader2>Answer</TableHeader2>
          </tr>
        </thead>
        <tbody>
          {qaData.map((item, index) => (
            <TableRow2 key={index}>
              <TableCell>{item.question}</TableCell>
              <TableCell>{item.answer}</TableCell>
            </TableRow2>
          ))}
        </tbody>
      </Table>

      <CommentBox>
        <Text3>Request:</Text3>
        <textarea placeholder="Enter your comment here..."></textarea>
      </CommentBox>

      <ButtonGroup>
        <Button onClick={handleRequestCorrection}>Request Correction</Button>
        <Button onClick={handleApprove}>Approve</Button>
      </ButtonGroup>
    </AddCourseContainer>
  );
}

export default AddCourse;
