import React from "react";
import axios from "axios";
import yup from "yup";
import { Formik, Field } from "formik";

import {
  Container,
  Title,
  Input,
  Paragraph,
  Button,
  Message,
  ButtonBox
} from "../UI";

const error = require("debug")("client:error");

const Box = Container.extend`
  padding: 200px 0 300px 0;
`;

export default () => (
  <Box id="contact">
    <Title>Contact</Title>
    <Paragraph>Feel free to reach out with any questions.</Paragraph>
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
            .email("Must be a valid email address.")
            .required("Email is required."),
          message: yup.string().required("Message is required.")
        });

        return schema;
      }}
      onSubmit={(values, actions) => {
        axios
          .post("https://formspree.io/adam.recvlohe@gmail.com", values)
          .then(() => {
            actions.setStatus({ message: "Message successfully sent." });
          })
          .catch(err => {
            error(err);
          });
      }}
      render={({
        errors,
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
        isSubmitting,
        status,
        touched,
        values
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
              placeholder="Message"
              component={Input}
            />
            <ButtonBox>
              <Button type="button" onClick={handleReset}>
                Reset Form
              </Button>
              <Button primary type="submit" disabled={isSubmitting}>
                Contact
              </Button>
            </ButtonBox>
            {status &&
              status.message && (
                <Message bgColor="#DFF2BF" textColor="#4F8A10">
                  {status.message}
                </Message>
              )}
          </form>
        );
      }}
    />
  </Box>
);
