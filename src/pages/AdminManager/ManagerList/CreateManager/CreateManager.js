import React from 'react';
import styled from 'styled-components';
import { BigText2 } from '../../../style/GlobalStyles';


const CreateManagerContainer = styled.div`
  width: 60%;
  margin: 2% auto;
  padding: 20px;
`;

export const PageName = styled(BigText2)`
  color: #1697a6;
`;

const Form = styled.form`
  margin: 5%;
  display: flex;
  flex-direction: column;
`;

const DivRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Title = styled.p`
  width: 100%;
  font-family: monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #1697a6;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 85%;
    font-size: 16px;
  }

  @media (max-width: 415px) {
    width: 90%;
    font-size: 12px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 6px;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #0e606b;
  border: none;
  border-bottom: 1px solid #0e606b;
  border-radius: 0px;
  outline: none;
  &:active {
    border: none;
  }
  &:placeholder {
    color: #0e606b;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    width: 85%;
    height: 70px;
    border-radius: 15px;
  }
  @media (max-width: 480px) {

  }
  @media (max-width: 415px) {
    width: 90%;
    height: 60px;
    border-radius: 10px;
  }
`;

export const SubButton = styled.button`
  margin: 5% auto 0 auto;
  padding: 12px 24px;
  background: #0e606b;
  border: none;
  border-radius: 5px;
  text-align: center;
  
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    font-size: 16px
  }
  @media (max-width: 415px) {
    width: 90%;
    height: 60px;
    border-radius: 10px;
  }

`;

function CreateManager() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const managerData = {};
    formData.forEach((value, key) => {
      managerData[key] = value;
    });
    console.log('Manager data:', managerData);
    // Add logic to save managerData to the database
  };

  return (
    <CreateManagerContainer>
      <PageName>Create Manager</PageName>
      <Form onSubmit={handleSubmit}>
          <DivRow>
            <Title htmlFor="name">Full Name:</Title>
            <FormInput type="text" id="name" name="name" placeholder="Enter manager full name..." required />
          </DivRow>

          <DivRow>
            <Title htmlFor="dob">Date of Birth:</Title>
            <FormInput type="date" id="dob" name="dob" placeholder="Enter manager full name..." required />
          </DivRow>

          <DivRow>
            <Title htmlFor="email">Email:</Title>
            <FormInput type="email" id="email" name="email" placeholder="Enter manager email..." required />
          </DivRow>

          <DivRow>
            <Title htmlFor="password">Password:</Title>
            <FormInput type="password" id="password" name="password" placeholder="Enter manager password..." required />
          </DivRow>

        {/* Add more form fields for additional manager information */}
        <SubButton type="submit">Create Manager</SubButton>
      </Form>
    </CreateManagerContainer>
  );
}

export default CreateManager;
