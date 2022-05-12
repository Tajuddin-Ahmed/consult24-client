import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
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
                    <h5>How lead prices work</h5>
                    <p className="small">
                      A lead is a new customer who finds your profile, then
                      messages,calls,or requests to book you.
                    </p>

                    <p className="small">
                      Leads for cleaner services cost roughly
                      <strong> $5-$65 </strong>
                      each , depending on the size of the job
                    </p>
                  </div>

                  <button
                    className="float-end btn btn-info mt-3"
                    onClick={() => router.push("/providerAccount/freeOffer")}
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
export default LeadPrice;
