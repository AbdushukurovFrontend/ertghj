import React, { useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../img/logo.png";
import backgroundHeader from "../img/bacground_header.png";
import truck_img_header from "../img/truck_img_header.png";
import {
  Bounce,
  Fade,
  Hinge,
  Flip,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

function Header() {
  return (
    <StyledHeader>
      <div className="header_bacground mt-5 pt-5">
        <header className="container">
          <div className="logictic_header">
            <Slide duration={1000}>
              <h2 className="font_h1 animatsiya ">
                LOGISTIC
                <span className="font_span">RECRUITMENT</span>
                <span className="font_span">& EXECUTIVE</span>
                SEARCH
              </h2>
            </Slide>

            <div className="row mt-5 pt-3  justify-between">
              <div className="col-xl-5 col-lg-6 col-12 ">
                <JackInTheBox>
                  <h2 className="header_title">RIGHT CHOICE RIGHT MOVE.</h2>
                </JackInTheBox>

                <JackInTheBox>
                  <p className="header_subtitle mt-4">
                    We provide services you can count on, with an outstanding
                    record for on-time delivery, high safety standards and
                    outstanding customer service.
                  </p>
                </JackInTheBox>

                <JackInTheBox>
                  <button className="header_button mt-5 d-flex justify-center align-items-center gap-2">
                    REQUSST A DEMO <FaChevronRight />
                  </button>
                </JackInTheBox>
                {/* <FaChevronRight /> */}
              </div>
              <div className="col-xl-7 col-lg-12 row_com">
                <img
                  className="header_img ml-0 xl:ml-[-130px] mt-[-20px]"
                  src={truck_img_header}
                  alt="none"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
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
      display: flex;
      flex-wrap: wrap;
      font-size: 20px !important;
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

  /* header */

  .header_bacground {
    background-image: url(${backgroundHeader});
    width: 100%;
    background-repeat: no-repeat;
    background-size: 80% 100%;
    background-position: 100%;
  }

  .font_h1 {
    font-family: "Marvel", sans-serif !important;
    font-size: 50px;
    font-weight: 100;
    letter-spacing: 10px;
    max-width: 750px;
    /* text-wrap: wrap; */
  }

  .font_span {
    font-family: "Krona One", sans-serif !important;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .header_title {
    color: #9a9a9a;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    /* letter-spacing: 3px; */
  }

  .header_subtitle {
    font-family: "Montserrat", sans-serif;
    color: #9a9a9a;
    font-size: 20px;
    line-height: 36px;
  }

  .header_img {
    width: 150% !important;
    height: 100%;
  }

  .header_button {
    width: 220px;
    height: 50px;
    background: linear-gradient(90.14deg, #ff7f00 -3.59%, #f63d02 145.69%);
    border-radius: 40px;
    color: white;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      background: transparent;
      border: 2px solid #ff7f00;
      color: #ff7f00;
      transition: ease-in-out;
    }
  }

  .d-finay {
    display: flex;
    flex-direction: column;
  }
`;

export default Header;
