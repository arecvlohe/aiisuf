import React, { Component } from "react";
import Typed from "typed.js";
import jump from "jump.js";
import styled, { keyframes } from "styled-components";

import chevronDown from "./down-arrow.svg";

const Landing = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: light;
  position: absolute;
  user-select: none;
  color: ${props => props.theme.indianpaintbrush};

  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

const chevronGrowShrink = keyframes`
  0% { transform: scale(1, 1) }
  50% { transform: scale(2, 2) }
  100% { transform: scale(1, 1)}
`;

const ChevronDown = styled.img`
  position: absolute;
  bottom: 20px;
  fill: ${props => props.theme.indianpaintbrush};
  animation: ${chevronGrowShrink} 2s linear infinite;
  &:hover {
    cursor: pointer;
  }
`;

export default class extends Component {
  componentDidMount() {
    const options = {
      backSpeed: 50,
      showCursor: false,
      startDelay: 1000,
      strings: [
        "Celebrating Culture",
        "Honoring Tradition",
        "Respecting Elders",
        "Lifting Up Youth",
        "Spreading Awareness",
        "AIIS@UF"
      ],
      typeSpeed: 50
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroyed();
  }

  render() {
    return (
      <Landing>
        <Title
          innerRef={el => {
            this.el = el;
          }}
          className="typed"
        >
          Celebrating Culture
        </Title>
        <ChevronDown
          onClick={() => jump("#about")}
          alt="down arrow"
          src={chevronDown}
        />
      </Landing>
    );
  }
}
