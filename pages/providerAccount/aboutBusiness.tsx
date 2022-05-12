import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const WinningProfile = () => {
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
                  <h6>Tell us about your business</h6>
                  <div>
                    <label htmlFor="inputField">Business Name</label>
                    <br />
                    <input type="text" className={cls.businessInput} />
                  </div>
                  <div
                    className="mt-2 bg-white shadow-sm p-2"
                    style={{ borderTop: "4px solid blue" }}
                  >
                    <p className="fw-bold">Don't have a business name ?</p>
                    <p>No worries-just use your own name</p>
                  </div>
                  <button
                    className="w-100 btn btn-info mt-3"
                    onClick={() => router.push("/providerAccount/businessMore")}
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
export default WinningProfile;
