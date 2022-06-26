import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import cls from "../provider.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Fragment, useRef, useState } from "react";
import FormikControl from "../../../components/Provider/control/formikControls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ServiceAvailability = () => {
  const router = useRouter();
  const data: any = router.query;
  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });
  };
  const notify1 = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });
  };
  const onSubmit = async (values) => {
    let sat = "false",
      sun = "false",
      mon = "false",
      tue = "false",
      wed = "false",
      thu = "false",
      fri = "false",
      all = "false";
    for (let day of values.daysOfWeek) {
      if (day === "saturday") {
        sat = "true";
      } else if (day === "sunday") {
        sun = "true";
      } else if (day === "monday") {
        mon = "true";
      } else if (day === "tuesday") {
        tue = "true";
      } else if (day === "wednesday") {
        wed = "true";
      } else if (day === "thursday") {
        thu = "true";
      } else if (day === "friday") {
        fri = "true";
      } else {
        all = "true";
      }
    }
    console.log(sat, sun, mon, tue, wed, thu, fri, all);
    console.log(values);
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = new FormData();
    body.append("all", all);
    body.append("saturday", sat);
    body.append("sunday", sun);
    body.append("monday", mon);
    body.append("tuesday", tue);
    body.append("wednesday", wed);
    body.append("thursday", thu);
    body.append("friday", fri);
    body.append("appointment_start_date", values.startDate);
    body.append("appointment_end_date", values.endDate);
    body.append("day_start_time", values.startTime);
    body.append("day_end_time", values.endTime);
    body.append("duration", values.duration);
    console.log(body);
    try {
      const res = await axios.post(
        "https://c24apidev.accelx.net/api/provider_appointment_create/",
        body,
        config
      );
      if (res.status === 201) {
        notify("Your appointment has been created successfully");
        // router.push(
        //   {
        //     pathname: "/providerAccount/serviceImage",
        //     query: {
        //       serviceId: res.data.id,
        //     },
        //   },
        //   "/providerAccount/service/serviceImage"
        // );
      }
    } catch (error) {
      notify1(error.message);
    }
  };
  const checkboxOptions = [
    { key: "Saturday", value: "saturday" },
    { key: "Sunday", value: "sunday" },
    { key: "Monday", value: "monday" },
    { key: "Tuesday", value: "tuesday" },
    { key: "Wednesday", value: "wednesday" },
    { key: "Thursday", value: "thursday" },
    { key: "Friday", value: "friday" },
    { key: "All", value: "all" },
  ];

  const initialValues = {
    startDate: "",
    endDate: "",
    daysOfWeek: [],
    startTime: "",
    endTime: "",
    duration: "",
  };

  const validationSchema = Yup.object({
    startDate: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    daysOfWeek: Yup.array()
      .min(1, "At least one option is required")
      .required(),
    startTime: Yup.string().required("Required"),
    endTime: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
  });
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formProps) => (
        <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
          <ToastContainer />
          <div className="row">
            <div className="container">
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                <div
                  className="card p-4 bg-white  shadow-sm"
                  style={{ width: "44rem" }}
                >
                  <p
                    className="card-text"
                    onClick={() => router.back()}
                    style={{ cursor: "pointer" }}
                  >
                    <IoMdArrowBack /> Back
                  </p>
                  <Form>
                    <div className={`card-body bg-light ${cls.font}`}>
                      <h5>Tell us about your availability</h5>
                      <p style={{ fontSize: "12px" }}>
                        Customer will see this when they search
                      </p>
                      <div className="d-flex">
                        <div className="mb-2 w-75 me-2">
                          <h6>Select start date</h6>
                          <Field
                            type="date"
                            name="startDate"
                            id="startDate"
                            className={cls.businessInput}
                          />
                          <ErrorMessage name="startDate">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="mb-2 w-75">
                          <h6>Select end date</h6>
                          <Field
                            type="date"
                            name="endDate"
                            id="endDate"
                            className={cls.businessInput}
                          />
                          <ErrorMessage name="endDate">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>

                      <div className="mb-2">
                        <h6>
                          Select available days (
                          <span className="small">
                            Your selected days should be between the time slot
                          </span>
                          )
                        </h6>
                        <div role="group" aria-labelledby="checkbox-group">
                          <FormikControl
                            control="checkbox"
                            name="daysOfWeek"
                            options={checkboxOptions}
                          />
                        </div>
                        <ErrorMessage name="daysOfWeek">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="d-flex">
                        <div className="mb-2 me-2 w-75">
                          <h6>Select day start time</h6>
                          <Field
                            type="time"
                            name="startTime"
                            id="startTime"
                            className={cls.businessInput}
                          />
                          <ErrorMessage name="startTime">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="mb-2 me-2 w-75">
                          <h6>Select day end time</h6>
                          <Field
                            type="time"
                            name="endTime"
                            id="endTime"
                            className={cls.businessInput}
                          />
                          <ErrorMessage name="endTime">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="mb-2 w-75">
                          <h6>Duration</h6>
                          <Field
                            type="text"
                            name="duration"
                            id="duration"
                            className={cls.businessInput}
                          />
                          <ErrorMessage name="duration">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>

                      <button
                        className="w-100 btn btn-info mt-3"
                        type="submit"
                        disabled={!(formProps.isValid && formProps.dirty)}
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
      )}
    </Formik>
  );
};
export default ServiceAvailability;
