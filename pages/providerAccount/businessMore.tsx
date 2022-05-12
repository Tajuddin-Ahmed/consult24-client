import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const BusinessMore = () => {
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
                  <h6>Tell us more about your business</h6>
                  <p style={{ fontSize: "12px" }}>
                    Customer will see this info on your profile
                  </p>
                  <div className="mb-2">
                    <label htmlFor="inputField">Business Name</label>
                    <br />
                    <input type="text" className={cls.businessInput} />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="inputField">Year founded</label>
                    <br />
                    <input type="text" className={cls.businessInput} />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="inputField">Number of employees</label>
                    <br />
                    <input type="text" className={cls.businessInput} />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="inputField">
                      Business address (optional)
                    </label>
                    <br />
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
                      placeholder="Suite or #"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className={cls.businessInput}
                      placeholder="State"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className={cls.businessInput}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className={cls.businessInput}
                      placeholder="zipCode"
                    />
                  </div>

                  <button
                    className="w-100 btn btn-info mt-3"
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
export default BusinessMore;
