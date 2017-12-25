import React from "react";
import axios from "axios";
import yup from "yup";
import { Formik, Field } from "formik";

import { Container, Title, Input, Paragraph, Button } from "../UI";

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
            .email()
            .required("Email is required."),
          message: yup.string().required("Message is required.")
        });

        return schema;
      }}
      onSubmit={(values, actions) => {
        axios
          .post("https://formspree.io/adam.recvlohe@gmail.com", values)
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
              placeholder="Message"
              component={Input}
            />
            <Button type="submit">Contact</Button>
          </form>
        );
      }}
    />
  </Box>
);
