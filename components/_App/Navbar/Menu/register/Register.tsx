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

const RegisterPage = () => {
  const [error, setError] = useState("");
  // form validation
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("User Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid user name"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    // display form data on success
    if (data) {
      try {
        const result = await createUser(
          data.username,
          data.role,
          data.email,
          data.password,
          data.confirmPassword
        );
        console.log(result);
        if (result) {
          const token = await loginToUser(data.email, data.password);
          localStorage.setItem("token", JSON.stringify(token));
          if (token) {
            window.location.href = "/";
          }
        }
      } catch (error) {
        setError("Email already exist or incorrect password matching");
      }
      return false;
    } else {
      setError("Credentials Error");
    }
  }

  return (
    <>
      <div className="row" style={{ backgroundColor: "steelblue" }}>
        <div className="container">
          <div className="container  my-5 shadow rounded bg-white d-flex">
            <div className="col-md-6">
              <div>
                <form
                  className="container border-end mt-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <h3 className="pb-2">Sign Up</h3>
                  </div>
                  <div className="mb-2">
                    <label className={classes.label}>Username</label>
                    <br />
                    <input
                      name="username"
                      type="text"
                      {...register("username")}
                      className={`${classes.inputStyle} ${
                        errors.username ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.username?.message}
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
                    <label className={classes.label}>Email</label>
                    <br />
                    <input
                      name="email"
                      type="text"
                      {...register("email")}
                      className={`${classes.inputStyle} ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className={classes.label}>Password</label>
                    <br />
                    <input
                      name="password"
                      type="password"
                      {...register("password")}
                      className={`${classes.inputStyle} ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className={classes.label}> Retype Password</label>
                    <br />
                    <input
                      name="confirmPassword"
                      type="password"
                      {...register("confirmPassword")}
                      className={`${classes.inputStyle} ${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.confirmPassword?.message}
                    </div>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <p className={classes.pFont}>Your password must:</p>
                  <ul className={classes.pFont}>
                    <li>be 8 to 72 characters long</li>
                    <li>not contain your name or email</li>
                    <li>
                      not be commonly used, easily guessed or contain any
                      variation of the word “Consult24”
                    </li>
                  </ul>
                  <p className={classes.pFont}>
                    By clicking Create Account, you agree to the
                    <span>
                      <Link href="#">
                        <a className="px-1 text-primary">Terms of Use</a>
                      </Link>
                    </span>
                    and{" "}
                    <span className="px-1">
                      <Link href="#">
                        <a className=" text-primary">Privacy Policy</a>
                      </Link>
                      .
                    </span>
                  </p>
                  <button type="submit" className={classes.createBtn}>
                    Create Account
                  </button>
                  <p className={classes.orOption}>
                    <hr className={classes.beforOr} />
                    OR
                    <hr className={classes.afterOr} />
                  </p>
                  <p className={classes.pFont}>
                    By clicking Sign up with Facebook or Sign up with Google,
                    you agree to the
                    <span>
                      <Link href="#">
                        <a className="px-1 text-primary">Terms of Use</a>
                      </Link>
                    </span>
                    and
                    <span className="px-1">
                      <Link href="#">
                        <a className=" text-primary">Privacy Policy</a>
                      </Link>
                      .
                    </span>
                  </p>
                  <button className={classes.socialBtn}>
                    <span className={classes.iconFb}>
                      <FaFacebook />
                    </span>
                    Sign up with Facebook
                  </button>
                  <br />
                  <button className={classes.socialBtn}>
                    <FcGoogle /> Sign up with Google
                  </button>
                </form>
                <div className="text-center my-3">
                  <p className={classes.font}>
                    Already have an account ?
                    <a href="/home/login" style={{ color: "orange" }}>
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container">
                <Image src={signup} width={500} height={500} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
