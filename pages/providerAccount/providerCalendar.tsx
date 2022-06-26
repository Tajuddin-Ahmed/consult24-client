import axios from "axios";
import router from "next/router";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BeatLoader } from "react-spinners";
import cls from "./provider.module.css";
import { css } from "@emotion/react";
import {
  AiFillDelete,
  AiOutlineCaretDown,
  AiOutlineWarning,
} from "react-icons/ai";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiCancel } from "react-icons/gi";
const ProviderCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [modalIsOpen, setModalIsOpen]: any = useState(false);
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const user: any = useContext(AppContext);
  const offset = value.getTimezoneOffset();
  const localDate = new Date(value.getTime() - offset * 60 * 1000);
  const selectedDay = localDate.toISOString().split("T")[0];
  const loaderCss = css`
    margin-left: 45%;
    margin-right: 45%;
  `;
  let i = 1;
  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };
  const notify1 = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
  };
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
    const getAllService = async () => {
      if (user.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/Service_List_Provider_APIView/?user_id=${user?.id}`,
            config
          );
          if (res.status == 200) {
            console.log(res.data);
            setServices(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getAllService();
    const getAppointmentList = async () => {
      if (user?.id) {
        try {
          if (serviceId) {
            const res = await axios.get(
              `https://c24apidev.accelx.net/api/ProviderAppointmentGet/?provider_id=${user?.id}&service_id=${serviceId}&search=${selectedDay}`,
              config
            );
            if (res.status === 200) {
              setAppointments(res.data);
              console.log(res.data);
            }
          } else {
            const res = await axios.get(
              `https://c24apidev.accelx.net/api/ProviderAppointmentGetWithDate/?provider_id=${user?.id}&date=${selectedDay}`,
              config
            );
            if (res.status === 200) {
              setAppointments(res.data);
              console.log(res.data);
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getAppointmentList();
  }, [user?.id, selectedDay, serviceId, updated]);
  const handleAppointmentDelete = async (state) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      cancel_time: new Date(),
    });
    if (state[0] && state[1] === "booked") {
      try {
        const res = await axios.patch(
          `https://c24apidev.accelx.net/api/cancel_appointment/${state[0]}`,
          body,
          config
        );
        if (res.status === 200) {
          console.log(res.data);
          notify("Appointment canceled");
          setUpdated(true);
        }
      } catch (error) {
        notify1("Something went wrong");
      }
    } else {
      try {
        const res = await axios.delete(
          `https://c24apidev.accelx.net/api/ProviderAppointmentDelete/${state[0]}/`,
          config
        );
        if (res.status === 200) {
          notify("Appointment Deleted");
          setUpdated(true);
        }
      } catch (error) {
        notify1("Something went wrong");
      }
    }
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-4 col-lg-4 mt-5">
          <div className="">
            <h5>Select any date</h5>
            <Calendar onChange={onChange} value={value} /> <br />
          </div>
        </div>

        <div className="col-md-8 col-lg-8 mt-5" style={{ height: "450px" }}>
          <div className="d-flex justify-content-between">
            <h5>Your available slots by selected day</h5>
            <div className="mb-2">
              <select
                name="serviceCategory"
                id="serviceCategory"
                className={`${cls.businessInput}`}
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
              >
                <option className="text-disabled" value="">
                  Filter by Service name
                </option>

                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.service_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="overflow-auto" style={{ height: "430px" }}>
            {loading ? (
              <BeatLoader loading css={loaderCss} size={15} />
            ) : (
              <Table striped bordered hover>
                <thead className="text-center">
                  <tr style={{ color: "#cc6089" }}>
                    <th>
                      <AiOutlineCaretDown />
                    </th>
                    <th>Appointment type</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {appointments.length ? (
                    appointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>{i++}</td>

                        <td>{appointment.appointment_type}</td>
                        <td>{appointment.start_time}</td>
                        <td>{appointment.end_time}</td>
                        <td>{appointment.status}</td>
                        <td>
                          {appointment.status === "open" ? (
                            <Tippy
                              content={
                                <span className="text-warning">
                                  delete your appointment
                                </span>
                              }
                            >
                              <button
                                type="button"
                                className="btn btn-warning btn-sm"
                                onClick={() =>
                                  setModalIsOpen([
                                    appointment?.id,
                                    appointment.status,
                                  ])
                                }
                              >
                                <AiFillDelete />
                              </button>
                            </Tippy>
                          ) : !appointment.canceled_by ? (
                            <Tippy
                              content={
                                <span className="text-warning">
                                  Cancel your appointment
                                </span>
                              }
                            >
                              <button
                                type="button"
                                className="btn btn-warning btn-sm"
                                onClick={() =>
                                  setModalIsOpen([
                                    appointment?.id,
                                    appointment.status,
                                  ])
                                }
                              >
                                <GiCancel />
                              </button>
                            </Tippy>
                          ) : appointment.canceled_by === user?.id &&
                            user?.role === 3 ? (
                            "canceled by provider"
                          ) : (
                            "canceled by customer"
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7}>You have no any slots available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </div>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div>
          <h6 className="pt-4">
            Are you sure you want to cancel this appointment ?
          </h6>
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
                Make sure you are canceling the appointment minimum one hour
                before otherwise you will be fined
              </li>
            </ul>
          </div>
          <div className="mt-3 text-end">
            <button
              className="btn btn-primary"
              onClick={() => setModalIsOpen(false)}
            >
              No
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleAppointmentDelete(modalIsOpen)}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ProviderCalendar;
