import React from "react";
import styled from "styled-components";
import { ifElse, always, prop, path, propOr } from "ramda";

export const getColor = color => props => path(["theme", color], props);

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  color: ${ifElse(
    prop("textColor"),
    prop("textColor"),
    getColor("indianpaintbrush")
  )};
`;

const InputBox = styled.div`
  min-height: 70px;
`;

const InputField = styled.input`
  width: 100%;
  outline: none;
  border-radius: 3px;
  border: 1px solid #333;
  padding: 10px;
  &:focus {
    border: 1px solid ${getColor("indianpaintbrush")};
  }
`;

const Error = styled.div`
  padding: 5px 0 0 0;
  color: #cc0000;
`;

export const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputBox>
      <InputField type="text" {...field} {...props} />
      {touched[field.name] &&
        errors[field.name] && <Error>{errors[field.name]}</Error>}
    </InputBox>
  );
};

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 24px;
  color: ${propOr("#333", "textColor")};
`;

export const Button = styled.button`
  background-color: ${ifElse(
    prop("primary"),
    getColor("indianpaintbrush"),
    always("#fff")
  )};
  font-size: 16px;
  border: 1px solid
    ${ifElse(prop("primary"), getColor("indianpaintbrush"), getColor("black"))};
  border-radius: 3px;
  padding: 20px 60px;
  transition: 200ms ease-in-out;
  color: ${ifElse(prop("primary"), always("#fff"), getColor("black"))};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const FullWidth = styled.div`
  width: 100vw;
  background-color: ${getColor("indianpaintbrush")};
`;

export const Message = styled.div`
  background-color: ${propOr("transparent", "bgColor")};
  color: ${propOr("#333", "textColor")};
  padding: 10px;
  margin: 10px 0;
  border-radius: 3px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
