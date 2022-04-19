import { useRef, useState } from "react";
import classes from "../../../components/_App/Navbar/Menu/register/register.module.css";
import { FcCheckmark } from "react-icons/fc";
const ResetPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const EmailInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = EmailInputRef.current.value;
    try {
      const response = await fetch(
        "https://c24apidev.accelx.net/auth/users/reset_password/",
        {
          method: "POST",
          body: JSON.stringify({ email: enteredEmail }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsSent(true);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <div className="row bg-light py-5">
        <div className="col-lg-3 col-md-3"></div>
        <div className="col-lg-6 col-md-6  ">
          <h3 className="text-center pb-3">Reset your password</h3>
          <form className="shadow-sm bg-white py-4" onSubmit={handleSubmit}>
            <div className="container">
              {isSent ? (
                <div className="d-flex justify-content-center">
                  <div>
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "35px",
                        border: "2px solid green",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ fontSize: "35px" }}>
                        <FcCheckmark />
                      </span>
                    </div>
                    <h6>Email sent</h6>
                  </div>
                </div>
              ) : (
                <div>
                  <label className={classes.label}> Email address</label>
                  <input
                    className={classes.inputStyle}
                    ref={EmailInputRef}
                    type="email"
                  />
                </div>
              )}
              <p>
                Enter the email address associated with your account, and we’ll
                email you a link to reset your password.
              </p>
              <button className={classes.createBtn}>Send Reset Link</button>
            </div>
          </form>
        </div>
        <div className="col-lg-3 col-md-3"></div>
      </div>
    </>
  );
};
export default ResetPassword;
