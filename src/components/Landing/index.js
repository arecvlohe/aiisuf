import React, { Component } from "react";
import styled from "styled-components";
import Typed from "typed.js";

const Landing = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: light;
  position: absolute;
  user-select: none;
`;

export default class extends Component {
  componentDidMount() {
    const options = {
      backSpeed: 50,
      showCursor: false,
      startDelay: 1000,
      strings: ["American Indian", "Indigenous", "500 Nations", "AIIS at UF"],
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
          American Indian
        </Title>
      </Landing>
    );
  }
}
