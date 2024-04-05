import React, { useState } from "react";
import styled from "styled-components";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import ep_upload from "../../img/ep_upload-filled.png";
import { Slide } from "react-awesome-reveal";
import SignatureCanvas from "react-signature-canvas";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";

function WorkExperiencePage({ validated, inputsValue }) {
  const [sign, setSign] = useState(null);
  const [url, setUrl] = useState(null);

  const handleClear = () => {
    sign.clear();
  };

  const handleGenerator = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <StyledQuestion>
      <div className="whole_task">
        <div>
          <Slide>
            <h1>Work experience</h1>
          </Slide>
          <p>Please fill out the form below</p>
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
            <Form.Label className="label_text">Employment History*</Form.Label>

            <p className="text_info_label">
              Give a COMPLETE RECORD of the last 3 employments
            </p>

            <p className="text_info_label mt-4">
              Please write Employment dates, Company name, Position, Company
              phone or email
            </p>

            <Form.Control
              required
              as="textarea"
              style={{ height: "200px" }}
              className="input_text area_input_history"
              //   value={inputsValue.name}
              //   onChange={(event) => {
              //     setInputsValue({
              //       ...inputsValue,
              //       name: event.target.value,
              //     });
              //   }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter your name.
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
            <Form.Label className="label_text">Driving Experience *</Form.Label>
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
              Give a COMPLETE RECORD of the last 3 employments
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
              //   value={inputsValue.milesPerDay}
              //   onChange={(event) => {
              //     setInputsValue({
              //       ...inputsValue,
              //       milesPerDay: event.target.value,
              //     });
              //   }}
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

          <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
            <Form.Label className="label_text">
              Violations for past three (3) years *
            </Form.Label>

            <p className="text_info_label mt-1">
              Please specify Date, Location, Charge, Penalty
            </p>

            <p className="text_info_label ">
              (If you have no violation, please write Clean Record)
            </p>

            <Form.Control
              required
              as="textarea"
              style={{ height: "110px" }}
              className="input_text"
              //   value={inputsValue.name}
              //   onChange={(event) => {
              //     setInputsValue({
              //       ...inputsValue,
              //       name: event.target.value,
              //     });
              //   }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter your name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
            <Form.Label className="label_text">CDL (Front side) *</Form.Label>

            <p className="text_info_label mt-1">
              Please attach clear picture and not expired
            </p>

            <p className="text_info_label ">1) Front side of your Valid CDL</p>

            <label
              className="cursor-pointer text-[18px] front_side flex justify-center align-items-center gap-3"
              htmlFor="front_side"
            >
              <img src={ep_upload} alt="none" />

              <p>Click to ,Upload your image</p>

              <input className="d-none" type="file" id="front_side" />
            </label>
          </Form.Group>

          <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
            <Form.Label className="label_text">CDL (Back side) *</Form.Label>

            <p className="text_info_label mt-1">
              Please attach clear picture and not expired
            </p>

            <p className="text_info_label ">1) Front side of your Valid CDL</p>

            <label
              className="cursor-pointer text-[18px] front_side flex justify-center align-items-center gap-3"
              htmlFor="front_side"
            >
              <img src={ep_upload} alt="none" />

              <p>Click to ,Upload your image</p>

              <input className="d-none" type="file" id="front_side" />
            </label>
          </Form.Group>

          <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
            <Form.Label className="label_text">
              MEDICAL CERTIFICATE *
            </Form.Label>

            <p className="text_info_label mt-1">
              Please attach clear picture and not expired
            </p>

            <p className="text_info_label ">2) Medical certificate</p>

            <label
              className="cursor-pointer text-[18px] front_side flex justify-center align-items-center gap-3"
              htmlFor="front_side"
            >
              <img src={ep_upload} alt="none" />

              <p>Click to ,Upload your image</p>

              <input className="d-none" type="file" id="front_side" />
            </label>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            lg="12"
            controlId="validationCustomAddress"
          >
            <Form.Label className="label_text">Recruiter name *</Form.Label>
            <Form.Control
              required
              type="text"
              className="input_text"

              // value={inputsValue.address}
              // onChange={(event) => {
              //   setInputsValue({
              //     ...inputsValue,
              //     address: event.target.value,
              //   });
              // }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter your address.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            lg="12"
            controlId="validationCustomAddress"
          >
            <Form.Label className="label_text">
              Date of Application *
            </Form.Label>
            <Form.Control
              required
              type="date"
              className="input_text"
              // value={inputsValue.address}
              // onChange={(event) => {
              //   setInputsValue({
              //     ...inputsValue,
              //     address: event.target.value,
              //   });
              // }}
            />
            <Form.Control.Feedback type="invalid" className="label_text">
              Please enter your address.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
            <Form.Label className="label_text">
              To Be Read and Signed by Applicant: *
            </Form.Label>

            <p className="text_info_label my-2">
              It is agreed and understood that the motor carrier or his agents
              may investigate the applicant’s background to obtain any and all
              information of concern to applicant’s record. I hereby confirm
              that I have thoroughly reviewed and filled out the application for
              the truck driver position. I certify that all the information
              provided is accurate and complete to the best of my knowledge.
              Furthermore, I acknowledge that any false or misleading
              information in this application may result in the rejection of my
              application
            </p>
            <div className=" flex justify-center my-4">
              <SignatureCanvas
                penColor="#00008A"
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: "sigCanvas area_bottom",
                }}
                ref={(data) => setSign(data)}
              />
            </div>

            <div className="flex gap-2">
              <button className="sign_btn" onClick={handleClear}>
                Remove
              </button>
              <button className="sign_btn" onClick={handleGenerator}>
                Accept
              </button>
            </div>

            <img src={url ? url : ""} alt="" />
          </Form.Group>
          {/* -------------------------------------------- */}
        </Row>

        <div className="d-flex align-items-center justify-between mt-5">
          <button className="btn_submit">BACK</button>

          <button type="submit" className=" btn_submit">
            SENT
          </button>
        </div>
      </div>
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div`
  .text_info_label {
    font-size: 13px !important;
    font-weight: 400;
    padding: 0;
    margin: 0;
    margin-bottom: 7px;
    margin-top: -7px;
    color: rgb(22, 22, 22);
  }

  .front_side {
    height: 275px;
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    border: 2px dashed rgb(201, 201, 201);
    border-radius: 8px;
  }

  .front_side p {
    color: rgb(197, 197, 197);
    font-family: "Montserrat", sans-serif;
    font-size: 14px !important;
    font-weight: 500 !important;
    line-height: 21px !important;
    margin: 0;
    padding: 0;
  }

  .area_bottom {
    border: 2px dashed rgb(201, 201, 201);
    border-radius: 8px;
  }

  .sign_btn {
    padding: 10px 35px;
    box-sizing: border-box;
    border: 1px solid rgb(201, 201, 201);
    border-radius: 8px;
    color: rgb(0, 0, 0);
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    transition: all 0.3s;
  }

  .sign_btn:hover {
    transition: all 0.3s;
    color: rgb(255, 150, 47);
  }

  .btn_submit {
    box-sizing: border-box;
    border: 1px solid rgb(255, 150, 47);
    border-radius: 8px;
    background: rgb(255, 150, 47);
    padding: 10px 50px;
    color: white;
    transition: all 0.3s !important;
  }

  .btn_submit:hover {
    transition: all 0.3s !important;
    background: white;
    color: rgb(255, 150, 47);
  }
`;

export default WorkExperiencePage;
