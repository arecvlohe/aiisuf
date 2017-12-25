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

const Box = Container.extend`
  padding: 200px 0 300px 0;
`;

export default () => (
  <Box id="newsletter">
    <Title>Newsletter</Title>
    <Paragraph>
      Subscribe to our newsletter to get the latest news and event information.
    </Paragraph>
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
          .post(`http://${window.location.host}/api/mailchimp`, values)
          .then(() => {
            actions.setSubmitting(false);
            actions.setStatus({
              message: "You have successfully been added to the newsletter."
            });
          })
          .catch(({ response }) => {
            actions.setErrors({ serverError: response.data.title });
            actions.setSubmitting(false);
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
            <ButtonBox>
              <Button type="button" onClick={handleReset}>
                Reset Form
              </Button>
              <Button primary type="submit" disabled={isSubmitting}>
                Subscribe
              </Button>
            </ButtonBox>
            {errors.serverError && (
              <Message bgColor="#FFD2D2" textColor="#D8000C">
                Sorry! There was an error. The error was:{" "}
                {errors.serverError.toLowerCase()}.
              </Message>
            )}
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
