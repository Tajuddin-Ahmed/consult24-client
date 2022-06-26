import Image from "next/image";
import {
  AiFillDelete,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineStar,
} from "react-icons/ai";
import {
  BsFillEmojiSmileFill,
  BsFillTrophyFill,
  BsShieldFillCheck,
  BsTelephoneFill,
} from "react-icons/bs";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FiUserCheck, FiUsers, FiVideo } from "react-icons/fi";
import { GoBrowser } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { IoMdImage } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import photo from "../../public/images/user4.jpg";
import cls from "./provider.module.css";
import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import Link from "next/link";
import router from "next/router";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const ProviderProfile = () => {
  const [data, setData]: any = useState({});
  const [imageId, setImageId] = useState();
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [image, setImage] = useState();
  const user: any = useContext(AppContext);
  const loaderCss = css`
    margin-left: 45%;
    margin-right: 45%;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };

    const getImageId = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/ServiceProviderProfilePicture/?user_id=${user?.id}`,
            config
          );
          if (res.status === 200) {
            const count = res.data.length;
            setImageId(res.data[count - 1].id);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getImageId();
    console.log(imageId);
    const getProfilePicture = async () => {
      if (imageId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/profile_picture/${imageId}`,
            config
          );
          if (res.status == 200) {
            setImage(res.data.profile_picture);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getProfilePicture();

    const fetchData = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/provider_profile/${user?.id}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    fetchData();
    const getAllPreferredCustomer = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            "https://c24apidev.accelx.net/auth_api/service_provider_view_customer_list/",
            config
          );
          if (res.status === 200) {
            setCustomers(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getAllPreferredCustomer();
  }, [user.id, imageId]);

  return (
    <Fragment>
      {loading ? (
        <BeatLoader css={loaderCss} size={20} loading />
      ) : (
        <div>
          <div className="row justify-content-center my-3">
            <div className="col-md-6 col-lg-6 border">
              <div className="row">
                <div className="col-md-7 col-lg-7 d-flex p-3">
                  {image ? (
                    <img
                      className="rounded-circle"
                      src={image}
                      width={70}
                      height={70}
                      alt="Image"
                    />
                  ) : (
                    <Image
                      className="rounded-circle"
                      src={photo}
                      width={70}
                      height={70}
                      alt="Image"
                    />
                  )}

                  <div className={`ps-2 mt-2`}>
                    <h6>
                      {data?.user?.first_name + " " + data?.user?.last_name}
                    </h6>
                    <div className="d-flex">
                      <ul className="list-unstyled d-flex  text-warning">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                      <a href="#" className="ps-2 text-info mt-1">
                        Ask for Reviews
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 text-end mt-3">
                  <Link href="/providerAccount/editProviderBasicInfo">
                    <a className="text-info">Edit</a>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="border-bottom my-3">
                    <div className="d-flex">
                      <BsTelephoneFill />

                      <h6 className="ps-2">Phone</h6>
                    </div>
                    <address className="ps-4">
                      {data?.user?.phone_number}
                    </address>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="border-bottom my-3 d-flex justify-content-between">
                    <div>
                      <div className="d-flex">
                        <GoBrowser />
                        <h6 className="ps-2">Website</h6>
                      </div>
                      <address className="ps-4">
                        {data?.provider?.website_url}
                      </address>
                    </div>
                    <div>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          router.push("/providerAccount/editProviderBasicInfo")
                        }
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="border-bottom my-3">
                    <div className="d-flex">
                      <GrLocation />
                      <h6 className="ps-2">Address</h6>
                    </div>
                    <address className="ps-4">
                      {data?.address?.[0].street_address}
                    </address>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="border-bottom my-3">
                    <div className="d-flex">
                      <BsFillTrophyFill />
                      <h6 className="ps-2">Founding Year</h6>
                    </div>
                    <address className="ps-4">
                      {data?.provider?.founding_year}
                    </address>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="my-3">
                    <div className="d-flex">
                      <FiUsers />
                      <h6 className="ps-2">Number of employees</h6>
                    </div>
                    <address className="ps-4">
                      {data?.provider?.number_of_employees}
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-2 ${cls.font}`}>
              <div className="d-flex justify-content-between p-2">
                <div>
                  <h6>Your introduction</h6>
                  <p>Hi I am John doe . I am trying to build up my business</p>
                </div>
                <a href="#" className="text-info">
                  Edit
                </a>
              </div>
              <div className="bg-primary p-2 rounded">
                <p className="text-white">
                  Tell customers what safety precautions you're taking for
                  COVID-19
                </p>
                <button className="btn btn-outline-light">Get started</button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-2 ${cls.font}`}>
              <div className="p-2">
                <h6 className="border-bottom mb-2 text-uppercase">
                  Customers you may like
                </h6>
                <table className="table table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Message</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {customers.map((customer) => (
                      <tr key={customer.id}>
                        <th scope="row">1</th>
                        <td>{customer.customer_name}</td>
                        <td>
                          <Tippy
                            content={
                              <span className="text-info">
                                Send message to your customer
                              </span>
                            }
                          >
                            <button className="btn btn-info btn-sm px-3">
                              <AiOutlineMessage />
                            </button>
                          </Tippy>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-2 ${cls.font}`}>
              <div className="d-flex justify-content-between p-2">
                <div>
                  <h6>Credentials</h6>
                  <p>
                    <span className="fs-5 pe-2">
                      <FiUserCheck />
                    </span>
                    <span className="fw-bolder small">Background Check</span>
                  </p>
                </div>
              </div>
              <div className="mx-3">
                <div
                  className="row p-2 rounded"
                  style={{ border: "2px dashed gray" }}
                >
                  <div className="col-md-8 col-lg-8">
                    <p>
                      Add a background check badge to your profile by
                      authorizing a free background check. This will help you
                      build customer trust and get hired more.
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <button className="btn btn-outline-info float-end mt-4">
                      Start
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between p-2">
                <div>
                  <p>
                    <span className="fs-5 pe-2">
                      <BsShieldFillCheck />
                    </span>
                    <span className="fw-bolder small">
                      Professional Licenses
                    </span>
                  </p>
                </div>
              </div>
              <div className="mx-3 mt-3">
                <div
                  className="row p-2 rounded"
                  style={{ border: "2px dashed gray" }}
                >
                  <div className="col-md-8 col-lg-8">
                    <p>
                      Customers prefer to hire professionals who are licensed in
                      their profession.
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <button className="btn btn-outline-info float-end mt-2">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-2 ${cls.font}`}>
              <div className="d-flex justify-content-between p-2">
                <h6>Photos and videos</h6>
                <p>
                  <a href="" className="text-info">
                    Edit
                  </a>
                </p>
              </div>
              <div className=" d-flex align-items-center px-2">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "50px",
                    border: "2px dashed gray",
                    marginRight: "5px",
                    textAlign: "center",
                  }}
                >
                  <a href="" className="text-info">
                    <AiOutlinePlusCircle />
                  </a>
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "50px",
                    border: "2px dashed gray",
                    backgroundColor: "lightgray",
                    marginRight: "5px",
                    textAlign: "center",
                  }}
                >
                  <IoMdImage />
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "50px",
                    border: "2px dashed gray",
                    backgroundColor: "lightgray",
                    marginRight: "5px",
                    textAlign: "center",
                  }}
                >
                  <IoMdImage />
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "50px",
                    border: "2px dashed gray",
                    backgroundColor: "lightgray",
                    marginRight: "5px",
                    textAlign: "center",
                  }}
                >
                  <IoMdImage />
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "50px",
                    border: "2px dashed gray",
                    backgroundColor: "lightgray",
                    marginRight: "5px",
                    textAlign: "center",
                  }}
                >
                  <IoMdImage />
                </div>
              </div>
              <div className="mt-3" style={{ margin: "0 22px" }}>
                <div
                  className="row p-2 rounded"
                  style={{ border: "2px dashed gray" }}
                >
                  <div className="col-md-8 col-lg-8">
                    <h6 className="small">Show off your business</h6>
                    <p className="small">
                      Include photos of your work (before and after), team,
                      workspace, or equipment.
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <button className="btn btn-outline-info float-end mt-2">
                      Add photos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-2 ${cls.font}`}>
              <div className="d-flex justify-content-between p-2">
                <div>
                  <div>
                    <h6>Additional profile badges</h6>
                    <p>
                      <span className="fs-6 pe-1 ">
                        <FiDollarSign />
                      </span>
                      <span className="fw-bold small">
                        Are you offering discounts?
                      </span>
                    </p>
                    <p className="ms-2">
                      Customers will see this in search results, but it’s up to
                      you to work out final prices.
                    </p>
                    <div className="form-check pb-2 ms-2">
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
                        I am offering discounts
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <p>
                      <span className="fs-6 pe-1">
                        <FiVideo />
                      </span>
                      <span className="fw-bold small">
                        Are you offering remote services or consultations?
                      </span>
                    </p>
                    <p className="ms-2">
                      We’ll let customers know you can work with them online or
                      over the phone.
                    </p>
                    <div className="form-check pb-2 ms-2">
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
                        I am offering remote services or consultations
                      </label>
                    </div>
                    <p className="ps-2 small">
                      <span className="fw-bold">Note:</span> This badge is only
                      visible for services where remote work is possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-3 ${cls.font}`}>
              <h5>Social media</h5>
              <div className="py-3">
                <button className="btn btn-outline-info me-2">
                  <span className="pe-1">
                    <FaFacebookF />
                  </span>
                  Add Facebook
                </button>
                <button className="btn btn-outline-info me-2">
                  <span className="pe-1">
                    <FaInstagram />
                  </span>
                  Add Instagram
                </button>
                <button className="btn btn-outline-info">
                  <span className="pe-1">
                    <FaTwitter />
                  </span>
                  Add Twitter
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-3 ${cls.font}`}>
              <h5>Payment methods accepted</h5>
              <div
                className="py-3 text-center"
                style={{ border: "2px dashed lightgray" }}
              >
                <button className="btn btn-outline-info me-2">Add</button>
                <p className="small p-1">
                  Let customers know what kind of payments you take
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-3 ${cls.font}`}>
              <h5 className="py-3">Featured projects</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div
                    className="py-3 d-flex justify-content-center align-items-center bg-light"
                    style={{
                      border: "2px dashed lightgray",
                      height: "150px",
                    }}
                  >
                    <a href="" className="text-info fs-3">
                      <AiOutlinePlusCircle />
                    </a>
                  </div>
                  <p
                    className="fw-bold small"
                    style={{ margin: "0", padding: "0" }}
                  >
                    Project Title
                  </p>
                  <p className="small">Approximate price</p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="py-3 d-flex justify-content-center align-items-center bg-light"
                    style={{
                      border: "2px dashed lightgray",
                      height: "150px",
                    }}
                  >
                    <a href="" className="text-info fs-3">
                      <AiOutlinePlusCircle />
                    </a>
                  </div>
                  <p
                    className="fw-bold small"
                    style={{ margin: "0", padding: "0" }}
                  >
                    Project Title
                  </p>
                  <p className="small">Approximate price</p>
                </div>
              </div>
              <div className="py-3 ">
                <button className="btn btn-info text-light">
                  Add new project
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-2 ${cls.font}`}>
              <h5 className="py-3">Reviews</h5>
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <p style={{ margin: "0", padding: "0", color: "green" }}>
                    0.0
                  </p>
                  <div>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                  <p>0 reviews</p>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="d-flex align-items-center">
                    <p style={{ margin: "0", padding: "0" }} className="pe-2">
                      5 <AiOutlineStar />
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
                      ></div>
                    </div>
                    <p className="ps-2">0%</p>
                  </div>
                </div>
              </div>
              <div className="container my-3">
                <div className="row p-3 border">
                  <div className="col-lg-2 col-md-2 d-flex align-items-center">
                    <div>
                      <span className="text-warning fs-4">
                        <FaStar />
                      </span>
                      <span
                        className="text-danger fs-4"
                        style={{ marginLeft: "-5px" }}
                      >
                        <FaHeart />
                      </span>
                      <p
                        className="text-warning fs-4"
                        style={{ marginTop: "-20px", marginLeft: "10px" }}
                      >
                        <BsFillEmojiSmileFill />
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h6 className="small">
                      Get reviews from past customers, even if they're not on
                      Consult24.
                    </h6>
                    <p className="small lh-sm">
                      Tell us which customers to ask for a review, and we'll
                      send the request for you.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-4 d-flex align-items-center">
                    <button className="btn btn-info btn-sm">
                      Ask for Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className={`col-md-6 col-lg-6 border py-3 ${cls.font}`}>
              <div className="row py-3">
                <div className="col-lg-12 col-md-12 d-flex justify-content-between">
                  <h6>Frequently asked questions</h6>
                  <a href="" className="text-info">
                    Edit
                  </a>
                </div>
              </div>
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  What should the customer know about your pricing (e.g.,
                  discounts, fees)?
                </h6>
                <p className="small" style={{ margin: "0", padding: "0" }}>
                  Not Answered
                </p>
              </div>
              <hr style={{ height: "1px" }} />
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  What is your typical process for working with a new customer?
                </h6>
                <p className="small">Not Answered</p>
              </div>
              <hr />
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  What education and/or training do you have that relates to
                  your work?
                </h6>
                <p className="small">Not Answered</p>
              </div>
              <hr />
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  How did you get started doing this type of work?
                </h6>
                <p className="small">Not Answered</p>
              </div>
              <hr />
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  What types of customers have you worked with?
                </h6>
                <p className="small">Not Answered</p>
              </div>
              <hr />
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  Describe a recent project you are fond of. How long did it
                  take?
                </h6>
                <p className="small">Not Answered</p>
              </div>
              <hr />
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  What advice would you give a customer looking to hire a
                  provider in your area of work?
                </h6>
                <p className="small">Not Answered</p>
              </div>
              <hr />
              <div>
                <h6 className="small" style={{ margin: "0", padding: "0" }}>
                  What questions should customers think through before talking
                  to professionals about their project?
                </h6>
                <p className="small">Not Answered</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default ProviderProfile;
