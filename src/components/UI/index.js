import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  color: ${props =>
    props.textColor ? props.textColor : props.theme.indianpaintbrush};
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
`;

const Error = styled.div`
  padding: 5px 0 0 0;
  color: #ff0033;
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
  color: ${props => (props.textColor ? props.textColor : props.theme.black)};
`;

export const Button = styled.button`
  background-color: #fff;
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 3px;
  padding: 20px 60px;
  transition: 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.indianpaintbrush};
    color: white;
    border: ${props => `1px solid ${props.theme.indianpaintbrush}`};
  }
`;

export const FullWidth = styled.div`
  width: 100vw;
  background-color: ${props => props.theme.indianpaintbrush};
`;
