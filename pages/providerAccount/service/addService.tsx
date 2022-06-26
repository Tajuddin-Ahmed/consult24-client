import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import Link from "next/link";
const AddService = () => {
  const [services, setServices] = useState([]);
  const [image, setImage] = useState([]);
  const user: any = useContext(AppContext);
  const router = useRouter();
  const handleServiceDetails = () => {};

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getServiceImageAndFile = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/servicefileGetUserID_APIView/?user_id=${user?.id}`,
            config
          );
          if (res.status === 200) {
            setImage(res.data);
          }
        } catch (error) {}
      }
    };
    // getServiceImageAndFile();

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
  }, [user?.id]);
  return (
    <>
      <div className={`bg-light pt-3 pb-5`}>
        <div className="row">
          <div className="container">
            <div className="my-3">
              <h4>Your services</h4>
              <div className="row">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="col-xl-4 col-lg-4 col-md-4 restaurant"
                  >
                    <div className="single-listings-box without-boxshadow ">
                      {/* {image.map((img) =>
                        img.service === service.id ? (
                          <div key={img.id} className="listings-image">
                            <img src={img.service_image} alt="image" />
                            <a href="#" className="link-btn"></a>
                          </div>
                        ) : (
                          <div className="listings-image">
                            <img
                              src={"/images/listings/listings7.jpg"}
                              alt="image"
                            />
                            <a href="#" className="link-btn"></a>
                          </div>
                        )
                      )} */}

                      <div className="listings-content">
                        {/* <div className="author">
                          <div className="d-flex align-items-center">
                            <img src="/images/user3.jpg" alt="image" />
                            <span>James</span>
                          </div>
                        </div> */}

                        <h3>
                          <a href="#">Service:{service.service_name}</a>
                        </h3>
                        <p>Description:{service.service_description}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <span className="count">(18)</span>
                          </div>
                          <div className="price">
                            Start From <span>$121</span>
                          </div>
                        </div>
                        <Link
                          href={`/providerAccount/serviceDetails/${user.id}/${service.id}/${service.service_category}/${service.service_sub_category}`}
                        >
                          <a className="btn btn-info mt-2">Details</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn btn-info px-5 py-3"
                onClick={() =>
                  router.push("/providerAccount/service/createService")
                }
              >
                ADD SERVICE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddService;
