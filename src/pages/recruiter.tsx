import React, { useState } from "react";
import styled from "styled-components";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import bigLogo from "../img/logoo 1 (1).png";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import IdentificationPage from "../components/recruiter/Identification";
import SpecificationPage from "../components/recruiter/Specification";
import WorkExperiencePage from "../components/recruiter/WorkExperience";

function Recruiter() {
  const [validated, setValidated] = useState(false);
  const [inputsValue, setInputsValue] = useState({
    name: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    nationality: "",
    address: "",
    englishLevel: "",
    chooseOption: "",
    milesPerDay: "",
    agree: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    console.log(inputsValue);

    if (
      inputsValue.agree &&
      inputsValue.companyName &&
      inputsValue.phoneNumber &&
      inputsValue.name &&
      inputsValue.lastName &&
      inputsValue.email &&
      inputsValue.nationality &&
      inputsValue.address &&
      inputsValue.englishLevel &&
      inputsValue.chooseOption &&
      inputsValue.milesPerDay
    ) {
      const requestData = {
        name: inputsValue.name,
        lastName: inputsValue.lastName,
        companyName: inputsValue.companyName,
        phoneNumber: inputsValue.phoneNumber,
        email: inputsValue.email,
        nationality: inputsValue.nationality,
        address: inputsValue.address,
        englishLevel: inputsValue.englishLevel,
        chooseOption: inputsValue.chooseOption,
        milesPerDay: inputsValue.milesPerDay,
      };

      try {
        const response = await axios.post(
          "http://vabank-freight.somee.com/api/Forms/career",
          requestData
        );

        console.log(response);

        toast.success("Form submitted successfully!");

        setInputsValue({
          name: "",
          lastName: "",
          companyName: "",
          phoneNumber: "",
          email: "",
          nationality: "",
          address: "",
          englishLevel: "",
          chooseOption: "",
          milesPerDay: "",
          agree: false,
        });
      } catch (error) {
        toast.error("Error submitting form. Please try again later.");
      }
    }
  };

  const changePhone = (e) => {
    setInputsValue({
      ...inputsValue,
      phoneNumber: e,
    });
  };

  return (
    <StyledQuestion>
      <div className=" flex align-items-center justify-center flex-col gap-5 pt-14 box_top">
        <img src={bigLogo} alt="" width={100} />

        <div>
          <p>VEBANK FREIGHT DRIVER</p>

          <h1>APPLICATION</h1>
        </div>
      </div>

      <div className="flex justify-center container ">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* IdentificationPage */}
          <IdentificationPage
            changePhone={changePhone}
            inputsValue={inputsValue}
            setInputsValue={setInputsValue}
          />
          {/* IdentificationPage */}

          {/* SpecificationPage */}
          <SpecificationPage
            validated={validated}
            inputsValue={inputsValue}
            setInputsValue={setInputsValue}
          />
          {/* SpecificationPage */}

          {/* WorkExperiencePage */}
          <WorkExperiencePage validated={validated} inputsValue={inputsValue} />
          {/* WorkExperiencePage */}
        </Form>
      </div>
      <ToastContainer />
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div`
  background-color: rgb(255, 150, 47) !important;

  .container {
    padding: 0 10px !important;
    max-width: 700px !important;
  }
  .form-select {
    --bs-form-select-bg-img: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23FF960f' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E") !important;
  }

  .inputPhone {
    width: 100% !important;
  }

  .inputPhone input {
    border-radius: 5px;
    padding: 15px !important;
    box-sizing: border-box;
    border: 1px solid rgb(201, 201, 201);
  }

  .label_text {
    margin-top: 20px !important;
  }

  .invalid-feedback {
    margin-top: 0 !important;
  }

  .input_text {
    padding: 15px !important;
    box-sizing: border-box;
    border: 1px solid rgb(201, 201, 201);
  }

  .box_top p {
    color: rgb(255, 255, 255);
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 7px;
    margin: 0;
    padding: 0;
    margin-bottom: -14px;
  }

  .box_top h1 {
    color: rgb(255, 255, 255);
    font-family: "Montserrat", sans-serif;
    font-size: 78px;
    font-weight: 700;
    line-height: 132px;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .box_top {
    text-align: center;
  }

  .whole_task {
    margin: 30px 10px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 2px 2px 20.2px 0px rgba(57, 57, 57, 0.3);
    padding: 30px 20px !important;
  }

  .whole_task > div h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 40px !important;
    font-weight: 600;
    line-height: 49px;
  }

  .whole_task > div p {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
  }

  ::placeholder {
    color: rgb(197, 197, 197);
  }

  ::-ms-input-placeholder {
    color: rgb(197, 197, 197);
  }

  @media screen and (max-width: 600px) {
    .area_input_history {
      height: 130px !important;
    }

    input,
    textarea {
      font-size: 13px !important;
    }

    .front_side {
      height: 100px;
    }

    .sigCanvas {
      width: 300px;
    }

    .box_top img {
      width: 70px;
    }

    .box_top p {
      font-size: 20px;
      letter-spacing: 3px;
      margin: 0;
      padding: 0;
      margin-bottom: -30px;
    }

    .box_top {
      gap: 20px !important;
    }

    .box_top h1 {
      font-size: 35px;
      padding: 0;
      margin: 0;
    }

    .btn_form {
      width: 100% !important;
    }
    .form-label,
    label,
    .invalid-feedback,
    .valid-feedback {
      margin-top: 0 !important;
      font-size: 13px !important;
    }

    .label_text {
      margin-top: 13px !important;
    }

    .input_text,
    .inputPhone input {
      padding: 5px !important;
      box-sizing: border-box;
      border: 1px solid rgb(201, 201, 201) !important;
    }
  }
`;

export default Recruiter;
