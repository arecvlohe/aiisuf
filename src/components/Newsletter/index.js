import React from "react";
import axios from "axios";
import yup from "yup";
import { Formik, Field } from "formik";

import { Container, Title, Input, Paragraph, Button } from "../UI";

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
          .post("http://localhost:3000/api/mailchimp", values)
          .then(({ response }) => {
            // TODO: handle user added successfully
            console.log("user added");
            actions.setSubmitting(false);
            actions.resetForm();
          })
          .catch(({ response }) => {
            actions.setErrors({ serverError: response.data.title });
            actions.setSubmitting(false);
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
            <Button type="submit" disabled={isSubmitting}>
              Subscribe
            </Button>
            {errors.serverError && (
              <div>
                Sorry! There was an error: {errors.serverError.toLowerCase()}
              </div>
            )}
          </form>
        );
      }}
    />
  </Box>
);
