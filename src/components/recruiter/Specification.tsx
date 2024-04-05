import React, { useState } from "react";
import styled from "styled-components";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import bigLogo from "../img/logoo 1 (1).png";
import { Slide } from "react-awesome-reveal";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";

function SpecificationPage({ validated, inputsValue, setInputsValue }) {
  return (
    <StyledQuestion>
      <div className="whole_task">
        <div>
          <Slide>
            <h1>Personal specification</h1>
          </Slide>

          <p>Please fill out the form below</p>
        </div>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="12"
            lg="12"
            controlId="validationCustomEnglishLevel"
            className={
              validated && !inputsValue.englishLevel ? "is-invalid" : ""
            }
          >
            <Form.Label className="label_text">
              Please specify your English Level Proficiency *
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              className="input_text"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid rgb(201, 201, 201)",
                backgroundColor: "white",
                color: "black",
              }}
              value={inputsValue.englishLevel}
              onChange={(event) => {
                setInputsValue({
                  ...inputsValue,
                  englishLevel: event.target.value,
                });
              }}
            >
              <option value="" className="d-none"></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid" className="label_text">
              Please specify your English Level Proficiency.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            lg="12"
            controlId="validationCustomChooseOption"
            className={
              validated && !inputsValue.chooseOption ? "is-invalid" : ""
            }
          >
            <Form.Label className="label_text">
              Please choose one of the options *
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              className="input_text"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid rgb(201, 201, 201)",
                backgroundColor: "white",
                color: "black",
              }}
              value={inputsValue.chooseOption}
              onChange={(event) => {
                setInputsValue({
                  ...inputsValue,
                  chooseOption: event.target.value,
                });
              }}
            >
              <option value="" className="d-none"></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid" className="label_text">
              Please choose one of the options.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            lg="12"
            controlId="validationCustomMilesPerDay"
            className={
              validated && !inputsValue.milesPerDay ? "is-invalid" : ""
            }
          >
            <Form.Label className="label_text">
              How many miles can you drive in a day *
            </Form.Label>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 400,
                padding: 0,
                margin: 0,
                marginBottom: "7px",
                marginTop: "-7px",
                color: "rgb(22, 22, 22)",
              }}
            >
              Shown as straight through transit miles
            </p>
            <Form.Select
              aria-label="Default select example"
              required
              className="input_text"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid rgb(201, 201, 201)",
                backgroundColor: "white",
                color: "black",
              }}
              value={inputsValue.milesPerDay}
              onChange={(event) => {
                setInputsValue({
                  ...inputsValue,
                  milesPerDay: event.target.value,
                });
              }}
            >
              <option value="" className="d-none"></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid" className="label_text">
              Please specify how many miles you can drive in a day.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div``;

export default SpecificationPage;
