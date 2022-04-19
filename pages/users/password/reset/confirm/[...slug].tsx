import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import classes from "../../../../../components/_App/Navbar/Menu/register/register.module.css";
const ResetPassword = () => {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  async function onSubmit(data) {
    const uid = router.query.slug[0];
    const token = router.query.slug[1];
    const new_password = data.password;
    console.log(uid, token, new_password);
    try {
      const response = await fetch(
        "https://c24apidev.accelx.net/auth/users/reset_password_confirm/",
        {
          method: "POST",
          body: JSON.stringify({
            uid: uid,
            token: token,
            new_password: new_password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/home/login");
    } catch (error) {
      console.log(error.message);
    }
    return false;
  }

  return (
    <>
      <div className="row bg-light pt-3 pb-4">
        <div className="col-lg-12 col-md-12 d-flex justify-content-center">
          <div className="w-50">
            <h3 className="text-center pb-3">Reset Password</h3>
            <form
              className="shadow-sm container bg-white py-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-row">
                <div className="form-group col pb-3">
                  <label className={`pb-1 ${classes.label}`}>
                    New Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    {...register("password")}
                    className={`${classes.inputStyle} ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>
                <div className="form-group col pb-3">
                  <label className={`pb-1 ${classes.label}`}>
                    Confirm new Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className={`${classes.inputStyle} ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.confirmPassword?.message}
                  </div>
                </div>
                <p className={classes.pFont}>Your password must:</p>
                <ul className={classes.pFont}>
                  <li>be 8 to 72 characters long</li>
                  <li>not contain your name or email</li>
                  <li>
                    not be commonly used, easily guessed or contain any
                    variation of the word “Consult24”
                  </li>
                </ul>
                <div className="form-group">
                  <button type="submit" className={classes.createBtn}>
                    Save Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
