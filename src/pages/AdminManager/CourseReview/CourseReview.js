import React, {useState, useEffect} from 'react';
import {CourseReviewContainer, PageName, Table, TableHeader, TIH,TableHeaderNone,
  TableRow, TableCell,TableCellNone, Links} from './CourseReview.styled'

function CourseReview() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating data fetching from backend
    const fetchData = async () => {
      try {
        // const response = await fetch('your-backend-api-url');
        // const responseData = await response.json();
        const loaddata = [
          {
            topic: 'Fruit',
            creator: 'John Doe',
            status: 'Approved',
            time: '2 hours ago',
            approver: 'Jane Smith',
          },
          {
            topic: 'Animal',
            creator: 'Alice Johnson',
            status: 'Pending',
            time: '1 day ago',
            approver: 'Bob Williams',
          },
        ];
        setData(loaddata);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CourseReviewContainer>
      <PageName>Course Review</PageName>
      <Table>
        <thead>
          <tr>
            <TableHeader><TIH>Topic</TIH></TableHeader>
            <TableHeader><TIH>Creator</TIH></TableHeader>
            <TableHeader><TIH>Status</TIH></TableHeader>
            <TableHeaderNone><TIH>Time</TIH></TableHeaderNone>
            <TableHeader><TIH>Approver</TIH></TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Links 
                  to={"/addcourse"}
                  state={{ topicname: item.topic}}
                >
                  {item.topic}
                </Links>
              </TableCell>
              <TableCell><TIH>{item.creator}</TIH></TableCell>
              <TableCell><TIH>{item.status}</TIH></TableCell>
              <TableCellNone><TIH>{item.time}</TIH></TableCellNone>
              <TableCell><TIH>{item.approver}</TIH></TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </CourseReviewContainer>
  );
}

export default CourseReview;
