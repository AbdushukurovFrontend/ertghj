import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SlLocationPin } from "react-icons/sl";
import { FaWpbeginner } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
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
import impon1 from "../img/Vector1.png";
import impon2 from "../img/Vector2.png";
import impon3 from "../img/Vector3.png";
import impon4 from "../img/Vector4.png";
import impon5 from "../img/Vector5.png";
import impon6 from "../img/Vector6.png";
import impon7 from "../img/Vector7.png";
import impon8 from "../img/Vector8.png";
import impon9 from "../img/Vector9.png";
import impon10 from "../img/Vector10.png";
import impon11 from "../img/Vector11.png";
import impon12 from "../img/Vector12.png";
import impon13 from "../img/Vector13.png";
import impon14 from "../img/Vector14.png";
import impon15 from "../img/Vector15.png";
import Slider from "react-slick";
import { useSize } from "ahooks";
// import required modules

function Sponsor() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsNote = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <StyledSponsor ref={ref}>
      <div className="container mt-5">
        <Slide>
          <h2>
            <span className="fw-bold text-[#FA8519] every_text">
              Every service
            </span>{" "}
            you need we have
            <span>!</span>
          </h2>
        </Slide>
        <div className="d-flex align-items-center my-5  justify-between row">
          <p className="p-0 m-0 fs-1 fw-200 col-xl-10 col-lg-10 col-md-10 col-sm-10 mb-3">
            Latest vacancies
          </p>

          <div className="d-flex align-items-center gap-3 col-xl-1 col-lg-1 col-md-1  col-sm-1">
            <button
              className="ico"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft />
            </button>
            <button
              className="ico2"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <Slider
          ref={sliderRef}
          {...(ekranSiza > 860 ? settings : settingsNote)}
          className="oweriv"
        >
          <div className="px-3">
            <div className="driwer bg-black p-3">
              <h3 className=" text-white bl_h1 ">WAREHOUSE DRIVER</h3>
              <div className=" d-flex align-items-center mt-10">
                <SlLocationPin className=" fs-6 text-white cursor-pointer" />
                <span className=" ms-2  fw-bold text-[#FF962F]">
                  BIRMINGHAM, WEST ISLANDS
                </span>
              </div>

              <div className=" d-flex align-items-center">
                <FaWpbeginner className=" fs-6 text-white cursor-pointer" />
                <span className=" ms-2 fw-bold text-[#FF962F]">
                  $25000 - $30000
                </span>
                <h6 className="  ms-2 mt-2">per hour benefits</h6>
              </div>
              <p className=" bl_p  mt-5">
                Cast UK are delighed to have partnered exclusively with a key
                customer of ours as they look to strengthen their warehouse
                leadership team. This fantastic opportunity is for the position
                of a Warehouse Team Manager, overseeing the daily operations and
                play a major role in the successful growth of the business.
              </p>

              <div className=" d-flex align-items-center 1_day_ago mt-10">
                <FaCalendarAlt
                  className=" fs-3 text-white cursor-pointer
                "
                />
                <h4 className=" text-[#FF962F] ms-2">1 day ago</h4>
              </div>
            </div>
          </div>

          <div className="px-3">
            <div className="driwer bg-black p-3">
              <h3 className=" text-white bl_h1 ">WAREHOUSE DRIVER</h3>
              <div className=" d-flex align-items-center mt-10">
                <SlLocationPin className=" fs-6 text-white cursor-pointer" />
                <span className=" ms-2  fw-bold text-[#FF962F]">
                  BIRMINGHAM, WEST ISLANDS
                </span>
              </div>

              <div className=" d-flex align-items-center">
                <FaWpbeginner className=" fs-6 text-white cursor-pointer" />
                <span className=" ms-2 fw-bold text-[#FF962F]">
                  $25000 - $30000
                </span>
                <h6 className="  ms-2 mt-2">per hour benefits</h6>
              </div>
              <p className=" bl_p  mt-5">
                Cast UK are delighed to have partnered exclusively with a key
                customer of ours as they look to strengthen their warehouse
                leadership team. This fantastic opportunity is for the position
                of a Warehouse Team Manager, overseeing the daily operations and
                play a major role in the successful growth of the business.
              </p>

              <div className=" d-flex align-items-center 1_day_ago mt-10">
                <FaCalendarAlt
                  className=" fs-3 text-white cursor-pointer
                "
                />
                <h4 className=" text-[#FF962F] ms-2">1 day ago</h4>
              </div>
            </div>
          </div>

          <div className="px-3">
            <div className="driwer bg-black p-3">
              <h3 className=" text-white bl_h1 ">WAREHOUSE DRIVER</h3>
              <div className=" d-flex align-items-center mt-10">
                <SlLocationPin className=" fs-6 text-white cursor-pointer" />
                <span className=" ms-2  fw-bold text-[#FF962F]">
                  BIRMINGHAM, WEST ISLANDS
                </span>
              </div>

              <div className=" d-flex align-items-center">
                <FaWpbeginner className=" fs-6 text-white cursor-pointer" />
                <span className=" ms-2 fw-bold text-[#FF962F]">
                  $25000 - $30000
                </span>
                <h6 className="  ms-2 mt-2">per hour benefits</h6>
              </div>
              <p className=" bl_p  mt-5">
                Cast UK are delighed to have partnered exclusively with a key
                customer of ours as they look to strengthen their warehouse
                leadership team. This fantastic opportunity is for the position
                of a Warehouse Team Manager, overseeing the daily operations and
                play a major role in the successful growth of the business.
              </p>

              <div className=" d-flex align-items-center 1_day_ago mt-10">
                <FaCalendarAlt
                  className=" fs-3 text-white cursor-pointer
                "
                />
                <h4 className=" text-[#FF962F] ms-2">1 day ago</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="container mt-10">
        <div className="row d-flex align-items-center p-3">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon1} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon2} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon3} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon4} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon5} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon6} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon7} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon8} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon9} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon10} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon11} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon12} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon13} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon14} alt="none" width={150} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 center">
            <img src={impon15} alt="none" width={150} />
          </div>
        </div>
      </div>

      <div className="container mt-10">
        <Slide>
          <h3 className=" text-center fw-bold fs-1">
            <span className="text-orange-500">HIGH WORK</span> ACHIEVMENTS
          </h3>
        </Slide>
        <div className="row text-center spn align-items-center justify-center mt-5">
          <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-2">
            <Slide className=" bool">
              <h4 className=" text-[#FF7F00] years">3.000 </h4>
              <p className=" text-[#FF7F00] fw-bold mt-5">
                WORKED WITH CLIENTS
              </p>
            </Slide>
          </div>

          <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
            <Slide>
              <h4 className=" text-[#FF7F00] years">50+</h4>
              <p className=" text-[#FF7F00] fw-bold mt-5">
                COOPARATE COMPANIES
              </p>
            </Slide>
          </div>

          <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3">
            <Slide>
              <h4 className=" text-[#FF7F00] years">2 Years </h4>
              <p className=" text-[#FF7F00] fw-bold mt-5">TOTAL EXPERIENCE</p>
            </Slide>
          </div>
        </div>
      </div>
    </StyledSponsor>
  );
}

