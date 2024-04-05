import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import section_logo from "../img/section_logo.png";
import section_icon from "../img/section_icon.png";
import section_logo2 from "../img/section_logo2.png";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { JackInTheBox, Slide } from "react-awesome-reveal";
import { useSize } from "ahooks";

function Camment() {
  const ref = useRef(null);
  const size = useSize(ref);
  const sliderRef = useRef(null);
  const [ekranSiza, setEkranSiza] = useState(size?.width);

  useEffect(() => {
    setEkranSiza(size?.width);
  }, [size?.width]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsNote = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <StyledCamment ref={ref}>
      <section className=" bacground_section pt-5 mt-5  ">
        <Container>
          <Slide className="section_text">Testimonial</Slide>

          <div className="row p-1 mt-3">
            <JackInTheBox className="col-xl-11 col-lg-10">
              <h2 className="section_title">What Our Clients Say</h2>
            </JackInTheBox>
            <div className="col-xl-1 col-lg-2 d-flex gap-2 past">
              <button
                className="white"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FaArrowLeftLong />
              </button>

              <button
                className="white1"
                onClick={() => sliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <Slider
            ref={sliderRef}
            {...(ekranSiza > 860 ? settingsNote : settings)}
            className="row mt-3"
          >
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12  d-flex">
              <div className="section_card1 ">
                <div className="d-flex justify-between align-items-center">
                  <div className="d-flex  gap-4 align-items-center">
                    <img className="section_img1" src={section_logo} alt="" />
                    <div>
                      <h3>Kathleen Smith</h3>
                      <p>Fuel Company</p>
                    </div>
                  </div>

                  <div className="d-none d-lg-block">
                    <img
                      className="section_img2"
                      src={section_icon}
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <p className="mt-4 section_subtitle">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>

                <div className="d-flex gap-2">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12  d-flex text-white">
              <div className="section_card2">
                <div className="d-flex justify-between align-items-center">
                  <div className="d-flex  gap-4 align-items-center">
                    <img className="section_img1" src={section_logo2} alt="" />
                    <div className="font_size">
                      <h3>John Martin</h3>
                      <p>Restoration Company</p>
                    </div>
                  </div>

                  <div className="d-none d-lg-block">
                    <img
                      className="section_img2"
                      src={section_icon}
                      alt=""
                      width={50}
                    />
                  </div>
                </div>
                <p className="mt-4 section_subtitle">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>

                <div className="d-flex gap-2">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </StyledCamment>
  );
}

const StyledCamment = styled.div`
  .container {
    max-width: 1100px !important;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-list {
    padding: 0 !important;
  }

  @media only screen and (max-width: 577px) {
    .section_card1 {
      padding: 20px 20px 20px 20px !important;
    }
    .section_card2 {
      padding: 20px 20px 20px 20px !important;
    }

    .past {
      margin-top: 20px;
    }

    .section_title {
      color: #fff;
      font-size: 35px !important;
      font-weight: 700;
    }

    .white {
      padding: 12px !important;
      background: #fff;
      border-radius: 50%;
      width: 40px !important;
      height: 40px !important;
      text-align: center;
      color: #ff962f;
      cursor: pointer;
    }
    .white1 {
      cursor: pointer;
      padding: 12px !important;
      background: #000000;
      border-radius: 50%;
      width: 40px !important;
      height: 40px !important;
      text-align: center;
      color: white;
    }

    .section_subtitle {
      color: #666c89;
      font-size: 15px !important;
      font-family: "Krub", sans-serif;
      font-style: italic;
      font-weight: 500;
    }
  }

  .bacground_section {
    background: #ff962f;
    width: 100%;
    padding-bottom: 50px !important;
  }

  .section_text {
    font-family: "Montserrat", sans-serif;
    border: none;
    border-left: 5px solid #fff;
    max-width: 100px;
    padding-left: 10px;
  }

  .section_title {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
  }

  .section_card1 {
    background: #f4f4f4;
    padding: 60px;
  }

  .section_card2 {
    background: #000000;
    padding: 60px;
  }

  .section_img1 {
    border-radius: 50%;
  }

  .section_img2 {
    width: 60px;
    height: 60px;
  }

  .section_subtitle {
    color: #666c89;
    font-size: 17px;
    font-family: "Krub", sans-serif;
    font-style: italic;
    font-weight: 500;
  }

  .star {
    color: #fdaf3b;
    margin-top: 20px;
    font-size: 24px;
  }

  .white {
    padding: 17px;
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    color: #ff962f;
    cursor: pointer;
  }
  .white1 {
    cursor: pointer;
    padding: 17px;
    background: #000000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    color: white;
  }
`;

export default Camment;
