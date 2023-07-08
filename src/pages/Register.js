import React, { useState } from "react";
import HeaderLogin from "./../components/HeaderLogin";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [ageErr, setAgeErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [errorServer, setErrorServer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    const validationSchema = Yup.object().shape({
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
        .max(80, "You must be at most  60 years old"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/,
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        ),
    });
    // Validate the input value against the validation schema
    validationSchema
      .validateAt(e.target.name, myUser)
      .then(() => {
        // If validation succeeds, clear the error message state
        if (e.target.name === "first_name") {
          setFirstNameErr(null);
        } else if (e.target.name === "last_name") {
          setLastNameErr(null);
        } else if (e.target.name === "age") {
          setAgeErr(null);
        } else if (e.target.name === "email") {
          setEmailErr(null);
        } else if (e.target.name === "password") {
          setPasswordErr(null);
        }
      })
      .catch((err) => {
        // If validation fails, set the error message state
        if (e.target.name === "first_name") {
          setFirstNameErr(err.message);
        } else if (e.target.name === "last_name") {
          setLastNameErr(err.message);
        } else if (e.target.name === "age") {
          setAgeErr(err.message);
        } else if (e.target.name === "email") {
          setEmailErr(err.message);
        } else if (e.target.name === "password") {
          setPasswordErr(err.message);
        }
      });
  }
  function validateRregisterForm() {
    const validationSchema = Yup.object().shape({
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
        .max(80, "You must be at most  60 years old"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/,
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        ),
    });

    return validationSchema.validate(user, { abortEarly: false });
  }

  async function submitRegisterForm(e) {
    e.preventDefault();

    // Check the input values against the validation schema
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (user.first_name.trim().length === 0) {
      errors.first_name = "First name is required";
      setIsLoading(true);
    } else if (user.first_name.trim().length < 3) {
      errors.first_name = "Minimum length is 3 characters";
      setIsLoading(true);
    } else if (user.first_name.trim().length > 10) {
      errors.first_name = "Maximum length is 10 characters";
      setIsLoading(true);
    }else{

      setIsLoading(false);
    }

    if (user.last_name.trim().length === 0) {
      errors.last_name = "Last name is required";
      setIsLoading(true);
    } else if (user.last_name.trim().length < 3) {
      errors.last_name = "Minimum length is 3 characters";
      setIsLoading(true);
    } else if (user.last_name.trim().length > 10) {
      errors.last_name = "Maximum length is 10 characters";
      setIsLoading(true);
    }else{

      setIsLoading(false);
    }

    if (user.age === 0) {
      errors.age = "Age is required";
      setIsLoading(true);
    } else if (user.age < 3) {
      errors.age = "Age should be more than 3";
      setIsLoading(true);
    } else if (user.age > 80) {
      errors.age = "Age should be less than 80";
      setIsLoading(true);
    }else{

      setIsLoading(false);
    }

    if (user.email.trim().length === 0) {
      errors.email = "Email is required";
      setIsLoading(true);
    } else if (!emailRegex.test(user.email.trim())) {
      errors.email = "Invalid email format";
      setIsLoading(true);
    }else{

      setIsLoading(false);
    }

    if (user.password.trim().length === 0) {
      errors.password = "Password is required";
      setIsLoading(true);
    } else if (!passwordRegex.test(user.password.trim())) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character {MyStrongPa$$w0rd}";
        setIsLoading(true);
      }else{

      setIsLoading(false);
    }
    // Set the error message state based on the validation errors
    setFirstNameErr(errors.first_name || null);
    setLastNameErr(errors.last_name || null);
    setAgeErr(errors.age || null);
    setEmailErr(errors.email || null);
    setPasswordErr(errors.password || null);

    // If there are no validation errors, submit the form data to the server
    if (Object.keys(errors).length === 0) {
      // console.log("Submitting form data:", user);
      // // Add an API call to submit the form data here
      // let { data } = await axios.post(
      //   "https://route-egypt-api.herokuapp.com/signup",
      //   user
      // );
      // if (data.message === "success") {
        setIsLoading(false);
        navigate("/home");
        // navigate("/login");
      // } else {
      //   setErrorServer(data.message);
      //   setIsLoading(false);
      // }
    }
  }

  return (
    <>
      <HeaderLogin />
      <div className="w-75 mx-auto register">
        <h2 className="mb-3 text-center">Register Now</h2>
        {errorServer > 0 ? (
          <div className="alert alert-danger">{errorServer}</div>
        ) : (
          ""
        )}
        <form onSubmit={submitRegisterForm}>
          <div className="mb-3">
            <label htmlFor="first_name">First_Name:</label>
            <input
              className="form-control mb-2"
              id="first_name"
              name="first_name"
              onChange={getUserData}
              placeholder="Please enter your firstName "
            />
            {firstNameErr && (
              <small className="text-danger">{firstNameErr}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="last_name">Last_Name:</label>
            <input
              className="form-control mb-2"
              id="last_name"
              name="last_name"
              onChange={getUserData}
              placeholder="Please enter your last_name"
            />
            {lastNameErr && (
              <small className="text-danger">{lastNameErr}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age:</label>

            <input
              type="number"
              className="form-control mb-2"
              id="age"
              name="age"
              onChange={getUserData}
              placeholder="Please enter your age"
            />
            {ageErr && <small className="text-danger">{ageErr}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control mb-2"
              id="email"
              name="email"
              onChange={getUserData}
              placeholder="Please enter your email"
            />
            {emailErr && <small className="text-danger">{emailErr}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control mb-2"
              id="password"
              name="password"
              onChange={getUserData}
              placeholder="Please enter your password"
            />
            {passwordErr && (
              <small className="text-danger">{passwordErr}</small>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-3" >
            {isLoading === true ? (
              <i className="fas fa-spinner fa-spin "></i>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
