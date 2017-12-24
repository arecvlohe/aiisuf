import React from "react";
import axios from "axios";
import yup from "yup";
import { Formik, Field } from "formik";

import { Container, Title, Input } from "../UI";

export default () => (
  <Container>
    <Title>Newsletter</Title>
    <p>
      Subscribe to our newsletter to get the latest news and event information!
    </p>
    <Formik
      initialValues={{
        FNAME: "",
        LNAME: "",
        email_address: "",
        status: "subscribed"
      }}
      validationSchema={() => {
        const schema = yup.object().shape({
          FNAME: yup.string().required("First name is required."),
          LNAME: yup.string().required("Last name is required."),
          email_address: yup
            .string()
            .email()
            .required("Email is required.")
        });

        return schema;
      }}
      onSubmit={(values, actions) => {
        axios
          .post("http://localhost:3000/mailchimp", values)
          .then(response => {
            console.log("response", response);
          })
          .catch(err => {
            console.error("error", err);
          });
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              name="FNAME"
              type="text"
              placeholder="First name"
              component={Input}
            />
            <Field
              name="LNAME"
              type="text"
              placeholder="Last name"
              component={Input}
            />
            <Field
              name="email_address"
              type="email"
              placeholder="Email"
              component={Input}
            />
            <button type="submit" disabled={isSubmitting}>
              Subscribe
            </button>
          </form>
        );
      }}
    />
  </Container>
);
