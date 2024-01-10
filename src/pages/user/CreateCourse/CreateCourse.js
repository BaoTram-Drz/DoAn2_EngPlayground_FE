import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  Container,
  TopicName,
  Text,
  VocabRowContainer,
  VocabInput,
  FileInput,
  ParagraphContainer,
  ParagraphInput,
  ParagraphDetailContainer,
  ParagraphDetail,
  DivOneButton,
  OneButton,
  TwoButton,
  TextInButton,
  SubmitButton,
  DeleteButton,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  ImageVoc,
} from "./CreateCourse.Styled";
import { storage } from "../../../firebase/firebase";
import { uploadBytes } from "firebase/storage";
import { ref } from "firebase/storage";
import { createNewCourseToCensor } from "../../../API/censorApi";
import { addVocabToCensor } from "../../../API/censorApi";
function CreateCourse() {
  const [topicName, setTopicName] = useState("");
  const [topicDescription, setTopicDescription] = useState("");
  const [topicLevel, setTopicLevel] = useState("");

  //table vocab
  const [vocabData, setVocabData] = useState([]);
  //vocab in line
  const [vocab, setVocab] = useState("");
  const [vietnameseMean, setVietnameseMean] = useState("");
  const [sound, setSound] = useState("");

  const [showForm, setShowForm] = useState(false);

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const [paragraph, setParagraph] = useState("");
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

  const [image, setImage] = useState(
    "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
  );

  const [imageUpload, setImageUpload] = useState([]);
  const [imageVocabSaveDB, setImageVocabSaveDB] = useState([]);

  const [imageTopic, setImageTopic] = useState(
    "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
  );
  const [imageTopicUpload, setImageTopicUpload] = useState(null);
  const [imageTopicSaveDB, setImageTopicSaveDB] = useState(
    "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
  );

  const handleManualButtonClick = () => {
    setShowForm(true);
    setExcelFile(null);
  };

  const handleAddButtonClick = () => {
    if (
      !vocab.trim() ||
      !vietnameseMean.trim() ||
      !sound.trim() ||
      !image.trim()
    ) {
      alert("Please fill in all vocab fields");
      return;
    }

    const newVocabData = {
      topic: topicName.toLowerCase(),
      name: vocab,
      meaning: vietnameseMean,
      sound: sound,
      image: image,
    };

    setVocabData([...vocabData, newVocabData]);

    setVocab("");
    setVietnameseMean("");
    setSound("");
    setImage("https://www.eclosio.ong/wp-content/uploads/2018/08/default.png");
  };

  const handleDeleteRow = (index) => {
    // Tạo một bản sao của mảng vocabData
    const updatedVocabData = [...vocabData];
    const updatedImageUpload = [...imageUpload];
    const updatedImageVocabSaveDB = [...imageVocabSaveDB];

    // Xóa phần tử ở vị trí index
    updatedVocabData.splice(index, 1);
    updatedImageUpload.splice(index, 1);
    updatedImageVocabSaveDB.splice(index, 1);

    // Cập nhật state vocabData
    setVocabData(updatedVocabData);
    setImageUpload(updatedImageUpload);
    setImageVocabSaveDB(updatedImageVocabSaveDB);
  };

  const handleFile = (e) => {
    setShowForm(false);

    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFile(null);
        alert("Please select only Excel file types");
      }
    } else {
      setExcelFile(null);
      console.log("Please select your file");
    }
  };

  // const handleQuestionChange = (index, value) => {
  //   // Cập nhật dữ liệu câu hỏi ở vị trí index trong mảng
  //   const updatedQuestionsAndAnswers = [...questionsAndAnswers];
  //   updatedQuestionsAndAnswers[index - 1] = {
  //     ...updatedQuestionsAndAnswers[index - 1],
  //     question: value,
  //   };
  //   setQuestionsAndAnswers(updatedQuestionsAndAnswers);
  // };

  const handleSubmit = async () => {
    console.log(vocabData, imageUpload, imageVocabSaveDB);
    if (!topicName) {
      alert("Topic Name is required");
      return;
    }
    if (vocabData.length < 2) {
      alert("You need at least 10 words");
      return;
    }
    console.log("Chủ đề lưu nè: ", imageTopicSaveDB);
    console.log("Chủ đề nè: ", topicName);
    console.log("Hình chủ đề nè: ", imageTopic);

    console.log("Từ vựng lưu nè: ", imageVocabSaveDB);
    console.log("Từ vựng nè: ", vocabData);
    console.log("Từ vựng hình nè: ", imageUpload);
    const saveData = vocabData.map((item, index) => {
      return {
        ...item,
        image: imageVocabSaveDB[index],
        topic: topicName.toLowerCase(),
      };
    });

    console.log(saveData);

    const uploadImageToFirebase = async (selectedFile, fileName) => {
      try {
        // Lấy tham chiếu đến Firebase Storage
        const storageRef = ref(storage);

        // Tên của tệp bạn muốn tải lên và dữ liệu tệp
        // Thay "image.jpg" bằng tên tệp thực tế
        const fileData = selectedFile;

        // Tạo tham chiếu đến tệp trên Firebase Storage
        const imageRef = ref(storageRef, fileName);

        // Lấy tham chiếu đến thư mục bạn muốn tải lên

        // Tạo tham chiếu đến tệp trên Firebase Storage
        uploadBytes(imageRef, fileData)
          .then((snapshot) => {
            console.log("Tải lên thành công:", snapshot);
          })
          .catch((error) => {
            console.error("Lỗi khi tải lên:", error);
          });
      } catch (error) {
        console.error("Lỗi khi tải ảnh lên Firebase Storage:", error);
        throw error; // Ném lỗi để xử lý ở nơi gọi hàm này nếu cần
      }
    };

    const newCourse = {
      name: topicName,
      image: imageTopicSaveDB,
      des: topicDescription,
      level: topicLevel,
      amount: 0,
      creatorname: JSON.parse(localStorage.getItem("user")).name,
      statusCourse: "Pending",
      approvername: "",
    };
    const addVocabToCensors = await addVocabToCensor(saveData);
    const creatNewCourseToCensor = await createNewCourseToCensor(newCourse);

    await Promise.all(
      imageUpload.map(
        async (file, index) =>
          await uploadImageToFirebase(
            file,
            topicName + "/" + imageVocabSaveDB[index]
          )
      )
    );
    await uploadImageToFirebase(
      imageTopicUpload,
      "courses/" + imageTopicSaveDB
    );
  };
  const handleCarrotClickChange = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", handleFileInputChange);
    fileInput.click();
  };
  const handleCarrotClickChangeTopic = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", handleFileInputChangeTopic);
    fileInput.click();
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    setImageUpload((prev) => [...prev, file]);
    console.log(imageUpload);
    if (file) {
      const fileName = file.name; // Lấy trường 'name' của tệp ảnh
      console.log("Tên tệp ảnh:", fileName);

      if (file.type === "image/png") {
        try {
          const jpgFile = await convertPngToJpg(file);
          const imageUrl = URL.createObjectURL(jpgFile);
          console.log(imageUrl);
          setImage(imageUrl);
          setImageVocabSaveDB((prev) => [...prev, fileName]);
        } catch (error) {
          console.error("Lỗi chuyển đổi PNG sang JPG:", error);
        }
      } else {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        setImageVocabSaveDB((prev) => [...prev, fileName]);
      }
    }
  };
  const handleFileInputChangeTopic = async (event) => {
    const file = event.target.files[0];
    setImageTopicUpload(file);
    console.log(imageTopicUpload);
    if (file) {
      const fileName = file.name; // Lấy trường 'name' của tệp ảnh
      console.log("Tên tệp ảnh:", fileName);

      if (file.type === "image/png") {
        try {
          const jpgFile = await convertPngToJpg(file);
          const imageUrl = URL.createObjectURL(jpgFile);
          console.log(imageUrl);
          setImageTopic(imageUrl);
          setImageTopicSaveDB(fileName);
        } catch (error) {
          console.error("Lỗi chuyển đổi PNG sang JPG:", error);
        }
      } else {
        const imageUrl = URL.createObjectURL(file);
        setImageTopic(imageUrl);
        setImageTopicSaveDB(fileName);
      }
    }
  };
  const convertPngToJpg = (pngFile) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            resolve(blob);
          },
          "image/jpeg",
          0.9
        );
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleInputLevelChange = (e) => {
    const input = e.target.value;

    // Kiểm tra xem giá trị nhập vào có phải là số từ 1 đến 5 không
    if (/^[1-5]$|^$/.test(input)) {
      setTopicLevel(input);
    }
  };
  return (
    <Container>
      <TopicName
        placeholder=" Enter Topic Name..."
        value={topicName}
        onChange={(e) => setTopicName(e.target.value)}
      />
      <TopicName
        placeholder=" Enter Topic Description..."
        value={topicDescription}
        onChange={(e) => setTopicDescription(e.target.value)}
      />
      <Text>Topic Level (1-5):</Text>
      <TopicName
        placeholder="Enter Topic Level..."
        value={topicLevel}
        onChange={handleInputLevelChange}
      />

      <ImageVoc
        src={imageTopic}
        alt="Mô tả hình ảnh"
        onClick={handleCarrotClickChangeTopic}
        style={{
          width: "150px",
          height: "150px",
        }}
      ></ImageVoc>
      <Text>Vocabulary</Text>
      <DivOneButton>
        <OneButton onClick={handleManualButtonClick}>
          <TextInButton>Add vocabulary</TextInButton>
        </OneButton>
        <FileInput type="file" required onChange={handleFile} />
      </DivOneButton>

      {showForm && (
        <>
          <VocabRowContainer>
            <VocabInput
              placeholder="Vocabulary of topic"
              value={vocab}
              onChange={(e) => setVocab(e.target.value)}
            />
            <VocabInput
              placeholder="Vietnamese meaning"
              value={vietnameseMean}
              onChange={(e) => setVietnameseMean(e.target.value)}
            />
            <VocabInput
              placeholder="Sound"
              value={sound}
              onChange={(e) => setSound(e.target.value)}
            />
            <ImageVoc
              src={image}
              alt="Mô tả hình ảnh"
              onClick={handleCarrotClickChange}
              style={{
                width: "150px",
                height: "150px",
              }}
            ></ImageVoc>
            <TwoButton onClick={handleAddButtonClick}>
              <TextInButton>Add to table</TextInButton>
            </TwoButton>
          </VocabRowContainer>

          <Table>
            <tbody>
              {vocabData.map((vocabItem, index) => (
                <TableRow key={index}>
                  <TableCell>{vocabItem.name}</TableCell>
                  <TableCell>{vocabItem.meaning}</TableCell>
                  <TableCell>{vocabItem.sound}</TableCell>
                  <TableCell>
                    <div>
                      <img
                        src={vocabItem.image}
                        style={{
                          width: "75px",
                          aspectRatio: "1/1",
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <DeleteButton onClick={() => handleDeleteRow(index)}>
                      Delete
                    </DeleteButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      )}

      {/* <Text>Paragraph</Text>
      <ParagraphContainer>
        <ParagraphInput
          placeholder="Paragraph..."
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <ParagraphDetailContainer>
          {[1, 2, 3, 4, 5].map((index) => (
            <React.Fragment key={index}>
              <ParagraphDetail
                placeholder={`Question ${index}...`}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
              />
              <ParagraphDetail
                placeholder={`Answer ${index}...`}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            </React.Fragment>
          ))}
        </ParagraphDetailContainer>
      </ParagraphContainer> */}

      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
  );
}

export default CreateCourse;
