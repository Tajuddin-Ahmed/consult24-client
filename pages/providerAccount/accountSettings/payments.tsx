import cls from "../../users/profile.module.css";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import router from "next/router";
import { FiDollarSign } from "react-icons/fi";
const Payments = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-md-3 col-lg-3">
          <ul className="list-group ps-3">
            <li className="list-group-item">
              <Link href="/providerAccount/accountSettings/accountInformation">
                <a>
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Account</p>
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
                    <p
                      style={{ margin: "0", padding: "0", fontWeight: "bold" }}
                    >
                      Payments
                    </p>
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
          <h5 className="text-center">Payments</h5>
          <div className="row d-flex justify-content-center my-5">
            <div className="col col-md-9 col-lg-9">
              <div className="mb-5">
                <div className="d-flex justify-content-between">
                  <h6>Payment method</h6>
                  <Link href="/providerAccount/accountSettings/addCreditCard">
                    <a className="text-primary">Add a credit card</a>
                  </Link>
                </div>
                <p className="text-danger">No card on file</p>
              </div>
              <div className="mb-5">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Consult24 banlance</h6>
                  <a href="" className="text-primary">
                    Add funds
                  </a>
                </div>
                <div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <Link href="#">
                        <a>
                          <div className="d-flex justify-content-between">
                            <p style={{ margin: "0", padding: "0" }}>$300</p>
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
              <div className="d-flex justify-content-center">
                <div>
                  <p className="text-center fs-1" style={{ color: "purple" }}>
                    <FiDollarSign />
                  </p>
                  <h6 className="text-center">No payments yet</h6>
                  <p>
                    When you get your first lead,you'll see how much you paid
                    here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payments;
