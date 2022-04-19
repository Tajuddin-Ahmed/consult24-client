import React, { useRef, useState } from "react";
import Link from "next/link";
import classes from "../register/register.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import RemoveCookie from "../../../../hooks/removeCookie";
import SetCookie from "../../../../hooks/setCookie";
import GetCookie from "../../../../hooks/getCookie";

export async function getCurrentToken(email: string, password: string) {
  try {
    const response = await fetch(
      "https://c24apidev.accelx.net/auth/token/login/",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const value = JSON.stringify(data.auth_token);
    localStorage.setItem("token", value);
    return data.auth_token;
  } catch (error) {
    console.log(error.message);
  }
}

const LoginPage = () => {
  const [error, setError] = useState("");
  const [stateOfInput, setStateOfInput] = useState("");
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  let userCookie;
  if (GetCookie("usrin")) {
    userCookie = JSON.parse(GetCookie("usrin"));

    (document.getElementById("userEmail") as HTMLInputElement).value =
      userCookie.email;
    (document.getElementById("userPassword") as HTMLInputElement).value =
      userCookie.password;
  }
  async function onSubmit(data) {
    console.log(data);
    // display form data on success
    const token = await getCurrentToken(data.email, data.password);
    if (token) {
      if (data.rememberMe) {
        RemoveCookie("usrin");
        SetCookie("usrin", JSON.stringify(data));
      }
      window.location.href = "/";
    } else {
      setError("Credentials error");
    }
    return false;
  }

  return (
    <>
      <div className="row" style={{ backgroundColor: "steelblue" }}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="container">
            <div className="mx-4">
              <div className="text-center py-3">
                <h3 className={classes.font} style={{ color: "white" }}>
                  Sign In
                </h3>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="container border shadow p-4 bg-white"
              >
                <div className="mb-2">
                  <label className={classes.label}>Email</label>
                  <br />
                  <input
                    name="email"
                    type="email"
                    id="userEmail"
                    // value={userCookie && userCookie.email}
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
                    {...register("password")}
                    id="userPassword"
                    // value={}
                    className={`${classes.inputStyle} ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    type="password"
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <div className="d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("rememberMe")}
                      id="flexCheckChecked"
                    />
                    <label
                      htmlFor="flexCheckChecked"
                      className="form-check-label fs-6"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link href="/home/login/forgetPassword">
                    <a className={classes.forgotFont}>Forgot password ? </a>
                  </Link>
                </div>
                <p className={classes.pFont}></p>
                <button className={classes.createBtn}>Login</button>
                <p className={classes.orOption}>
                  <hr className={classes.beforOr} />
                  OR
                  <hr className={classes.afterOr} />
                </p>
                <p className={classes.pFont}>
                  By clicking Sign up with Facebook or Sign up with Google, you
                  agree to the
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
                  Continue with Facebook
                </button>
                <br />
                <button className={classes.socialBtn}>
                  <FcGoogle />
                  Continue with Google
                </button>
                <button className={classes.socialBtn}>
                  <FaApple /> Continue with Apple
                </button>
              </form>
            </div>
            <div className="text-center my-5">
              <p className={classes.font} style={{ color: "white" }}>
                Don't have an account ?
                <Link href="/home/register">
                  <a style={{ color: "orange" }}>Sign up</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};
export default LoginPage;
