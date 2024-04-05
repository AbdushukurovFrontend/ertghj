import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <StyledHeader>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#" className="">
            <img src={Logo} alt="" width={100} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              className="m-auto my-2 d-flex justify-around w-100      my-lg-0"
              style={{ maxHeight: "460px" }}
            >
              <Nav.Link href="#action1">
                <span className="warning">Home</span>
              </Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>

              <Nav.Link href="#action2">Services</Nav.Link>
              <Nav.Link href="#action2">Features</Nav.Link>
              <Nav.Link href="/#for-driver">For driver</Nav.Link>
              <Nav.Link href="#action2">For carrier</Nav.Link>
              <Nav.Link href="/recruiter">For recruiter</Nav.Link>
            </Nav>
            <NavLink to={"/question"}>
              <button className="button_hover">Contact us</button>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
}

// header

const StyledHeader = styled.div`
  /* media */

  @media only screen and (max-width: 967px) {
    .header_bacground {
      background-image: none !important;
    }

    .font_h1 {
      font-size: 30px !important;
      letter-spacing: 5px !important;
    }
  }

  @media only screen and (max-width: 505px) {
    .font_h1 {
      font-size: 18px !important;
      letter-spacing: 3px !important;
      line-height: 30px !important;
    }
    .header_title {
      font-size: 20px !important;
      /* letter-spacing: 3px; */
    }

    .header_subtitle {
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .header_button {
      width: 220px !important;
      height: 40px !important;
    }

    .row_com {
      margin-top: 50px;
    }
  }

  .button_hover {
    width: 150px;
    height: 45px;
    background: linear-gradient(90.14deg, #ff7f00 -3.59%, #f63d02 145.69%);
    border-radius: 40px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    &:hover {
      background: transparent;
      border: 2px solid #ff7f00;
      color: #ff7f00;
    }
  }

  .nav-link {
    color: black;
    font-size: 18px;
    font-weight: 600;

    &:hover {
      color: #ff7f00;
    }
  }

  .warning {
    color: #ff7f00;
    font-family: "Montserrat", sans-serif;
  }
`;

export default NavMenu;
