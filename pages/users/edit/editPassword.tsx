import classes from "../../../components/_App/Navbar/Menu/register/register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import { useContext } from "react";
import router from "next/router";
const EditPassword = () => {
  const user: any = useContext(AppContext);
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
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    conNewPassword: "",
  };
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    conNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const onSubmit = async (values) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      new_password: values.newPassword,
      current_password: values.currentPassword,
    });
    if (user?.id) {
      try {
        const res = await axios.post(
          `https://c24apidev.accelx.net/auth/users/set_password/`,
          body,
          config
        );
        if (res.status === 204) {
          notify("Password updated successfully");
          router.back();
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
      <div className="row bg-light d-flex justify-content-center py-5">
        <ToastContainer />
        <div className="col-md-6 col-lg-6">
          <h4 className="text-center mb-4">Edit password</h4>
          <Form action="" className="border bg-white p-4 shadow-sm">
            <div className="row mb-3">
              <div className="col-md-12 col-lg-12">
                <label className={`fw-bold ${classes.label}`}>
                  Current Password
                </label>
                <Field
                  name="currentPassword"
                  type="password"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="currentPassword">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12 col-lg-12">
                <label className={`fw-bold ${classes.label}`}>
                  New Password
                </label>
                <Field
                  name="newPassword"
                  type="password"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="newPassword">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12 col-lg-12">
                <label className={`fw-bold ${classes.label}`}>
                  Confirm new password
                </label>
                <Field
                  name="conNewPassword"
                  type="password"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="conNewPassword">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <div className="text-end">
              <button className="btn btn-primary" type="submit">
                Save Password
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};
export default EditPassword;
