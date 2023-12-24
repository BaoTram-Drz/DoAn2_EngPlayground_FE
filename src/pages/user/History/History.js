import React, { useState, useEffect } from "react";
import { PageName, HistoryContainer, Table, TableRow, TableCellLink, TableCellLeft, TableCellRight, 
  TableCellCenter, TableCellTime,TIC, LinktoCourse } from './History.styled'
import { getHistoryCourses } from "../../../API/coursesApi";
import { AiOutlineArrowRight } from "react-icons/ai";

function History() {
  const [dataHistory, setDataHistory] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseHistoryList = await getHistoryCourses();
        setDataHistory(courseHistoryList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  const extractDateTime = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const year = createdAtDate.getFullYear();
    const month = createdAtDate.getMonth() + 1;
    const day = createdAtDate.getDate();
    const hour = createdAtDate.getHours();
    const minute = createdAtDate.getMinutes();
    const second = createdAtDate.getSeconds();

    return {
      year,
      month,
      day,
      hour,
      minute,
      second,
    };
  };

  const handleToCourse = (name, image, type) => {
    localStorage.setItem('productName', name);
    if (image !== null) {
      localStorage.setItem('image', image);
    }
    if (type !== null) {
      localStorage.setItem('lessonType', type);
  }
    console.log("handleToCourse", localStorage);

  }

  const reversedData = [...dataHistory].reverse();

  return (
      <>
        <PageName>Your history</PageName>
      <HistoryContainer>
        <Table>
          <tbody>
            {reversedData.map((row, index) => (
              <TableRow key={index}>
                <TableCellLink>
                  <LinktoCourse
                    //onClick={() => handleToCourse(row.course, row.image, row.coursesType)} //thêm ở đây nha
                    onClick={() => handleToCourse(row.course, null, 'listen')} 
                    to={
                      '/coursesinfo'
                    }
                  >
                    <AiOutlineArrowRight/>
                  </LinktoCourse>
                </TableCellLink>
                {/* <TableCellLeft><TIC>{row.course}-{row.course}</TIC></TableCellLeft> */}
                <TableCellLeft><TIC>LISTENING - {row.course}</TIC></TableCellLeft>
                <TableCellCenter>{row.status}</TableCellCenter>
                <TableCellTime>
                  {row.createdAt && (
                    <>
                      {extractDateTime(row.createdAt).hour}{":"}
                      {extractDateTime(row.createdAt).minute}{":"}
                      {extractDateTime(row.createdAt).second}
  
                      <i>
                        <br/>
                        {extractDateTime(row.createdAt).day}{"/"}
                        {extractDateTime(row.createdAt).month}{"/"}
                        {extractDateTime(row.createdAt).year}
                      </i>
                 
                    </>
                  )}
                </TableCellTime>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </HistoryContainer>
      </>
  );
};

export default History;
