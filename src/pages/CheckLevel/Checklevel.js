import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BigText, Container, Content, ContentAutourOne, Button } from "../style/GlobalStyles";
import { getLevelWords } from "../../API/vocabApi";
import { saveChangeInfo } from "../../API/changeInfoApi";

const VocabContainer = styled.div`
  margin: 5px;
  min-width: 60px;
  padding: 15px;
  background-color: ${(props) => (props.active ? "white" : "white")};
  color: ${(props) => (props.active ? "#f47068" : "#1697a6")};
  border: ${(props) => (props.active ? "2px solid #ffc24b" : "1px dashed #0e606b")}  ;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    border: 2px solid #ffc24b;
    color: ${(props) => (props.active ? "#ffc24b" : "#0e606b")};
  }
`;

const VocabDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
`;
const VocabCSS = styled(Content)`
  font-family: monospace;
`;
const LevelCSS = styled(ContentAutourOne)`
  font-family: monospace;
`;
const LevelDiv = styled.div`
  color: #0e606b;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3% auto;
`;
export const SubButton = styled(Button)`
  color: #f47068;
  background-color: white;
  border: 2px solid #f47068;

  z-index: 2;

  &:hover{
    color: white;
    background-color: #f47068;
  }
`;
const Vocab = ({ _id, vocab, level, active, onClick }) => {
  const handleClick = () => {
    onClick({ _id, vocab, level });
  };

  return (
    <VocabContainer onClick={handleClick} active={active}>
      <VocabCSS>{vocab}</VocabCSS><br></br>
      {level !== undefined && <LevelCSS> Level {level}</LevelCSS>}
    </VocabContainer>
  );
};

const CheckLevel = () => {
  const [vocabData, setVocabData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getLevelWords();
      setVocabData(data);
    };
    fetchData();
  }, []); // Thêm dependency array để tránh lặp vô hạn

  const [selectedVocabs, setSelectedVocabs] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleVocabClick = (vocabInfo) => {
    if (!submitted) {
      const existingIndex = selectedVocabs.findIndex(
        (v) => v._id === vocabInfo._id
      );

      if (existingIndex !== -1) {
        setSelectedVocabs((prevSelectedVocabs) => [
          ...prevSelectedVocabs.slice(0, existingIndex),
          ...prevSelectedVocabs.slice(existingIndex + 1),
        ]);
      } else {
        setSelectedVocabs((prevSelectedVocabs) => [
          ...prevSelectedVocabs,
          vocabInfo,
        ]);
      }
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleSaveLevel = async (currentLevel) => {
    let changeInfo = {
      _id: JSON.parse(localStorage.getItem("user"))._id,
      level: currentLevel,
    };
    const response = await saveChangeInfo(changeInfo);
    console.log(response);
    if (response) {
      let user = JSON.parse(localStorage.getItem("user")) || {};

      // Cập nhật thuộc tính level
      user.level = currentLevel;

      // Lưu thông tin người dùng đã được cập nhật vào localStorage
      localStorage.setItem("user", JSON.stringify(user));
      const reloadEvent = new Event("headerReload");
      window.dispatchEvent(reloadEvent);
    }
  };

  const calculateTotalScore = () => {
    return selectedVocabs.reduce((total, vocab) => total + vocab.level, 0);
  };

  const calculateLevel = (totalScore) => {
    if (totalScore >= 1 && totalScore <= 20) {
      return 1;
    } else if (totalScore <= 60) {
      return 2;
    } else if (totalScore <= 120) {
      return 3;
    } else if (totalScore <= 200) {
      return 4;
    } else if (totalScore <= 300) {
      return 5;
    } else {
      return "Unknown";
    }
  };

  const totalScore = calculateTotalScore();
  const currentLevel = calculateLevel(totalScore);

  return (
    <p>
      <BigText style={{ color: "#FFC24B" }}>CHECK YOUR LEVEL</BigText>
      <Container>
        <VocabCSS style={{ color: "#FFC24B" }}>VOCABULARY</VocabCSS><br/>
        <VocabCSS style={{ color: "#FFC24B" }}>Click if you know it!</VocabCSS>
        <VocabDiv>
          {vocabData.map((vocabInfo) => (
            <Vocab
              key={vocabInfo._id}
              _id={vocabInfo._id}
              vocab={vocabInfo.vocab}
              level={vocabInfo.level}
              active={selectedVocabs.some((v) => v._id === vocabInfo._id)}
              onClick={() => handleVocabClick(vocabInfo)}
            />
          ))}
        </VocabDiv>
        <div>
          {submitted && (
            <>
              <h3 style={{ color: "#f47068" }}>Selected words:</h3>
              <ul>
                {selectedVocabs.map((selectedVocab, index) => (
                  <li key={index}>
                    <LevelCSS style={{ color: "gray" }}>{selectedVocab.vocab} - Level {selectedVocab.level}</LevelCSS>
                  </li>
                ))}
              </ul>
              <LevelCSS style={{ color: "#f47068" }}>Total Score: {totalScore}</LevelCSS><br/><br/>

              <LevelDiv>
                <LevelCSS>
                  LEVEL BASED ON TOTAL SCORE:
                  <br />
                  - Level 1: from 1 to 20
                  <br />
                  - Level 2: from 21 to 60
                  <br />
                  - Level 3: from 61 to 120
                  <br />
                  - Level 4: from 121 to 200
                  <br />- Level 5: from 201 to 300
                </LevelCSS>
              </LevelDiv><br/>

              <LevelCSS style={{ color: "#FFC24B" }}>Now level: {currentLevel}</LevelCSS><br/><br/>
            </>
          )}
          <ButtonsContainer>
            <SubButton onClick={handleSubmit} disabled={submitted}>
              <VocabCSS>{submitted ? "Submitted" : "Submit"}</VocabCSS>
            </SubButton>
            {submitted && (
              <SubButton
                onClick={() => handleSaveLevel(currentLevel)}
                style={{ color: "#FFC24B" }}
              >
                <VocabCSS>Save my level</VocabCSS>
              </SubButton>
            )}
          </ButtonsContainer>
        </div>
      </Container>
    </p>
  );
};

export default CheckLevel;
