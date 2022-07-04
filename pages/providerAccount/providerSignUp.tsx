import React, { useState } from "react";
import Link from "next/link";
import classes from "../../components/_App/Navbar/Menu/register/register.module.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import signup from "../../public/images/claim-your-business.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { createUser, loginToUser } from "../../components/hooks/createAndLogin";

// login to user

const ProviderSignUp = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  console.log(router.query.from);
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
        console.log(result);
        if (result) {
          const token = await loginToUser(data.email, data.password);
          console.log(token);
          if (token) {
            router.push(`${router.query.from}`);
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

                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="hidden"
                        name="role"
                        {...register("role")}
                        value="3"
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
                    and
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
                    <Link
                      href={{
                        pathname: "/providerAccount/providerSignIn",
                        query: { to: `${router.query.from}` },
                      }}
                    >
                      <a style={{ color: "orange" }}>Log in</a>
                    </Link>
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
export default ProviderSignUp;
