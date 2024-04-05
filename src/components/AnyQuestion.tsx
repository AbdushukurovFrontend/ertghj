import React, { useState } from "react";
import {
  Col,
  Form,
  InputGroup,
  Row,
  Button,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import styled from "styled-components";
import vector from "../img/Vector.png";
import mdoutline from "../img/MdOutlineSupportAgent.png";
import support from "../img/support.png";
import Logo from "../img/logo.jpg";
function AnyQuestion() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <QuestionPagesStyle>
      <section className="mt-5">
        <div className=" align-items-center">
          <div className="row align-itmes-center">
            <div className="col-12 p-5 container col-sm-12 col-lg-12 col-xl-6 col-mg-12 mt-5 pt-5">
              <h1>Do you have any questions or any offers ?</h1>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="12"
                    lg="12"
                    className="inpuut"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      defaultValue="Mark"
                      className="inp"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    lg="12"
                    className="inpuut"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Company name *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      defaultValue="Otto"
                      className="inp"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    lg="12"
                    className="mb-0"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Phone number *</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        required
                        className="inp"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3 labls">
                    <Form.Check
                      required
                      label="I read the terms & conditions and the Privacy policy"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      className="mar"
                    />
                  </Form.Group>
                </Row>

                <Button type="submit" className="buut mb-3">
                  Submit form
                </Button>
              </Form>
            </div>
            <div className="d-none d-lg-block container col-xl-6 col-mg-12 browwn text-center align-itmes-center text-white">
              <img src={support} className="mx-auto mt-5" alt="" />
              <img
                src={vector}
                className="mx-auto big-img align-items-center"
                width={450}
                alt=""
              />
              <h3 className="mt-5 mb-5">RIGHT CHOICE RIGHT MOVE</h3>
              <p className="pp">
                Analyzing previous trends ensures that businesses <br /> always
                make the right decision. And as the scale of <br /> the decision
                and it’s impact magnifies...
              </p>
            </div>
          </div>
        </div>
      </section>
    </QuestionPagesStyle>
  );
}

const QuestionPagesStyle = styled.div`
  h1 {
    font-weight: bolder;
    /* font-size: 50px; */
  }

  img {
    .immg {
      width: 40px;
    }
  }

  .browwn {
    height: 96vh;
    background: rgb(255, 150, 47);
    .big-img {
      margin-top: 20%;
    }
    .pp {
      padding: 0 10px;
      color: rgb(207, 217, 224);
      font-size: 19px;
    }
  }
  .b-e {
    height: 100vh;
  }

  .inpuut {
    padding: 20px;
    margin-top: 5px;
  }

  .inp {
    padding: 20px;
  }

  @media screen and (min-width: 350px) and (max-width: 767px) {
    .mar {
      margin-right: 12%;
    }
    button {
      margin-right: 5%;
      width: 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    .mar {
      margin-right: 12%;
    }
    button {
      .buut {
        margin-left: 10%;
      }
    }
  }
  .mar {
    margin-left: 20%;
  }

  button {
    margin-left: 20%;
    text-align: center;
    border-radius: 8px;
    padding: 15px;
    width: 390px;
    border: none;
    background: rgb(255, 150, 47);
  }
  .leaf {
    margin-left: 140%;
  }

  img {
  }
`;

export default AnyQuestion;
