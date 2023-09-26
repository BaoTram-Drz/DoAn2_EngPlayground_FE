import React, { useState, useEffect } from "react";
import {Answers, TableWrapper, TableRow, TableCell, InputCell, ImageAns} from './Game2.styled'

const Game2 = ({ data, onSelectAnswer }) => {
  const [answer, setAnswer] = useState("");
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0);

  const dataAnswer = {
    id: data._id,
    answerState: state,
    score: score,
  };

  useEffect(() => {
    if (answer === data.correctAnswer) {
      setScore(data.score);
      setState(true)
    } else {
      setScore(0);
      setState(false)
    }

    const answerString = JSON.stringify(dataAnswer);
    onSelectAnswer(answerString);
  }, [answer,state, score]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Answers>{data.question}</Answers>
      <TableWrapper>
        <TableRow>
          <TableCell>
            <ImageAns src={data.image} alt="A" />
          </TableCell>
          <TableCell>{data.vietnamesePhrase}</TableCell>
        </TableRow>
        <InputCell
          placeholder="........."
          onChange={(e) => setAnswer(e.target.value.toLowerCase())}
        />
      </TableWrapper>
    </>
  );
};

export default Game2;
