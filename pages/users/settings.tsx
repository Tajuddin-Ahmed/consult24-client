import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import classes from "../../components/_App/Navbar/Menu/register/register.module.css";
import cls from "./profile.module.css";
const Settings = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid first name"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid last name"),

    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  async function onSubmit(data) {
    // display form data on success
    if (data) {
    }
  }
  return (
    <>
      <h6 className={`text-white ${cls.font}`}> Account Settings</h6>
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <form
            className="container bg-white p-3 shadow rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h6>Personal Data</h6>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label className={`${classes.label} fw-normal`}>
                    First Name
                  </label>
                  <br />
                  <input
                    name="phone"
                    type="text"
                    {...register("email")}
                    className={`${classes.inputStyle} ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label className={`${classes.label} fw-normal`}>
                    Last Name
                  </label>
                  <br />
                  <input
                    name="phone"
                    type="text"
                    {...register("email")}
                    className={`${classes.inputStyle} ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <input
                  type="hidden"
                  name="role"
                  {...register("role")}
                  value="2"
                />
              </div>
            </div>
            <div className="mb-2">
              <label className={`${classes.label} fw-normal`}>
                Phone Number
              </label>
              <br />
              <input
                name="phone"
                type="text"
                {...register("email")}
                className={`${classes.inputStyle} ${
                  errors.email ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <button type="submit" className={classes.createBtn}>
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-1 d-flex justify-content-center">
        <div className="col-md-12">
          <form
            className="container bg-white p-3 rounded shadow"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h6>Change Password</h6>

            <div className="mb-2">
              <label className={`${classes.label} fw-normal`}>
                Confirm New Password
              </label>
              <br />
              <input
                name="phone"
                type="text"
                {...register("email")}
                className={`${classes.inputStyle} ${
                  errors.email ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label className={`${classes.label} fw-normal`}>
                    Current Password
                  </label>
                  <br />
                  <input
                    name="phone"
                    type="text"
                    {...register("email")}
                    className={`${classes.inputStyle} ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label className={`${classes.label} fw-normal`}>
                    New Password
                  </label>
                  <br />
                  <input
                    name="phone"
                    type="text"
                    {...register("email")}
                    className={`${classes.inputStyle} ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className={classes.createBtn}>
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-md-12 mt-1">
          <form
            className="container bg-white p-3 shadow rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h6>Change Address</h6>

            <div className="mb-2">
              <label className={`${classes.label} fw-normal`}>
                Street Address
              </label>
              <br />
              <input
                name="phone"
                type="text"
                {...register("email")}
                className={`${classes.inputStyle} ${
                  errors.email ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label className={`${classes.label} fw-normal`}>City</label>
                  <br />
                  <input
                    name="phone"
                    type="text"
                    {...register("email")}
                    className={`${classes.inputStyle} ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label className={`${classes.label} fw-normal`}>
                    Zip Code
                  </label>
                  <br />
                  <input
                    name="phone"
                    type="text"
                    {...register("email")}
                    className={`${classes.inputStyle} ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className={classes.createBtn}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Settings;
