import React, { useState } from "react";
import styled from "styled-components";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import support from "../img/support.png";
import bigLogo from "../img/Vector.png";
import { Slide } from "react-awesome-reveal";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";

function QuestionPage() {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState("");
  const [inputsValue, setInputsValue] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
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
      inputsValue.name
    ) {
      const requestData = {
        name: inputsValue.name,
        companyName: inputsValue.companyName,
        phoneNumber: inputsValue.phoneNumber,
      };

      try {
        // Sending API request
        const response = await axios.post(
          "http://vabank-freight.somee.com/api/Forms/career",
          requestData
        );

        console.log(response);

        // If the request is successful, show a success message
        toast.success("Form submitted successfully!");

        setInputsValue({
          name: "",
          companyName: "",
          phoneNumber: "",
          agree: false,
        });
      } catch (error) {
        // If there's an error with the API request, show an error message
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
      <div className="flex justify-center">
        <div className="flex-1">
          <div className="px-5 pt-5">
            <Slide>
              <h1>Do you have any questions or any offers ?</h1>
            </Slide>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  lg="12"
                  controlId="validationCustom01"
                >
                  <Form.Label className="label_text">Name *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="input_text"
                    value={inputsValue.name}
                    onChange={(event) => {
                      setInputsValue({
                        ...inputsValue,
                        name: event.target.value,
                      });
                    }}
                  />
                  <Form.Control.Feedback type="invalid" className="label_text">
                    Please choose a username.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  lg="12"
                  controlId="validationCustom02"
                >
                  <Form.Label className="label_text">Company name *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="input_text"
                    value={inputsValue.companyName}
                    onChange={(event) => {
                      setInputsValue({
                        ...inputsValue,
                        companyName: event.target.value,
                      });
                    }}
                  />
                  <Form.Control.Feedback type="invalid" className="label_text">
                    Please choose a username.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  lg="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label className="label_text">Phone number *</Form.Label>
                  <InputGroup hasValidation>
                    {/* <Form.Control
                      type="tel"
                      className="input_text"
                      value={inputsValue.phoneNumber}
                      onChange={(event) => {
                        setInputsValue({
                          ...inputsValue,
                          phoneNumber: event.target.value,
                        });
                      }}
                      aria-describedby="inputGroupPrepend"
                      required
                    /> */}

                    <PhoneInput
                      className="inputPhone"
                      placeholder="Enter phone number"
                      value={inputsValue.phoneNumber}
                      international
                      defaultCountry="US"
                      onChange={(e) => changePhone(e)}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="label_text"
                    >
                      Please choose a username.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mt-3">
                  <div className="d-flex align-items-center justify-center">
                    <Form.Check
                      className="mt-3 label_text"
                      required
                      label="I read the terms & conditions and the Privacy policy"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      checked={inputsValue.agree}
                      onChange={(event) => {
                        setInputsValue({
                          ...inputsValue,
                          agree: event.target.checked,
                        });
                      }}
                    />
                  </div>
                </Form.Group>
              </Row>

              <div className="d-flex align-items-center justify-center">
                <Button type="submit" className="mb-3 btn_form">
                  SENT
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div
          className="flex-1 min-h-[89vh] d-lg-inline d-none "
          style={{ backgroundColor: "rgb(255, 150, 47)" }}
        >
          <div className="justify-content-center browwn text-center align-itmes-center text-white">
            <div className="flex align-items-center flex-col gap-16 mt-5">
              <img src={support} alt="" />
              <img src={bigLogo} alt="" width={350} />
            </div>

            <h3 className="mt-16 mb-4" style={{ fontWeight: 300 }}>
              RIGHT CHOICE RIGHT MOVE
            </h3>
            <p className="pp">
              Analyzing previous trends ensures that businesses <br /> always
              make the right decision. And as the scale of <br /> the decision
              and it’s impact magnifies...
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div`
  h1 {
    font-weight: bolder;
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

  .browwn {
    .big-img {
      margin-top: 20%;
    }
    .pp {
      padding: 0 10px;
      color: rgb(207, 217, 224);
      font-size: 19px;
    }
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

  .btn_form {
    text-align: center;
    border-radius: 8px;
    padding: 15px;
    width: 360px;
    border: 2px solid white;
    background: rgb(255, 150, 47);
  }
  .btn_form:hover {
    background-color: white;
    color: rgb(255, 150, 47);
    border: 2px solid rgb(255, 150, 47);
  }

  @media screen and (max-width: 600px) {
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
    .btn_form {
      padding: 7px 13px;
      font-size: 15px;
      margin: 0 !important;
    }
  }
`;

export default QuestionPage;
