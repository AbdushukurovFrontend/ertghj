import React, { useState } from "react";
import styled from "styled-components";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { JackInTheBox, Slide } from "react-awesome-reveal";
const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"];

function Footer() {
  const [validated, setValidated] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [inputsValue, setInputsValue] = useState({
    name: "",
    message: "",
    email: "",
    attachment: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const formData = new FormData();
    formData.append("attachment", inputsValue.attachment);
    formData.append("name", inputsValue.name);
    formData.append("message", inputsValue.message);
    formData.append("email", inputsValue.email);

    if (
      inputsValue.attachment &&
      inputsValue.email.includes("@") &&
      inputsValue.email &&
      inputsValue.message &&
      inputsValue.name
    ) {
      setLoading(true);
      try {
        await axios.post(
          "http://vabank-freight.somee.com/api/Forms/contact",
          formData,
          {
            onUploadProgress: (progressEvent) => {
              setProgress(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            },
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        toast.success("Very Good!");

        setInputsValue({
          name: "",
          message: "",
          email: "",
          attachment: null,
        });
        setImageURL(null);

        setProgress(0);
      } catch (error) {
        setLoading(false);
        toast.error("Error");
      } finally {
        setLoading(false);
      }
    } else {
      if (!!validated) {
        setError("Choose File!");
      } else {
        setError("");
      }
    }
  };

  const getFileExtension = (filename) => {
    return filename.split(".").pop().toLowerCase();
  };

  const isImageFile = (filename) => {
    const extension = getFileExtension(filename);
    return imageExtensions.includes(extension);
  };

  const handleFileChange = (event) => {
    setError("");

    const file = event.target.files[0];
    setInputsValue({
      ...inputsValue,
      attachment: file,
    });

    if (isImageFile(file.name)) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    } else {
      setImageURL(null);
    }
  };

  return (
    <StyledFooter>
      <footer className="bg_color pt-40 pb-5 mt-5">
        <div className="container text-white" id="for-driver">
          <div className="align-items-center row">
            <div className="col-lg-6 card-box">
              <Slide>
                <h1 className="fw-bold mt-20 display-5 text-center text-md-start p-0 m-0">
                  For More Details
                  <br />
                  Contact Us!
                </h1>
              </Slide>
              <div className="flex align-items-center footer_hrm">
                <div className="fs-6">
                  <FaCircle />
                </div>
                <div className="footer_hr"></div>
              </div>

              <JackInTheBox>
                <p className="footer_p text-center text-md-start">
                  Send our team a quick message with your question, project
                  ideas and we’ll get back to you as soon as possible. We’re
                  pretty responsive and will try to respond in a few hours 🙂
                </p>
              </JackInTheBox>
              <p className=" fw-bold fs-4 text-center text-md-start">
                Follow us :
              </p>
              <JackInTheBox className="flex flex-col mb-20">
                <ul className="footer_ul fs-4  w-100">
                  <li className="flex align-items-center gap-2 justify-content-center justify-content-md-start">
                    <a className="text-white" href="#">
                      <FaFacebook />
                    </a>
                    Facebook
                  </li>
                  <li className="flex justify-content-center justify-content-md-start align-items-center gap-2 ">
                    <a className="text-white" href="#">
                      <FaTwitter />
                    </a>
                    Twitter
                  </li>
                  <li className="flex justify-content-center justify-content-md-start align-items-center gap-2 ">
                    <a className="text-white" href="#">
                      <FaLinkedin />
                    </a>
                    LinkedIn
                  </li>
                  <li className="flex justify-content-center justify-content-md-start align-items-center gap-2 ">
                    <a className="text-white" href="#">
                      <FaInstagram />
                    </a>
                    Instagram
                  </li>
                </ul>
              </JackInTheBox>
            </div>

            <div className="col-lg-6">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col xl={10} md={12}>
                    <Form.Group controlId="validationCustom01">
                      <Form.Label className="footer_label">
                        Full Name *
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={inputsValue.name}
                        onChange={(event) =>
                          setInputsValue({
                            ...inputsValue,
                            name: event.target.value,
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col xl={10} md={12} className="mt-3">
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label className="footer_label">
                        Email address *
                      </Form.Label>
                      <Form.Control
                        required
                        type="email"
                        value={inputsValue.email}
                        onChange={(event) =>
                          setInputsValue({
                            ...inputsValue,
                            email: event.target.value,
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col xl={10} md={12} className="mt-3">
                    <Form.Group controlId="floatingTextarea">
                      <Form.Label className="footer_label">
                        Comment or Message *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        required
                        value={inputsValue.message}
                        onChange={(event) =>
                          setInputsValue({
                            ...inputsValue,
                            message: event.target.value,
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a message.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {loading ? (
                    <Col xs={10} className="d-flex justify-center my-3">
                      <div className="wrapper">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                      </div>
                    </Col>
                  ) : error ? (
                    <h4 className="text-danger my-3">{error}</h4>
                  ) : null}

                  <Col md={6} xs={6} className="mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <label
                        className="cursor-pointer text-[18px] "
                        htmlFor="files"
                      >
                        Attache file
                        <input
                          className="d-none"
                          type="file"
                          id="files"
                          onChange={handleFileChange}
                        />
                      </label>
                    </Form.Group>
                  </Col>

                  <Col md={4} xs={6} className="justify-end d-flex">
                    <div className="d-grid gap-2 mt-3">
                      <button className="footer_button " type="submit">
                        Submit
                      </button>
                    </div>
                  </Col>
                  {imageURL ? (
                    <Col xl={12} className="mt-3">
                      <div className="w-[200px] bg-white rounded-xl mb-5 p-2">
                        <img
                          src={imageURL}
                          alt="Attached Image"
                          style={{ maxWidth: "100%", height: "100%" }}
                        />
                      </div>
                    </Col>
                  ) : null}
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  @media screen and (max-width: 760px) {
    .polty {
      margin-top: 10px !important;
    }
  }

  input,
  textarea {
    color: white !important;
  }

  textarea {
    min-height: 217px !important;
  }

  .polty {
    margin-top: 65px;
  }

  .footer_button {
    background-color: white;
    padding: 5px;
    width: 190px;
    height: 40px;
    color: #ff7f00;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      background: #ff7f00;
      color: white;
      border: 2px solid #f4f4f4;
    }
  }

  .footer_button1 {
    background: #ff7f00;
    color: #ff7f00;
    border: none;
    color: wheat;
    padding: 5px;
    width: 150px;
    height: 40px;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
      background: #ff7f00;
      color: white;
      border: 2px solid #f4f4f4;
      transition: 0ms.2s;
    }
  }

  input,
  textarea {
    background-color: transparent !important;
    box-sizing: border-box;
    border: 1px solid rgb(119, 119, 119);
    border-radius: 8px;
    height: 55px;
  }
  textarea {
    max-height: 120px;
  }

  .card-box {
    padding-right: 50px !important;
  }

  .bg_color {
    background-color: rgb(255, 127, 0);
    /* color: white !important; */
  }
  .footer_ul {
    margin: 0;
    padding: 0;
  }

  .footer_ul li {
    margin: 10px 0;
  }
  .footer_hr {
    height: 2px;
    width: 22%;
    background-color: white;
  }
  .footer_hrm {
    margin-top: 26px;
  }
  .footer_label {
    color: rgb(255, 255, 255);
  }
  .footer_but {
    color: rgb(255, 127, 0);
  }
  .footer_p {
    margin-top: 36px;
    margin-bottom: 25px;
    color: rgb(255, 255, 255);
    font-size: 26px;
    font-weight: 300;
    line-height: 107.52%;
    letter-spacing: 0%;
    text-align: left;
  }

  /* loading */

  .wrapper {
    width: 150px;
    height: 60px;
    position: relative;
    z-index: 1;
  }

  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    left: 15%;
    transform-origin: 50%;
    animation: circle7124 0.5s alternate infinite ease;
  }

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }
  }

  .circle:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: shadow046 0.5s alternate infinite ease;
  }

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }

    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }

  .shadow:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .shadow:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;

export default Footer;
