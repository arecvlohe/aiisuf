import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
`;

export const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div>
      <input type="text" {...field} {...props} />
      {touched[field.name] &&
        errors[field.name] && <div>{errors[field.name]}</div>}
    </div>
  );
};
