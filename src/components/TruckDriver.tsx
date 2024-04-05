import React from "react";
import styled from "styled-components";
import img from "../img/toppng 2.png";
import img2 from "../img/Group.png";
import img3 from "../img/“.png";
import img4 from "../img/Frame 1000000968.png";
import { FaChevronRight } from "react-icons/fa";
import img8 from "../img/Rectangle 128.png";
import { JackInTheBox, Slide } from "react-awesome-reveal";

function TruckDriver() {
  return (
    <StyledTruckPage>
      <div className="container truck_top">
        <div className="row">
          <div className="col-xxl-4 ">
            <div className="d-flex gap-2 flex-wrap ">
              <div>
                <h2 className=" big">Are</h2>
              </div>
              <div>
                <h2 className="you big">you a</h2>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <h2 className="display-1  big big_title">
                <span className="span1 truck">truck driver?</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <Slide className="col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-8 col-sm-12 mt-xl-2 d-none d-sm-block mt-5">
            <img className="img1" src={img} alt="" />
          </Slide>
          <div className="col-12 col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-12 ">
            <p className="fs-4">WE’RE HERE FOR YOUR NEXT MOVE.</p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-xxl-5 col-xl-6 col-lg-6 col-md-10 col-sm-10 mt-5  nest ">
            <div className="">
              <div className=" p-4 animatsiya  p1 position-relative  ">
                <div className="">
                  <p className="text-white  card_subtitle ">
                    ‘’WE HAVE A FANTASTIC TRACK RECORD IN SECURING LOGISTICS
                    TALENT,REPRESENTING GLOBAL BRANDS AND ADVISING ON
                    RECRUITMENT STRATEGIES.WITH AN INNATE UNDERSTANDING OF THE
                    DYNAMIC CHALLENGES FACING THE SECTOR,WE HAVE THE
                    CAPABILITIES TO FIND PROFESSIONAL AND MANAGERIAL-LEVEL
                    CANDIDATES FOR YOUR BUSINESS.WE ENSURE THAT THESE CANDIDATES
                    HAVE THE RELEVANT SKILLS TO FULFIL THE DEVELOPING DEMANDS OF
                    THE MARKET, FROM STRATEGIC MANAGEMENT TO CUSTOMER SERVICE.
                    ,,
                  </p>
                </div>
                <div className="position-absolute pios right-0 top-10">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className=" col-12 col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-md-10 col-sm-10">
            <div className="">
              <div className="  p-4   position-relative ">
                <p className="lorem-info  ">
                  ‘’ That’s why securing high-calibre individuals is key. Get in
                  touch with us today and let us find the logistics talent to
                  take your business to the next level. Trust that we’ll take
                  the time to learn about your company, culture, anTrust that
                  we’ll take the time to learn about your company, culture, and
                  what the vacancy requires, so we can find someone who not only
                  fits the role, but adds to it. ,,
                </p>
                <div className="position-absolute pios right-0  top-10">
                  <img src={img3} alt="" width={50} />
                </div>
                <div className="button1 flex justify-center mt-5  ">
                  <button className=" button_hover d-flex align-items-center">
                    {" "}
                    APPLE NOW <FaChevronRight className=" ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" mt-4">
        <div className="container">
          <div className="row ">
            <Slide className="col-12  mt-5">
              <h2 className="m1">IMPROVE</h2>
            </Slide>
            <Slide className="col-5 offset-xxl-3 offset-xl-3 offset-lg-2 offset-md-1 offset-sm-0">
              <h2>
                <span className="last m2">YOUR</span>
              </h2>
            </Slide>
            <Slide className="col-8 offset-xxl-4 offset-xl-4 offset-lg-3 offset-md-2 offset-sm-0 ">
              <h2 className="m3">RECRUITMENT</h2>
            </Slide>
            <div className="col-12  minus mt-lg-2 mt-md-3 mt-sm-5">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </StyledTruckPage>
  );
}

