import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PreviewImage from "../../components/Provider/control/PreviewImage";
import axios from "axios";
import * as Yup from "yup";
import cls from "./provider.module.css";
import FormikControl from "../../components/Provider/control/formikControls";
const AdditionalInfo = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  const batchLevel = [
    { key: "Select batch level", value: "" },
    { key: "Beginner", value: "beginner" },
    { key: "Intermediate", value: "intermediate" },
    { key: "Advanced", value: "advanced" },
  ];
  const avgResTime = [
    { key: "Average response time", value: "" },
    { key: "01", value: "01" },
    { key: "02", value: "02" },
    { key: "3", value: "03" },
    { key: "4", value: "04" },
    { key: "05", value: "05" },
    { key: "06", value: "06" },
    { key: "07", value: "07" },
    { key: "08", value: "08" },
    { key: "09", value: "09" },
    { key: "10", value: "10" },
    { key: "11", value: "11" },
    { key: "12", value: "12" },
    { key: "13", value: "13" },
    { key: "14", value: "14" },
    { key: "15", value: "15" },
    { key: "16", value: "16" },
    { key: "17", value: "17" },
    { key: "18", value: "18" },
    { key: "19", value: "19" },
    { key: "20", value: "20" },
    { key: "21", value: "21" },
    { key: "22", value: "22" },
    { key: "23", value: "23" },
    { key: "24", value: "24" },
  ];
  const onSubmit = (values) => {
    router.push(
      {
        pathname: "/providerAccount/proPayMethod",
        query: {
          ...values,
          ...data,
        },
      },
      "/providerAccount/proPayMethod"
    );
  };
  const initialValues = {
    experienceLevel: "",
    batchLevel: "",
    avgResTime: "",
    socialLink: "",
    websiteUrl: "",
  };
  const validationSchema = Yup.object({
    experienceLevel: Yup.string().required("Required"),
    batchLevel: Yup.string().required("Required"),
    avgResTime: Yup.string().required("Required"),
    socialLink: Yup.string().required("Required"),
    websiteUrl: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
        <div className="row">
          <div className="container">
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <div
                className="card p-4 bg-white me-5 shadow-sm"
                style={{ width: "28rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className={`card-body bg-light ${cls.font}`}>
                  <h5>Additional Info</h5>
                  <p style={{ fontSize: "12px" }}>
                    Please provide some additional information so that customer
                    can easyly hire you.
                  </p>
                  <Form>
                    <div className="mb-2">
                      <label htmlFor="experienceLevel" className="mb-2">
                        Experience level (years)
                      </label>
                      <Field
                        type="text"
                        name="experienceLevel"
                        className={cls.businessInput}
                        id="experienceLevel"
                      />
                      <ErrorMessage name="experienceLevel">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="batchLevel" className="mb-2">
                        Batch Level
                      </label>
                      <FormikControl
                        control="select"
                        name="batchLevel"
                        options={batchLevel}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="avgResTime" className="mb-2">
                        Average Response Time
                      </label>
                      <FormikControl
                        control="select"
                        name="avgResTime"
                        options={avgResTime}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="socialLink" className="mb-2">
                        Social Media Link
                      </label>
                      <Field
                        type="text"
                        name="socialLink"
                        className={cls.businessInput}
                        id="socialLink"
                      />
                      <ErrorMessage name="socialLink">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="websiteUrl" className="mb-2">
                        Website url
                      </label>
                      <Field
                        type="text"
                        name="websiteUrl"
                        className={cls.businessInput}
                        id="websiteUrl"
                      />
                      <ErrorMessage name="websiteUrl">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <button type="submit" className="w-100 btn btn-info">
                      Next
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};
export default AdditionalInfo;
