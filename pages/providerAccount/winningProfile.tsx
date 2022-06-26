import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const WinningProfile = () => {
  const user = useContext(AppContext);
  const router = useRouter();
  const data = router.query;
  console.log(data);
  const handleNextBtn = () => {
    router.push(
      {
        pathname: "/providerAccount/aboutBusiness",
        query: {
          ...data,
        },
      },
      "/providerAccount/aboutBusiness"
    );
  };

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
                          backgroundColor: "blue",
                          marginRight: "5px",
                        }}
                      >
                        1
                      </div>
                      <label htmlFor="d1">Build a winning profile</label>
                    </div>
                    <p style={{ marginLeft: "36px", fontSize: "13px" }}>
                      Your profile is free,but it takes time to make it great.
                      It's worth it -- this is how you'll ge hired
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        id="d2"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "15px",
                          textAlign: "center",
                          paddingTop: "2px",
                          border: "1px solid black",
                          marginRight: "5px",
                        }}
                      >
                        2
                      </div>
                      <label htmlFor="d2">Add your preferences</label>
                    </div>
                  </div>
                  <button
                    className="w-100 btn btn-info mt-3"
                    type="button"
                    onClick={handleNextBtn}
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
