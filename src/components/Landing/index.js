import React from "react";
import styled from "styled-components";

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
`;

export default () => (
  <Landing>
    <Title>AIIS at the UF</Title>
  </Landing>
);
