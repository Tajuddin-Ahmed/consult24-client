import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const SetHours = () => {
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
                <div className={`card-body bg-light ${cls.font}`}>
                  <h5>Set your hours</h5>
                  <p className="small">
                    You will auto pay for the jobs to be done during these times
                    when they match your other preferences.
                  </p>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Any day or time
                      </label>
                      <p className="small">
                        Highly recommended to get the most jobs
                      </p>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        My business hours
                      </label>
                      <div className="border p-3 mt-2">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">Sun</div>
                          <div className="col-lg-6 col-md-6 text-end">
                            12 a.m. - midnight
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">Mon</div>
                          <div className="col-lg-6 col-md-6 text-end">
                            12 a.m. - midnight
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">Tues</div>
                          <div className="col-lg-6 col-md-6 text-end">
                            12 a.m. - midnight
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">Wed</div>
                          <div className="col-lg-6 col-md-6 text-end">
                            12 a.m. - midnight
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">Thurs</div>
                          <div className="col-lg-6 col-md-6 text-end">
                            12 a.m. - midnight
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">Fri</div>
                          <div className="col-lg-6 col-md-6 text-end">
                            12 a.m. - midnight
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">Sat</div>
                          <div className="col-lg-6 col-md-6 text-end">
                            12 a.m. - midnight
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <a
                          href="/providerAccount/editTimes"
                          className="text-info "
                        >
                          Edit Times
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-info mt-3 float-end"
                    onClick={() =>
                      router.push("/providerAccount/addProfilePhoto")
                    }
                  >
                    Next
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
export default SetHours;
