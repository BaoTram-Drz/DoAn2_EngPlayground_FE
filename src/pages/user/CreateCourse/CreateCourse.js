import React from "react";
import { useState } from "react";
import {Container,TopicName, Text , VocabRowContainer, VocabInput, ParagraphContainer,
  ParagraphInput,ParagraphDetailContainer, ParagraphDetail , Button, SubmitButton} from './CreateCourse.Styled'

function CreateCourse() {
    const [topicName, setTopicName] = useState('');
    const [rows, setRows] = useState(['']);
    const [leftInput, setLeftInput] = useState('');
    const [rightInputs, setRightInputs] = useState(['']);
  
    const handleAddRow = () => {
      if (rows[rows.length - 1]) {
        setRows([...rows, '']);
      }
    };
  
    const handleAddRightInput = () => {
      setRightInputs([...rightInputs, '']);
    };
  
    const handleSubmit = () => {
      // Thực hiện xử lý dữ liệu đã nhập ở đây
      console.log('Topic Name:', topicName);
      console.log('Rows:', rows);
      console.log('Left Input:', leftInput);
      console.log('Right Inputs:', rightInputs);
    };
  
    return (
      <Container>
        <h1>Create Course</h1>
        <TopicName
          placeholder=" Enter Topic Name"
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
        />
        <Text>Vocabulary</Text>
        {[...Array(10)].map((_, index) => (
        <VocabRowContainer key={index}>
          <VocabInput placeholder=" Vocabulary of topic" />
          <VocabInput placeholder=" Vietnamese mean" />
          <VocabInput placeholder=" Ex of vocabulary" />
        </VocabRowContainer>
      ))}
        
        <Text>Paragraph</Text>
        <ParagraphContainer>
          <ParagraphInput placeholder="Đoạn văn" />
          <ParagraphDetailContainer>
            <ParagraphDetail placeholder="Question 1" />
            <ParagraphDetail placeholder="Answer 1" />
            <ParagraphDetail placeholder="Question 2" />
            <ParagraphDetail placeholder="Answer 2" />
            <ParagraphDetail placeholder="Question 3" />
            <ParagraphDetail placeholder="Answer 3" />
            <ParagraphDetail placeholder="Question 4" />
            <ParagraphDetail placeholder="Answer 4" />
            <ParagraphDetail placeholder="Question 5" />
            <ParagraphDetail placeholder="Answer 5" />
          </ParagraphDetailContainer>
        </ParagraphContainer>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Container>
        );
}

export default CreateCourse;