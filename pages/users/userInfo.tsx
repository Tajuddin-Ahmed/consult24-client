import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import cls from "./profile.module.css";
const UserInfo = () => {
  const user: any = useContext(AppContext);
  const [customer, setCustomer]: any = useState({});
  const [image, setImage]: any = useState({});
  const [loading, setLoading] = useState(false);
  const style = { margin: "0", padding: "0" };
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
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getCustomerProfilePicture = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/CustomerProfilePicture/?user_id=${user?.id}`,
            config
          );
          if (res.status === 200) {
            const length = res.data.length;
            setImage(res.data[length - 1]);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getCustomerProfilePicture();
    const getCustomerInfo = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/customer_profile/${user?.id}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setCustomer(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getCustomerInfo();
  }, [user?.id]);
  return (
    <>
      <div className="row d-flex">
        <div className="col-md-3 col-lg-3 col-12 p-2 bg-white shadow-sm">
          <ul className="list-unstyled">
            <li className="list-group-item">
              <Link href={`/users/profile/${user.id}`}>
                <a>
                  <div className="d-flex justify-content-between align-items-center">
                    <p style={style}>
                      <span className="me-2 fs-6">
                        <FaCalendarCheck className="text-info" />
                      </span>
                      Appointments
                    </p>
                    <p style={style}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/users/invoicing">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={style}>
                      <span className="me-2 fs-6">
                        <FaFileInvoiceDollar className="text-info" />
                      </span>
                      Invoicing
                    </p>
                    <p style={style}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "#FFFBC8" }}
            >
              <Link href="/users/userInfo">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={style}>
                      <span className="me-2 fs-6">
                        <FaUser className="text-info" />
                      </span>
                      User info
                    </p>
                    <p style={style}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/users/inbox">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={style}>
                      <span className="me-2 fs-6">
                        <GoInbox className="text-info" />
                      </span>
                      Inbox
                    </p>
                    <p style={style}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/users/bills">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={style}>
                      <span className="me-2 fs-6">
                        <FaMoneyBill className="text-info" />
                      </span>
                      Bills
                    </p>
                    <p style={style}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/users/settings">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={style}>
                      <span className="me-2 fs-6">
                        <FcSettings className="text-info" />
                      </span>
                      Settings
                    </p>
                    <p style={style}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-9 col-lg-9 col-12 bg-light shadow-sm p-2">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h4 className={`${cls.font}`}>User Information</h4>
              {!customer?.address?.[0].country &&
              !customer?.address?.[0].state &&
              customer?.user?.email ? (
                <Link href="/users/profile/completeProfile">
                  <a className="text-danger">Please complete your profile</a>
                </Link>
              ) : (
                <Link href="/users/userProfile">
                  <a className="text-info fs-6">Edit</a>
                </Link>
              )}
            </div>
            {loading ? (
              <BeatLoader loading css={loaderCss} size={15} />
            ) : (
              <div className="row bg-white p-2">
                <div className="col-md-4 col-lg-4 col-12">
                  <div className="position-relative">
                    {image?.profile_picture ? (
                      <img
                        src={image?.profile_picture}
                        width="90%"
                        height="200px"
                        alt="image"
                      />
                    ) : (
                      <img
                        src="/images/defaultImg.png"
                        width="90%"
                        height="200px"
                        alt="image"
                      />
                    )}
                  </div>
                  <h6 className={`mt-2 ${cls.font}`} style={style}>
                    Name:
                    {customer?.user?.first_name +
                      " " +
                      customer?.user?.middle_name +
                      " " +
                      customer?.user?.last_name}
                  </h6>
                  <p style={style}>Email:{customer?.user?.email}</p>
                  <p style={style}>Gender: {customer?.user?.gender}</p>
                  <p>Phone: {customer?.user?.phone_number}</p>
                </div>
                <div className="col-md-8 col-lg-8 col-12">
                  <div className="ps-5 mb-3">
                    <h5 className={`border-bottom ${cls.font}`}>Address</h5>
                    <p style={style}>
                      Country: {customer?.address?.[0].country}
                    </p>
                    <p style={style}> State: {customer?.address?.[0].state}</p>
                    <p style={style}> City: {customer?.address?.[0].city}</p>
                    <p style={style}>
                      Street Address: {customer?.address?.[0].street_address}
                    </p>
                    <p style={style}>Apartment: {customer?.address?.[0].apt}</p>
                  </div>
                  <div className="ps-5">
                    <h5 className={`border-bottom ${cls.font}`}>
                      Payment method
                    </h5>
                    <p style={style}>
                      Payment to method: {customer?.user?.payment_to_method}
                    </p>
                    <p style={style}>
                      Payment from method: {customer?.user?.payment_from_method}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
