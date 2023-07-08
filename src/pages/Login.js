import React from 'react'
import HeaderLogin from "./../components/HeaderLogin";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Login() {
  return (
    <>
      <HeaderLogin />
      <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className="w-50">
        <h2 className="mb-4">Login Form</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
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
                <label className="mb-1" htmlFor="email">Email</label>
                <Field className="form-control" name="email" type="email" />
                {errors.email && touched.email ? (
                  <div className="text-danger">{errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="mb-1" htmlFor="password">Password</label>
                <Field className="form-control" name="password" type="password" />
                {errors.password && touched.password ? (
                  <div className="text-danger">{errors.password}</div>
                ) : null}
              </div>
              <div className='d-flex align-items-end justify-content-end'>
              <button type="submit" className="btn btn-primary mt-3 ">
                Login
              </button>
              </div>
            </Form>
          )}
        </Formik>

        </div>
      </div>  
    </>
  )
}
