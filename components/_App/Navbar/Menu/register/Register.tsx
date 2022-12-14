import React, { useState } from "react";
import Link from "next/link";
import classes from "./register.module.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import signup from "../../../../../public/images/contact.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import {
  createUser,
  createVideoAccount,
  loginToUser,
  storeSecretKey,
} from "../../../../hooks/createAndLogin";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// login to user

const RegisterPage = () => {
  const [error, setError] = useState("");
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
      autoClose: 2000,
    });
  };

  // form validation
  const validationSchema = Yup.object().shape({
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
          data.role,
          data.email,
          data.password,
          data.confirmPassword
        );
        const videoToken = await createVideoAccount(
          data.email,
          ["https://c24vconf.accelx.net"],
          "https://c24vconf.accelx.net"
        );

        if (result) {
          const token = await loginToUser(data.email, data.password);
          if (token && videoToken) {
            const storedKey = await storeSecretKey(
              token,
              result.id,
              videoToken
            );
            console.log(storedKey);
            notify1("Account created successfully");
            window.location.href = "/";
          }
        }
      } catch (error) {
        notify("Email already exist or incorrect password matching");
      }

      return false;
    } else {
      notify("Credentials Error");
    }
  }

  const HandleCaptchaOnchange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <>
      <div className="row bg-light">
        <ToastContainer />
        <div className="container">
          <div className="container  my-5 shadow-sm border rounded bg-white d-flex">
            <div className="col-md-6 d-flex align-items-center">
              <div className="container">
                <Image src={signup} width={500} height={500} alt="image" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <form
                  className="container mt-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <h3 className="pb-2">Sign Up</h3>
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
                      variation of the word ???Consult24???
                    </li>
                  </ul>
                  <p className={classes.pFont}>
                    By clicking Create Account, you agree to the
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

                  <button type="submit" className={`mt-3 ${classes.createBtn}`}>
                    Create Account
                  </button>
                </form>
                <div className="container">
                  <p className={classes.orOption}>OR</p>
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
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
