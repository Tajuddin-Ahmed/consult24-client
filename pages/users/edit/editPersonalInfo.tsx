import classes from "../../../components/_App/Navbar/Menu/register/register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
const EditPersonalInfo = () => {
  const user: any = useContext(AppContext);
  const [userInfo, setUserInfo]: any = useState({});
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
    const getUserData = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/user_info/${user?.id}/`,
            config
          );
          if (res.status === 200) {
            setUserInfo(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getUserData();
  }, [user?.id]);
  const initialValues = {
    firstName: userInfo?.first_name ? userInfo?.first_name : "",
    middleName: userInfo?.middle_name ? userInfo.middle_name : "",
    lastName: userInfo?.last_name ? userInfo?.last_name : "",
    phone: userInfo?.phone_number ? userInfo?.phone_number : "",
    email: userInfo?.email ? userInfo?.email : "",
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid first name"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid last name"),
    phone: Yup.string().required("Required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const onSubmit = async (values) => {
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
      phone_number: values.phone,
      email: values.email,
    });
    if (user?.id) {
      try {
        const res = await axios.patch(
          `https://c24apidev.accelx.net/auth_api/user_info/${user?.id}/`,
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
          <h4 className="text-center mb-4">Edit personal information</h4>
          <Form action="" className="border bg-white p-4 shadow-sm">
            <div className="row mb-3">
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label}`}>First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="firstName">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label}`}>
                  Middle Name
                </label>
                <Field
                  name="middleName"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="lastName">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="col-md-6 col-lg-6">
                <label className={`fw-bold ${classes.label} `}>
                  Phone Number
                </label>
                <Field
                  name="phone"
                  type="text"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="phone">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12 col-lg-12">
                <label className={`fw-bold ${classes.label} `}>Email</label>
                <Field
                  name="email"
                  type="email"
                  className={`${classes.inputStyle} `}
                />
                <ErrorMessage name="email">
                  {(errMsg) => <div className="text-danger mb-2">{errMsg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="text-end">
              <button
                className="btn btn-warning  me-2"
                onClick={() => router.back()}
              >
                Cancel
              </button>
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
export default EditPersonalInfo;
