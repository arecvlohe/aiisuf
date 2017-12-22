import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
`;

const BoxEnd = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavLink = styled.a`
  text-transform: uppercase;
`;

const NavBox = styled.div`
  padding: 10px;
`;

const Logo = styled.div``;

export default () => (
  <Navbar>
    <Logo>AIIS</Logo>
    <BoxEnd>
      <NavBox>
        <NavLink>About</NavLink>
      </NavBox>
      <NavBox>
        <NavLink>Newsletter</NavLink>
      </NavBox>
      <NavBox>
        <NavLink>Contact</NavLink>
      </NavBox>
    </BoxEnd>
  </Navbar>
);
