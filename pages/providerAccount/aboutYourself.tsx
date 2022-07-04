import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import cls from "./provider.module.css";
import FormikControl from "../../components/Provider/control/formikControls";
const AboutYourself = () => {
  const user = useContext(AppContext);
  const router = useRouter();
  const data = router.query;
  console.log(data);
  const onSubmit = (values) => {
    router.push({
      pathname: "/providerAccount/additionalInfo",
      query: {
        ...values,
        ...data,
      },
    });
  };
  const budgetOptions = [
    { key: "I don't currently spend on online marketing", value: "No" },
    { key: "$1-$100", value: "$1-$100" },
    { key: "$100- $400", value: "$100- $400" },
    { key: "$400-$2500", value: "$400-$2500" },
    { key: "More than $2500", value: "More than $2500" },
  ];
  const businessGoalOptions = [
    { key: "Grow and Scale my business", value: "Grow and Scale my business" },
    { key: "Build up a side business", value: "Build up a side business" },
    {
      key: "Maintain my current business size ?",
      value: "Maintain my current business size",
    },
    { key: "Other", value: "Other" },
  ];
  const languageOptions = [
    { key: "English", value: "English" },
    { key: "Bangla", value: "Bangla" },
    { key: "Other", value: "Other" },
  ];
  const initialValues = {
    budgetOption: "",
    businessGoalOption: "",
    languageOption: "",
  };
  const validationSchema = Yup.object({
    budgetOption: Yup.string().required("Required"),
    businessGoalOption: Yup.string().required("Required"),
    languageOption: Yup.string().required("Required"),
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
                style={{ width: "32rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className={`card-body ${cls.font}`}>
                  <h5 className="card-title">Tell us a bit about yourself.</h5>
                  <p className={`card-text ${cls.font}`}>
                    Please answer three quick questions to help us understand
                    your business needs
                  </p>

                  <Form>
                    <FormikControl
                      control="radio"
                      label="How much do you spend each month on online marketing ?"
                      name="budgetOption"
                      options={budgetOptions}
                    />
                    <FormikControl
                      control="radio"
                      label="What's your main business goal ?"
                      name="businessGoalOption"
                      options={businessGoalOptions}
                    />
                    <FormikControl
                      control="radio"
                      label="What's your preferred language ?"
                      name="languageOption"
                      options={languageOptions}
                    />
                    <button
                      className="w-100 btn btn-info mt-3"
                      type="submit"
                      // onClick={() =>
                      //   router.push("/providerAccount/winningProfile")
                      // }
                    >
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
export default AboutYourself;
