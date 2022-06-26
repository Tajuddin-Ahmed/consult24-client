import classes from "../../../components/_App/Navbar/Menu/register/register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
const EditAddress = () => {
  const user: any = useContext(AppContext);
  const [address, setAddress]: any = useState({});
  const notify = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };
  const notify1 = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    });
  };
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getUserAddress = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/CustomerProfileAddressUpdate/${user?.id}`,
            config
          );
          if (res.status === 200) {
            setAddress(res.data.address?.[0]);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getUserAddress();
  }, [user?.id]);
  const initialValues = {
    streetAddress: address?.street_address ? address?.street_address : "",
    country: address?.country ? address?.country : "",
    state: address?.state ? address?.state : "",
    city: address?.city ? address?.city : "",
    zipcode: address?.zip_code ? address?.zip_code : "",
    apartment: address?.apt ? address?.apt : "",
  };
  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"),
    apartment: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      street_address: values.streetAddress,
      apt: values.apartment,
      zip_code: values.zipcode,
      city: values.city,
      state: values.state,
      country: values.country,
    });
    if (user?.id) {
      try {
        const res = await axios.put(
          `https://c24apidev.accelx.net/auth_api/CustomerProfileAddressUpdate/${user?.id}`,
          body,
          config
        );
        if (res.status === 200) {
          notify("Information updated successfully");
          router.back();
        }
      } catch (error) {
        notify1(error.message);
      }
    }
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="row bg-light d-flex justify-content-center py-5">
        <ToastContainer />
        <div className="col-md-8">
          <h4 className="text-center mb-4">Edit Address information</h4>
          <Form action="" className="border bg-white p-4 shadow-sm">
            <div className="row mb-3">
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>Country</label>
                <Field
                  name="country"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="country">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>State</label>
                <Field
                  name="state"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="state">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>City</label>
                <Field
                  name="city"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="city">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>Zipcode</label>
                <Field
                  name="zipcode"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="zipcode">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>
                  Street Address
                </label>
                <Field
                  name="streetAddress"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="streetAddress">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>Apartment</label>
                <Field
                  name="apartment"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="apartment">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="text-end">
              <button className="btn btn-warning  me-2">Cancel</button>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};
export default EditAddress;
