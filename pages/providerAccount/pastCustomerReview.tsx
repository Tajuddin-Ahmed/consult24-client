import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcPlus, FcSearch } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import photo from "../../public/images/user4.jpg";
import cls from "./provider.module.css";
const PastCustomerReview = () => {
  const user = useContext(AppContext);
  const router = useRouter();
  console.log(router.query);
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
                      <h6>Get at leat one review from past customers</h6>
                      <p>
                        Ask past customers to write a review and help you get
                        started on Consul24
                      </p>
                      <div className="mb-2">
                        <label htmlFor="inputField" className="mb-2">
                          Send past customers an email
                        </label>
                        <br />
                        <input type="text" className={cls.businessInput} />
                      </div>
                      <div>
                        <a className="text-success" href="">
                          <span style={{ fontSize: "20px" }}>
                            <FcPlus />
                          </span>
                          Add Customer
                        </a>
                      </div>
                      <div className="my-2">
                        <label htmlFor="">Email preview</label>
                        <div className="bg-white text-center p-3 my-2">
                          <Image
                            className="rounded-circle"
                            src={photo}
                            width={100}
                            height={100}
                            alt="Image"
                          />
                          <h6>John Doe</h6>
                          <ul className="list-unstyled d-flex justify-content-center text-warning">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                          </ul>
                          <p>
                            Thanks for being a valued customer. I just signed up
                            on Consult24 to find more excellent customers like
                            you , and reviews are a big part of my profile. Can
                            you take a moment to write a couple of sentences
                            about working with me? I'd love if my future
                            customers could hear about your experience
                            firsthand. <br />
                            Thanks, Jone doe
                          </p>
                        </div>
                        <a href="" className="text-info">
                          Copy shareable link
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                      <div
                        className="mt-5 p-2 bg-white shadow-sm"
                        style={{
                          borderLeft: "3px solid blue",
                        }}
                      >
                        <h6 style={{ fontSize: "14px" }}>
                          Reviews make you competitive
                        </h6>
                        <p style={{ fontSize: "12px" }}>
                          House Cleaners in your area have an average of 29
                          reviews
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    className="float-end btn btn-info mt-3 ms-2"
                    onClick={() => router.push("/providerAccount/customerHire")}
                  >
                    Send request
                  </button>
                  <button
                    className="float-end btn btn-info mt-3"
                    onClick={() => router.push("/providerAccount/customerHire")}
                  >
                    Skip
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
export default PastCustomerReview;
