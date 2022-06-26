import Link from "next/link";
import { useContext } from "react";
import {
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { GoInbox } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./profile.module.css";
const Invoicing = () => {
  const user: any = useContext(AppContext);
  return (
    <>
      <div>
        <div className="row d-flex">
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
              <li
                className="list-group-item"
                style={{ backgroundColor: "#FFFBC8" }}
              >
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
              <li className="list-group-item">
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
          <div className="col-md-9 bg-light p-2">
            <div className="container">
              <div className="d-flex justify-content-between mb-3">
                <h4 className={`${cls.font}`}>Invoicing</h4>
                <button
                  className={`btn btn-success btn-sm float-end ${cls.font}`}
                >
                  Create Invoice
                </button>
              </div>
              <div className={`bg-white p-2 shadow-sm rounded ${cls.font}`}>
                <h6 className="pb-2">Current Invoice</h6>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Invoicing;
