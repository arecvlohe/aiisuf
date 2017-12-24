import React from "react";
import axios from "axios";
import yup from "yup";
import { Formik, Field } from "formik";

import { Container, Title, Input } from "../UI";

export default () => (
  <Container>
    <Title>Contact</Title>
    <Formik
      initialValues={{
        email: "",
        message: "",
        name: "",
        subject: ""
      }}
      validationSchema={() => {
        const schema = yup.object().shape({
          subject: yup.string().required("Subject is required."),
          name: yup.string().required("Name is required."),
          email: yup
            .string()
            .email()
            .required("Email is required."),
          message: yup.string().required("Message is required.")
        });

        return schema;
      }}
      onSubmit={(values, actions) => {
        axios
          .post(process.env.FORMSPREE, values)
          .then(() => {
            actions.resetForm();
          })
          .catch(err => {
            console.error(err);
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
              name="subject"
              type="text"
              placeholder="Subject"
              component={Input}
            />
            <Field
              name="name"
              type="text"
              placeholder="Name"
              component={Input}
            />
            <Field
              name="email"
              type="email"
              placeholder="Email"
              component={Input}
            />
            <Field
              name="message"
              type="text"
              placeholder="message"
              component={Input}
            />
            <button type="submit">Contact</button>
          </form>
        );
      }}
    />
  </Container>
);
