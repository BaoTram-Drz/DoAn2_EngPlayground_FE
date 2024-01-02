import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BigText2 } from "../../../style/GlobalStyles";
import { SnackBarContext } from "../../../../App";
import { saveNewUser } from "../../../../API/signUpApi";
import color_constants from "../../../../color";
import {CreateManagerContainer, PageName, Form, DivRow, FormInput, Title, SubButton, SubmitButton} from './CreateManager.styled'


function CreateManager() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpenSnackbar = useContext(SnackBarContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: formData.email, // Update this according to your data structure
      name: formData.name,
      password: formData.password,
      email: formData.email,
      dateofbirth: formData.dob,
      image: "default.jpg",
      role: "manager",
    };

    try {
      const response = await saveNewUser(newUser);
      console.log("Success:", response);

      window.location.href = "/managerlist";
      handleOpenSnackbar(color_constants.green_color, "Success", 3000);
    } catch (error) {
      console.log("Error:", error);
      handleOpenSnackbar(color_constants.red_color, "Fail to Sign Up", 3000);
    }
  };

  return (
    <CreateManagerContainer>
      <PageName>Create Manager</PageName>
      <Form onSubmit={handleSubmit}>
        <DivRow>
          <Title htmlFor="name">Full Name:</Title>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Enter manager full name..."
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </DivRow>

        <DivRow>
          <Title htmlFor="dob">Date of Birth:</Title>
          <FormInput
            type="date"
            id="dob"
            name="dob"
            placeholder="Enter manager full name..."
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </DivRow>

        <DivRow>
          <Title htmlFor="email">Email:</Title>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter manager email..."
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </DivRow>

        <DivRow>
          <Title htmlFor="password">Password:</Title>
          <FormInput
            type="password"
            id="password"
            name="password"
            placeholder="Enter manager password..."
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </DivRow>

        <SubmitButton type="submit">Create Manager</SubmitButton>
      </Form>
    </CreateManagerContainer>
  );
}

export default CreateManager;
