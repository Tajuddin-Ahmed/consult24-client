import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import FormikControl from "../../../components/Provider/control/formikControls";
import classes from "../../../components/_App/Navbar/Menu/register/register.module.css";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
const CompleteProfile = () => {
  const [image, setImage] = useState(null);
  const [updated, setUpdated] = useState(false);
  const user: any = useContext(AppContext);
  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });
  };
  const notify1 = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getCustomerProfilePicture = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/CustomerProfilePicture/?user_id=${user?.id}`,
            config
          );
          if (res.status === 200) {
            const length = res.data.length;
            setImage(res.data[length - 1].profile_picture);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getCustomerProfilePicture();
  }, [user?.id]);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid first name"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid last name"),
    gender: Yup.string().required("gender is required"),
    country: Yup.string().required("country is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("city is required"),
    address: Yup.string().required("address is required"),
    phone: Yup.string().required("phone is required"),
    zipCode: Yup.string().required("zipCode is required"),
  });

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
    gender: "",
    phone: "",
    apartment: "",
    payToMethod: "",
    payFromMethod: "",
  };
  const dropdownOptions = [
    { key: "State", value: "" },
    { key: "AL", value: "AL" },
    { key: "AK", value: "AK" },
    { key: "AZ", value: "AZ" },
    { key: "AR", value: "AR" },
    { key: "CA", value: "CA" },
    { key: "CO", value: "CO" },
    { key: "CT", value: "CT" },
    { key: "DE", value: "DE" },
    { key: "FL", value: "FL" },
    { key: "GA", value: "GA" },
    { key: "HI", value: "HI" },
    { key: "ID", value: "ID" },
    { key: "IL", value: "IL" },
    { key: "IN", value: "IN" },
    { key: "IA", value: "IA" },
    { key: "KS", value: "KS" },
  ];
  const genderOptions = [
    { key: "Select gender", value: "" },
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
    { key: "Other", value: "other" },
  ];

  //  START UPLOAD PHOTO
  const onFileChange = async (e) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    let formData = new FormData();
    formData.append("profile_picture", e.target.files[0]);
    formData.append("uploaded_user", user?.id);
    const body = formData;

    try {
      const res = await axios.post(
        "https://c24apidev.accelx.net/auth_api/profile_picture/",
        body,
        config
      );
      if (res.status === 201) {
        setImage(res.data.profile_picture);
        setUpdated(!updated);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  //  END UPLOAD PHOTO
  const onSubmit = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      first_name: data.firstName,
      middle_name: data.middleName,
      last_name: data.lastName,
      phone_number: data.phone,
      gender: data.gender,
      online_status: "True",
      activity_status: "True",
      account_status: "Active",
      payment_to_method: data.payToMethod,
      payment_from_method: data.payFromMethod,
      avg_rating: null,
      lifetime_service_count: null,
      positive_review_id: null,
      nagetive_review_id: null,
      street_address: data.address,
      apt: data.apartment,
      zip_code: data.zipCode,
      city: data.city,
      state: data.state,
      country: data.country,
    });
    if (user?.id) {
      try {
        const res = await axios.put(
          `https://c24apidev.accelx.net/auth_api/customer_profile/${user?.id}`,
          body,
          config
        );
        if (res.status === 201) {
          notify("Successfully updated");
          setTimeout(() => {
            router.push("/users/userInfo");
          }, 2000);
        }
      } catch (error) {
        notify1(error.message);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="row d-flex justify-content-center bg-light py-4">
        <ToastContainer />
        <div className="col-md-8">
          <div className="text-center">
            <h3 className={classes.font}>Finish Creating your account</h3>
            <p className={classes.label}>
              Your address allows us to locate the best Pros in your area.
            </p>
          </div>

          <div className="bg-white shadow-sm py-4 my-2">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 mb-3 ms-4">
                {!image ? (
                  <div className="form-group profile-box">
                    <img
                      src="/images/user1.jpg"
                      width="200"
                      height="160"
                      alt="image"
                    />
                    <div className="file-upload">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="inputfile d-none"
                        onChange={onFileChange}
                      />
                      <label
                        htmlFor="file"
                        className="btn btn-info btn-sm rounded-pill"
                        style={{
                          position: "absolute",
                          marginTop: "-50px",
                          marginLeft: "30px",
                        }}
                      >
                        <i className="bx bx-upload"></i> Upload Photo
                      </label>
                    </div>
                  </div>
                ) : (
                  <img src={image} width="200" height="160" alt="image" />
                )}
              </div>
            </div>
            <Form className="container">
              <div className="row mb-3">
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>First Name</label>
                    <br />
                    <Field
                      name="firstName"
                      type="text"
                      className={classes.inputStyle}
                    />
                    <ErrorMessage name="firstName">
                      {(errMsg) => (
                        <div className="text-danger mb-2">{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>Middle Name</label>
                    <br />
                    <Field
                      name="middleName"
                      type="text"
                      className={classes.inputStyle}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>last Name</label>
                    <br />
                    <Field
                      name="lastName"
                      type="text"
                      className={classes.inputStyle}
                    />
                    <ErrorMessage name="lastName">
                      {(errMsg) => (
                        <div className="text-danger mb-2">{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>Gender</label>
                    <br />
                    <FormikControl
                      control="select"
                      name="gender"
                      options={genderOptions}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>Country</label>
                    <br />
                    <Field
                      name="country"
                      type="text"
                      className={classes.inputStyle}
                    />
                    <ErrorMessage name="country">
                      {(errMsg) => (
                        <div className="text-danger mb-2">{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>Apartment</label>
                    <br />
                    <Field
                      name="apartment"
                      type="text"
                      className={classes.inputStyle}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className={classes.label}>Street Adress</label>
                <br />
                <Field
                  name="address"
                  type="text"
                  className={classes.inputStyle}
                />
                <ErrorMessage name="address">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label className={classes.label}>Phone Number</label>
                <br />
                <Field
                  name="phone"
                  type="text"
                  className={classes.inputStyle}
                />
                <ErrorMessage name="phone">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>City</label>
                    <br />
                    <Field
                      name="city"
                      type="text"
                      className={classes.inputStyle}
                    />
                    <ErrorMessage name="city">
                      {(errMsg) => (
                        <div className="text-danger mb-2">{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>State</label>
                    <br />
                    <FormikControl
                      control="select"
                      name="state"
                      options={dropdownOptions}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2">
                    <label className={classes.label}>Zip Code</label>
                    <br />
                    <Field
                      name="zipCode"
                      type="text"
                      className={classes.inputStyle}
                    />
                    <ErrorMessage name="zipCode">
                      {(errMsg) => (
                        <div className="text-danger mb-2">{errMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 col-lg-6 col-12">
                  <label className={classes.label}>Payment to method</label>
                  <Field
                    name="payToMethod"
                    type="text"
                    className={classes.inputStyle}
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                  <label className={classes.label}>Payment from method</label>
                  <Field
                    name="payFromMethod"
                    type="text"
                    className={classes.inputStyle}
                  />
                </div>
              </div>

              <button type="submit" className={classes.createBtn}>
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};
export default CompleteProfile;
