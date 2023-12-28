import React, { useState } from "react";
import * as XLSX from 'xlsx';
import {
  Container, TopicName, Text, VocabRowContainer, VocabInput, FileInput,
  ParagraphContainer, ParagraphInput, ParagraphDetailContainer, ParagraphDetail,
  DivOneButton, OneButton, TwoButton,TextInButton, SubmitButton, DeleteButton, Table, TableHeader, TableCell, TableRow 
} from './CreateCourse.Styled';

function CreateCourse() {
  const [topicName, setTopicName] = useState('');

  //table vocab
  const [vocabData, setVocabData] = useState([]);
  //vocab in line
  const [vocab, setVocab] = useState('');
  const [vietnameseMean, setVietnameseMean] = useState('');
  const [example, setExample] = useState('');
  const [showForm, setShowForm] = useState(false);

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const [paragraph, setParagraph] = useState('');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  
  const handleManualButtonClick = () => {
    setShowForm(true);
    setExcelFile(null);
  };

  const handleAddButtonClick = () => {
    const newVocabData = { vocab, vietnameseMean, example };
    setVocabData([...vocabData, newVocabData]);

    setVocab('');
    setVietnameseMean('');
    setExample('');
  };

  const handleDeleteRow = (index) => {
    // Tạo một bản sao của mảng vocabData
    const updatedVocabData = [...vocabData];
    // Xóa phần tử ở vị trí index
    updatedVocabData.splice(index, 1);
    // Cập nhật state vocabData
    setVocabData(updatedVocabData);
  };

  const handleFile = (e) => {
    setShowForm(false);

    let fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ];

    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFile(null);
        alert('Please select only Excel file types');
      }
    } else {
      setExcelFile(null);
      console.log('Please select your file');
    }
  };

  const handleQuestionChange = (index, value) => {
    // Cập nhật dữ liệu câu hỏi ở vị trí index trong mảng
    const updatedQuestionsAndAnswers = [...questionsAndAnswers];
    updatedQuestionsAndAnswers[index - 1] = { ...updatedQuestionsAndAnswers[index - 1], question: value };
    setQuestionsAndAnswers(updatedQuestionsAndAnswers);
  };

  const handleAnswerChange = (index, value) => {
    // Cập nhật dữ liệu câu trả lời ở vị trí index trong mảng
    const updatedQuestionsAndAnswers = [...questionsAndAnswers];
    updatedQuestionsAndAnswers[index - 1] = { ...updatedQuestionsAndAnswers[index - 1], answer: value };
    setQuestionsAndAnswers(updatedQuestionsAndAnswers);
  };

  const handleSubmit = () => {
    if (!topicName) {
      alert('Topic Name is required');
      return;
    }
    if (vocabData.length < 10) {
      alert('You need at least 10 vocabularies');
      return;
    }
    if (!paragraph) {
      alert('Paragraph is required');
      return;
    }
    if (questionsAndAnswers.length < 5 || questionsAndAnswers.some(item => !item.question || !item.answer)) {
      alert('You need at least 5 questions and answers');
      return;
    };
    console.log('Topic Name:', topicName);
    console.log('Vocab:', vocabData);
    console.log('excel:', excelFile);

    // Hiển thị dữ liệu đoạn văn
    console.log('Paragraph:', paragraph);
    console.log('Questions and Answers:', questionsAndAnswers);
  };

  return (
    <Container>
      <TopicName
        placeholder=" Enter Topic Name..."
        value={topicName}
        onChange={(e) => setTopicName(e.target.value)}
      />
      <Text>Vocabulary</Text>
      <DivOneButton>
        <OneButton onClick={handleManualButtonClick}><TextInButton>Add vocabulary</TextInButton></OneButton>
        <FileInput type="file" required onChange={handleFile} />
      </DivOneButton>

      {showForm && (
        <>
          <VocabRowContainer>
            <VocabInput
              placeholder="Vocabulary of topic"
              value={vocab}
              onChange={(e) => setVocab(e.target.value)}
            />
            <VocabInput
              placeholder="Vietnamese mean"
              value={vietnameseMean}
              onChange={(e) => setVietnameseMean(e.target.value)}
            />
            <VocabInput
              placeholder="Example of vocabulary"
              value={example}
              onChange={(e) => setExample(e.target.value)}
            />
            <TwoButton onClick={handleAddButtonClick}><TextInButton>Add to table</TextInButton></TwoButton>
          </VocabRowContainer>

          <Table>
            <tbody>
              {vocabData.map((vocabItem, index) => (
                <TableRow key={index}>
                  <TableCell>{vocabItem.vocab}</TableCell>
                  <TableCell>{vocabItem.vietnameseMean}</TableCell>
                  <TableCell>{vocabItem.example}</TableCell>
                  <TableCell>
                    <DeleteButton onClick={() => handleDeleteRow(index)}>Delete</DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      )}

      <Text>Paragraph</Text>
      <ParagraphContainer>
        <ParagraphInput
          placeholder="Paragraph..."
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <ParagraphDetailContainer>
          {[1, 2, 3, 4, 5].map((index) => (
            <React.Fragment key={index}>
              <ParagraphDetail
                placeholder={`Question ${index}...`}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
              />
              <ParagraphDetail
                placeholder={`Answer ${index}...`}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            </React.Fragment>
          ))}
        </ParagraphDetailContainer>
      </ParagraphContainer>

      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
  );
}

export default CreateCourse;
