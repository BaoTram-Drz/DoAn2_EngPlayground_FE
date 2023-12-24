import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PageName,
  HistoryContainer,
  Table,
  TableRow,
  TableCellLink,
  TableCellLeft,
  TableCellRight,
  TableCellCenter,
  TableCellTime,
  StickyTableRow,
  TIC
} from "./History.styled";
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
    localStorage.setItem('lessonType', type);

    console.log("handleToCourse", localStorage);
  }

  const reversedData = [...dataHistory].reverse();

  return (
    <>
      <PageName>Your history</PageName>
      <HistoryContainer>
        <Table>
          <tbody>
            <StickyTableRow style={{  position: "sticky"}}>
              <TableCellLink></TableCellLink>
              <TableCellLeft
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                <TIC>COURSE</TIC>
              </TableCellLeft>
              <TableCellLeft
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                <TIC>TYPE</TIC>
              </TableCellLeft>
              <TableCellCenter
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                <TIC>STATUS</TIC>
              </TableCellCenter>
              <TableCellTime
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                <TIC>TIME</TIC>
              </TableCellTime>
            </StickyTableRow>

            {reversedData.map((row, index) => (
              <TableRow key={index}>
                <TableCellLink>
               
                  <Link 
                    onClick={() => handleToCourse(index.course, index.coursesType)}
                    to={
                      '/coursesinfo'
                    }
                  >   
                    <AiOutlineArrowRight />
                  </Link>
                </TableCellLink>
                <TableCellLeft><TIC>{row.course}</TIC></TableCellLeft>
                <TableCellLeft><TIC>{row.lessonType}</TIC></TableCellLeft>
                <TableCellCenter>{row.status}</TableCellCenter>
                <TableCellTime>
                  {row.createdAt && (
                    <>
                      {extractDateTime(row.createdAt).hour}
                      {":"}
                      {extractDateTime(row.createdAt).minute}
                      {":"}
                      {extractDateTime(row.createdAt).second}

                      <i>
                        <br />
                        {extractDateTime(row.createdAt).day}
                        {"/"}
                        {extractDateTime(row.createdAt).month}
                        {"/"}
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
}

export default History;
