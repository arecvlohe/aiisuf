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
    return (
      <Navbar fadeToOrange={fadeToOrange}>
        <Logo
          fadeToOrange={fadeToOrange}
          onClick={() => jump(window.document.body)}
        >
          AIISUF
        </Logo>
        <BoxEnd>
          <NavBox>
            <NavLink fadeToOrange={fadeToOrange} onClick={() => jump("#about")}>
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
    );
  }
}
