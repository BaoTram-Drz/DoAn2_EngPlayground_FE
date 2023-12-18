import React, { useState, useEffect } from "react";
import { PageName, HistoryContainer, Table, TableRow, TableCellLink, TableCellLeft, TableCellRight, 
  TableCellCenter, TableCellTime } from './History.styled'
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
                  <AiOutlineArrowRight/>
                </TableCellLink>
                <TableCellLeft>{row.course}</TableCellLeft>
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
