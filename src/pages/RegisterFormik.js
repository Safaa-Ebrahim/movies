import React, { useState } from "react";
import HeaderLogin from "./../components/HeaderLogin";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Register() {
  
  function submitRegisterForm(e) {
    e.preventDefault();
  }
  return (
    <>
      <HeaderLogin />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="w-75 mx-auto register">
          <h2 className="mb-2 text-center">Register Now</h2>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              age: 0,
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              first_name: Yup.string()
                .required("First name is required")
                .min(3, "First name must be at least 3 characters")
                .max(10, "First name must be less than  10 characters"),
              last_name: Yup.string()
                .required("Last name is required")
                .min(3, "Last name must be at least 3 characters")
                .max(10, "Last name must be at most 10 characters"),
              age: Yup.number()
                .required("Age is required")
                .min(18, "You must be at least 18 years old")
                .max(60, "You must be at most  60 years old"),
              email: Yup.string()
                .required("Email is required")
                .email("Invalid email address"),
              password: Yup.string()
                .required("Password is required")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
                ),
            })}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label className="mb-1" htmlFor="first_name">
                    First Name
                  </label>
                  <Field
                    className="form-control"
                    name="first_name"
                    type="text"
                  />
                  {errors.first_name && touched.first_name ? (
                    <div className="text-danger">{errors.first_name}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label className="mb-1" htmlFor="last_name">
                    Last Name
                  </label>
                  <Field
                    className="form-control"
                    name="last_name"
                    type="text"
                  />
                  {errors.last_name && touched.last_name ? (
                    <div className="text-danger">{errors.last_name}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label className="mb-1" htmlFor="age">
                    Age
                  </label>
                  <Field className="form-control" name="age" type="number" />
                  {errors.age && touched.age ? (
                    <div className="text-danger">{errors.age}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label className="mb-1" htmlFor="email">
                    Email
                  </label>
                  <Field className="form-control" name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div className="text-danger">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label className="mb-1" htmlFor="password">
                    Password
                  </label>
                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-danger">{errors.password}</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 d-flex mx-auto"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
