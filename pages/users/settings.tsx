import cls from "./profile.module.css";
import {
  FaAngleRight,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import { FcSettings } from "react-icons/fc";
const Settings = () => {
  const user: any = useContext(AppContext);
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-md-3 col-lg-3 col-12 p-2 bg-white shadow-sm">
          <ul className="list-unstyled">
            <li className="list-group-item">
              <Link href={`/users/profile/${user.id}`}>
                <a>
                  <div className="d-flex justify-content-between align-items-center">
                    <p
                      style={{
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      <span className="me-2 fs-6">
                        <FaCalendarCheck className="text-info" />
                      </span>
                      Appointments
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
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
                    <p style={{ margin: "0", padding: "0" }}>
                      <span className="me-2 fs-6">
                        <FaFileInvoiceDollar className="text-info" />
                      </span>
                      Invoicing
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/users/userInfo">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>
                      <span className="me-2 fs-6">
                        <FaUser className="text-info" />
                      </span>
                      User info
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
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
                    <p style={{ margin: "0", padding: "0" }}>
                      <span className="me-2 fs-6">
                        <GoInbox className="text-info" />
                      </span>
                      Inbox
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
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
                    <p style={{ margin: "0", padding: "0" }}>
                      <span className="me-2 fs-6">
                        <FaMoneyBill className="text-info" />
                      </span>
                      Bills
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
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
              <Link href="/users/settings">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>
                      <span className="me-2 fs-6">
                        <FcSettings className="text-info" />
                      </span>
                      Settings
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <IoIosArrowForward />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9 col-lg-9 col-12 bg-light p-2">
          <div className="container">
            <h6 className={`text-uppercase ${cls.font}`}>Account Settings</h6>
            <div className="row d-flex justify-content-center">
              <div className="col-md-12">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link href="/users/edit/editPersonalInfo">
                      <a>
                        <div className="d-flex justify-content-between">
                          <p style={{ margin: "0", padding: "0" }}>Name</p>
                          <p style={{ margin: "0", padding: "0" }}>
                            <FaAngleRight />
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/users/edit/editPersonalInfo">
                      <a>
                        <div className="d-flex justify-content-between">
                          <p style={{ margin: "0", padding: "0" }}>Email</p>
                          <p style={{ margin: "0", padding: "0" }}>
                            <FaAngleRight />
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/users/edit/editPersonalInfo">
                      <a>
                        <div className="d-flex justify-content-between">
                          <p style={{ margin: "0", padding: "0" }}>
                            Phone Number
                          </p>
                          <p style={{ margin: "0", padding: "0" }}>
                            <FaAngleRight />
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/users/edit/editPassword">
                      <a>
                        <div className="d-flex justify-content-between">
                          <p style={{ margin: "0", padding: "0" }}>Password</p>
                          <p style={{ margin: "0", padding: "0" }}>
                            <FaAngleRight />
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/users/edit/editAddress">
                      <a>
                        <div className="d-flex justify-content-between">
                          <p style={{ margin: "0", padding: "0" }}>Address</p>
                          <p style={{ margin: "0", padding: "0" }}>
                            <FaAngleRight />
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-1 d-flex justify-content-center">
              <div className="col-md-12">
                <h6 className={`text-uppercase my-2 ${cls.font}`}>
                  Notification Settings
                </h6>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="/users/notification">
                      <div className="d-flex justify-content-between">
                        <p style={{ margin: "0", padding: "0" }}>
                          Notifications
                        </p>
                        <p style={{ margin: "0", padding: "0" }}>
                          <FaAngleRight />
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mt-1 d-flex justify-content-center">
              <div className="col-md-12">
                <h6 className={`small my-2 text-muted ${cls.font}`}>
                  ACCOUNT DELETE
                </h6>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="">
                      <div className="d-flex justify-content-between">
                        <p style={{ margin: "0", padding: "0" }}>
                          Deactive account
                        </p>
                        <p style={{ margin: "0", padding: "0" }}>
                          <FaAngleRight />
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
