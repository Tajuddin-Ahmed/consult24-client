import router, { useRouter } from "next/router";
import { useContext } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const BusinessAccount = () => {
  const user = useContext(AppContext);
  const router = useRouter();
  return (
    <>
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
        <div className="row">
          <div className="container">
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <div
                className="card p-4 bg-white me-5 shadow-sm"
                style={{ width: "36rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className="card-body">
                  <h3 className={`card-title ${cls.font}`}>
                    Set up your business profile
                  </h3>
                  <p className={`card-text small ${cls.font}`}>
                    Where would you like house cleaning customers to contact you
                    ?
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        value={user.email}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div className="form-check mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className={`form-check-label ${cls.font}`}
                      htmlFor="flexCheckDefault"
                    >
                      Default checkbox
                    </label>
                    <p className={`small ${cls.font}`}>
                      By leaving the box checked and clicking "Sign up", you
                      authorize Consult24 to send you automated text messages.
                      You can opt out anytime.{" "}
                      <a className="text-info" href="#">
                        Terms apply
                      </a>
                      .
                    </p>
                  </div>
                  <p className={`small ${cls.font}`}>
                    By clicking "Continue", you agree to the{" "}
                    <a className="text-info" href="#">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a className="text-info" href="#">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <button
                    className="w-100 btn btn-info"
                    onClick={() =>
                      router.push("/providerAccount/aboutYourself")
                    }
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusinessAccount;
