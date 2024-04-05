import React from "react";
import styled from "styled-components";
import NavMenu from "./nav-menu";
import { Outlet } from "react-router-dom";

function AllPages() {
  return (
    <StyledMainHome>
      <NavMenu />

      <Outlet />
    </StyledMainHome>
  );
}

const StyledMainHome = styled.div``;

export default AllPages;
