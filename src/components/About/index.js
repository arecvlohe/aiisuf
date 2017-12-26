import React from "react";
import styled from "styled-components";
import { Container, Paragraph, Title, FullWidth } from "../UI";

const Box = Container.extend`
  padding: 300px 0;
`;

const Anchor = styled.a`
  color: #fff;
  text-decoration: underline;
`;

export default () => (
  <FullWidth>
    <Box id="about">
      <Title textColor="#fff">About</Title>
      <Paragraph textColor="#fff">
        AIIS stands for American Indian and Indigenous Studies. In 2008 the
        University of Florida began formally offering a{" "}
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://religion.ufl.edu/undergraduate-studies/aiis/aiis-minor/"
        >
          minor
        </Anchor>{" "}
        and{" "}
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://religion.ufl.edu/undergraduate-studies/aiis/aiis-con/"
        >
          concentration
        </Anchor>{" "}
        in this field. Along with academic programs, UF hosts events with
        prominent speakers from Indian Country such as Phillip Deloria (Standing
        Rock Sioux) as well as local activists like Bobby Billy (Independent
        Traditional Seminole Tribe of Florida). The AIIS program is seeking to
        expand its reach and garner support from the greater Florida community.
      </Paragraph>
    </Box>
  </FullWidth>
);
