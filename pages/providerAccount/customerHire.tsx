import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcPlus, FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import photo from "../../public/images/user4.jpg";
import cls from "./provider.module.css";
const CustomerHire = () => {
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
                style={{ width: "44rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className={`card-body bg-light ${cls.font}`}>
                  <div className="row">
                    <div className="col-md-7 col-lg-7">
                      <h6>Why should customers hire you?</h6>
                      <p style={{ fontSize: "12px" }}>
                        Explain what makes your business stand out and why
                        you'll do a great job
                      </p>
                      <textarea
                        name=""
                        id=""
                        style={{ border: "1px solid lightgreen" }}
                        cols={53}
                        maxLength={40}
                        placeholder="Introduce yourself and your business"
                        rows={5}
                      ></textarea>

                      <div
                        id="carouselExampleInterval"
                        className="carousel slide mt-4"
                        data-bs-ride="carousel"
                      >
                        <h6 className="text-center">EXAMPLE INTRODUCTIONS</h6>
                        <div
                          className="carousel-inner bg-white"
                          style={{ border: "1px solid lightgreen" }}
                        >
                          <div
                            className="carousel-item active"
                            data-bs-interval="10000"
                          >
                            <div className="d-block p-3">
                              My focus is quality. I never cut corners,even when
                              it's more expensive. Some of my competitors are
                              cheaper, but I will take the time to make sure
                              you're 100% happy
                            </div>
                          </div>
                          <div
                            className="carousel-item"
                            data-bs-interval="2000"
                          >
                            <div className="d-block p-3">
                              My focus is quality. I never cut corners,even when
                              it's more expensive. Some of my competitors are
                              cheaper, but I will take the time to make sure
                              you're 100% happy
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="d-block p-3">
                              My focus is quality. I never cut corners,even when
                              it's more expensive. Some of my competitors are
                              cheaper, but I will take the time to make sure
                              you're 100% happy
                            </div>
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleInterval"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleInterval"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                      <div
                        className="bg-white shadow-sm py-1"
                        style={{
                          borderLeft: "3px solid blue",
                          marginTop: "86px",
                        }}
                      >
                        <h6 style={{ fontSize: "14px" }} className="ps-3">
                          Reviews make you competitive
                        </h6>
                        <ul>
                          <li style={{ fontSize: "13px" }}>
                            Years in business
                          </li>
                          <li style={{ fontSize: "13px" }}>
                            What you are passionate about
                          </li>
                          <li style={{ fontSize: "13px" }}>
                            Special skills or equipment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    className="float-end btn btn-info mt-3 ms-2"
                    onClick={() => router.push("/providerAccount/keepHuman")}
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
export default CustomerHire;
