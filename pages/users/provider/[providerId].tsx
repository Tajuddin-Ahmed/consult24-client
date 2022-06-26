import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FiVideo } from "react-icons/fi";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import cls from "../profile.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const PreProviderDetails = () => {
  const [providerDetails, setProviderDetails]: any = useState({});
  const [services, setServices] = useState([]);
  const style = {
    margin: "0",
    padding: "0",
  };
  const router = useRouter();
  const providerId = router.query.providerId;
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getProviderDetails = async () => {
      if (providerId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/search_result_for_provider_info/${providerId}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setProviderDetails(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getProviderDetails();
    const getAllService = async () => {
      if (providerId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/Service_List_Provider_APIView/?user_id=${providerId}`,
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
  }, [providerId]);
  return (
    <>
      <div className="row g-3 bg-light">
        <div className="container d-flex justify-content-center">
          <div
            className={`col-md-3 col-lg-3  p-3 bg-white shadow-sm ${cls.font}`}
          >
            <h6 className="text-info text-uppercase border-bottom">
              Personal details:
            </h6>
            <div className="">
              <img
                src="/images/user6.jpg"
                width="200"
                height="150"
                className="rounded"
                alt=""
              />
            </div>
            <div className="d-flex justify-content-between">
              <div style={style}>
                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>Name:</strong>
                  </p>
                  <p style={style}>
                    {providerDetails?.user?.first_name +
                      " " +
                      providerDetails?.user?.last_name}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>Country:</strong>
                  </p>
                  <p style={style}>{providerDetails?.address?.[0].country}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>State:</strong>
                  </p>
                  <p style={style}>{providerDetails?.address?.[0].state}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>City:</strong>
                  </p>
                  <p style={style}>{providerDetails?.address?.[0].city}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>Zipcode:</strong>
                  </p>
                  <p style={style}>{providerDetails?.address?.[0].zip_code}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>Street Address:</strong>
                  </p>
                  <p style={style}>
                    {providerDetails?.address?.[0].street_address}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>Apartment:</strong>
                  </p>
                  <p style={style}>{providerDetails?.address?.[0].apt}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>Phone:</strong>
                  </p>
                  <p style={style}>{providerDetails?.user?.phone_number}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={style}>
                    <strong>Experience:</strong>
                  </p>
                  <p style={style}>
                    {providerDetails?.provider?.experience_level}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-9 col-lg-9 bg-white p-3 border ${cls.font}`}>
            <h6 className="text-info text-uppercase border-bottom">
              Service details:
            </h6>
            <div className="row ">
              <div style={style}>
                <div
                  style={style}
                  className="d-flex flex-wrap justify-content-evenly"
                >
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="col-md-4 card mt-2"
                      style={{ width: "16rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "#03b6fc" }}>
                          {service.service_name}
                        </h5>
                        <p className="card-text">
                          {service.service_description}
                        </p>
                        <h6>Inhouse rate: {service.rate_inhouse_cons}</h6>
                        <h6>
                          Instant video call rate:
                          {service.rate_inst_video_cons}
                        </h6>
                        <h6>
                          Appointment video call rate:
                          {service.rate_inst_video_cons}
                        </h6>
                        <Tippy
                          content={
                            <span className="text-warning">
                              Instant video call
                            </span>
                          }
                        >
                          <a
                            href="#"
                            className="btn btn-primary btn-sm me-2 px-3"
                          >
                            <FiVideo />
                          </a>
                        </Tippy>
                        <Tippy
                          content={
                            <span className="text-info">
                              Appointment video call
                            </span>
                          }
                        >
                          <a href="#" className="btn btn-info btn-sm px-3">
                            <FiVideo />
                          </a>
                        </Tippy>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PreProviderDetails;
