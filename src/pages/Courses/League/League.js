import React, { useState, useEffect } from "react";
import top1 from './image/top1.png'
import top2 from './image/top2.png'
import top3 from './image/top3.png'
import { Link, useLocation } from 'react-router-dom';
import { getLeague, getLeagueThisCourse, getLeagueMeAll, getLeagueMeThis } from '../../../API/topLeague';
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase/firebase'
import { ref } from 'firebase/storage'
import {BackHome,PageName,Table, FlexContainer, TableHeaderLeftRes, TableContainer, 
  TableCellRight, TableHeaderRightRes, TableRow, TableCellLeft, TableCellLeftText,
  TableCellRightText, ImageTop, ImageAcc, Exp} from './League.styled';

const League = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [userAll, setUserAll] = useState([]);
  const [userThis, setUserThis] = useState([]);
  const [productName, setProductName] = useState('');
  const location = useLocation();

  useEffect(() => {
    setProductName(localStorage.getItem('productName'));
    // console.log(localSto)
    // console.log(productName)
    const fetchLearns = async () => {
      console.log(productName)
      try {
        //const learnData = await getLearns();
        const topAll = await getLeague();
        console.log(topAll)
        for (let i = 0; i < topAll.length; i++) {
          const path = 'users/' + topAll[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          topAll[i].image = downloadURL;
        }

        const topThisCourse = await getLeagueThisCourse();
        console.log(topThisCourse)
        for (let i = 0; i < topThisCourse.length; i++) {
          const path = 'users/' + topThisCourse[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          topThisCourse[i].image = downloadURL;
        }

        const userAll = await getLeagueMeAll();
        console.log(userAll)
        for (let i = 0; i < userAll.length; i++) {
          const path = 'users/' + userAll[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          userAll[i].image = downloadURL;
        };

        const userThis = await getLeagueMeThis();
        console.log(userThis)
        for (let i = 0; i < userThis.length; i++) {
          const path = 'users/' + userThis[i].image;
          const downloadURL = await getDownloadURL(ref(storage, path));
          userThis[i].image = downloadURL;
        };

        setData1(topAll);
        setData2(topThisCourse);

        setUserAll(userAll);
        setUserThis(userThis);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLearns();
  }, []);

  return (
    <>
      <Link to="/cardList"><BackHome /></Link>
      <PageName>TOP LEAGUE OF </PageName>
      <Table>
        <tbody>
          <FlexContainer>
            <td>
              <TableHeaderLeftRes>{productName}</TableHeaderLeftRes>
              <TableContainer>
                {data2.map((item) => (
                  <TableRow key={item.id}>
                    <TableCellLeft>
                      {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                      {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                      {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                      {item.top === 1 ? null : item.top === 2 ? null : item.top === 3 ? null : item.top}
                    </TableCellLeft>
                    <TableCellLeft>
                      <ImageAcc src={item.image} alt={item.user} />
                    </TableCellLeft>
                    <TableCellLeft><TableCellLeftText>{item.user}</TableCellLeftText></TableCellLeft>
                    <Exp>{item.score}pt</Exp>
                  </TableRow>
                ))}
              </TableContainer>
            </td>
            <td>
              <TableHeaderRightRes>ALL COURSES</TableHeaderRightRes>
              <TableContainer>
                {data1.map((item) => (
                  <TableRow key={item.id}>
                    <TableCellRight>
                      {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                      {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                      {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                      {item.top === 1 ? null : item.top === 2 ? null : item.top === 3 ? null : item.top}
                    </TableCellRight>
                    <TableCellRight>
                      <ImageAcc src={item.image} alt={item.user} />
                    </TableCellRight>
                    <TableCellRight><TableCellRightText>{item.user}</TableCellRightText></TableCellRight>
                    <Exp>{item.score}pt</Exp>
                  </TableRow>
                ))}
              </TableContainer>
            </td>

          </FlexContainer>
        </tbody>
      </Table>
      <PageName> MY POSITION IN LEAGUE OF</PageName>
      <Table>
        <tbody>
          <FlexContainer>
            <td>
              <TableHeaderLeftRes>{productName}</TableHeaderLeftRes>
              <TableContainer>
           
                  {userThis.map((item) => (
                    <TableRow key={item.id}>
                      <TableCellRight>
                        {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                        {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                        {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                        {item.top === 1 ? null : item.top === 2 ? null : item.top === 3 ? null : item.top}
                      </TableCellRight>
                      <TableCellRight>
                        <ImageAcc src={item.image} alt={item.user} />
                      </TableCellRight>
                      <TableCellLeft><TableCellLeftText>{item.user}</TableCellLeftText></TableCellLeft>
                      <Exp>{item.score}pt</Exp>
                    </TableRow>
                  ))}
               
              </TableContainer>
            </td>
            <td>
              <TableHeaderRightRes>ALL COURSES</TableHeaderRightRes>
              <TableContainer>
            
                  {userAll.map((item) => (
                    <TableRow key={item.id}>
                      <TableCellRight>
                        {item.top === 1 ? <ImageTop src={top1} alt="Top 1" /> : null}
                        {item.top === 2 ? <ImageTop src={top2} alt="Top 2" /> : null}
                        {item.top === 3 ? <ImageTop src={top3} alt="Top 3" /> : null}
                        {item.top === 1 ? null : item.top === 2 ? null : item.top === 3 ? null : item.top}
                      </TableCellRight>
                      <TableCellRight>
                        <ImageAcc src={item.image} alt={item.user} />
                      </TableCellRight>
                      <TableCellRight><TableCellRightText>{item.user}</TableCellRightText></TableCellRight>
                      <Exp>{item.score}pt</Exp>
                    </TableRow>
                  ))}
            
              </TableContainer>
            </td>
          </FlexContainer>
        </tbody>
      </Table>

    </>

  );
};

export default League;
