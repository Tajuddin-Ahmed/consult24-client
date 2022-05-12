import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const AddPreference = () => {
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
                  <div>
                    <div className="d-flex align-items-center ">
                      <div
                        id="d1"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "15px",
                          textAlign: "center",
                          color: "white",
                          paddingTop: "4px",
                          marginRight: "5px",
                          border: "1px solid black",
                        }}
                      >
                        <span style={{ color: "#04AA6D" }}>
                          <AiOutlineCheck />
                        </span>
                      </div>
                      <label htmlFor="d1" className="text-dark">
                        Build a winning profile
                      </label>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                      <div
                        id="d2"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "15px",
                          textAlign: "center",
                          paddingTop: "2px",
                          border: "1px solid black",
                          backgroundColor: "blue",
                          color: "white",
                          marginRight: "5px",
                        }}
                      >
                        2
                      </div>
                      <label htmlFor="d2" className="text-dark">
                        Add your preferences
                      </label>
                    </div>
                    <p style={{ marginLeft: "36px", fontSize: "13px" }}>
                      Target the jobs you want by telling us your
                      availability,ideal job types, and work area.
                    </p>
                  </div>
                  <button
                    className="w-100 btn btn-info mt-3"
                    onClick={() =>
                      router.push("/providerAccount/paymentMethod")
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
export default AddPreference;
