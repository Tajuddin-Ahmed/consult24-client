import {
  FaCalendarCheck,
  FaFacebook,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { FcGoogle, FcSettings } from "react-icons/fc";
import { IoIosArrowForward, IoIosNotifications } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import classes from "../../components/_App/Navbar/Menu/register/register.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import UserInfo from "./userInfo";
import Settings from "./settings";
import Invoicing from "./invoicing";
import Notification from "./notification";
import Inbox from "./inbox";
import Bill from "./bills";
import Appointment from "./appointments";
import { useEffect, useState } from "react";
const UserProfile = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 0);
  }, []);
  function openCity(evt, menuItem) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuItem).style.display = "block";
    evt.currentTarget.className += " active";
  }
  if (typeof window !== "undefined" && loading) {
    document.getElementById("defaultOpen").click();
  }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid first name"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid last name"),

    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  async function onSubmit(data) {
    // display form data on success
    if (data) {
    }
  }
  return (
    <>
      <div className="container mt-1">
        <div className="row bg-light d-flex justify-content-around p-4">
          <div className="col-md-2 bg-white shadow-sm">
            <div className="tab">
              <button
                className="tablinks"
                onClick={() => openCity(event, "userInfo")}
                id="defaultOpen"
              >
                <p className="border-bottom d-flex align-items-center justify-content-between">
                  <a className="d-flex align-items-center">
                    <span className="pe-1" style={{ color: "lightseagreen" }}>
                      <FaUser />
                    </span>
                    User info
                  </a>
                  <a>
                    <IoIosArrowForward />
                  </a>
                </p>
              </button>
              <button
                className="tablinks"
                onClick={() => openCity(event, "userAccount")}
              >
                <p className="border-bottom d-flex align-items-center justify-content-between">
                  <a className="d-flex align-items-center">
                    <span className="pe-1" style={{ color: "lightseagreen" }}>
                      <FcSettings />
                    </span>
                    Settings
                  </a>
                  <a>
                    <IoIosArrowForward />
                  </a>
                </p>
              </button>
              <button
                className="tablinks"
                onClick={() => openCity(event, "invoicing")}
              >
                <p className="border-bottom d-flex align-items-center justify-content-between">
                  <a className="d-flex align-items-center">
                    <span className="pe-1" style={{ color: "lightseagreen" }}>
                      <FaFileInvoiceDollar />
                    </span>
                    Invoicing
                  </a>
                  <a>
                    <IoIosArrowForward />
                  </a>
                </p>
              </button>
              <button
                className="tablinks"
                onClick={() => openCity(event, "notification")}
              >
                <p className="border-bottom d-flex align-items-center justify-content-between">
                  <a className="d-flex align-items-center">
                    <span className="pe-1" style={{ color: "lightseagreen" }}>
                      <IoIosNotifications />
                    </span>
                    Notification
                  </a>
                  <a>
                    <IoIosArrowForward />
                  </a>
                </p>
              </button>
              <button
                className="tablinks"
                onClick={() => openCity(event, "inbox")}
              >
                <p className="border-bottom d-flex align-items-center justify-content-between">
                  <a className="d-flex align-items-center">
                    <span className="pe-1" style={{ color: "lightseagreen" }}>
                      <GoInbox />
                    </span>
                    Inbox
                  </a>
                  <a>
                    <IoIosArrowForward />
                  </a>
                </p>
              </button>
              <button
                className="tablinks"
                onClick={() => openCity(event, "billPayments")}
              >
                <p className="border-bottom d-flex align-items-center justify-content-between">
                  <a className="d-flex align-items-center">
                    <span className="pe-1" style={{ color: "lightseagreen" }}>
                      <FaMoneyBill />
                    </span>
                    Bills
                  </a>
                  <a>
                    <IoIosArrowForward />
                  </a>
                </p>
              </button>
              <button
                className="tablinks"
                onClick={() => openCity(event, "appointments")}
              >
                <p className="border-bottom d-flex align-items-center justify-content-between">
                  <a className="d-flex align-items-center">
                    <span className="pe-1" style={{ color: "lightseagreen" }}>
                      <FaCalendarCheck />
                    </span>
                    Appointment
                  </a>
                  <a>
                    <IoIosArrowForward />
                  </a>
                </p>
              </button>
            </div>
          </div>

          <div
            className="col-md-9 p-3 rounded"
            style={{ backgroundColor: "steelblue" }}
          >
            <div id="userInfo" className="tabcontent">
              <UserInfo></UserInfo>
            </div>
            <div id="userAccount" className="tabcontent">
              <Settings></Settings>
            </div>
            <div id="invoicing" className="tabcontent">
              <Invoicing></Invoicing>
            </div>
            <div id="notification" className="tabcontent">
              <Notification></Notification>
            </div>
            <div id="inbox" className="tabcontent ">
              <Inbox></Inbox>
            </div>
            <div id="billPayments" className="tabcontent ">
              <Bill></Bill>
            </div>
            <div id="appointments" className="tabcontent ">
              <Appointment></Appointment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
