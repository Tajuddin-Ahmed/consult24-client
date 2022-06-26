import { BsBookmark, BsCalendarDate } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { MdPayment, MdWidgets } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import Link from "next/link";
const ProviderSettings = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-9 col-lg-9 py-5">
        <h5>Settings</h5>
        <div className="d-flex flex-wrap justify-content-between">
          <Link href="/providerAccount/accountSettings/accountInformation">
            <a>
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text text-center">
                    <span className="fs-1">
                      <VscAccount />
                    </span>
                    <h5>Account</h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/providerAccount/accountSettings/notifications">
            <a>
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text text-center">
                    <span className="fs-1">
                      <IoMdNotificationsOutline />
                    </span>
                    <h5>Notifications</h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/providerAccount/editTimes">
            <a>
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text text-center">
                    <span className="fs-1">
                      <BsCalendarDate />
                    </span>
                    <h5>Calendar and availability</h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/providerAccount/accountSettings/savedReplies">
            <a>
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text text-center">
                    <span className="fs-1">
                      <BsBookmark />
                    </span>
                    <h5>Saved replies</h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/providerAccount/accountSettings/payments">
            <a>
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text text-center">
                    <span className="fs-1">
                      <MdPayment />
                    </span>
                    <h5>Payments</h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/providerAccount/accountSettings/widgets">
            <a>
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text text-center">
                    <span className="fs-1">
                      <MdWidgets />
                    </span>
                    <h5>Widgets</h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/providerAccount/accountSettings/invitePros">
            <a>
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text text-center">
                    <span className="fs-1">
                      <FiGift />
                    </span>
                    <h5>Invite pros</h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProviderSettings;
