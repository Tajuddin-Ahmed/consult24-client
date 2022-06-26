import {
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import Link from "next/link";
import cls from "../profile.module.css";
import { useContext, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import router from "next/router";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillDelete, AiOutlineWarning } from "react-icons/ai";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";
const UserProfile = () => {
  const user: any = useContext(AppContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [providers, setProviders] = useState([]);
  const [bookedProviders, setBookedProviders] = useState([]);
  let i = 1;
  const notify = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const notify1 = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getAllPreferredProvider = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/customer_view_service_provider_list/?customerId=${user?.id}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setProviders(res.data);
          }
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    getAllPreferredProvider();
    const getBookedProvider = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/CustomerAppointmentGet/?customer_id=${user?.id}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setBookedProviders(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getBookedProvider();
  }, [user?.id]);
  const deleteProvider = async (id) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    if (id) {
      try {
        const res = await axios.delete(
          `https://c24apidev.accelx.net/auth_api/PreProviderListDetailsAPIView/${id}`,
          config
        );
        if (res.status === 204) {
          notify1("Provider Removed Successfully");
          setModalIsOpen(false);
        }
      } catch (error) {
        notify(error.message);
      }
    }
  };
  const handleProvideDetails = async (id) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    if (id) {
      try {
        const res = await axios.get(
          `https://c24apidev.accelx.net/auth_api/search_result_for_provider_info/${id}`,
          config
        );
        if (res.status === 200) {
          console.log(res.data);
          const info = res.data;
          if (info) {
            await Swal.fire({
              title: "Service provider information",
              // text: "Do you want to continue",
              html: `<strong>Name:${
                info?.user?.first_name +
                " " +
                info?.user?.middle_name +
                " " +
                info?.user?.last_name
              }</strong> <br/> <strong>Address</strong>: ${
                info?.address?.[0].street_address
              } <br /> <strong>Phone</strong>: ${info?.user?.phone_number}`,
              confirmButtonText: "close",
            });
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleServiceDetails = async (id, providerId) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    if (id && providerId) {
      try {
        const res = await axios.get(
          `https://c24apidev.accelx.net/api/Search_Service_Details/${id}?user_id=${providerId}`,
          config
        );
        if (res.status === 200) {
          console.log(res.data);
          const serviceInfo = res.data;
          await Swal.fire({
            title: "Service Details",
            html: `<strong>Service Name</strong>: ${serviceInfo?.service_name} <br/> 
            <strong>Rate</strong>: ${serviceInfo?.rate_apt_video_cons}$`,
            confirmButtonText: "close",
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const cancelAppointment = async (id) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      cancel_time: new Date(),
    });
    if (id) {
      try {
        const res = await axios.patch(
          `https://c24apidev.accelx.net/api/cancel_appointment/${id}`,
          body,
          config
        );
        if (res.status === 200) {
          console.log(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div>
        <div className="row d-flex">
          <div className="col-md-3 col-lg-3 col-12 p-2 bg-white shadow-sm">
            <ul className="list-unstyled">
              <li
                className="list-group-item"
                style={{ backgroundColor: "#FFFBC8" }}
              >
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
          <div className="col-md-9 col-lg-9 col-12 bg-light p-2">
            <ToastContainer />
            <div className="container">
              <div className="mb-3">
                <h4 className={`${cls.font}`}>Appointments</h4>
              </div>
              <div className={`bg-white p-2 shadow-sm rounded ${cls.font}`}>
                <h6 className="pb-2">Current Appointment</h6>
                <Table striped hover>
                  <thead className="text-center">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Provider Name</th>
                      <th scope="col">Service Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Start Time</th>
                      <th scope="col">End Time</th>
                      <th scope="col">Appointment type</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {bookedProviders.map((bookedProvider) => (
                      <tr key={bookedProvider.id}>
                        <th scope="row">{i++}</th>
                        <td>
                          <button
                            className="btn btn-info btn-sm"
                            onClick={() =>
                              handleProvideDetails(
                                bookedProvider.appointment_provider
                              )
                            }
                          >
                            See Provider
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-info btn-sm"
                            onClick={() =>
                              handleServiceDetails(
                                bookedProvider.appointment_service,
                                bookedProvider.appointment_provider
                              )
                            }
                          >
                            See Service
                          </button>
                        </td>
                        <td>{bookedProvider.appointment_date}</td>
                        <td>{bookedProvider.start_time}</td>
                        <td>{bookedProvider.end_time}</td>
                        <td>{bookedProvider.appointment_type}</td>
                        <td>
                          {!bookedProvider.canceled_by ? (
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => setDeleteModal(bookedProvider.id)}
                            >
                              cancel
                            </button>
                          ) : bookedProvider.canceled_by === user?.id &&
                            user?.role === 2 ? (
                            "canceled by customer"
                          ) : (
                            "canceled by provider"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div
                className={`mt-2 bg-white shadow-sm p-2 rounded ${cls.font}`}
              >
                <h6 className="pb-2">Past Appointment</h6>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Start-Date</th>
                      <th scope="col">End-Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>done</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>done</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>done</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className={`mt-2 bg-white shadow-sm p-2 rounded ${cls.font}`}
              >
                <h6 className="pb-2">Preferred Providers List</h6>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Provider Name</th>
                      <th scope="col">Details</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {providers.map((provider) => (
                      <tr key={provider.id}>
                        <th scope="row">{i++}</th>
                        <td>{provider.provider_name}</td>
                        <td>
                          <Tippy
                            content={
                              <span className="text-info">See details</span>
                            }
                          >
                            <button
                              className="btn btn-primary btn-sm px-3"
                              onClick={() =>
                                router.push(
                                  `/users/provider/${provider.provider}`
                                )
                              }
                            >
                              <BiCommentDetail />
                            </button>
                          </Tippy>
                        </td>
                        <td>
                          <Tippy
                            content={
                              <span className="text-warning">
                                Remove from list
                              </span>
                            }
                          >
                            <button
                              className="btn btn-danger btn-sm px-3"
                              onClick={() => setModalIsOpen(provider.id)}
                            >
                              <AiFillDelete />
                            </button>
                          </Tippy>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* modal  */}
              <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <h5 className="mt-4">
                  Are you sure you want remove this provider from list?
                </h5>

                <div style={{ marginTop: "10%", marginLeft: "75%" }}>
                  <button
                    className="btn btn-primary btn-sm px-3"
                    onClick={() => setModalIsOpen(false)}
                  >
                    No
                  </button>
                  <button
                    className="btn btn-danger ms-2 btn-sm px-3"
                    onClick={() => deleteProvider(modalIsOpen)}
                  >
                    Yes
                  </button>
                </div>
              </Modal>
              <Modal
                classNames={{ modal: `${cls.modalStyle}` }}
                open={deleteModal}
                onClose={() => setDeleteModal(false)}
              >
                <h5 className="mt-4">
                  Are you sure you want cancel this appointment?
                </h5>
                <h6 className="text-warning fs-2">
                  <AiOutlineWarning />
                </h6>
                <div
                  style={{
                    backgroundColor: "#f5aee5",
                    width: "50%",
                    padding: "8px",
                  }}
                >
                  <ul>
                    <li>
                      Make sure you are canceling the appointment minimum one
                      hour before otherwise you will be fined
                    </li>
                  </ul>
                </div>

                <div className="mt-3">
                  <button
                    className="btn btn-primary btn-sm px-3"
                    onClick={() => setDeleteModal(false)}
                  >
                    No
                  </button>
                  <button
                    className="btn btn-danger ms-2 btn-sm px-3"
                    onClick={() => cancelAppointment(deleteModal)}
                  >
                    Yes
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
