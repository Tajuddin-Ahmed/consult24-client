import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";

import { GrCheckmark, GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import { BsCheckLg } from "react-icons/bs";
import cls from "./provider.module.css";
const FreeOffer = () => {
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
                  <h6 className="mb-3">Get a credit pack with free benefits</h6>
                  <div id="offer">
                    <div className="shadow bg-white p-3 rounded mb-2">
                      <div className="form-check fw-bold">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="offer"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Pay $300 and get:
                        </label>
                      </div>
                      <div className="ps-3 text-muted">
                        <div
                          className={`d-flex justify-content-between align-items-center ${cls.pHeight}`}
                        >
                          <div>
                            <span
                              style={{
                                color: "#04AA6D",
                                paddingRight: "3px",
                              }}
                            >
                              <AiOutlineCheck />
                            </span>
                            $400 total credit toward leads
                          </div>
                          <div
                            className="rounded-pill px-1"
                            style={{
                              backgroundColor: "#FEFAEA",
                              color: "#8D692F",
                            }}
                          >
                            <p
                              style={{
                                color: "#8D692F",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              $100 free
                            </p>
                          </div>
                        </div>

                        <div className={cls.pHeight}>
                          <span
                            style={{ color: "#04AA6D", paddingRight: "3px" }}
                          >
                            <AiOutlineCheck />
                          </span>
                          1:1 with a Consult24 coach
                        </div>

                        <div className={cls.pHeight}>
                          <span
                            style={{ color: "#04AA6D", paddingRight: "3px" }}
                          >
                            <AiOutlineCheck />
                          </span>
                          Cosult24 101 webinar
                        </div>

                        <div className={cls.pHeight}>
                          <span
                            style={{ color: "#04AA6D", paddingRight: "3px" }}
                          >
                            <AiOutlineCheck />
                          </span>
                          Consult24 Success Guide
                        </div>
                      </div>
                    </div>
                    <div className="shadow bg-white p-3 rounded mb-2">
                      <div className="form-check fw-bold">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="offer"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Pay $200 and get:
                        </label>
                      </div>
                      <div className="ps-3 text-muted">
                        <div
                          className={`d-flex justify-content-between align-items-center ${cls.pHeight}`}
                        >
                          <div>
                            <span
                              style={{ color: "#04AA6D", paddingRight: "3px" }}
                            >
                              <AiOutlineCheck />
                            </span>
                            $250 total credit toward leads
                          </div>
                          <div
                            className="rounded-pill px-1"
                            style={{
                              backgroundColor: "#FEFAEA",
                              color: "#8D692F",
                            }}
                          >
                            <p
                              style={{
                                color: "#8D692F",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              $50 free
                            </p>
                          </div>
                        </div>

                        <div className={cls.pHeight}>
                          <span
                            style={{ color: "#04AA6D", paddingRight: "3px" }}
                          >
                            <AiOutlineCheck />
                          </span>
                          Cosult24 101 webinar
                        </div>

                        <div className={cls.pHeight}>
                          <span
                            style={{ color: "#04AA6D", paddingRight: "3px" }}
                          >
                            <AiOutlineCheck />
                          </span>
                          Consult24 Success Guide
                        </div>
                      </div>
                    </div>
                    <div className="shadow bg-white p-3 rounded">
                      <div className="form-check fw-bold">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="offer"
                          id="flexRadioDefault3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Pay $150 and get:
                        </label>
                      </div>
                      <div className="ps-3 text-muted">
                        <div
                          className={`d-flex justify-content-between align-items-center ${cls.pHeight}`}
                        >
                          <div>
                            <span
                              style={{ color: "#04AA6D", paddingRight: "3px" }}
                            >
                              <AiOutlineCheck />
                            </span>
                            $180 total credit toward leads
                          </div>
                          <div
                            className="rounded-pill px-1"
                            style={{
                              backgroundColor: "#FEFAEA",
                              color: "#8D692F",
                            }}
                          >
                            <p
                              style={{
                                color: "#8D692F",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              $30 free
                            </p>
                          </div>
                        </div>

                        <div className={cls.pHeight}>
                          <span
                            style={{ color: "#04AA6D", paddingRight: "3px" }}
                          >
                            <AiOutlineCheck />
                          </span>
                          Consult24 Success Guide
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="float-end btn btn-info mt-3"
                    onClick={() =>
                      router.push("/providerAccount/addPreference")
                    }
                  >
                    next
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
export default FreeOffer;
