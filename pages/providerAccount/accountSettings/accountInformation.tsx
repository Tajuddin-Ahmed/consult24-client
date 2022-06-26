import cls from "../../users/profile.module.css";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import router from "next/router";
const AccountInformation = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-md-3 col-lg-3">
          <ul className="list-group ps-3">
            <li className="list-group-item">
              <Link href="/providerAccount/accountSettings/accountInformation">
                <a>
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ margin: "0", padding: "0", fontWeight: "bold" }}
                    >
                      Account
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <FaAngleRight />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/providerAccount/accountSettings/notifications">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Notifications</p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <FaAngleRight />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/providerAccount/editTimes">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>
                      Calendar and Availability
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <FaAngleRight />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/providerAccount/accountSettings/savedReplies">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Saved replies</p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <FaAngleRight />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/providerAccount/accountSettings/payments">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Payments</p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <FaAngleRight />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/providerAccount/accountSettings/widgets">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Widgets</p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <FaAngleRight />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/providerAccount/accountSettings/invitePros">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Invite pros</p>
                    <p style={{ margin: "0", padding: "0" }}>
                      <FaAngleRight />
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9 col-lg-9">
          <h5 className="text-center">Account</h5>
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/users/edit/editPersonalInfo">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>Name</p>
                      <p style={{ margin: "0", padding: "0" }}>
                        <FaAngleRight />
                      </p>
                    </div>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/users/edit/editPersonalInfo">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>Email</p>
                      <p style={{ margin: "0", padding: "0" }}>
                        <FaAngleRight />
                      </p>
                    </div>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/users/edit/editPersonalInfo">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>Phone Number</p>
                      <p style={{ margin: "0", padding: "0" }}>
                        <FaAngleRight />
                      </p>
                    </div>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/providerAccount/providerProfile">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>
                        Profile picture
                      </p>
                      <p style={{ margin: "0", padding: "0" }}>
                        <FaAngleRight />
                      </p>
                    </div>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/users/edit/editPassword">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>Password</p>
                      <p style={{ margin: "0", padding: "0" }}>
                        <FaAngleRight />
                      </p>
                    </div>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="/users/edit/editAddress">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>Address</p>
                      <p style={{ margin: "0", padding: "0" }}>
                        <FaAngleRight />
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="my-3">
                <p className="text-uppercase small ms-3">Company profiles</p>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="">
                      <div className="d-flex justify-content-between">
                        <p style={{ margin: "0", padding: "0" }}>taj-company</p>
                        <p style={{ margin: "0", padding: "0" }}>
                          <FaAngleRight />
                        </p>
                      </div>
                    </a>
                  </li>
                  <a href="" className="ms-3 text-info">
                    Add another company profile
                  </a>
                </ul>
              </div>
              <div className="my-3">
                <p className="text-uppercase small ms-3">Account Delete</p>
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
export default AccountInformation;
