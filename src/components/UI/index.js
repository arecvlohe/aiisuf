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
  &:focus {
    border: 1px solid ${props => props.theme.indianpaintbrush};
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
  color: ${props => (props.textColor ? props.textColor : props.theme.black)};
`;

export const Button = styled.button`
  background-color: ${props =>
    props.primary ? props.theme.indianpaintbrush : "#fff"};
  font-size: 16px;
  border: 1px solid
    ${props => (props.primary ? props.theme.indianpaintbrush : "#333")};
  border-radius: 3px;
  padding: 20px 60px;
  transition: 200ms ease-in-out;
  color: ${props => (props.primary ? "#fff" : "#333")};
  &:hover {
    cursor: pointer;
  }
`;

export const FullWidth = styled.div`
  width: 100vw;
  background-color: ${props => props.theme.indianpaintbrush};
`;

export const Message = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : "transparent")};
  color: ${props => (props.textColor ? props.textColor : "#333")};
  padding: 10px;
  margin: 10px 0;
  border-radius: 3px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
