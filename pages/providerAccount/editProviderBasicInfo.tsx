import Image from "next/image";
import { AiOutlinePlusCircle, AiOutlineStar } from "react-icons/ai";
import {
  BsFillEmojiSmileFill,
  BsFillTrophyFill,
  BsShieldFillCheck,
  BsTelephoneFill,
} from "react-icons/bs";
import {
  FaEdit,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FiUserCheck, FiUsers, FiVideo } from "react-icons/fi";
import { GoBrowser } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { IoMdImage } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import photo from "../../public/images/user4.jpg";
import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "../providerAccount/provider.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import router from "next/router";
const EditProviderBasicInfo = () => {
  const [data, setData]: any = useState({});
  const [imageId, setImageId] = useState();
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [image, setImage] = useState();
  const user: any = useContext(AppContext);
  useEffect(() => {
    setLoading(false);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };

    const getImageId = async () => {
      if (user.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/ServiceProviderProfilePicture/?user_id=${user.id}`,
            config
          );
          if (res.status === 200) {
            const count = res.data.length;
            setImageId(res.data[count - 1].id);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getImageId();
    console.log(imageId);
    const getProfilePicture = async () => {
      if (imageId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/profile_picture/${imageId}`,
            config
          );
          if (res.status == 200) {
            setImage(res.data.profile_picture);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getProfilePicture();

    const fetchData = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/provider_profile/${user?.id}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
            setLoading(true);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    fetchData();
  }, [user?.id, imageId]);

  // handle update photo

  const handlePhotoUpdate = async (e) => {
    setImage(e.target.files[0].name);
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    let formData = new FormData();
    formData.append("profile_picture", e.target.files[0]);
    formData.append("uploaded_user", user?.id);
    const body = formData;
    if (imageId) {
      try {
        const res = await axios.put(
          `https://c24apidev.accelx.net/auth_api/profile_picture/${imageId}/`,
          body,
          config
        );
        if (res.status === 200) {
          setImage(res.data.profile_picture);
          setUpdated(!updated);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // handle submit
  const onSubmit = async (values) => {
    console.log(values);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      first_name: data?.user?.first_name,
      middle_name: data?.user?.middle_name,
      last_name: data?.user?.last_name,
      phone_number: data?.user?.phone_number,
      gender: data?.user?.gender,
      online_status: true,
      activity_status: true,
      account_status: "active",
      payment_to_method: values.checked,
      payment_from_method: values.checked,
      businees_goal: data?.provider?.businees_goal,
      spent_money_in_business: data?.provider?.spent_money_in_business,
      number_of_employees: values.numOfEmployees,
      founding_year: values.yearFounded,
      experience_level: data?.provider?.experience_level,
      company_name: values.companyName,
      social_media_link: values.socialMedia,
      website_url: values.website,
      batch_level: data?.provider?.batch_level,
      avg_res_time: data?.provider?.avg_res_time,
      avg_rating: null,
      lifetime_service_count: null,
      positive_review_id: null,
      nagetive_review_id: null,
      street_address: values.address,
      apt: values.apartment,
      zip_code: values.zipcode,
      city: data?.address?.[0].city,
      state: data?.address?.[0].state,
      country: data?.address?.[0].country,
    });
    console.log(body);
    if (user?.id) {
      try {
        const res = await axios.put(
          `https://c24apidev.accelx.net/auth_api/provider_profile/${user?.id}`,
          body,
          config
        );
        console.log(res.data);
        if (res.status === 200) {
          router.push(
            {
              pathname: "/providerAccount/providerProfile",
            },
            "/providerAccount/providerProfile"
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const initialValues = {
    companyName: data?.provider?.company_name,
    phone: data?.user?.phone_number,
    website: data?.provider?.website_url,
    yearFounded: data?.provider?.founding_year,
    numOfEmployees: data?.provider?.number_of_employees,
    address: data?.address?.[0].street_address,
    apartment: data?.address?.[0].apt,
    zipcode: data?.address?.[0].zip_code,
    checked: [`${data?.user?.payment_to_method}`],
    socialMedia: data?.provider?.social_media_link,
  };
  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    website: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),
    yearFounded: Yup.string().required("Required"),
    numOfEmployees: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    apartment: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"),
    socialMedia: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),
  });
  const checkboxOptions = [
    { key: "Apple Pay", value: "Apple Pay" },
    { key: "Cash", value: "Cash" },
    {
      key: "Check",
      value: "Check",
    },
    { key: "Credit card", value: "Credit card" },
    { key: "Google Pay", value: "Google Pay" },
    { key: "Paypal", value: "Paypal" },
    { key: "Samsung Pay", value: "Samsung Pay" },
    { key: "Square cash Pay", value: "Square cash Pay" },
    { key: "Stripe", value: "Stripe" },
    { key: "Venmo", value: "Venmo" },
    { key: "Zelle", value: "Zelle" },
  ];
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {loading && (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) && (
          <div>
            <div className="row justify-content-center my-3">
              <div className="col-md-6 col-lg-6 border">
                <div className="row mb-2">
                  <div className="col-md-7 col-lg-7 d-flex p-3">
                    {image ? (
                      <img
                        className="rounded"
                        src={image}
                        width={150}
                        height={170}
                        alt="Image"
                      />
                    ) : (
                      <Image
                        className="rounded"
                        src={photo}
                        width={70}
                        height={70}
                        alt="Image"
                      />
                    )}
                    <div>
                      <input
                        type="file"
                        id="file"
                        name="image"
                        className="inputfile d-none"
                        onChange={handlePhotoUpdate}
                      />
                      <label
                        htmlFor="file"
                        style={{
                          fontSize: "20px",
                          position: "absolute",
                          left: "36%",
                          cursor: "pointer",
                        }}
                      >
                        <FaEdit />
                      </label>
                    </div>
                  </div>
                </div>
                <Form>
                  <div className="row mb-2">
                    <div className="col-md-12 col-lg-12">
                      <div className="mb-2">
                        <label htmlFor="companyName" className="mb-2">
                          <strong>Company Name</strong>
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="companyName"
                          id="companyName"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="companyName">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-6 col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="phone" className="mb-2">
                          <strong>Phone Number</strong>
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="phone"
                          id="phone"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="phone">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="website" className="mb-2">
                          <strong>Website</strong>
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="website"
                          id="website"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="website">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-md-6 col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="yearFounded" className="mb-2">
                          <strong>Year founded</strong>
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="yearFounded"
                          id="yearFounded"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="yearFounded">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="numOfEmployees" className="mb-2">
                          <strong>Number of Employees</strong>
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="numOfEmployees"
                          id="numOfEmployees"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="numOfEmployees">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-12 col-lg-12">
                      <div className="mb-2">
                        <label htmlFor="address" className="mb-2">
                          <strong>Address</strong>
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="address"
                          id="address"
                          className={cls.businessInput}
                          placeholder="Address line 1"
                        />
                        <ErrorMessage name="address">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-6 col-lg-6">
                      <div className="mb-2">
                        <Field
                          type="text"
                          name="apartment"
                          id="apartment"
                          className={cls.businessInput}
                          placeholder="Suite/Apt"
                        />
                        <ErrorMessage name="apartment">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="mb-2">
                        <Field
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          className={cls.businessInput}
                          placeholder="zipcode"
                        />
                        <ErrorMessage name="zipcode">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-12 col-lg-12">
                      <div className="mb-2">
                        <label htmlFor="checked" className="mb-2">
                          <strong>Payment methods accepted</strong>
                        </label>
                        <div role="group" aria-labelledby="checkbox-group">
                          {checkboxOptions.map((checkbox) => (
                            <Fragment key={checkbox.key}>
                              <label>
                                <Field
                                  type="checkbox"
                                  name="checked"
                                  value={checkbox.value}
                                  className="form-check-input me-2"
                                />
                                {checkbox.key}
                              </label>
                              <br />
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-12 col-lg-12">
                      <div className="mb-2">
                        <label htmlFor="socialMedia" className="mb-2">
                          <strong>Social media links</strong>
                        </label>
                        <Field
                          type="text"
                          name="socialMedia"
                          id="socialMedia"
                          className={cls.businessInput}
                          placeholder="Enter Social Media URL"
                        />
                        <ErrorMessage name="socialMedia">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="text-end mb-2">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() =>
                        router.push("/providerAccount/providerProfile")
                      }
                    >
                      Cancel
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Save
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
    </Formik>
  );
};
export default EditProviderBasicInfo;
