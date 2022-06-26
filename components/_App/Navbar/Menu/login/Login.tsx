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
import { loginToUser } from "../../../../hooks/createAndLogin";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [stateOfInput, setStateOfInput] = useState("");
  const router = useRouter();

  const notify = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    });
  };
  const notify1 = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });
  };
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

  // Submit login form data

  async function onSubmit(data) {
    const token = await loginToUser(data.email, data.password);
    if (token) {
      if (data.rememberMe) {
        RemoveCookie("usrin");
        SetCookie("usrin", JSON.stringify(data));
      }
      notify1("Successfully logged in");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      notify("Credentials error");
    }
    return false;
  }

  // google authentication handling

  async function handleGoogleSignIn() {
    console.log("clicked");
    try {
      const res = await axios.get(
        `https://c24apidev.accelx.net/auth/o/google-oauth2/?redirect_uri=https://c24apidev.accelx.net`
      );
      // console.log(res);
      window.location.replace(res.data.authorization_url);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="row bg-light d-flex justify-content-center">
        <ToastContainer />
        <div className="col-md-6">
          <div className="container">
            <div className="mx-4">
              <div className="text-center py-3">
                <h3 className={classes.font}>Sign In</h3>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="container shadow-sm p-4 bg-white"
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
              </form>
              <div className="bg-white container shadow-sm">
                <p className={classes.orOption}>OR</p>
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
                <button
                  className={classes.socialBtn}
                  onClick={handleGoogleSignIn}
                >
                  <FcGoogle />
                  Continue with Google
                </button>
                <button className={classes.socialBtn}>
                  <FaApple /> Continue with Apple
                </button>
              </div>
            </div>
            <div className="text-center my-5">
              <p className={classes.font}>
                Don't have an account ?
                <Link href="/home/register">
                  <a style={{ color: "orange" }}>Sign up</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
