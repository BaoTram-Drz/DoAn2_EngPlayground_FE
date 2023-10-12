import React, { useState, useEffect } from "react";
import { BigText, HistoryContainer, Table, TableRow, TableCellLeft, TableCellRight, TableCellCenter } from './History.styled'
import { getHistoryCourses } from "../../../API/coursesApi";

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

  return (
    <HistoryContainer>
      <BigText>Your history</BigText>
      <Table>
        <tbody>
          {dataHistory.map((row, index) => (
            <TableRow key={index}>
              <TableCellRight>{row.course}</TableCellRight>
              <TableCellCenter>{row.status}</TableCellCenter>
              <TableCellRight>
                {row.createdAt && (
                  <>
                    <i>Date (DD/MM/YYYY): &nbsp; </i>{extractDateTime(row.createdAt).day}{"/"}
                    {extractDateTime(row.createdAt).month}{"/"}
                    {extractDateTime(row.createdAt).year}
               
                    <br/>
                    <i> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Time: &nbsp;</i> {extractDateTime(row.createdAt).hour}{":"}
                    {extractDateTime(row.createdAt).minute}{":"}
                    {extractDateTime(row.createdAt).second}
                  </>
                )}
              </TableCellRight>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </HistoryContainer>
  );
};

export default History;
