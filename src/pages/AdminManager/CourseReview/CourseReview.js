import React, {useState, useEffect} from 'react';
import {CourseReviewContainer, PageName, Table, TableHeader, 
  TableRow, TableCell, Links} from './CourseReview.styled'

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
            <TableHeader>Topic</TableHeader>
            <TableHeader>Creator</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Approver</TableHeader>
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
              <TableCell>{item.creator}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.approver}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </CourseReviewContainer>
  );
}

export default CourseReview;
