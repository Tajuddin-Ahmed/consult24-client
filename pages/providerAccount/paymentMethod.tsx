import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
import { AiOutlineWarning } from "react-icons/ai";
const LeadPrice = () => {
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
                  <div className="d-flex justify-content-center">
                    <div
                      style={{
                        fontSize: "80px",
                        width: "124px",
                        height: "124px",
                        borderRadius: "62px",
                        backgroundColor: "white",
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "purple",
                      }}
                    >
                      <FiDollarSign />
                    </div>
                  </div>
                  <div className="text-center">
                    <h5>When you pay</h5>
                    <p className="small">
                      You pay the moment a customer contacts you for the first
                      time. You can But you'll only be charged automatically if
                      they match your preferences
                    </p>

                    <p className="small">
                      In the next few steps , we'll set up those preferences to
                      make sure you only pay for jobs you want
                    </p>
                  </div>

                  <button
                    className="float-end btn btn-info mt-3"
                    onClick={() => router.push("/providerAccount/setHours")}
                  >
                    next
                  </button>
                  <button
                    className="float-end btn btn-info mt-3 me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#setUpLater"
                  >
                    Set up later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Set up later Modal  */}
      <div
        className="modal fade"
        id="setUpLater"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: "350px" }}>
          <div className="modal-content">
            <div className="">
              <button
                type="button"
                className="btn-close float-end"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>Exit setup? Customers can't find you until you finish</h5>
              <div>
                <p className="fw-bolder">
                  <span className="me-2 fs-5">
                    <AiOutlineWarning />
                  </span>
                  Add reviews,set up targeting,get leads.
                </p>
                <p className="ps-4" style={{ fontSize: "13px" }}>
                  You need to add one review and set your targeting preferences
                  before customers can find and contact you.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Finish later
              </button>
              <button type="button" className="btn btn-primary">
                Finish setup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeadPrice;
