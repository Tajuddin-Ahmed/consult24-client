import router from "next/router";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import cls from "./provider.module.css";
const BookNewJob = () => {
  return (
    <>
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
        <div className="row">
          <div className="container">
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <div
                className="card p-4 bg-white me-5 shadow-sm"
                style={{ width: "24rem" }}
              >
                <div className="card-body">
                  <h3 className="card-title">Book new jobs in Albany.</h3>
                  <p className="card-text">What is your line of work?</p>
                  <ul className="list-group list-group-flush">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <FcSearch />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <GrLocation />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </ul>
                  <h3 className="card-text">30,000+</h3>
                  <p className="card-text">leads on Consult 24 a day</p>
                  <button
                    className="w-100 btn btn-info"
                    onClick={() => router.push("/providerAccount/selectJob")}
                  >
                    Get leads
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
export default BookNewJob;
