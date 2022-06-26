import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const [image, setImage] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageId, setImageId] = useState();
  const [customerInfo, setCustomerInfo]: any = useState({});
  const router = useRouter();
  const user: any = useContext(AppContext);
  const loaderCss = css`
    margin-left: 45%;
    margin-right: 45%;
  `;
  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
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
    }, 2000);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getCustomerInfo = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/customer_profile/${user?.id}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data);
            setCustomerInfo(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getCustomerInfo();
    const getImageId = async () => {
      if (user?.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/CustomerProfilePicture/?user_id=${user?.id}`,
            config
          );
          if (res.status === 200) {
            const count = await res.data.length;
            const id = await res.data[count - 1].id;
            setImageId(id);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getImageId();
    const fetchData = async () => {
      if (imageId) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/profile_picture/${imageId}`,
            config
          );
          setImage(res.data.profile_picture);
        } catch (error) {}
      }
    };
    fetchData();
  }, [updated, imageId, user?.id]);

  //  START UPDATE PHOTO

  const handlePhotoUpdate = async (e) => {
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

    try {
      const res = await axios.put(
        `https://c24apidev.accelx.net/auth_api/profile_picture/${imageId}/`,
        body,
        config
      );
      if (res.status === 200) {
        setImage(res.data.profile_picture);
        setUpdated(!updated);
        notify("Profile picture updated successfully");
      }
    } catch (error) {
      notify1(error.message);
    }
  };

  //  END UPDATE PHOTO

  // START Form Validation
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid first name"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[a-zA-Z ]{2,30}$/, "Enter valid last name"),
    gender: Yup.string().required("gender is required"),
    country: Yup.string().required("country is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("city is required"),
    address: Yup.string().required("address is required"),
    phone: Yup.string().required("phone is required"),
    zipCode: Yup.string().required("zipCode is required"),
  });

  const initialValues = {
    firstName: customerInfo?.user?.first_name,
    middleName: customerInfo?.user?.middle_name,
    lastName: customerInfo?.user?.last_name,
    country: customerInfo?.address?.[0].country,
    state: customerInfo?.address?.[0].state,
    city: customerInfo?.address?.[0].city,
    zipCode: customerInfo?.address?.[0].zip_code,
    address: customerInfo?.address?.[0].street_address,
    gender: customerInfo?.user?.gender,
    phone: customerInfo?.user?.phone_number,
    apartment: customerInfo?.address?.[0].apt,
    payToMethod: customerInfo?.user?.payment_to_method,
    payFromMethod: customerInfo?.user?.payment_from_method,
  };

  const onSubmit = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const body = JSON.stringify({
      first_name: data.firstName,
      middle_name: data.middleName,
      last_name: data.lastName,
      phone_number: data.phone,
      gender: data.gender,
      online_status: "True",
      activity_status: "True",
      account_status: "Active",
      payment_to_method: data.payToMethod,
      payment_from_method: data.payFromMethod,
      avg_rating: null,
      lifetime_service_count: null,
      positive_review_id: null,
      nagetive_review_id: null,
      street_address: data.address,
      apt: data.apartment,
      zip_code: data.zipCode,
      city: data.city,
      state: data.state,
      country: data.country,
    });
    if (user?.id) {
      try {
        const res = await axios.put(
          `https://c24apidev.accelx.net/auth_api/customer_profile/${user?.id}`,
          body,
          config
        );
        if (res.status === 201) {
          notify("Successfully updated");
          setTimeout(() => {
            router.push("/users/userInfo");
          }, 2000);
        }
      } catch (error) {
        notify1(error.message);
      }
    }
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="row d-flex justify-content-center">
        <ToastContainer />
        <div className="col-md-9 col-lg-9 col-12 bg-light p-4">
          {loading ? (
            <BeatLoader loading css={loaderCss} size={15} />
          ) : (
            <div className="my-profile-box">
              <h3>Profile Details</h3>

              {/* START UPLOAD PROFILE  */}
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group profile-box">
                    {image ? (
                      <img
                        src={image}
                        width={400}
                        height={400}
                        className="ms-4"
                        alt="image"
                      />
                    ) : (
                      <img src="/images/user1.jpg" alt="image" />
                    )}
                    <div className="file-upload ms-4">
                      <Field
                        type="file"
                        id="file"
                        name="image"
                        className="inputfile"
                        onChange={handlePhotoUpdate}
                      />
                      <label htmlFor="file">
                        <i className="bx bx-upload"></i>
                        Change
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* END UPLOAD PROFILE */}

              <Form className="d-flex">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="row">
                          <h6>Address</h6>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Country</label>
                              <Field
                                type="text"
                                name="country"
                                className={`form-control`}
                              />
                              <ErrorMessage name="country">
                                {(errMsg) => (
                                  <div className="text-danger mb-2">
                                    {errMsg}
                                  </div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>State</label>
                              <Field
                                type="text"
                                name="state"
                                className={`form-control`}
                              />
                              <ErrorMessage name="state">
                                {(errMsg) => (
                                  <div className="text-danger mb-2">
                                    {errMsg}
                                  </div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>City</label>
                              <Field
                                type="text"
                                name="city"
                                className={`form-control`}
                              />
                              <ErrorMessage name="city">
                                {(errMsg) => (
                                  <div className="text-danger mb-2">
                                    {errMsg}
                                  </div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label> Zip Code </label>
                              <Field
                                type="text"
                                name="zipCode"
                                className={`form-control`}
                              />
                              <ErrorMessage name="zipCode">
                                {(errMsg) => (
                                  <div className="text-danger mb-2">
                                    {errMsg}
                                  </div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Street Address</label>
                              <Field
                                type="text"
                                name="address"
                                className={`form-control`}
                              />
                              <ErrorMessage name="address">
                                {(errMsg) => (
                                  <div className="text-danger mb-2">
                                    {errMsg}
                                  </div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="row">
                      <h6>About</h6>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <Field
                            type="text"
                            name="firstName"
                            className={`form-control `}
                          />
                          <ErrorMessage name="firstName">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Middle Name</label>
                          <Field
                            type="text"
                            name="middleName"
                            className="form-control"
                          />
                          <ErrorMessage name="middleName">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Last Name</label>
                          <Field
                            type="text"
                            name="lastName"
                            className={`form-control`}
                          />
                          <ErrorMessage name="lastName">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <Field
                            type="text"
                            name="gender"
                            className={`form-control`}
                          />

                          <ErrorMessage name="gender">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <Field
                            type="text"
                            name="phone"
                            className={`form-control`}
                          />
                          <ErrorMessage name="phone">
                            {(errMsg) => (
                              <div className="text-danger mb-2">{errMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Apartment</label>
                          <Field
                            type="text"
                            name="apartment"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <h6>Payment Method</h6>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Payment to method </label>
                          <Field
                            type="text"
                            name="payToMethod"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Payment from method </label>
                          <Field
                            type="text"
                            name="payFromMethod"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <button type="submit">Save Changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </Formik>
  );
};

export default Profile;
