import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import {
  AiOutlineCaretDown,
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
import { FiPhoneCall, FiShare, FiUsers, FiVideo } from "react-icons/fi";
import { GrAdd, GrLocation } from "react-icons/gr";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import cls from "../../providerAccount/provider.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import classes from "./searching.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Table } from "react-bootstrap";
const ProviderPage = () => {
  const [providerDetails, setProviderDetails]: any = useState({});
  const [serviceDetails, setServiceDetails]: any = useState({});
  const [appointments, setAppointments]: any = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [value, onChange] = useState(new Date());
  const [token, setToken] = useState();
  const [image, setImage]: any = useState({});
  const [isChecked, setIsChecked]: any = useState(false);
  const [messageModal, setMessageModal]: any = useState(false);
  const user: any = useContext(AppContext);
  const router = useRouter();
  const serviceUserId = router.query.providerPage?.[1];
  const serviceId = router.query.providerPage?.[2];
  const categoryId = router.query.providerPage?.[3];
  const subCategoryId = router.query.providerPage?.[4];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let i = 1;
  const offset = value.getTimezoneOffset();
  const localDate = new Date(value.getTime() - offset * 60 * 1000);
  const selectedDay = localDate.toISOString().split("T")[0];
  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };
  const notify1 = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };
  useEffect(() => {
    const token: any = localStorage.getItem("token");
    setToken(token);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const getProviderDetails = async () => {
      if (serviceUserId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/search_result_for_provider_info/${serviceUserId}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setProviderDetails(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getProviderDetails();
    const getServiceDetails = async () => {
      if (serviceId && serviceUserId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/Search_Service_Details/${serviceId}?user_id=${serviceUserId}`,
            config
          );
          if (res.status === 200) {
            setServiceDetails(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getServiceDetails();
    const getServiceImageAndFile = async () => {
      if (serviceId && serviceUserId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/servicefileGet_APIView/?user_id=${serviceUserId}&service_id=${serviceId}`,
            config
          );
          if (res.status === 200) {
            setImage(res.data[0]);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getServiceImageAndFile();
    const getAppointmentList = async () => {
      if (serviceUserId) {
        try {
          if (serviceId) {
            const res = await axios.get(
              `https://c24apidev.accelx.net/api/CustomerProviderAppointmentGet/?provider_id=${serviceUserId}&service_id=${serviceId}&search=${selectedDay}`,
              config
            );
            if (res.status === 200) {
              setAppointments(res.data);
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getAppointmentList();
  }, [serviceUserId, serviceId, selectedDay, updated]);
  const handlePreferredPro = async () => {
    if (token !== "null") {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      };
      const body = JSON.stringify({
        provider: serviceUserId,
        user_customer: user?.id,
        customer_name: user?.username,
        provider_name:
          providerDetails?.user?.first_name +
          " " +
          providerDetails?.user?.last_name,
      });
      if (user?.id) {
        try {
          const res = await axios.post(
            "https://c24apidev.accelx.net/auth_api/pref_provider_Customer_ApiView/",
            body,
            config
          );
          if (res.status === 200) {
            const message = "data already in exist";
            notify1(message);
          }
          if (res.status === 201) {
            const message = "data saved successfully";
            notify(message);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    } else {
      router.push("/home/login");
    }
  };
  const handleAppBooking = async (id, startTime, endTime) => {
    const currentTime = new Date().toString().split(" ")[4];
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = new FormData();
    body.append("appointment_type", "instant_call");
    body.append("status", "booked");
    body.append("appointment_customer", user?.id);
    if (user?.id) {
      if (id) {
        try {
          const res = await axios.patch(
            `https://c24apidev.accelx.net/api/customer_appointment/${id}`,
            body,
            config
          );
          if (res.status === 200) {
            notify("Booking successfull");
            setUpdated(true);
          }
        } catch (error) {
          notify1("Something went wrong");
        }
      }
    } else {
      router.push("/home/login");
    }
  };
  console.log(user?.id);
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
                    <img
                      src={
                        image?.service_image
                          ? image.service_image
                          : "/images/listings/listings7.jpg"
                      }
                      alt="Image"
                    />
                  </div>
                  <div className="col-lg-8 col-md-8 d-flex justify-content-between">
                    <div>
                      <h5 className="pb-2">{serviceDetails?.service_name}</h5>
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
                    {(token === "null" || user?.role === 2) && (
                      <div>
                        <Tippy
                          content={
                            <span className="text-warning">
                              Add him/her as a preferred Provider
                            </span>
                          }
                        >
                          <button
                            className="btn btn-info btn-sm px-4"
                            onClick={handlePreferredPro}
                          >
                            <span style={{ fontSize: "17px" }}>
                              <GrAdd />
                            </span>
                          </button>
                        </Tippy>
                      </div>
                    )}
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
                      <a href="#">{serviceDetails?.service_name}</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {serviceDetails?.service_name}
                    </li>
                  </ol>
                </nav>
                <p className="small">
                  <strong>Introduction:</strong>
                  {serviceDetails?.service_description}
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
                        {serviceDetails.service_experiance_year} years in
                        business
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
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="">
                      <button
                        className="btn btn-outline-info w-100"
                        onClick={() => setMessageModal(true)}
                      >
                        <span className="pe-2">
                          <FaRegComment />
                        </span>
                        Message
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div>
                      <button className="btn btn-outline-info w-100 float-bottom">
                        <span className="pe-2">
                          <FiVideo />
                        </span>
                        Instant video call
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div>
                      <button
                        className="btn btn-outline-info w-100 float-bottom"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <span className="pe-2">
                          <FiVideo />
                        </span>
                        Make appointment
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
                <h6>${serviceDetails.rate_inhouse_cons}</h6>
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
                    defaultValue={
                      serviceDetails?.service_zip_code
                        ? serviceDetails?.service_zip_code
                        : ""
                    }
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
                  <button
                    className="btn btn-info mb-2 w-100 small"
                    onClick={() => setIsModalOpen(true)}
                  >
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
          <ToastContainer />
        </div>
        <Modal
          open={isModalOpen}
          classNames={{
            modal: `${classes.customModal}`,
          }}
          onClose={() => setIsModalOpen(false)}
        >
          <div>
            <h5 className="pt-4 text-center">Providers availability</h5>
            <div className="d-flex justify-content-center">
              <Calendar
                // minDate={new Date()}
                onChange={onChange}
                value={value}
              />
            </div>
            <div className="mt-3">
              <h6 className="text-center">Selected Day</h6>
              <h6 className="text-center">
                {months[value.getMonth()] +
                  " " +
                  value.getDate() +
                  " " +
                  value.getFullYear() +
                  "," +
                  days[value.getDay()]}
              </h6>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree
              </label>
              <p>
                By clicking Yes, you agree to the
                <a href="/termsAndPolicy" className="text-primary px-1">
                  Terms of Use
                </a>
                and
                <a href="/privacy" className="text-primary px-1">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div>
              <h5 className="border-bottom">Schedule</h5>
              <Table striped bordered hover variant="secondary">
                <thead className="text-center">
                  <tr style={{ color: "#cc6089" }}>
                    <th>
                      <AiOutlineCaretDown />
                    </th>
                    <th>Service Name</th>
                    <th>Appointment type</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {appointments.length ? (
                    appointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>{i++}</td>
                        <td>{serviceDetails?.service_name}</td>
                        <td>{appointment.appointment_type}</td>
                        <td>{appointment.start_time}</td>
                        <td>{appointment.end_time}</td>
                        <td>{appointment.status}</td>
                        <td>
                          {appointment.status !== "booked" ? (
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() =>
                                handleAppBooking(
                                  appointment.id,
                                  appointment.start_time,
                                  appointment.end_time
                                )
                              }
                              disabled={!isChecked}
                            >
                              book now
                            </button>
                          ) : (
                            <button
                              className="btn btn-danger btn-sm"
                              // onClick={() =>
                              //   handleAppBooking(
                              //     appointment.id,
                              //     appointment.start_time,
                              //     appointment.end_time
                              //   )
                              // }
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7}>
                        Provider is not available in this date
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>

            <div className="float-end">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          open={messageModal}
          classNames={{
            modal: `${classes.customModal}`,
          }}
          onClose={() => setMessageModal(false)}
        >
          <div className="bg-light mt-4 border">
            <h6 className="text-white bg-primary ps-2">New Message</h6>
            <div className="bg-light d-flex align-items-center p-3">
              <label htmlFor="">To</label>
              <input
                type="text"
                defaultValue={
                  providerDetails?.user?.first_name +
                  " " +
                  providerDetails?.user?.middle_name +
                  " " +
                  providerDetails?.user?.last_name
                }
                disabled
                style={{
                  width: "80%",
                  padding: "6px",
                  border: "1px solid lightseagreen",
                  borderRadius: "4px",
                  marginLeft: "11%",
                }}
              />
            </div>
            <div className="bg-light d-flex align-items-center p-3">
              <label htmlFor="">Message</label>
              <textarea
                cols={40}
                rows={5}
                style={{
                  width: "80%",
                  padding: "6px",
                  border: "1px solid lightseagreen",
                  borderRadius: "3px",
                  marginLeft: "20px",
                }}
              />
            </div>
            <div
              className="bg-light d-flex align-items-center p-3 flex-row-reverse"
              style={{ marginRight: "6%" }}
            >
              <button
                className="btn btn-warning btn-sm ms-2"
                onClick={() => setMessageModal(false)}
              >
                Close
              </button>
              <button className="btn btn-primary btn-sm">Send</button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ProviderPage;
