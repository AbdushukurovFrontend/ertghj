import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import TruckDriver from "../components/TruckDriver";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import Comment from "../components/Camment";

function MainHome() {
  return (
    <StyledMainHome>
      {/* Abdulaziz */}
      <Header />

      {/* Doniyor */}
      <TruckDriver />

      {/* Abdulaziz */}
      <Comment />

      {/* Sardor */}
      <Sponsor />

      {/* Nurbek */}
      <Footer />
    </StyledMainHome>
  );
}

const StyledMainHome = styled.div``;

export default MainHome;