const StyledSponsor = styled.div`
  .slick-arrow {
    display: none !important;
  }

  .slick-list {
    padding: 0 !important;
  }

  .ico {
    color: #fa8519;
    font-size: 30px;
    cursor: pointer;
  }

  .ico2 {
    cursor: pointer;
    font-size: 30px;
    font-weight: 100;
    color: #fa8519;
  }

  .oweriv {
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: start !important;
    gap: 30px !important;
  }

  .card_driver {
    min-width: 470px;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 70px;
  }

  h4 {
    font-style: italic;
  }

  .every_text {
    font-family: "Montserrat", sans-serif !important;
  }

  p {
    font-family: "Montserrat", sans-serif;
  }

  h6 {
    font-family: Montserrat;
  }

  h5 {
    font-family: Montserrat;
    font-size: 18px;
    line-height: 25px;
  }

  .bool {
    display: flex;
    flex-direction: column;
  }

  .driwer {
    border-radius: 8px;
    color: white;
  }

  .years {
    font-style: italic;
    font-size: 80px;
    line-height: 25px;
  }

  .spn {
    margin-top: 10px;
  }
  .center {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    .bl_p {
      font-size: 12px !important;
    }

    h2 {
      font-family: "Montserrat", sans-serif;
      font-size: 40px !important;
    }

    .card_driver {
      min-width: 275px;
    }

    .years {
      font-style: italic;
      font-size: 38px !important;
      line-height: 25px;
    }
  }
  @media screen and (max-width: 800px) {
    .years {
      font-style: italic;
      font-size: 50px;
      line-height: 25px;
    }

    h2 {
      font-family: "Montserrat", sans-serif;
      font-size: 50px;
    }
  }
`;

export default Sponsor;
