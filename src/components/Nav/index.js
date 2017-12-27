import React, { Component } from "react";
import styled from "styled-components";
import jump from "jump.js";

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  transition: background-color 500ms ease-in-out;
  background-color: ${props =>
    props.fadeToOrange ? props.theme.indianpaintbrush : "transparent"};

  @media (max-width: 500px) {
    display: none;
  }
`;

const BoxEnd = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 300;
  color: ${props =>
    props.fadeToOrange ? "#fff" : props.theme.indianpaintbrush};
  transition: 200ms ease-in-out;
  &:hover {
    color: ${props =>
      props.fadeToOrange ? "#fff" : props.theme.indianpaintbrush};
    cursor: pointer;
  }
`;

const NavBox = styled.div`
  padding: 20px;
`;

const Logo = styled.div`
  color: ${props =>
    props.fadeToOrange ? "white" : props.theme.indianpaintbrush};
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

const HamburgerMenuBox = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: ${props =>
    props.fadeToOrange ? props.theme.indianpaintbrush : "transparent"};
  transition: background-color 500ms ease-in-out;
  @media (min-width: 500px) {
    display: none;
  }
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default class extends Component {
  state = {
    fadeToOrange: false
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.scrollY > 30) {
        this.setState({ fadeToOrange: true });
      } else {
        this.setState({ fadeToOrange: false });
      }
    };
  }

  render() {
    const { fadeToOrange } = this.state;
    const { handleRenderMobileNav, renderMobileNav } = this.props;
    return (
      <div>
        <HamburgerMenuBox fadeToOrange={fadeToOrange}>
          <svg
            height="32px"
            id="Layer_1"
            style={{
              enableBackground: "new 0 0 32 32"
            }}
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            fill={fadeToOrange || renderMobileNav ? "#fff" : "#F75F3B"}
            onClick={handleRenderMobileNav}
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </HamburgerMenuBox>

        <Navbar fadeToOrange={fadeToOrange}>
          <Logo
            fadeToOrange={fadeToOrange}
            onClick={() => jump(window.document.body)}
          >
            AIIS@UF
          </Logo>
          <BoxEnd>
            <NavBox>
              <NavLink
                fadeToOrange={fadeToOrange}
                onClick={() => jump("#about")}
              >
                About
              </NavLink>
            </NavBox>
            <NavBox>
              <NavLink
                fadeToOrange={fadeToOrange}
                onClick={() => jump("#newsletter")}
              >
                Newsletter
              </NavLink>
            </NavBox>
            <NavBox>
              <NavLink
                fadeToOrange={fadeToOrange}
                onClick={() => jump("#contact")}
              >
                Contact
              </NavLink>
            </NavBox>
          </BoxEnd>
        </Navbar>
      </div>
    );
  }
}
