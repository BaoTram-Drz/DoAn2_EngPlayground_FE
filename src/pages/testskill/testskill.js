import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 10%;
  gap: 20px;
`;

export const Vocabulary = styled.p`
  font: normal 400 2rem 'Autour One';
`;

const Button = styled(Link)`
  width: 20%;
  margin-right: 20px;
  padding: 5px 24px;
  font: normal 400 2rem 'Autour One';
  color: #ffc24b;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 14px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const ImageAcc = styled.img`
    width: 200px;
    height: 200px;
    padding: 3%;
    border: 2px dashed #ffc24b;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 1200px) {
      width: 200px;
      height: 200px;
    }
  
    @media (max-width: 540px) {
      width: 150px;
      height: 150px;
    }
  
    @media (max-width: 480px) {
      width: 120px;
      height: 120px;
    }
`;

const SubmitButton = styled(Button)`
  margin-top: 5%;
`;

const convertPngToJpg = (pngFile) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg', 0.9);
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};
function TestSkill () {
  const [userAva, setUserAva] = useState(localStorage.getItem('user').image);
  const [imageUpload, setImageUpload] = useState(null);
  const [userAvaSave, setUserAvaSave] = useState(localStorage.getItem('user').image);

  const fetchData = async () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    const data = { 
      image: currentUser.image
    };
    setUserAva(data.image); 
  };

  useEffect(() => {
    // Gọi hàm fetchData trong useEffect để lấy dữ liệu khi component được render
    fetchData();
  }, []);

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    console.log(imageUpload);
    if (file) {
      const fileName = file.name; // Lấy trường 'name' của tệp ảnh
      console.log('Tên tệp ảnh:', fileName);

      if (file.type === 'image/png') {
        try {
          const jpgFile = await convertPngToJpg(file);
          const imageUrl = URL.createObjectURL(jpgFile);
          console.log(imageUrl);
          setUserAva(imageUrl);
          setUserAvaSave(fileName);
        } catch (error) {
          console.error('Lỗi chuyển đổi PNG sang JPG:', error);
        }
      } else {
        const imageUrl = URL.createObjectURL(file);
        setUserAva(imageUrl);
        setUserAvaSave(fileName);
      }
    }
  };
  const handleCarrotClickChange = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', handleFileInputChange);
    fileInput.click();
  };

  return (
    <Container >
        <SubmitButton to='/testreading'> Test Reading</SubmitButton>
    
        <SubmitButton to='/testlistening'> Test Listening</SubmitButton>

        <SubmitButton onClick={handleCarrotClickChange}>Choose Image</SubmitButton>
        <div>
          <ImageAcc src={userAva} alt="Mô tả hình ảnh" />
        </div>
    </Container>
  );
}

export default TestSkill
;
