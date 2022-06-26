import cls from "../../users/profile.module.css";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import router from "next/router";
const Notifications = () => {
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
                    <p
                      style={{ margin: "0", padding: "0", fontWeight: "bold" }}
                    >
                      Notifications
                    </p>
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
          <h5 className="text-center">Notifications</h5>
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-9">
              <h5>Company Related Settings</h5>
              <p>Emails about jobs</p>
              <ul className="list-group">
                <li className="list-group-item p-3">
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>
                      New direct leads and messages
                    </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item p-3">
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>
                      Direct lead reminders
                    </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item p-3">
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>
                      All new Opportunities (when a customer contacts another
                      pro first)
                    </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item p-3">
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>
                      Opportunities you have the best chance to win
                    </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item p-3">
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Refunds</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item p-3">
                  <div className="d-flex justify-content-between">
                    <p style={{ margin: "0", padding: "0" }}>Budget alert</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="my-3">
                <p className="">Text message about company</p>
                <ul className="list-group">
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>
                        New direct leads and messages
                      </p>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>
                        All new Opportunities (when a customer contacts another
                        pro first)
                      </p>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>
                        Opportunities you have the best chance to win
                      </p>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <p style={{ margin: "0", padding: "0" }}>
                        Receive text messages at night (9pm - 8am)
                      </p>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="my-3">
                <h5>Customer Related Settings</h5>
                <p>Get push notifications about...</p>
                <ul className="list-group">
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p style={{ margin: "0", padding: "0" }}>Messages</p>
                        <p
                          style={{ margin: "0", padding: "0" }}
                          className="small"
                        >
                          Pros send you messages.
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p style={{ margin: "0", padding: "0" }}>
                          Project reminders and updates
                        </p>
                        <p
                          style={{ margin: "0", padding: "0" }}
                          className="small"
                        >
                          You’ve got upcoming projects or there are other
                          updates about your projects.
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p style={{ margin: "0", padding: "0" }}>
                          Promotions and tips
                        </p>
                        <p
                          style={{ margin: "0", padding: "0" }}
                          className="small"
                        >
                          There are coupons, promotions, surveys, and project
                          ideas you might like.
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item p-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p style={{ margin: "0", padding: "0" }}>
                          Account support
                        </p>
                        <p
                          style={{ margin: "0", padding: "0" }}
                          className="small"
                        >
                          We have updates about your account, projects, and
                          security/privacy matters.
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input fs-4"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
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
export default Notifications;
