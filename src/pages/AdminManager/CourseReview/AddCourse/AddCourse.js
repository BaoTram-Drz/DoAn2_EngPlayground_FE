import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  AddCourseContainer,
  PageName,
  Table,
  TableHeader1,
  TableRow1,
  TableCell,
  Text1,
  Text3,
  CommentBox,
  ButtonGroup,
  Button,
} from "./AddCourse.styled";
import {
  getVocabularyCensors,
  saveCourseApprove,
  saveVocabularyApprove,
} from "../../../../API/censorApi";

function AddCourse() {
  const [topicName, setTopicName] = useState(
    localStorage.getItem("topicNameCensor")
  );
  const [vocabulary, setVocabulary] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.topicname) {
      setTopicName(location.state.topicname);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVocabularyCensors(topicName);
        console.log(response);
        setVocabulary(response);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    };

    fetchData();
  }, [topicName]);
  const handleApprove = async () => {
    Swal.fire({
      title: "Are you sure you want to save it?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Run both saveCourseApprove and saveVocabularyApprove concurrently
          const [saveCourseResult, saveVocabularyResult] = await Promise.all([
            saveCourseApprove(topicName),
            saveVocabularyApprove(topicName),
          ]);

          // Check if both operations were successful
          if (saveCourseResult && saveVocabularyResult) {
            Swal.fire({
              title: "Approved",
              text: "The data has been saved.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "There was an error saving the data.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error during approval:", error);
          Swal.fire({
            title: "Error",
            text: "There was an error saving the data.",
            icon: "error",
          });
        }
      }
    });
  };
  const handleRequestCorrection = () => {
    // Set the paragraph state or perform any other logic
    setParagraph("Request Correction");
  };

  return (
    <AddCourseContainer>
      <PageName>Topic name - {topicName}</PageName>
      <Text1>Vocabulary</Text1>
      <Table>
        <thead>
          <tr>
            <TableHeader1>English</TableHeader1>
            <TableHeader1>Meaning</TableHeader1>
            <TableHeader1>Sound</TableHeader1>
            <TableHeader1>Image</TableHeader1>
          </tr>
        </thead>
        <tbody>
          {vocabulary.map((item, index) => (
            <TableRow1 key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.meaning}</TableCell>
              <TableCell>{item.sound}</TableCell>
              <TableCell>{item.image}</TableCell>
            </TableRow1>
          ))}
        </tbody>
      </Table>

      {paragraph === "Request Correction" && (
        <CommentBox>
          <Text3>Request:</Text3>
          <textarea placeholder="Enter your comment here..."></textarea>
        </CommentBox>
      )}

      <ButtonGroup>
        <Button onClick={handleRequestCorrection}>Request Correction</Button>
        <Button onClick={handleApprove}>Approve</Button>
      </ButtonGroup>
    </AddCourseContainer>
  );
}

export default AddCourse;
