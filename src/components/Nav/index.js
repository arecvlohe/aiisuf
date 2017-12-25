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
    props.fadeToBlack ? props.theme.indianpaintbrush : "transparent"};
`;

const BoxEnd = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 300;
  color: ${props => (props.fadeToBlack ? "#fff" : props.theme.black)};
  transition: 200ms ease-in-out;
  &:hover {
    color: ${props =>
      props.fadeToBlack ? "#fff" : props.theme.indianpaintbrush};
    cursor: pointer;
  }
`;

const NavBox = styled.div`
  padding: 20px;
`;

const Logo = styled.div`
  color: ${props => (props.fadeToBlack ? "white" : props.theme.black)};
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
`;

export default class extends Component {
  state = {
    fadeToBlack: false
  };

  componentDidMount() {
    window.addEventListener("scroll", ({ pageY }) => {
      if (pageY > 30) {
        this.setState({ fadeToBlack: true });
      } else {
        this.setState({ fadeToBlack: false });
      }
    });
  }

  render() {
    const { fadeToBlack } = this.state;
    return (
      <Navbar fadeToBlack={fadeToBlack}>
        <Logo fadeToBlack={fadeToBlack}>AIIS at UF</Logo>
        <BoxEnd>
          <NavBox>
            <NavLink fadeToBlack={fadeToBlack} onClick={() => jump("#about")}>
              About
            </NavLink>
          </NavBox>
          <NavBox>
            <NavLink
              fadeToBlack={fadeToBlack}
              onClick={() => jump("#newsletter")}
            >
              Newsletter
            </NavLink>
          </NavBox>
          <NavBox>
            <NavLink fadeToBlack={fadeToBlack} onClick={() => jump("#contact")}>
              Contact
            </NavLink>
          </NavBox>
        </BoxEnd>
      </Navbar>
    );
  }
}
