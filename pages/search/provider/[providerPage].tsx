import {
  AiOutlineCheck,
  AiOutlineDollar,
  AiOutlineInfoCircle,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import { BsFillTrophyFill, BsShieldFillCheck, BsWatch } from "react-icons/bs";
import { FaRegComment, FaStar, FaUser } from "react-icons/fa";
import { FiPhoneCall, FiShare, FiUsers } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import cls from "../../providerAccount/provider.module.css";

const ProviderPage = () => {
  return (
    <>
      <div id="about" className={`container ${cls.font}`}>
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <nav className="mt-2">
              <ul className=" d-flex list-unstyled">
                <li className="pe-2">
                  <a href="#about">About</a>
                </li>
                <li className="pe-2">
                  <a href="#photos">Photos</a>
                </li>
                <li className="pe-2">
                  <a href="#services">Services</a>
                </li>
                <li className="pe-2">
                  <a href="#reviews">Reviews</a>
                </li>
                <li className="pe-2">
                  <a href="#credentials">Credentials</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </nav>
            <main>
              <section>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <img src="/images/user6.jpg" alt="" />
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <h5 className="pb-2">Lightning cleaning services</h5>
                    <p
                      style={{ margin: "0", padding: "0" }}
                      className="small pb-2"
                    >
                      Very good 4.5
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>(277)</span>
                    </p>
                    <button className="btn btn-info">
                      <span className="pe-2">
                        <FiShare />
                      </span>
                      share
                    </button>
                  </div>
                </div>
              </section>
              <section className="py-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb small">
                    <li className="breadcrumb-item">
                      <a href="#">Consult24</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">House Cleaning</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Lightning cleaning services
                    </li>
                  </ol>
                </nav>
                <p className="small">
                  <strong>Introduction:</strong> we are here to offer any type
                  of commercial or residential cleaning in any city free quote
                  in person or video call very good prices and excellent work
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <h6 className="small">Overview</h6>
                    <div>
                      <p
                        style={{ margin: "0", padding: "0" }}
                        className="small"
                      >
                        <span className="pe-2">
                          <BsFillTrophyFill />
                        </span>
                        Hired 878 times
                      </p>
                      <p
                        style={{ margin: "0", padding: "0" }}
                        className="small"
                      >
                        <span className="pe-2">
                          <GrLocation />
                        </span>
                        Serves Los Angeles, CA
                      </p>
                      <p
                        style={{ margin: "0", padding: "0" }}
                        className="small"
                      >
                        <span className="pe-2">
                          <FaUser />
                        </span>
                        Background checked
                      </p>
                      <p
                        style={{ margin: "0", padding: "0" }}
                        className="small"
                      >
                        <span className="pe-2">
                          <FiUsers />
                        </span>
                        5 employees
                      </p>
                      <p
                        style={{ margin: "0", padding: "0" }}
                        className="small"
                      >
                        <span className="pe-2">
                          <BsWatch />
                        </span>
                        6 years in business
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <h6 className="small">Payment methods</h6>
                      <p className="small">
                        Cash, Check, PayPal, Samsung Pay, Venmo, Zelle
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6 col-md-6">
                    <div className="">
                      <button className="btn btn-outline-info w-100">
                        <span className="pe-2">
                          <FaRegComment />
                        </span>
                        Message
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <button className="btn btn-outline-info w-100 float-bottom">
                        <span className="pe-2">
                          <FiPhoneCall />
                        </span>
                        Request a call
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section id="photos">
                <h6>Featured Projects</h6>
                <p>20 photos</p>
              </section>
              <section id="services">
                <h6>Specialties</h6>
                <div className="mb-2">
                  <h6 className="small" style={{ margin: "0", padding: "0" }}>
                    Extra services
                  </h6>
                  <p className="small">
                    <span style={{ color: "#04AA6D", paddingRight: "3px" }}>
                      <AiOutlineCheck />
                    </span>
                    <a href="">Window cleaning (interior),</a>
                    <a href=""> Fridge cleaning,</a>
                    <a href="">Oven cleaning,</a>
                    <a href=""> Laundry</a>
                  </p>
                </div>
                <div className="mb-2">
                  <h6 className="small" style={{ margin: "0", padding: "0" }}>
                    Pets
                  </h6>
                  <p className="small">
                    <span style={{ color: "#04AA6D", paddingRight: "3px" }}>
                      <AiOutlineCheck />
                    </span>
                    <a href="">Pets in home</a>
                  </p>
                </div>
                <div>
                  <h6 className="small" style={{ margin: "0", padding: "0" }}>
                    Cleaning type
                  </h6>
                  <p className="small">
                    <span style={{ color: "#04AA6D", paddingRight: "3px" }}>
                      <AiOutlineCheck />
                    </span>
                    <a href="">Standard cleaning,</a>
                    <a href=""> Deep cleaning,</a>
                    <a href="">Move out cleaning</a>
                  </p>
                </div>
              </section>
              <section id="reviews">
                <div>
                  <h6>Reviews</h6>
                  <p className="small mb-3">
                    Customers rated this pro highly for
                    <strong> work quality, professionalism,</strong> and
                    <strong> responsiveness.</strong>
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 border-end">
                    <h6 className="text-success">Very good 4.6</h6>
                    <p
                      style={{ margin: "0", padding: "0" }}
                      className=" text-success "
                    >
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </p>
                    <p className="small">277 reviews</p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex align-items-center">
                      <p style={{ margin: "0", padding: "0" }} className="pe-2">
                        5 <AiOutlineStar />
                      </p>
                      <div className="progress" style={{ width: "50%" }}>
                        <div
                          className="progress-bar"
                          style={{ width: "89%" }}
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <p className="ps-2">89%</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p style={{ margin: "0", padding: "0" }} className="pe-2">
                        4 <AiOutlineStar />
                      </p>
                      <div className="progress" style={{ width: "50%" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <p className="ps-2">0%</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p style={{ margin: "0", padding: "0" }} className="pe-2">
                        3 <AiOutlineStar />
                      </p>
                      <div className="progress" style={{ width: "50%" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <p className="ps-2">0%</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p style={{ margin: "0", padding: "0" }} className="pe-2">
                        2 <AiOutlineStar />
                      </p>
                      <div className="progress" style={{ width: "50%" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <p className="ps-2">0%</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p style={{ margin: "0", padding: "0" }} className="pe-2">
                        1 <AiOutlineStar />
                      </p>
                      <div className="progress" style={{ width: "50%" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "11%" }}
                        ></div>
                      </div>
                      <p className="ps-2">11%</p>
                    </div>
                  </div>
                </div>
                <p className="small mt-2">
                  Your trust means everything to us.
                  <a href="" className="text-info">
                    Learn about our review guidelines.
                  </a>
                </p>
                <div className="row">
                  <div className="col-lg-8 col-md-8">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className={cls.businessInput}
                        placeholder="Search reviews"

                        // aria-label="Username"
                        // aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <select
                      className={cls.businessInput}
                      aria-label="Default select example"
                    >
                      <option value="1">Most relevent</option>
                      <option value="2">Highest rated</option>
                      <option value="3">Lowest rated</option>
                      <option value="3">Newest first</option>
                      <option value="3">Oldest first</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p>Read reviews that mention:</p>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    Clean 25
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    house 14
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    thorough 12
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    service 8
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    team 8
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    deep
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    move 7
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    home 5
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    apartment 4
                  </button>
                  <button className="btn btn-outline-info rounded-pill me-2 mb-2">
                    dust 3
                  </button>
                </div>
                <hr />
                <div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="pe-2">
                          <img
                            src="/images/user6.jpg"
                            width={50}
                            height={50}
                            className="rounded-circle"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Hannah K . </h6>
                          <p
                            style={{ margin: "0", padding: "0" }}
                            className="small"
                          >
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            .
                            <span className="text-info">
                              <BsShieldFillCheck />
                            </span>
                            Hired on Consult24
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="small">Feb 16, 2022</p>
                      </div>
                    </div>
                    <p className="small">
                      The cleaning crew was amazing! Very thorough and attention
                      to detail. I don't think my house has ever been cleaned so
                      well by a cleaning service. I will definitely be using
                      them again! Great communication, too!
                    </p>
                    <p className="small">
                      Details: 3 bedrooms • 3 bathrooms • Standard cleaning •
                      Pets in home • Once a month
                    </p>
                    <p className="small">House Cleaning</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="pe-2">
                          <img
                            src="/images/user6.jpg"
                            width={50}
                            height={50}
                            className="rounded-circle"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Hannah K . </h6>
                          <p
                            style={{ margin: "0", padding: "0" }}
                            className="small"
                          >
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            .
                            <span className="text-info">
                              <BsShieldFillCheck />
                            </span>
                            Hired on Consult24
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="small">Feb 16, 2022</p>
                      </div>
                    </div>
                    <p className="small">
                      The cleaning crew was amazing! Very thorough and attention
                      to detail. I don't think my house has ever been cleaned so
                      well by a cleaning service. I will definitely be using
                      them again! Great communication, too!
                    </p>
                    <p className="small">
                      Details: 3 bedrooms • 3 bathrooms • Standard cleaning •
                      Pets in home • Once a month
                    </p>
                    <p className="small">House Cleaning</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="pe-2">
                          <img
                            src="/images/user6.jpg"
                            width={50}
                            height={50}
                            className="rounded-circle"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Hannah K . </h6>
                          <p
                            style={{ margin: "0", padding: "0" }}
                            className="small"
                          >
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            .
                            <span className="text-info">
                              <BsShieldFillCheck />
                            </span>
                            Hired on Consult24
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="small">Feb 16, 2022</p>
                      </div>
                    </div>
                    <p className="small">
                      The cleaning crew was amazing! Very thorough and attention
                      to detail. I don't think my house has ever been cleaned so
                      well by a cleaning service. I will definitely be using
                      them again! Great communication, too!
                    </p>
                    <p className="small">
                      Details: 3 bedrooms • 3 bathrooms • Standard cleaning •
                      Pets in home • Once a month
                    </p>
                    <p className="small">House Cleaning</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="pe-2">
                          <img
                            src="/images/user6.jpg"
                            width={50}
                            height={50}
                            className="rounded-circle"
                            alt="img"
                          />
                        </div>
                        <div>
                          <h6>Hannah K . </h6>
                          <p
                            style={{ margin: "0", padding: "0" }}
                            className="small"
                          >
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            <span className=" text-success ">
                              <FaStar />
                            </span>
                            .
                            <span className="text-info">
                              <BsShieldFillCheck />
                            </span>
                            Hired on Consult24
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="small">Feb 16, 2022</p>
                      </div>
                    </div>
                    <p className="small">
                      The cleaning crew was amazing! Very thorough and attention
                      to detail. I don't think my house has ever been cleaned so
                      well by a cleaning service. I will definitely be using
                      them again! Great communication, too!
                    </p>
                    <p className="small">
                      Details: 3 bedrooms • 3 bathrooms • Standard cleaning •
                      Pets in home • Once a month
                    </p>
                    <p className="small">House Cleaning</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div>
                    <button className="btn btn-light border me-2">
                      <AiOutlineLeft />
                    </button>
                    <button className="btn btn-light border">
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
                <hr />
              </section>
              <section id="credentials">
                <h6>
                  Credentials <AiOutlineInfoCircle />
                </h6>
                <h6 className="small">
                  Background Check <AiOutlineCheck />
                </h6>
                <p>Hesler Almengor</p>
                <a href="" className="text-info">
                  View credential details
                </a>
                <hr />
              </section>
              <section id="faqs">
                <h6>FAQs</h6>
                <h6 className="small">
                  What is your typical process for working with a new customer?
                </h6>
                <p>always do a great job</p>
              </section>
            </main>
          </div>
          <div className="col-lg-4 col-md-4 ">
            <div className="container small ">
              <div className="border mt-3 p-2 ">
                <h6>$120</h6>
                <p>starting cost</p>
                <span className="pe-2">
                  <AiOutlineDollar />
                </span>
                <a href="" className="text-info">
                  View price details
                </a>
                <hr />
                <div className="mb-2">
                  <label htmlFor="inputField">Zip code</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className={cls.businessInput}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="inputField">Frequency</label>
                  <select
                    className={cls.businessInput}
                    aria-label="Default select example"
                  >
                    <option value="">Select answer</option>
                    <option value="1">Just once</option>
                    <option value="2">Every week</option>
                    <option value="3">Every 2 weeks</option>
                    <option value="4">Once a month</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label htmlFor="inputField">Number of bedrooms</label>
                  <select
                    className={cls.businessInput}
                    aria-label="Default select example"
                  >
                    <option value="">Select answer</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2 bedrooms</option>
                    <option value="3">3 bedrooms</option>
                    <option value="4">4 bedrooms</option>
                    <option value="5">5 bedrooms</option>
                    <option value="6">5 bedrooms</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-info mb-2 w-100 small">
                    Check availability
                  </button>
                </div>
                <p className="text-center small">
                  <span className="pe-2">
                    <FaRegComment />
                  </span>
                  Responds in about <strong> 20 min</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderPage;
