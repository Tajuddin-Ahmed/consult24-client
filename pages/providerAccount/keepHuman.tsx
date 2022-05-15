import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const KeepHuman = () => {
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
                style={{ width: "32rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className={`card-body bg-light ${cls.font}`}>
                  <div
                    style={{
                      fontSize: "20px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "20px",
                      backgroundColor: "white",
                      textAlign: "center",
                      paddingTop: "3px",
                      marginBottom: "10px",
                    }}
                  >
                    <FiUserCheck />
                  </div>
                  <h6>Help keep Consult24 human</h6>
                  <p style={{ fontSize: "12px" }}>
                    Before you go on, we need to make sure you're a real person.
                    All information you enter is secure and confidential.
                  </p>
                  <div className="">
                    <label htmlFor="inputField">Legal Name</label>
                    <div className="mb-2">
                      <input
                        type="text"
                        className={cls.businessInput}
                        placeholder="First name"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className={cls.businessInput}
                        placeholder="Middle name"
                      />
                    </div>
                    <div className="form-check" style={{ fontSize: "12px" }}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I confirm I don't have a middle name
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className={cls.businessInput}
                        placeholder="Last name"
                      />
                    </div>
                    <p style={{ fontSize: "12px" }}>
                      Enter your name exactly as it appears on your
                      government-issued ID
                    </p>
                  </div>
                  <div>
                    <label htmlFor="inputField">Date of Birth</label>
                    <div className="mb-2">
                      <input
                        type="date"
                        className={cls.businessInput}
                        placeholder="MM/DD/YYYY"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inputField">Home address</label>
                    <div className="mb-2">
                      <input
                        type="text"
                        className={cls.businessInput}
                        placeholder="Street address"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className={cls.businessInput}
                        placeholder="Suite or apt. #"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className={cls.businessInput}
                        placeholder="City"
                      />
                    </div>
                    <div className="mb-2">
                      <div className="row">
                        <div className="col-md-6 col-lg-6">
                          <select name="" id="" className={cls.businessInput}>
                            <option value="">State</option>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-lg-6">
                          <input
                            type="text"
                            className={cls.businessInput}
                            placeholder="ZipCode"
                          />
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: "12px" }}>
                      Make sure everything you entered is right before
                      submitting
                    </p>
                  </div>

                  <button
                    className="float-end btn btn-info mt-3"
                    onClick={() => router.push("/providerAccount/leadPrice")}
                  >
                    Submit
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
export default KeepHuman;
