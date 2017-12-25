import React from "react";
import styled from "styled-components";

import { FullWidth, Container } from "../UI";

const Footer = styled.footer`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
`;

const Box = Container.extend`
  padding: 20px 0;
`;

export default () => (
  <FullWidth>
    <Box>
      <Footer>
        AIIS is an initiative of the students, faculty, and alumnus of the
        University of Florida.
      </Footer>
    </Box>
  </FullWidth>
);
