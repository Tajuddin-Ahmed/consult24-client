import React, { useState } from "react";
import Link from "next/link";
import classes from "./register.module.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import signup from "../../../../../public/images/claim-your-business.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// sign up form
async function createUser(
  username: string,
  role: string,
  email: string,
  password: string,
  re_password: string
) {
  const response = await fetch("https://c24apidev.accelx.net/auth/users/", {
    method: "POST",
    body: JSON.stringify({ username, role, email, password, re_password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

// login to user
const loginToUser = async (userEmail, userPassword) => {
  try {
    const response = await fetch(
      "https://c24apidev.accelx.net/auth/token/login/",
      {
        method: "POST",
        body: JSON.stringify({ email: userEmail, password: userPassword }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data.auth_token;
  } catch (error) {}
};

const AddInfo = () => {
  const [error, setError] = useState("");
  // form validation
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid first name"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid last name"),
    address1: Yup.string().required("address1 is required"),
    address2: Yup.string().required("address2 is required"),
    phone: Yup.string().required("phone is required"),
    city: Yup.string().required("city is required"),
    state: Yup.string().required("state is required"),
    zipCode: Yup.string().required("zipCode is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    alert(JSON.stringify(data));
    // display form data on success
    // if (data) {
    //   try {
    //     const result = await createUser(
    //       data.username,
    //       data.role,
    //       data.email,
    //       data.password,
    //       data.confirmPassword
    //     );
    //     console.log(result);
    //     if (result) {
    //       const token = await loginToUser(data.email, data.password);
    //       localStorage.setItem("token", JSON.stringify(token));
    //       if (token) {
    //         window.location.href = "/";
    //       }
    //     }
    //   } catch (error) {
    //     setError("Email already exist or incorrect password matching");
    //   }
    //   return false;
    // } else {
    //   setError("Credentials Error");
    // }
  }

  return (
    <>
      <div className="row" style={{ backgroundColor: "steelblue" }}>
        <div className="container d-flex justify-content-center">
          <div className="col-md-7">
            <div className="container my-5 shadow-sm rounded bg-white d-flex justify-content-center">
              <div>
                <form
                  className="container my-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="text-center pb-2">
                    <h3 className={classes.font}>
                      Finish Creating your account
                    </h3>
                    <p className={classes.label}>
                      Your address allows us to locate the best Pros in your
                      area.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label className={classes.label}>First Name</label>
                        <br />
                        <input
                          name="firstName"
                          type="text"
                          {...register("firstName")}
                          className={`${classes.inputStyle} ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label className={classes.label}>lastName</label>
                        <br />
                        <input
                          name="lastName"
                          type="text"
                          {...register("lastName")}
                          className={`${classes.inputStyle} ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.lastName?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="hidden"
                        name="role"
                        {...register("role")}
                        value="2"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className={classes.label}>Street Adress 1</label>
                    <br />
                    <input
                      name="address1"
                      type="text"
                      {...register("address1")}
                      className={`${classes.inputStyle} ${
                        errors.address1 ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.address1?.message}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className={classes.label}>Street Adress 2</label>
                    <br />
                    <input
                      name="address2"
                      type="text"
                      {...register("address2")}
                      className={`${classes.inputStyle} ${
                        errors.address2 ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.address2?.message}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className={classes.label}>Phone Number</label>
                    <br />
                    <input
                      name="phone"
                      type="number"
                      {...register("phone")}
                      className={`${classes.inputStyle} ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.phone?.message}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-2">
                        <label className={classes.label}>City</label>
                        <br />
                        <input
                          name="city"
                          type="text"
                          {...register("city")}
                          className={`${classes.inputStyle} ${
                            errors.city ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.city?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-2">
                        <label className={classes.label}>State</label>
                        <br />
                        <select
                          name="state"
                          {...register("state")}
                          className={`${classes.inputStyle} ${
                            errors.state ? "is-invalid" : ""
                          }`}
                        >
                          <option value="Select one">Select one</option>
                          <option value="AL">AL</option>
                          <option value="AK">AK</option>
                          <option value="AZ">AZ</option>
                          <option value="AR">AR</option>
                          <option value="CA">CA</option>
                          <option value="CO">CO</option>
                          <option value="CT">CT</option>
                          <option value="DE">DE</option>
                          <option value="FL">FL</option>
                          <option value="GA">GA</option>
                          <option value="HI">HI</option>
                          <option value="ID">ID</option>
                          <option value="IL">IL</option>
                          <option value="IN">IN</option>
                          <option value="IA">IA</option>
                          <option value="KS">KS</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.address2?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-2">
                        <label className={classes.label}>Zip Code</label>
                        <br />
                        <input
                          name="zipCode"
                          type="text"
                          {...register("zipCode")}
                          className={`${classes.inputStyle} ${
                            errors.zipCode ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.zipCode?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  {error && <p className="text-danger">{error}</p>}

                  <button type="submit" className={classes.createBtn}>
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddInfo;
