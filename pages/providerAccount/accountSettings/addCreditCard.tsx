import React, { useState } from "react";
import Cards from "react-credit-cards";
import { useFormik } from "formik";
import "react-credit-cards/es/styles-compiled.css";
import { FaLock } from "react-icons/fa";
import valid from "card-validator";
import * as Yup from "yup";
const AddCreditCard = () => {
  const [focus, setFocus] = useState("");
  const initialValues = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const validationSchema = Yup.object({
    number: Yup.string()
      .test(
        "test-number", // this is used internally by yup
        "Credit Card number is invalid", //validation message
        (value) => valid.number(value).isValid
      ) // return true false based on validation
      .required(),
    name: Yup.string().required("Required"),
    expiry: Yup.string()
      .typeError("Not a valid expiration date. Example: MM/YY")
      .max(5, "Not a valid expiration date. Example: MM/YY")
      .matches(
        /([0-9]{2})\/([0-9]{2})/,
        "Not a valid expiration date. Example: MM/YY"
      )
      .test(
        "test-credit-card-expiration-date",
        "Invalid Expiration Date has past",
        (expirationDate) => {
          if (!expirationDate) {
            return false;
          }

          const today = new Date();
          const monthToday = today.getMonth() + 1;
          const yearToday = today.getFullYear().toString().substr(-2);

          const [expMonth, expYear] = expirationDate.split("/");

          if (Number(expYear) < Number(yearToday)) {
            return false;
          } else if (
            Number(expMonth) < monthToday &&
            Number(expYear) <= Number(yearToday)
          ) {
            return false;
          }

          return true;
        }
      )
      .test(
        "test-credit-card-expiration-date",
        "Invalid Expiration Month",
        (expirationDate) => {
          if (!expirationDate) {
            return false;
          }
          const today = new Date().getFullYear().toString().substr(-2);

          const [expMonth] = expirationDate.split("/");

          if (Number(expMonth) > 12) {
            return false;
          }

          return true;
        }
      )
      .required("Expiration date is required"),
    cvc: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="bg-light">
      <div className="row d-flex justify-content-center">
        <div className="col-md-9 col-lg-9 my-5 p-4 bg-white shadow-sm">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <h3>Add a new credit card</h3>
              <p>
                <span className="fs-5 me-1">
                  <FaLock />
                </span>
                <span>All payment info is stored securely.</span>
              </p>
              <div className="col-md-4 col-lg-4">
                <Cards
                  number={formik.values.number}
                  name={formik.values.name}
                  expiry={formik.values.expiry}
                  cvc={formik.values.cvc}
                  focused={focus}
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <div className="d-flex justify-content-evenly mb-5 mt-4">
                  <div className="w-100">
                    <input
                      style={{
                        border: "1px solid #03c6fc",
                        width: "95%",
                        height: "37px",
                      }}
                      type="tel"
                      name="number"
                      placeholder="Card Number"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onFocus={(e) => setFocus(e.target.name)}
                    />

                    {formik.touched.number && formik.errors.number ? (
                      <div className="text-danger">{formik.errors.number}</div>
                    ) : null}
                  </div>
                  <div className="w-100">
                    <input
                      style={{
                        border: "1px solid #03c6fc",
                        width: "95%",
                        height: "37px",
                      }}
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onFocus={(e) => setFocus(e.target.name)}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div className="w-100">
                    <input
                      style={{
                        border: "1px solid #03c6fc",
                        width: "95%",
                        height: "37px",
                      }}
                      type="text"
                      name="expiry"
                      placeholder="MM/YY Expiry"
                      value={formik.values.expiry}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onFocus={(e) => setFocus(e.target.name)}
                    />
                    {formik.touched.expiry && formik.errors.expiry ? (
                      <div className="text-danger">{formik.errors.expiry}</div>
                    ) : null}
                  </div>
                  <div className="w-100">
                    <input
                      style={{
                        border: "1px solid #03c6fc",
                        width: "95%",
                        height: "37px",
                      }}
                      type="tel"
                      name="cvc"
                      placeholder="CVC"
                      value={formik.values.cvc}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onFocus={(e) => setFocus(e.target.name)}
                    />
                    {formik.touched.cvc && formik.errors.cvc ? (
                      <div className="text-danger">{formik.errors.cvc}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn btn-info float-end me-3 py-2"
                type="submit"
              >
                Add credit card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddCreditCard;
