import React from "react";
import styled from "styled-components";
import Transition from "react-transition-group/Transition";
import jump from "jump.js";

const defaultStyle = {
  transition: "opacity 300ms ease-in-out",
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0, zIndex: -1 },
  entered: { opacity: 1, zIndex: 10 },
  exiting: { opacity: 1, zIndex: 10 },
  exited: { opacity: 0, zIndex: -1 }
};

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.indianpaintbrush};

  @media (min-width: 500px) {
    display: none;
  }
`;

const NavBox = styled.div`
  padding: 20px 0;
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }
`;

export default ({ visible, handleRenderMobileNav }) => (
  <Transition in={visible} timeout={300}>
    {state => (
      <MobileNav
        visible={visible}
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <NavBox>
          <NavLink
            onClick={() => {
              handleRenderMobileNav();
              jump("#about");
            }}
          >
            About
          </NavLink>
        </NavBox>
        <NavBox>
          <NavLink
            onClick={() => {
              handleRenderMobileNav();
              jump("#newsletter");
            }}
          >
            Newsletter
          </NavLink>
        </NavBox>
        <NavBox>
          <NavLink
            onClick={() => {
              handleRenderMobileNav();
              jump("#contact");
            }}
          >
            Contact
          </NavLink>
        </NavBox>
      </MobileNav>
    )}
  </Transition>
);