const StyledTruckPage = styled.div`
  .nest {
    margin-top: 140px !important;
  }

  .truck {
    margin-left: 400px;
  }

  .button_hover {
    width: 220px;
    height: 55px;
    background: linear-gradient(90.14deg, #ff7f00 -3.59%, #f63d02 145.69%);
    border-radius: 40px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    &:hover {
      width: 230px !important;
      height: 55px;
      background: transparent;
      border: 2px solid #ff7f00;
      color: #ff7f00;
    }
  }

  .minus {
    margin-top: -80px;
  }

  .last {
    font-size: 50px;
    margin: 0px;
  }

  .button1 {
    button {
      border: none;
      outline: none;
      border-radius: 28px;
      padding: 15px 30px;
      background: rgb(255, 127, 0);
      background: linear-gradient(
        84deg,
        rgba(255, 127, 0, 1) 36%,
        rgba(246, 61, 2, 1) 100%
      );
      color: white;
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .pios {
    margin-top: -80px !important;
  }

  .img1 {
    margin-top: -215px;
  }
  p {
    color: rgb(254, 146, 0);
  }
  .p1 {
    background-image: url(${img8});
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
  .span1 {
    color: rgb(254, 146, 0);
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-size: 105px;
    letter-spacing: 6px;
    /* margin-left: 160px; */
  }

  h2 {
    color: rgb(254, 146, 0);
    font-weight: 800;
  }

  .lorem-info {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    line-height: 30px;
  }
  .a1 {
    margin-top: 150px;
  }
  .big {
    font-size: 90px;
  }

  @media screen and (min-width: 970px) and (max-width: 1290px) {
    .truck {
      margin-left: 100px !important;
    }
  }

  @media screen and (min-width: 970px) and (max-width: 1200px) {
    .truck_top {
      margin-top: 180px !important;
    }
  }

  @media screen and (max-width: 970px) {
    .truck_top {
      margin-top: 10px !important;
    }
    .truck {
      margin-left: 10px !important;
    }
    .big {
      font-size: 90px;
    }
    .span1 {
      color: rgb(254, 146, 0);
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      font-style: italic;
      font-size: 90px !important;
      letter-spacing: 6px;
    }
    .card_subtitle {
      font-size: 13px;
      line-height: 30px;
      color: #efefef !important;
    }
  }

  .truck_top {
    margin-top: -100px;
  }

  .m1,
  .m2,
  .m3 {
    font-size: 70px;
  }

  .card_subtitle {
    padding: 20px;
    font-size: 16px;
    line-height: 27px;
    color: #efefef !important;
  }

  @media screen and (max-width: 570px) {
    .lorem-info {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 19px;
      font-family: "Montserrat", sans-serif;
      font-style: italic;
    }
    .truck_top {
      margin-top: -100px !important;
    }
    .big {
      font-size: 50px !important;
    }
    .span1 {
      color: rgb(254, 146, 0);
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      font-style: italic;
      font-size: 50px !important;
      letter-spacing: 6px;
    }
    .card_subtitle {
      font-size: 11px;
      line-height: 20px;
      color: #efefef !important;
    }

    .nest {
      margin-top: -10px !important;
    }

    .lorem-info {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      font-family: "Montserrat", sans-serif;
      font-style: italic;
      line-height: 25px;
      margin-top: 50px;
    }

    .m1,
    .m2,
    .m3 {
      font-size: 39px !important;
    }
  }

  @media screen and (min-width: 1400px) and (max-width: 1854px) {
    .you {
      margin-top: 52px;
    }

    .a1 {
      margin-top: 150px;
    }
  }
  @media screen and (min-width: 1001px) and (max-width: 1399px) {
    .minus {
      margin-top: 0px !important;
    }
    .you {
      margin-top: 52px !important;
    }
    .m1,
    .m2,
    .a1 {
      margin-top: 0px !important;
    }
    .img1 {
      margin-top: 0px !important;
    }
  }
  @media screen and (max-width: 1000px) and (min-width: 760px) {
    .this {
      margin-top: 0px !important;
    }
    .you {
      margin-top: 0px;
    }
    .a1 {
      font-size: 100px !important;
      margin-top: 0px;
    }

    .img1 {
      margin: 0px !important;
    }
  }
  @media screen and (max-width: 759px) {
    .minus {
      margin-top: 15px;
    }
    .you {
      margin-top: 0px;
    }

    .a1 {
      font-size: 70px !important;
      margin-top: 0px;
    }

    .img1 {
      margin: 0px !important;
    }
  }
`;

export default TruckDriver;
