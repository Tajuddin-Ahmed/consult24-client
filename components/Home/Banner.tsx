import Typist from "react-typist";
import { useRouter } from "next/router";
import cls from "./home.module.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../_App/Navbar/Navigation";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Banner = () => {
  const [service, setService]: any = useState([]);
  const [services, setServices]: any = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const user: any = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const getAllService = async () => {
      try {
        const res = await axios.get(
          "https://c24apidev.accelx.net/api/servicekeywordlistAPI_View/",
          config
        );
        if (res.status == 200) {
          setServices(res.data.service_keyword_list);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllService();
  }, [user?.id]);

  const handleOnKeyUp = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = services.filter((service) => {
        const regex = new RegExp(`${text}`, "gi");
        return service.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setService(text);
  };
  const onSuggestHandler = (text) => {
    formik.values.service = text;
    setService(text);
    setSuggestions([]);
  };

  const initialValues = {
    service: "",
    zipcode: "",
  };
  const onSubmit = async (values) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      ad_tag_list: [service],
    });
    if (user.id) {
      try {
        const res = await axios.post(
          "https://c24apidev.accelx.net/ad_api/Ad_Interest_Create/",
          body,
          config
        );
        if (res.status === 201) {
          console.log("Add Interest added successfully");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    router.push({
      pathname: "/search/searchResult",
      query: {
        service: service,
        zipcode: values.zipcode,
      },
    });
  };
  const validationSchema = Yup.object({
    service: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const redColor = {
    color: "red",
  };
  const greenColor = {
    color: "#0EBEBE",
  };

  return (
    <section className="banner-wrapper-area">
      <div className="container">
        <div className="banner-wrapper-content">
          <h1 className="banner-three-heading">
            <span className="typewrite"> Get Help With </span>
            <Typist>
              <span>Cleaning </span>
              <Typist.Backspace count={15} delay={300} />
              <span> Landscaping </span>
              <Typist.Backspace count={18} delay={300} />
              <span> Appliance Repair </span>
              <Typist.Backspace count={18} delay={300} />
              <span> Car Repair </span>
              <Typist.Backspace count={15} delay={300} />
              <span> Anything </span>
            </Typist>

            <span className="wrap"></span>
          </h1>
          <p>Get help from anywhere, anytime...</p>
          <div className="row">
            <div className="col-md-10">
              <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="row m-0 align-items-center" id="searchField">
                  <div className="col-lg-5 col-md-12 p-0">
                    <div className="form-group">
                      <label>
                        <i
                          id="serviceField"
                          style={
                            formik.touched.service && formik.errors.service
                              ? redColor
                              : greenColor
                          }
                          className="flaticon-search"
                        ></i>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="service"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onKeyUp={() => handleOnKeyUp(formik.values.service)}
                        onKeyPress={() => {
                          setTimeout(() => {
                            setSuggestions([]);
                          }, 10);
                        }}
                        value={formik.values.service}
                        placeholder="Search For a Service"
                        // required
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 p-0">
                    <div className="form-group">
                      <label>
                        <i
                          style={
                            formik.touched.zipcode && formik.errors.zipcode
                              ? redColor
                              : greenColor
                          }
                          className="flaticon-pin"
                        ></i>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="zipcode"
                        name="zipcode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // value={zipCode}
                        // required
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-12 p-0">
                    <div className="submit-btn">
                      <button type="submit">Search Now</button>
                    </div>
                  </div>
                </div>
              </form>

              <div
                className="bg-white"
                style={{
                  width: "258px",
                  position: "absolute",
                  overflowY: "scroll",
                  maxHeight: "300px",
                  display: "inline-block",
                  zIndex: 99999,
                }}
              >
                {suggestions &&
                  suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className={`${cls.suggestions}`}
                      onClick={() => onSuggestHandler(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-md-2 "></div>
          </div>
          <ul className="popular-search-list">
            <li>
              <a
                className="btn btn-outline-primary text-decoration-none"
                type="button"
              >
                Restaurants
              </a>
            </li>

            <li>
              <a
                className="btn btn-outline-primary text-decoration-none"
                href="#"
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="btn btn-outline-primary text-decoration-none"
                href="#"
              >
                Clothing
              </a>
            </li>
            <li>
              <a
                className="btn btn-outline-primary text-decoration-none"
                href="#"
              >
                Bank
              </a>
            </li>
            <li>
              <a
                className="btn btn-outline-primary text-decoration-none"
                href="#"
              >
                Fitness
              </a>
            </li>
            <li>
              <a
                className="btn btn-outline-primary text-decoration-none"
                href="#"
              >
                Bookstore
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
