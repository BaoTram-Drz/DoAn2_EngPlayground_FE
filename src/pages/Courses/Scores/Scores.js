import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer  } from 'recharts';
import {BackHome, PageName, Container, StyledPieChart, Round, Score,
  Button, ButtonsContainer, WrongText} from './Scores.styled'

const StyledPieChartComponent = ({ data }) => {
  const COLORS = ['#f47068', '#ffb3ae'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

const Scores = () => {
  const location = useLocation();
  const [allScore, setAllScore] = useState(0);
  const [answerScore, setAnswerScore] = useState(0);
  const [correctData, setCorrectData] = useState('');
  const [wrongData, setWrongData] = useState('');  
  const [productName, setProductName] = useState('Product A');

  useEffect(() => {
    if (location.state && location.state.productname) {
      setAnswerScore(location.state.productname);
    }
    if (location.state && location.state.score) {
      setAnswerScore(location.state.score);
    }
    if (location.state && location.state.allScore) {
      setAllScore(location.state.allScore);
    }
    if (location.state && location.state.right) {
      setCorrectData(location.state.right);
    }
    if (location.state && location.state.wrong) {
      setWrongData(location.state.wrong);
    }
    console.log(correctData)
  }, [location.state, correctData, wrongData]);
  const dung = ((answerScore/allScore)*100).toFixed(0);
  const sai = (((allScore - answerScore)/allScore)*100).toFixed(0);

  const data = [
    { name: 'Right', value:(answerScore/allScore)*100 },
    { name: 'no', value: ((allScore - answerScore)/allScore)*100 },
  ];
  const formattedData = wrongData.replace(/:::/g, '<br/>');
  return (
    <>
      <Link to="/"><BackHome /></Link>
      <PageName>Your Scores</PageName>

      <Container>
      <StyledPieChartComponent data={data} />
        <Score>
          <p>Right: {answerScore}/{allScore} ({dung}%) </p>
          <p>Wrong: {allScore - answerScore}/{allScore} ({sai}%) </p>
          <WrongText dangerouslySetInnerHTML={{ __html: formattedData }} />
        </Score>
      </Container>

      <ButtonsContainer>
        <Button to="/bigtest" state={{ productname:productName}} >Test Again</Button>
        <Button to="/league">League</Button>
      </ButtonsContainer>
    </>
  );
};

export default Scores;
