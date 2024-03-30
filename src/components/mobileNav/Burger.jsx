import React, { useState } from "react";
import styled from "styled-components";
import LeftNav from "./LeftNav";

const StyledBurger = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  position: absolute;
  top: ${({ open }) => (open ? "30px" : "30px")};
  // right: ${({ open }) => (open ? "45px" : "15px")};
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 2000000;
  right: 20px;
  div {
    width: 1.7rem;
    height: 0.15rem;
    background-color: ${({ open }) => (open ? "#000" : "#000")};
    border-radius: 10px;

    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

// const { useState, useEffect } = React;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const [openLogoutPage, setOpenLogoutPage] = useState(false);

  //  useEffect(() => {
  //     window.addEventListener("scroll", listenToScroll);
  //     return () => window.removeEventListener("scroll", listenToScroll);
  //   }, []);

  //   const listenToScroll = () => {
  //     let heightToHideFrom = 200;
  //     const winScroll =
  //       document.body.scrollTop || document.documentElement.scrollTop;
  //     setHeight(winScroll);

  //     if (winScroll > heightToHideFrom) {
  //       isVisible && setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //   };

  // -----------------

  return (
    <>
      <StyledBurger
        style={{ display: `${openLogoutPage ? "none" : "flex"}` }}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>

      <LeftNav
        open={open}
        openLogoutBtn={() => setOpenLogoutPage(!openLogoutPage)}
        closeLogoutBtn={() => setOpenLogoutPage(false)}
        openLogoutPage={openLogoutPage}
      />
    </>
  );
};

export default Burger;
