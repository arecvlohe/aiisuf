import React from "react";
import styled from "styled-components";
import { Container } from "../UI";

const Box = Container.extend`
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
`;

export default () => (
  <Box>
    <Title>About</Title>
    <div>
      The University of Florida offers a minor and concentration in the field of
      American Indian and Indigenous Studies. Along with acaademic programs, UF
      hosts events with prominent speakers from Indian Country such as Phillip
      Deloria (Standing Rock Sioux) as well as local activists like Bobby Billy
      (Independent Traditional Seminole Tribe of Florida). The AIIS program is
      looking to expand its reach and more community support would be greatly
      appreciated.
    </div>
  </Box>
);
