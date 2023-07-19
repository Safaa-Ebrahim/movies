import React, { useState} from "react";
import { useDispatch } from "react-redux";

import emailjs from "emailjs-com";

// formik
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// component
import { showToast } from "../store/Slices/toastSlice";

export default function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const sendEmail = async (values, { resetForm }) => {
    const templateParams = {
      from_email: values.email,
      from_name: values.name,
      message: values.message,
    };
    setIsSubmitting(true);
    try {
      // Send email using EmailJS API
      await emailjs.send(
        "service_34trxra",
        "template_mwwh2a4",
        templateParams,
        "igvCknjBr3rfZnpAU"
      );
      dispatch(
        showToast(
          "Thanks for contacting us. We'll get back to you as soon as possible."
        )
      );
    } catch (error) {
      console.log(error.text);
      dispatch(showToast("Failed to send Message! Please try again later!"));
    }
    setIsSubmitting(false);
    resetForm();
  };
  const handleFormSubmit = async (values, { resetForm }) => {
    await sendEmail(values, { resetForm });
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field className="form-control" name="name" type="text" />
              {errors.name && touched.name ? (
                <div className="text-danger">{errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <Field className="form-control" type="email" name="email" />
              {errors.email && touched.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <Field
                className="form-control"
                as="textarea"
                name="message"
                rows="4"
              />
              {errors.message && touched.message ? (
                <div className="text-danger">{errors.message}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
