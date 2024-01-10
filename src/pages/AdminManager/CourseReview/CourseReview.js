import React, { useState, useEffect } from "react";
import {
  CourseReviewContainer,
  PageName,
  Table,
  TableHeader,
  TIH,
  TableHeaderNone,
  TableRow,
  TableCell,
  TableCellNone,
  Links,
} from "./CourseReview.styled";
import { getCourseCensors } from "../../../API/censorApi";

function CourseReview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating data fetching from backend
    const fetchData = async () => {
      try {
        // const response = await fetch('your-backend-api-url');
        // const responseData = await response.json();
        // const loaddata = [
        //   {
        //     topic: 'Fruit',
        //     creator: 'John Doe',
        //     status: 'Approved',
        //     time: '2 hours ago',
        //     approver: 'Jane Smith',
        //   },
        //   {
        //     topic: 'Animal',
        //     creator: 'Alice Johnson',
        //     status: 'Pending',
        //     time: '1 day ago',
        //     approver: 'Bob Williams',
        //   },
        // ];

        const loaddata = await getCourseCensors();
        setData(loaddata);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };

    fetchData();
  }, []);
  const handleLinkClick = (topicName) => {
    // Lưu giá trị vào localStorage
    localStorage.setItem("topicNameCensor", topicName);
  };
  return (
    <CourseReviewContainer>
      <PageName>Course Review</PageName>
      <Table>
        <thead>
          <tr>
            <TableHeader>
              <TIH>Topic</TIH>
            </TableHeader>
            <TableHeader>
              <TIH>Description</TIH>
            </TableHeader>
            <TableHeader>
              <TIH>Level</TIH>
            </TableHeader>
            <TableHeader>
              <TIH>Creator</TIH>
            </TableHeader>
            <TableHeader>
              <TIH>Status</TIH>
            </TableHeader>

            <TableHeader>
              <TIH>Approver</TIH>
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Links
                  to={"/addcourse"}
                  state={{ topicname: item.name }}
                  onClick={() => handleLinkClick(item.name)}
                >
                  {item.name}
                </Links>
              </TableCell>
              <TableCell>
                <TIH>{item.des}</TIH>
              </TableCell>
              <TableCell>
                <TIH>{item.level}</TIH>
              </TableCell>
              <TableCell>
                <TIH>{item.creatorname}</TIH>
              </TableCell>
              <TableCell>
                <TIH>{item.statusCourse}</TIH>
              </TableCell>

              <TableCell>
                <TIH>{item.approvername}</TIH>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </CourseReviewContainer>
  );
}

export default CourseReview;
