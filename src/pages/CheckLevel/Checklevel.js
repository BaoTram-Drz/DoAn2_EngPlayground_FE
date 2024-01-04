import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BigText, Container } from "../style/GlobalStyles";
import { getLevelWords } from "../../API/vocabApi";
import { saveChangeInfo } from "../../API/changeInfoApi";

const VocabContainer = styled.div`
  background-color: ${(props) => (props.active ? "#00FF00" : "gray")};
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#a9a9a9" : "#00FF00")};
  }
`;

const VocabDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Vocab = ({ _id, vocab, level, active, onClick }) => {
  const handleClick = () => {
    onClick({ _id, vocab, level });
  };

  return (
    <VocabContainer onClick={handleClick} active={active}>
      <div>{vocab}</div>
      {level !== undefined && <div> Level {level}</div>}
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
        <h2 style={{ color: "#FFC24B" }}>VOCABULARY</h2>
        <h3 style={{ color: "#FFC24B" }}>Click if you know it!</h3>
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
              <h3 style={{ color: "#FFC24B" }}>Selected words:</h3>
              <ul>
                {selectedVocabs.map((selectedVocab, index) => (
                  <li key={index}>
                    {selectedVocab.vocab} - Level {selectedVocab.level}
                  </li>
                ))}
              </ul>
              <p style={{ color: "#FFC24B" }}>Total Score: {totalScore}</p>

              <p style={{ color: "#FFC24B" }}>
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
              </p>

              <p style={{ color: "#FFC24B" }}>Now level: {currentLevel}</p>
            </>
          )}
          <button onClick={handleSubmit} disabled={submitted}>
            {submitted ? "Submitted" : "Submit"}
          </button>
          {submitted && (
            <button
              onClick={() => handleSaveLevel(currentLevel)}
              style={{ color: "#FFC24B" }}
            >
              Save my level
            </button>
          )}
        </div>
      </Container>
    </p>
  );
};

export default CheckLevel;
