import React, { useState } from 'react';
import styled from 'styled-components';
import { BigText, Container } from '../style/GlobalStyles';

const VocabContainer = styled.div`
  background-color: ${(props) => (props.active ? '#00FF00' : 'gray')};
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#a9a9a9' : '#00FF00')};
  }
`;

const VocabDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Vocab = ({ id, vocab, level, active, onClick }) => {
  const handleClick = () => {
    onClick({ id, vocab, level });
  };

  return (
    <VocabContainer onClick={handleClick} active={active}>
      <div>{vocab}</div>
      {level !== undefined && <div> a</div>}
    </VocabContainer>
  );
};

const CheckLevel = () => {
  const vocabData = [
    { id: 1, vocab: 'Từ vựng 1', level: 1 },
    { id: 2, vocab: 'Từ vựng 2', level: 2 },
    { id: 3, vocab: 'Từ vựng 3', level: 1 },
    { id: 4, vocab: 'Từ vựng 4', level: 1 },
    { id: 5, vocab: 'Từ vựng 5', level: 2 },
    { id: 6, vocab: 'Từ vựng 6', level: 1 },
    { id: 7, vocab: 'Từ vựng 7', level: 1 },
    { id: 8, vocab: 'Từ vựng 8', level: 2 },
    { id: 9, vocab: 'Từ vựng 9', level: 1 },
    // Thêm dữ liệu từ vựng nếu cần
  ];

  const [selectedVocabs, setSelectedVocabs] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleVocabClick = (vocabInfo) => {
    if (!submitted) {
      const existingIndex = selectedVocabs.findIndex((v) => v.id === vocabInfo.id);

      if (existingIndex !== -1) {
        setSelectedVocabs((prevSelectedVocabs) => [
          ...prevSelectedVocabs.slice(0, existingIndex),
          ...prevSelectedVocabs.slice(existingIndex + 1),
        ]);
      } else {
        setSelectedVocabs((prevSelectedVocabs) => [...prevSelectedVocabs, vocabInfo]);
      }
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  const handleSaveLevel = () =>{
    
  }

  const calculateTotalScore = () => {
    return selectedVocabs.reduce((total, vocab) => total + vocab.level, 0);
  };

  return (
    <p>
      <BigText>Đánh giá trình độ của bạn</BigText>
      <Container>
        <h2>Từ vựng và ý nghĩa</h2>
        <VocabDiv>
          {vocabData.map((vocabInfo) => (
            <Vocab
              key={vocabInfo.id}
              id={vocabInfo.id}
              vocab={vocabInfo.vocab}
              level={vocabInfo.level}
              active={selectedVocabs.some((v) => v.id === vocabInfo.id)}
              onClick={() => handleVocabClick(vocabInfo)}
            />
          ))}
        </VocabDiv>
        <div>
          {submitted && (
            <>
              <h3>Từ vựng đã chọn:</h3>
              <ul>
                {selectedVocabs.map((selectedVocab, index) => (
                  <li key={index}>{selectedVocab.vocab} - Level {selectedVocab.level}</li>
                ))}
              </ul>
              <p>Total Score: {calculateTotalScore()}</p>
              <p>Now level: </p>
            </>
          )}
          <button onClick={handleSubmit} disabled={submitted}>
            {submitted ? 'Submitted' : 'Submit'}
          </button>
          {submitted && (<button onClick={handleSaveLevel}>
            Save my level
          </button>
          )}
        </div>
      </Container>
    </p>
  );
};

export default CheckLevel;
