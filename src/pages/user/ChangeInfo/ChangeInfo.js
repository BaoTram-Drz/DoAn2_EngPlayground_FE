import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getInfo, saveChangeInfo } from '../../../API/changeInfoApi';

import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase/firebase'
import { uploadBytes } from 'firebase/storage';
import { ref } from 'firebase/storage'
import {
  BackHome, BigText, Container, ImageAcc, Text, ButtonChange, Title, FormInput,
  Left, Right, Carrot, Table, TableCellLeft, TableCellRight, But, Button,
} from './ChangeInfo.style'

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

function ChangeInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [renewpassword, setReNewPassword] = useState('');
  const [role, setRole] = useState('');
  const [isEditableName, setIsEditableName] = useState(false);
  const [isEditableEmail, setIsEditableEmail] = useState(false);
  const [isEditablePass, setIsEditablePass] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const newPasswordInputRef = useRef(null);
  
  const [userAva, setUserAva] = useState(localStorage.getItem('user').image);
  const [imageUpload, setImageUpload] = useState(null);
  const [userAvaSave, setUserAvaSave] = useState(localStorage.getItem('user').image);
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Enter old password');

  const fetchData = async () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));

    const data = {
      name: currentUser.name,
      email: currentUser.email,
      password: currentUser.password,
      image: currentUser.image
    };
    setUserAva(data.image);
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);   
    setRole(currentUser.role);
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

  const handleCarrotClickName = () => {
    setIsEditableName(true);
    nameInputRef.current.focus();
    nameInputRef.current.style.color = '#FFC24B';
  };

  const handleCarrotClickEmail = () => {
    setIsEditableEmail(true);
    emailInputRef.current.focus();
    emailInputRef.current.style.color = '#FFC24B';
  };

  const handleCarrotClickPass = () => {
    setIsEditablePass(true);
    passwordInputRef.current.focus();
    passwordInputRef.current.style.color = '#FFC24B';
    setPassword("");
    setPasswordPlaceholder('Enter old password');
  };

// Hàm tải lên ảnh lên Firebase Storage
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
      console.error('Lỗi khi tải ảnh lên Firebase Storage:', error);
      throw error; // Ném lỗi để xử lý ở nơi gọi hàm này nếu cần
  }
};

// Hàm xử lý form submit
const handleSubmit = async () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));

  try {
      let changeInfo = {
          _id: currentUser._id,
          name: name,
          email: email,
      };

      if (userAvaSave) {
          // Đặt tên tệp ảnh trên Firebase Storage
          const fileName = 'users/' + userAvaSave;
console.log(imageUpload);
          // Gọi hàm tải lên ảnh
          await uploadImageToFirebase(imageUpload, fileName);

          // Thêm trường image vào đối tượng changeInfo
          changeInfo.image = userAvaSave;
      }

      if (newpassword && renewpassword && password === currentUser.password) {
          changeInfo.password = newpassword;
      }

      const response = await saveChangeInfo(changeInfo);
      console.log('Thay đổi thông tin thành công:', response);
  } catch (error) {
      console.error('Lỗi thay đổi thông tin:', error);
  }
};

  return (
    <>
      <Link to="/home"><BackHome /></Link>
      <BigText>Change your information</BigText>
      <Container>
        <Left>
          <ImageAcc src={userAva} alt="Mô tả hình ảnh" />
          <Text>
            Change Your Avatar
            <ButtonChange><Carrot onClick={handleCarrotClickChange} /></ButtonChange>
          </Text>
        </Left>
        <Right>
          <Table>
            <tbody>
              <tr>
                <TableCellLeft><Title>Your name:</Title></TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    readOnly={!isEditableName}
                    ref={nameInputRef}
                  />
                </TableCellRight>
                <td><Carrot onClick={handleCarrotClickName} /></td>
              </tr>
              <tr>
                <TableCellLeft><Title>Your email:</Title></TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    readOnly={!isEditableEmail}
                    ref={emailInputRef}
                  />
                </TableCellRight>
                <td><Carrot onClick={handleCarrotClickEmail} /></td>
              </tr>
              <tr>
                <TableCellLeft><Title>Password:</Title></TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    readOnly={!isEditablePass}
                    ref={passwordInputRef}
                    placeholder={passwordPlaceholder}
                  />
                </TableCellRight>
                <td><Carrot onClick={handleCarrotClickPass} /></td>
              </tr>
              <tr>
                <TableCellLeft>
                  <Title style={{ display: isEditablePass ? 'block' : 'none' }}>
                    New-Password:
                  </Title>
                </TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="password"
                    value={newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    readOnly={!isEditablePass}
                    ref={newPasswordInputRef}
                    style={{ display: isEditablePass ? 'block' : 'none' }}
                    placeholder="Enter new password"
                  />
                </TableCellRight>
                <td></td>
              </tr>
              <tr>
                <TableCellLeft>
                  <Title style={{ display: isEditablePass ? 'block' : 'none' }}>
                    Re-New-Password:
                  </Title>
                </TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="password"
                    value={renewpassword}
                    onChange={(e) => setReNewPassword(e.target.value)}
                    readOnly={!isEditablePass}
                    ref={newPasswordInputRef}
                    style={{ display: isEditablePass ? 'block' : 'none' }}
                    placeholder="Re-enter new password"
                  />
                </TableCellRight>

                
                <td></td>
              </tr>

              <tr>
                <TableCellLeft><Title>Your role:</Title></TableCellLeft>
                <TableCellRight>
                  <FormInput
                    type="text"
                    value={role}
                
                    readOnly={!isEditableName}
                 
                  />
                </TableCellRight>
              
              </tr>
            </tbody>
          </Table>
        </Right>
      </Container>
      <But><Button onClick={handleSubmit}>Save</Button></But>
    </>
  );
};

export default ChangeInfo;