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

function IdentificationPage({ changePhone, inputsValue, setInputsValue }) {
  return (
    <StyledQuestion>
      <div className="whole_task">
        <div>
          <Slide>
            <h1>Personal identification</h1>
          </Slide>
          <p>Please fill out the form below</p>
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
            <Form.Label className="label_text">Full Name *</Form.Label>
            <Form.Control
              required
              type="text"
              className="input_text"
              placeholder="full name"
              value={inputsValue.name}
              onChange={(event) => {
                setInputsValue({
                  ...inputsValue,
                  name: event.target.value,
                });
              }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter your name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" lg="6" controlId="validationCustomPhone">
            <Form.Label className="label_text">Phone number *</Form.Label>
            <InputGroup hasValidation>
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
              <Form.Control.Feedback type="invalid" className="label_text">
                Please enter a valid phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            lg="6"
            controlId="validationCustomEmergencyPhone"
          >
            <Form.Label className="label_text">Emergency call *</Form.Label>
            <InputGroup hasValidation>
              <PhoneInput
                className="inputPhone"
                placeholder="Enter phone number"
                international
                defaultCountry="US"
                onChange={(e) => changePhone(e)}
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid" className="label_text">
                Please enter a valid phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="6" lg="6" controlId="validationCustomEmail">
            <Form.Label className="label_text">Email address *</Form.Label>
            <Form.Control
              required
              type="email"
              className="input_text"
              placeholder="e.g : jondoe123@gmail.com"
              value={inputsValue.email}
              onChange={(event) => {
                setInputsValue({
                  ...inputsValue,
                  email: event.target.value,
                });
              }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter a valid email address.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            lg="6"
            controlId="validationCustomNationality"
          >
            <Form.Label className="label_text">Nationality *</Form.Label>
            <Form.Control
              required
              type="text"
              className="input_text"
              placeholder="e.g :American"
              value={inputsValue.nationality}
              onChange={(event) => {
                setInputsValue({
                  ...inputsValue,
                  nationality: event.target.value,
                });
              }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter your nationality.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            lg="12"
            controlId="validationCustomAddress"
          >
            <Form.Label className="label_text">Address *</Form.Label>
            <Form.Control
              required
              type="text"
              className="input_text"
              placeholder="e.g : 456 Park Avenue, New York, NY 10022"
              value={inputsValue.address}
              onChange={(event) => {
                setInputsValue({
                  ...inputsValue,
                  address: event.target.value,
                });
              }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter your address.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div``;

export default IdentificationPage;
