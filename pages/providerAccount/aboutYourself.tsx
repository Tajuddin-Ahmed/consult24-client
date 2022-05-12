import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const AboutYourself = () => {
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
                <div className={`card-body ${cls.font}`}>
                  <h5 className="card-title">Tell us a bit about yourself.</h5>
                  <p className={`card-text ${cls.font}`}>
                    Please answer three quick questions to help us understand
                    your business needs
                  </p>
                  <form action="#">
                    <fieldset className="mb-2" id="group1">
                      <p
                        className={`card-text  ${cls.font}`}
                        style={{ cursor: "pointer", color: "black" }}
                        id="selectBtn"
                      >
                        How much do you spend each month on online marketing ?
                      </p>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1"
                          type="radio"
                          value=""
                          id="q1"
                          name="group1"
                        />
                        <label htmlFor="q1">
                          I don't currently spend on online marketing
                        </label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="q2"
                          name="group1"
                        />
                        <label htmlFor="q2"> $1-$100</label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="q3"
                          name="group1"
                        />
                        <label htmlFor="q3"> $100- $400</label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="q4"
                          name="group1"
                        />
                        <label htmlFor="q4"> $400-$2500</label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="q5"
                          name="group1"
                        />
                        <label htmlFor="q5"> More than $2500</label>
                      </div>
                    </fieldset>
                    <fieldset className="mb-2" id="group2">
                      <p
                        className={`card-text  ${cls.font}`}
                        style={{ cursor: "pointer", color: "black" }}
                        id="selectBtn"
                      >
                        What's your main business goal ?
                      </p>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1"
                          type="radio"
                          value=""
                          id="q6"
                          name="group2"
                        />
                        <label htmlFor="q6"> Grow and Scale my business</label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="q7"
                          name="group2"
                        />
                        <label htmlFor="q7">Build up a side business</label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="q8"
                          name="group2"
                        />
                        <label htmlFor="q8">
                          Maintain my current business size ?
                        </label>
                      </div>

                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="q9"
                          name="group2"
                        />
                        <label htmlFor="q9"> Other</label>
                      </div>
                    </fieldset>
                    <fieldset id="group3">
                      <p
                        className={`card-text  ${cls.font}`}
                        style={{ cursor: "pointer", color: "black" }}
                        id="selectBtn"
                      >
                        What's your preferred language ?
                      </p>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1"
                          type="radio"
                          value=""
                          id="qq1"
                          name="group3"
                        />
                        <label htmlFor="qq1"> English</label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="qq2"
                          name="group3"
                        />
                        <label htmlFor="qq2">Bangla</label>
                      </div>
                      <div className="d-flex align-items-center border-bottom py-2">
                        <input
                          className="me-1 "
                          type="radio"
                          value=""
                          id="qq3"
                          name="group3"
                        />
                        <label htmlFor="qq3"> Other</label>
                      </div>
                    </fieldset>
                  </form>

                  <button
                    className="w-100 btn btn-info mt-3"
                    onClick={() =>
                      router.push("/providerAccount/winningProfile")
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
export default AboutYourself;
