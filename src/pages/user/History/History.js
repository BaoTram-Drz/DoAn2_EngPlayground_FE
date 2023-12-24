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
            <StickyTableRow style={{  position: "sticky"}}>
              <TableCellLink></TableCellLink>
              <TableCellLeft
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                COURSE
              </TableCellLeft>
              <TableCellLeft
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                TYPE
              </TableCellLeft>
              <TableCellCenter
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                STATUS
              </TableCellCenter>
              <TableCellTime
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                TIME
              </TableCellTime>
            </StickyTableRow>
            {reversedData.map((row, index) => (
              <TableRow key={index}>
                <TableCellLink>
               
                  <Link to={`/courseInfo`}>   <AiOutlineArrowRight /></Link>
                </TableCellLink>
                <TableCellLeft>{row.course}</TableCellLeft>
                <TableCellLeft>{row.lessonType}</TableCellLeft>
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
