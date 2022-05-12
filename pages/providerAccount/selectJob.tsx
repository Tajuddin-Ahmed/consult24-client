import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const SelectJob = () => {
  const [isChecked, setIsChecked] = useState(false);
  const user = useContext(AppContext);
  const router = useRouter();
  const handleCheck = () => {
    if (!isChecked) {
      const checkInputs = document.getElementsByClassName("check");
      document.getElementById("selectBtn").innerText = "Unselect all";
      for (const checkInput of checkInputs) {
        checkInput.checked = true;
      }
      setIsChecked(true);
    } else {
      const checkInputs = document.getElementsByClassName("check");
      document.getElementById("selectBtn").innerText = "Select all";
      for (const checkInput of checkInputs) {
        checkInput.checked = false;
      }
      setIsChecked(false);
    }
  };
  const handleOnClick = () => {
    if (user?.username) {
      router.push("/providerAccount/businessAccount");
    } else {
      router.push("/home/register");
    }
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
                  <h5 className="card-title">
                    Select any other services you do.
                  </h5>
                  <p className={`card-text ${cls.font}`}>
                    You’ll show up in search results and get leads for all
                    services you select.
                  </p>
                  <p
                    className={`card-text text-info ${cls.font}`}
                    style={{ cursor: "pointer" }}
                    id="selectBtn"
                    onClick={handleCheck}
                  >
                    Select all
                  </p>
                  <div className="">
                    <div className="form-check pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault1"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault1"
                      >
                        Bounce House and Party Inflatables Rental
                      </label>
                    </div>
                    <div className="form-check pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault2"
                      >
                        Photo Booth Rental
                      </label>
                    </div>
                    <div className="form-check  pb-2">
                      <input
                        className="form-check-input check "
                        type="checkbox"
                        value=""
                        id="flexCheckDefault3"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault3"
                      >
                        Wedding and Event Decorating
                      </label>
                    </div>
                    <div className="form-check pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault4"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault4"
                      >
                        Event Planning
                      </label>
                    </div>
                    <div className="form-check  pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault5"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault5"
                      >
                        Wedding Florist
                      </label>
                    </div>
                    <div className="form-check  pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault6"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault6"
                      >
                        Wedding Coordination
                      </label>
                    </div>
                    <div className="form-check  pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault7"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault7"
                      >
                        Balloon Decorations
                      </label>
                    </div>
                    <div className="form-check  pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault8"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault8"
                      >
                        Wedding Planning
                      </label>
                    </div>
                    <div className="form-check  pb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault9"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault9"
                      >
                        Calligraphy
                      </label>
                    </div>
                    <div className="form-check ">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault10"
                      />
                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault10"
                      >
                        Valet Parking
                      </label>
                    </div>
                  </div>

                  <button
                    className="w-100 btn btn-info mt-3"
                    onClick={handleOnClick}
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
export default SelectJob;
