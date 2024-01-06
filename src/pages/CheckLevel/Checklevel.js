import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BigText,
  Container,
  Content,
  ContentAutourOne,
  Button,
} from "../style/GlobalStyles";
import { getLevelWords } from "../../API/vocabApi";
import { saveChangeInfo } from "../../API/changeInfoApi";

const VocabContainer = styled.div`
  margin: 5px;
  width: calc(100% / 5 - 40px);
  padding: 15px;
  background-color: ${(props) => (props.active ? "#f47068" : "#dcdcdc")};
  color: ${(props) => (props.active ? "white" : "gray")};
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffb3ae;
    color: ${(props) => (props.active ? "white" : "#0e606b")};
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

  &:hover {
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
      <VocabCSS>{vocab}</VocabCSS>
      <br></br>
      {level !== undefined && <LevelCSS> Level {level}</LevelCSS>}
    </VocabContainer>
  );
};

const getRandomWords = (vocabulary, countPerLevel) => {
  const result = [];

  // Lọc và thêm ngẫu nhiên từng level vào kết quả
  for (let level = 1; level <= 5; level++) {
    const filteredByLevel = vocabulary.filter((word) => word.level === level);
    const randomWords = filteredByLevel
      .sort(() => Math.random() - 0.5)
      .slice(0, countPerLevel);
    result.push(...randomWords);
  }
  console.log("Log nè:", result);
  return result;
};
const CheckLevel = () => {
  const [vocabData, setVocabData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getLevelWords();
      setVocabData(data);
      // Số lượng từ bạn muốn lấy cho mỗi level
    };
    fetchData();
  }, []); // Thêm dependency array để tránh lặp vô hạn
  const countPerLevel = 10;

  useEffect(() => {
    if (showWords.length != 0) return;

    console.log("Lấy dữ liệu nè: ", vocabData);
    // Lấy kết quả
    const randomWords = getRandomWords(vocabData, countPerLevel);
    console.log(randomWords);
    setShowWords(randomWords);
  }, [vocabData]);

  function findDuplicates(arr) {
    const duplicates = {};
    const result = [];

    arr.forEach((item, index) => {
      if (arr.indexOf(item, index + 1) !== -1) {
        if (!(item in duplicates)) {
          duplicates[item] = true;
          result.push(item);
        }
      }
    });

    return result;
  }

  const [selectedVocabs, setSelectedVocabs] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showWords, setShowWords] = useState([]);

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
    if (totalScore > 0 && totalScore <= countPerLevel) {
      return 1;
    } else if (totalScore <= 3 * countPerLevel) {
      return 2;
    } else if (totalScore <= 6 * countPerLevel) {
      return 3;
    } else if (totalScore <= 10 * countPerLevel) {
      return 4;
    } else if (totalScore <= 15 * countPerLevel) {
      return 5;
    } else {
      return 0;
    }
  };

  const totalScore = calculateTotalScore();
  const currentLevel = calculateLevel(totalScore);

  return (
    <p>
      <BigText style={{ color: "#FFC24B" }}>CHECK YOUR LEVEL</BigText>
      <Container>
        <VocabCSS style={{ color: "#FFC24B" }}>VOCABULARY</VocabCSS>
        <br />
        <VocabCSS style={{ color: "#FFC24B" }}>Click if you know it!</VocabCSS>
        <VocabDiv>
          {console.log(
            "Trùng nè: ",
            findDuplicates(showWords.map((obj) => obj.vocab))
          )}

          {
            // !submitted &&

            showWords.map((vocabInfo) => (
              <Vocab
                key={vocabInfo._id}
                _id={vocabInfo._id}
                vocab={vocabInfo.vocab}
                level={vocabInfo.level}
                active={selectedVocabs.some((v) => v._id === vocabInfo._id)}
                onClick={() => handleVocabClick(vocabInfo)}
              />
            ))
          }
        </VocabDiv>
        <div>
          {submitted && (
            <>
              <h3 style={{ color: "#f47068" }}>Selected words:</h3>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {selectedVocabs.map((selectedVocab, index) => (
                  <li
                    key={index}
                    style={{
                      width: "calc(20% - 16px)",
                      margin: "8px",
                    }}
                  >
                    <LevelCSS style={{ color: "gray" }}>
                      {selectedVocab.vocab}-Level_{selectedVocab.level}
                    </LevelCSS>
                  </li>
                ))}
              </ul>
              <LevelCSS style={{ color: "#f47068" }}>
                Total Score: {totalScore}
              </LevelCSS>
              <br />
              <br />

              <LevelDiv>
                <LevelCSS>
                  LEVEL BASED ON TOTAL SCORE:
                  <br />- Level 1: from 1 to {countPerLevel}
                  <br />- Level 2: from {countPerLevel + 1} to{" "}
                  {3 * countPerLevel}
                  <br />- Level 3: from {3 * countPerLevel + 1} to{" "}
                  {6 * countPerLevel}
                  <br />- Level 4: from {6 * countPerLevel + 1} to{" "}
                  {10 * countPerLevel}
                  <br />- Level 5: from {10 * countPerLevel + 1} to{" "}
                  {15 * countPerLevel}
                  <br />
                  {/* <br />
                  - Level 2: from 11 to 30
                  <br />
                  - Level 3: from 31 to 60
                  <br />
                  - Level 4: from 61 to 100
                  <br />- Level 5: from 101 to 150 */}
                </LevelCSS>
              </LevelDiv>
              <br />

              <LevelCSS style={{ color: "#FFC24B" }}>
                Now level: {currentLevel}
              </LevelCSS>
              <br />
              <br />
            </>
          )}
          <ButtonsContainer
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {!submitted && (
              <ButtonsContainer>
                <SubButton onClick={handleSubmit} disabled={submitted}>
                  <VocabCSS>{submitted ? "Submitted" : "Submit"}</VocabCSS>
                </SubButton>
              </ButtonsContainer>
            )}

            {submitted && (
              <ButtonsContainer style={{ display: "flex", gap: "8px" }}>
                <SubButton onClick={() => window.location.reload()}>
                  <VocabCSS>Do again</VocabCSS>
                </SubButton>
                <SubButton
                  onClick={() => handleSaveLevel(currentLevel)}
                  style={{ color: "#FFC24B" }}
                >
                  <VocabCSS>Save my level</VocabCSS>
                </SubButton>
              </ButtonsContainer>
            )}
          </ButtonsContainer>
        </div>
      </Container>
    </p>
  );
};

export default CheckLevel;
