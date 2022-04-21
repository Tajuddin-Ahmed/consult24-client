import React, { useState } from "react";
import Link from "next/link";
import classes from "../../components/_App/Navbar/Menu/register/register.module.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import cls from "./profile.module.css";
import Image from "next/image";
import signup from "../../../../../public/images/claim-your-business.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const UserInfo = () => {
  const [error, setError] = useState("");
  // form validation
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid first name"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid last name"),
    country: Yup.string().required("country is required"),
    address: Yup.string().required("address is required"),

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
      <div>
        <h5 className="pb-2 text-white">User info</h5>
        <div className="row  gx-3 rounded">
          <div className="col-md-4 bg-white shadow-sm p-2">
            <div className="text-center position-relative">
              <img
                src="/images/user1.jpg"
                width="100%"
                height="200px"
                alt="image"
              />

              <br />
              <label
                className={`position-absolute btn btn-light rounded-pill bordered ${cls.btnHover}`}
                style={{
                  marginTop: "-50px",
                  marginLeft: "-80px",
                  padding: "6px 12px",
                }}
              >
                <input className="d-none" type="file" />
                Upload Photo
              </label>
            </div>
            <h6>Name:Alom Hossain</h6>
            <p>Email:user123@gmail.com</p>
            <address>location:</address>

            <div
              className="col-md-6 text-center py-4"
              style={{
                backgroundColor: "lightblue",
                width: "45%",
                marginRight: "10%",
              }}
            >
              <h6>0</h6>
              <p>Projects</p>
            </div>
            <div
              className="col-md-6 text-center py-3"
              style={{ backgroundColor: "lightyellow", width: "45%" }}
            >
              <h6>0</h6>
              <p>Reviews</p>
            </div>
          </div>
          <div className="col-md-8 bg-white shadow-sm p-3">
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

                    {/* hidden data  */}

                    <input
                      name="middlename"
                      type="hidden"
                      {...register("middlename")}
                      className={`${classes.inputStyle} ${
                        errors.middlename ? "is-invalid" : ""
                      }`}
                    />

                    <input
                      name="online_status"
                      type="hidden"
                      {...register("online_status")}
                      className={`${classes.inputStyle} ${
                        errors.online_status ? "is-invalid" : ""
                      }`}
                    />

                    <input
                      name="activity_status"
                      type="hidden"
                      {...register("activity_status")}
                      className={`${classes.inputStyle} ${
                        errors.activity_status ? "is-invalid" : ""
                      }`}
                    />

                    <input
                      name="account_status"
                      type="hidden"
                      {...register("account_status")}
                      className={`${classes.inputStyle} ${
                        errors.account_status ? "is-invalid" : ""
                      }`}
                    />
                    <input
                      name="payment_to_method"
                      type="hidden"
                      {...register("payment_to_method")}
                      className={`${classes.inputStyle} ${
                        errors.payment_to_method ? "is-invalid" : ""
                      }`}
                    />
                    <input
                      name="payment_from_method"
                      type="hidden"
                      {...register("payment_from_method")}
                      className={`${classes.inputStyle} ${
                        errors.payment_from_method ? "is-invalid" : ""
                      }`}
                    />
                    <input
                      name="avg_rating"
                      type="hidden"
                      {...register("avg_rating")}
                      className={`${classes.inputStyle} ${
                        errors.avg_rating ? "is-invalid" : ""
                      }`}
                    />
                    <input
                      name="lifetime_service_count"
                      type="hidden"
                      {...register("lifetime_service_count")}
                      className={`${classes.inputStyle} ${
                        errors.avg_rating ? "is-invalid" : ""
                      }`}
                    />
                    <input
                      name="positive_review_id"
                      type="hidden"
                      {...register("positive_review_id")}
                      className={`${classes.inputStyle} ${
                        errors.positive_review_id ? "is-invalid" : ""
                      }`}
                    />
                    <input
                      name="negative_review_id"
                      type="hidden"
                      {...register("negative_review_id")}
                      className={`${classes.inputStyle} ${
                        errors.negative_review_id ? "is-invalid" : ""
                      }`}
                    />
                    <input
                      name="pref_provider_list"
                      type="hidden"
                      {...register("pref_provider_list")}
                      className={`${classes.inputStyle} ${
                        errors.pref_provider_list ? "is-invalid" : ""
                      }`}
                    />

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
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-2">
                        <label className={classes.label}>Gender</label>
                        <br />
                        <select
                          name="state"
                          {...register("state")}
                          className={`${classes.inputStyle} ${
                            errors.state ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">Select one</option>
                          <option value="AL">Male</option>
                          <option value="AK">Female</option>
                          <option value="AZ">Other</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.state?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-2">
                        <label className={classes.label}>Country</label>
                        <br />
                        <input
                          name="country"
                          type="text"
                          {...register("country")}
                          className={`${classes.inputStyle} ${
                            errors.country ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.country?.message}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-2">
                        <label className={classes.label}>Apartment</label>
                        <br />
                        <input
                          name="apartment"
                          type="text"
                          {...register("apartment")}
                          className={`${classes.inputStyle} ${
                            errors.apartment ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.apartment?.message}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className={classes.label}>Street Adress</label>
                    <br />
                    <input
                      name="address"
                      type="text"
                      {...register("address")}
                      className={`${classes.inputStyle} ${
                        errors.address ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.address?.message}
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
                          <option value="">Select one</option>
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
                          {errors.state?.message}
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

        {/* <div className="row" style={{ backgroundColor: "steelblue" }}>
          <div className="container d-flex justify-content-center">
            <div className="col-md-7">
              
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default UserInfo;
