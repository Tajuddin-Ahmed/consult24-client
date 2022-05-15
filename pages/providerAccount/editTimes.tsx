import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
const EditTimes = () => {
  const user = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    document.getElementById("changeTime").classList.add("d-none");
    document.getElementById("editableField").classList.remove("d-none");
  };

  return (
    <>
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
        <div className="row">
          <div className="container">
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <div
                className="card p-4 bg-white me-5 shadow-sm"
                style={{ width: "48rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className={`card-body bg-light ${cls.font}`}>
                  <h5>Set your hours</h5>
                  <p className="small">
                    You will auto pay for the jobs to be done during these times
                    when they match your other preferences.
                  </p>
                  <div>
                    <div className="border p-3 mt-2">
                      <div className="row mb-2">
                        <div className="col-lg-3 col-md-3">Sun</div>
                        {/* <div className="col-lg-4 col-md-4 text-end">
                          12 a.m. - midnight
                        </div> */}
                        <div className="col-lg-6 col-md-6 text-center">
                          <p id="changeTime">12 a.m. - midnight</p>
                          <div id="editableField" className="row d-none">
                            <div className="col-lg-5 col-md-5">
                              <select
                                name=""
                                id=""
                                className={cls.businessInput}
                              >
                                <option value="">12 a.m</option>
                                <option value="saturday">Sat</option>
                                <option value="sunday">Sun</option>
                                <option value="monday">Mon</option>
                                <option value="tuesday">Tues</option>
                                <option value="wednesday">Wed</option>
                                <option value="thursday">Thurs</option>
                                <option value="friday">Fri</option>
                              </select>
                            </div>

                            <div className="col-lg-2 col-md-2">to</div>
                            <div className="col-lg-5 col-md-5">
                              <select
                                name=""
                                id=""
                                className={cls.businessInput}
                              >
                                <option value="">midnight</option>
                                <option value="saturday">Sat</option>
                                <option value="sunday">Sun</option>
                                <option value="monday">Mon</option>
                                <option value="tuesday">Tues</option>
                                <option value="wednesday">Wed</option>
                                <option value="thursday">Thurs</option>
                                <option value="friday">Fri</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-3 text-end">
                          <p
                            className="text-info"
                            style={{ cursor: "pointer" }}
                            onClick={handleEdit}
                          >
                            Edit
                          </p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4 col-md-4">Mon</div>
                        <div className="col-lg-4 col-md-4 text-center">
                          12 a.m. - midnight
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                          <p
                            className="text-info"
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4 col-md-4">Tues</div>
                        <div className="col-lg-4 col-md-4 text-center">
                          12 a.m. - midnight
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                          <p
                            className="text-info"
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4 col-md-4">Wed</div>
                        <div className="col-lg-4 col-md-4 text-center">
                          12 a.m. - midnight
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                          <p
                            className="text-info"
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4 col-md-4">Thurs</div>
                        <div className="col-lg-4 col-md-4 text-center">
                          12 a.m. - midnight
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                          <p
                            className="text-info"
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-4 col-md-4">Fri</div>
                        <div className="col-lg-4 col-md-4 text-center">
                          12 a.m. - midnight
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                          <p
                            className="text-info"
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4">Sat</div>
                        <div className="col-lg-4 col-md-4 text-center">
                          12 a.m. - midnight
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                          <p
                            className="text-info"
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border p-3 mt-2">
                      <div className="mb-2">
                        <h6>Lead Time</h6>
                      </div>
                      <div className="mb-3">
                        <h6>
                          How far in advance can customers book you for a job ?
                        </h6>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <label htmlFor="">Amount of time</label>
                            <select name="" id="" className={cls.businessInput}>
                              <option value="24">24</option>
                              <option value="23">23</option>
                              <option value="22">22</option>
                              <option value="21">21</option>
                              <option value="20">20</option>
                              <option value="19">19</option>
                              <option value="18">18</option>
                              <option value="17">17</option>
                              <option value="16">16</option>
                              <option value="15">15</option>
                              <option value="14">14</option>
                              <option value="13">13</option>
                              <option value="12">12</option>
                              <option value="11">11</option>
                              <option value="10">10</option>
                              <option value="09">09</option>
                              <option value="08">08</option>
                              <option value="07">07</option>
                              <option value="06">06</option>
                              <option value="05">05</option>
                              <option value="04">04</option>
                              <option value="03">03</option>
                              <option value="02">02</option>
                              <option value="01">01</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label htmlFor="">Unit of time</label>
                            <select name="" id="" className={cls.businessInput}>
                              <option value="">Months</option>
                              <option value="january">Jan</option>
                              <option value="february">Feb</option>
                              <option value="march">Mar</option>
                              <option value="april">Apr</option>
                              <option value="may">May</option>
                              <option value="june">June</option>
                              <option value="july">July</option>
                              <option value="august">Aug</option>
                              <option value="september">Sep</option>
                              <option value="october">Oct</option>
                              <option value="november">Nov</option>
                              <option value="december">Dec</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h6>
                          How far in advance can customers book you for a job ?
                        </h6>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <label htmlFor="">Amount of time</label>
                            <select name="" id="" className={cls.businessInput}>
                              <option value="24">24</option>
                              <option value="23">23</option>
                              <option value="22">22</option>
                              <option value="21">21</option>
                              <option value="20">20</option>
                              <option value="19">19</option>
                              <option value="18">18</option>
                              <option value="17">17</option>
                              <option value="16">16</option>
                              <option value="15">15</option>
                              <option value="14">14</option>
                              <option value="13">13</option>
                              <option value="12">12</option>
                              <option value="11">11</option>
                              <option value="10">10</option>
                              <option value="09">09</option>
                              <option value="08">08</option>
                              <option value="07">07</option>
                              <option value="06">06</option>
                              <option value="05">05</option>
                              <option value="04">04</option>
                              <option value="03">03</option>
                              <option value="02">02</option>
                              <option value="01">01</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label htmlFor="">Unit of time</label>
                            <select name="" id="" className={cls.businessInput}>
                              <option value="">Days</option>
                              <option value="saturday">Sat</option>
                              <option value="sunday">Sun</option>
                              <option value="monday">Mon</option>
                              <option value="tuesday">Tues</option>
                              <option value="wednesday">Wed</option>
                              <option value="thursday">Thurs</option>
                              <option value="friday">Fri</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h6>Time zone</h6>
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <select name="" id="" className={cls.businessInput}>
                              <option value="24">Pacific time zone</option>
                              <option value="23">23</option>
                              <option value="22">22</option>
                              <option value="21">21</option>
                              <option value="20">20</option>
                              <option value="19">19</option>
                              <option value="18">18</option>
                              <option value="17">17</option>
                              <option value="16">16</option>
                              <option value="15">15</option>
                              <option value="14">14</option>
                              <option value="13">13</option>
                              <option value="12">12</option>
                              <option value="11">11</option>
                              <option value="10">10</option>
                              <option value="09">09</option>
                              <option value="08">08</option>
                              <option value="07">07</option>
                              <option value="06">06</option>
                              <option value="05">05</option>
                              <option value="04">04</option>
                              <option value="03">03</option>
                              <option value="02">02</option>
                              <option value="01">01</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-info mt-3 float-end"
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
export default EditTimes;
