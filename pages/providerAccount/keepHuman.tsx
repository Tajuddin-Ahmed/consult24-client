import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import cls from "./provider.module.css";
import FormikControl from "../../components/Provider/control/formikControls";
const KeepHuman = () => {
  const [isChecked, setIsChecked] = useState(false);
  const user: any = useContext(AppContext);
  const router = useRouter();
  console.log(user);
  const data = router.query;
  console.log(data);
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      (document.getElementById("middleName") as HTMLInputElement).disabled =
        true;
    } else {
      (document.getElementById("middleName") as HTMLInputElement).disabled =
        false;
    }
  };
  const onSubmit = async (values) => {
    // Start Provider update api
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      first_name: values.firstName,
      middle_name: values.middleName,
      last_name: values.lastName,
      phone_number: data.phone,
      gender: values.gender,
      online_status: true,
      activity_status: true,
      account_status: "active",
      payment_to_method: data.paymentTo,
      payment_from_method: data.paymentFrom,
      businees_goal: data.businessGoalOption,
      spent_money_in_business: data.budgetOption,
      number_of_employees: data.employeesNo,
      founding_year: data.yearFounded,
      experience_level: data.experienceLevel,
      company_name: data.companyName,
      social_media_link: data.socialLink,
      website_url: data.websiteUrl,
      batch_level: data.batchLevel,
      avg_res_time: data.avgResTime,
      avg_rating: null,
      lifetime_service_count: null,
      positive_review_id: null,
      nagetive_review_id: null,
      street_address: values.providerStreetAddress,
      apt: values.providerApt,
      zip_code: values.providerZipcode,
      city: values.providerCity,
      state: values.providerState,
      country: values.country,
    });
    try {
      const res = await axios.put(
        `https://c24apidev.accelx.net/auth_api/provider_profile/${user.id}`,
        body,
        config
      );
      console.log(res);
      if (res.status === 200) {
        router.push(
          {
            pathname: "/providerAccount/providerProfile",
            query: {
              isComplete: "completed",
            },
          },
          "/providerAccount/providerProfile"
        );
      }
    } catch (error) {
      console.log(error.message);
    }
    // End Provider update api
  };
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: null,
    providerStreetAddress: "",
    providerApt: "",
    country: "",
    providerCity: "",
    providerState: "",
    providerZipcode: "",
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
  const countryOption = [
    { key: "Select Country", value: "" },
    { key: "United States", value: "USA" },
    { key: "Bangladesh", value: "bangladesh" },
  ];
  const validationShape: any = {
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    dateOfBirth: Yup.date().nullable().required("Required"),
    providerStreetAddress: Yup.string().required("Required"),
    providerApt: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    providerCity: Yup.string().required("Required"),
    providerState: Yup.string().required("Required"),
    providerZipcode: Yup.string().required("Required"),
  };
  if (isChecked === false) {
    validationShape.middleName = Yup.string().required("Required");
  }
  const validationSchema = Yup.object(validationShape);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formProps) => (
        <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
          <div className="row">
            <div className="container">
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                <div
                  className="card p-4 bg-white me-5 shadow-sm"
                  style={{ width: "32rem" }}
                >
                  <p
                    className="card-text"
                    onClick={() => router.back()}
                    style={{ cursor: "pointer" }}
                  >
                    <IoMdArrowBack /> Back
                  </p>
                  <div className={`card-body bg-light ${cls.font}`}>
                    <div
                      style={{
                        fontSize: "20px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        backgroundColor: "white",
                        textAlign: "center",
                        paddingTop: "3px",
                        marginBottom: "10px",
                      }}
                    >
                      <FiUserCheck />
                    </div>
                    <h6>Help keep Consult24 human</h6>
                    <p style={{ fontSize: "12px" }}>
                      Before you go on, we need to make sure you're a real
                      person. All information you enter is secure and
                      confidential.
                    </p>
                    <Form>
                      <div>
                        <div className="">
                          <label htmlFor="inputField">Legal Name</label>
                          <div className="mb-2">
                            <Field
                              type="text"
                              className={cls.businessInput}
                              placeholder="First name"
                              name="firstName"
                            />
                          </div>
                          <ErrorMessage name="firstName">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                          <div className="mb-2">
                            <Field
                              type="text"
                              className={cls.businessInput}
                              id="middleName"
                              placeholder="Middle name"
                              name="middleName"
                            />
                          </div>
                          {isChecked === false && (
                            <ErrorMessage name="middleName">
                              {(errMsg) => (
                                <div className="text-danger mb-2">{errMsg}</div>
                              )}
                            </ErrorMessage>
                          )}
                          <div
                            className="form-check"
                            style={{ fontSize: "12px" }}
                          >
                            <Field
                              className="form-check-input"
                              type="checkbox"
                              id="flexCheckDefault"
                              checked={isChecked}
                              onChange={handleChecked}
                              name="confirmation"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              I confirm I don't have a middle name
                            </label>
                          </div>
                          <div className="mb-2">
                            <Field
                              type="text"
                              className={cls.businessInput}
                              placeholder="Last name"
                              name="lastName"
                            />
                          </div>
                          <ErrorMessage name="lastName">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                          <div>
                            <label htmlFor="gender">Gender</label>
                            <div className="mb-2">
                              <FormikControl
                                control="select"
                                name="gender"
                                options={genderOptions}
                              />
                            </div>
                          </div>
                          <p style={{ fontSize: "12px" }}>
                            Enter your name exactly as it appears on your
                            government-issued ID
                          </p>
                        </div>
                        <div>
                          <label htmlFor="inputField">Date of Birth</label>
                          <div className="mb-2">
                            <Field
                              type="date"
                              className={cls.businessInput}
                              placeholder="MM/DD/YYYY"
                              name="dateOfBirth"
                            />
                          </div>
                        </div>
                        <ErrorMessage name="dateOfBirth">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                        <div>
                          <label htmlFor="inputField">Home address</label>
                          <div className="mb-2">
                            <Field
                              type="text"
                              className={cls.businessInput}
                              placeholder="Street address"
                              name="providerStreetAddress"
                            />
                          </div>
                          <ErrorMessage name="providerStreetAddress">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                          <div className="mb-2">
                            <Field
                              type="text"
                              className={cls.businessInput}
                              placeholder="Suite or apt. #"
                              name="providerApt"
                            />
                          </div>
                          <ErrorMessage name="providerApt">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                          <div className="mb-2">
                            <div className="row">
                              <div className="col-md-6 col-lg-6">
                                <div>
                                  <FormikControl
                                    control="select"
                                    name="country"
                                    options={countryOption}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6 col-lg-6">
                                <div>
                                  <Field
                                    type="text"
                                    className={cls.businessInput}
                                    placeholder="City"
                                    name="providerCity"
                                  />
                                </div>
                                <ErrorMessage name="providerCity">
                                  {(errMsg) => (
                                    <div className="text-danger mb-2">
                                      {errMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="row">
                              <div className="col-md-6 col-lg-6">
                                <div>
                                  <FormikControl
                                    control="select"
                                    name="providerState"
                                    options={dropdownOptions}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6 col-lg-6">
                                <div>
                                  <Field
                                    type="text"
                                    className={cls.businessInput}
                                    placeholder="ZipCode"
                                    name="providerZipcode"
                                  />
                                </div>
                                <ErrorMessage name="providerZipcode">
                                  {(errMsg) => (
                                    <div className="text-danger mb-2">
                                      {errMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                          </div>
                          <p style={{ fontSize: "12px" }}>
                            Make sure everything you entered is right before
                            submitting
                          </p>
                        </div>

                        <button
                          className="float-end btn btn-info mt-3"
                          type="submit"
                          // onClick={() =>
                          //   router.push("/providerAccount/leadPrice")
                          // }
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default KeepHuman;
