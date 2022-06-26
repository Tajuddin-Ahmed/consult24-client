import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
const BusinessMore = () => {
  const user = useContext(AppContext);
  const router = useRouter();
  const data = router.query;
  console.log(data);
  const onSubmit = (values) => {
    router.push(
      {
        pathname: "/providerAccount/aboutYourself",
        query: {
          ...values,
          ...data,
        },
      },
      "/providerAccount/aboutYourself"
    );
  };
  const initialValues = {
    companyName: data.companyName,
    yearFounded: "",
    employeesNo: "",
    streetAddress: "",
    apartment: "",
    state: "",
    city: "",
    zipCode: "",
  };
  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    yearFounded: Yup.string().required("Required"),
    employeesNo: Yup.string().required("Required"),
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
                <Form>
                  <div className={`card-body bg-light ${cls.font}`}>
                    <h6>Tell us more about your business</h6>
                    <p style={{ fontSize: "12px" }}>
                      Customer will see this info on your profile
                    </p>
                    <div className="mb-2">
                      <label htmlFor="companyName">Company Name</label>
                      <br />
                      <Field
                        type="text"
                        name="companyName"
                        id="companyName"
                        className={cls.businessInput}
                      />
                      <ErrorMessage name="companyName">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="yearFounded">Year founded</label>
                      <br />
                      <Field
                        type="text"
                        name="yearFounded"
                        id="yearFounded"
                        className={cls.businessInput}
                      />
                      <ErrorMessage name="yearFounded">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="employeesNo">Number of employees</label>
                      <br />
                      <Field
                        type="text"
                        name="employeesNo"
                        id="employeesNo"
                        className={cls.businessInput}
                      />
                      <ErrorMessage name="employeesNo">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="streetAddress">
                        Business address (optional)
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        className={cls.businessInput}
                        placeholder="Street address"
                      />
                    </div>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="apartment"
                        className={cls.businessInput}
                        placeholder="Apartment"
                      />
                    </div>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="state"
                        className={cls.businessInput}
                        placeholder="State"
                      />
                    </div>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="city"
                        className={cls.businessInput}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="zipCode"
                        className={cls.businessInput}
                        placeholder="zipCode"
                      />
                    </div>

                    <button
                      className="w-100 btn btn-info mt-3"
                      type="submit"
                      // onClick={() =>
                      //   router.push("/providerAccount/addProfilePhoto")
                      // }
                    >
                      Next
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};
export default BusinessMore;
