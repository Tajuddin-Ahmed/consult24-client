import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import router from "next/router";
import { FiDollarSign, FiPlusCircle } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { BiMessageAdd } from "react-icons/bi";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
const SavedReplies = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [replies, setReplies] = useState([]);
  const [replyName, setReplyName] = useState(" ");
  const [reply, setReply] = useState(" ");
  console.log(replyName, reply);
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
                    <p
                      style={{ margin: "0", padding: "0", fontWeight: "bold" }}
                    >
                      Saved replies
                    </p>
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
          <h5 className="text-center">Saved replies</h5>
          <div className="row d-flex justify-content-center my-5">
            <div className="col col-md-9 col-lg-9">
              <div className="mb-2">
                <p
                  className="text-info"
                  style={{ cursor: "pointer" }}
                  onClick={() => setModalIsOpen(true)}
                >
                  <span className="fs-5 me-2">
                    <FiPlusCircle />
                  </span>
                  Create saved reply
                </p>
              </div>
              <div
                style={{ width: "100%", height: "300px" }}
                className="d-flex justify-content-center align-items-center shadow-sm"
              >
                <div className="text-center">
                  <p className="fs-3 text-success">
                    <BiMessageAdd />
                  </p>
                  <h6>Create your first saved reply.</h6>
                  <p>
                    Add templates for the messages you send customers most
                    often.
                  </p>
                  <p
                    className="text-info"
                    style={{ cursor: "pointer" }}
                    onClick={() => setModalIsOpen(true)}
                  >
                    Get started
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} center>
          <h4 className="mb-4">Create a new saved reply</h4>
          <div className="mb-3">
            <label htmlFor="" className="mb-2">
              Name of saved reply
            </label>
            <p>
              <input
                type="text"
                className="w-100 px-2"
                placeholder="Add a name"
                value={replyName}
                onChange={(e) => setReplyName(e.target.value)}
                style={{
                  height: "37px",
                  border: "1px solid #03c6fc",
                  borderRadius: "5px",
                }}
              />
            </p>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between mb-2">
              <label htmlFor="">Your reply</label>
              <p className="small">0/500</p>
            </div>
            <p>
              <textarea
                className="p-2"
                placeholder="What's something you frequently tell customers? Idea:Answer a common question,explain your pricing, or ask a questionto engage them"
                rows={4}
                cols={56}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                style={{
                  border: "1px solid #03c6fc",
                  borderRadius: "5px",
                }}
              />
            </p>
          </div>
          <div className="float-end">
            <button
              className="btn btn-warning me-2"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button className="btn btn-info">Save</button>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default SavedReplies;
