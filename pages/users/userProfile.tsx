import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageId, setImageId] = useState(null);
  const router = useRouter();
  const userid = router.query.id;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await fetch(
          `https://c24apidev.accelx.net/auth_api/profile_picture/49`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token " + localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setImage(data.profile_picture);
            setLoading(false);
          });
      } catch (error) {}
    };
    fetchData();
  }, [updated]);
  const onFileChange = (e) => setImage(e.target.files[0]);
  // const handleProfileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   console.log(typeof file);

  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://c24apidev.accelx.net/auth_api/user_profile_pic_update/${id}`,
  //       {
  //         method: "PUT",
  //         body: JSON.stringify({
  //           profile_picture: file,
  //           uploaded_user: 2,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Token " + token,
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setImage(data.profile_picture);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // Form Validation
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
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const handlePhotoUpload = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();
    formData.append("profile_picture", image);
    formData.append("uploaded_user", userid);

    const body = formData;
    try {
      const res = await axios.post(
        "https://c24apidev.accelx.net/auth_api/profile_picture/",
        body,
        config
      );
      if (res.status === 201) {
        setImageId(res.data.id);
        setUpdated(!updated);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  async function onSubmit(data) {
    try {
      const response = await fetch(
        `https://c24apidev.accelx.net/auth_api/customer_profile/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            first_name: data.firstName,
            middle_name: data.middleName,
            last_name: data.lastName,
            phone_number: data.phone,
            gender: data.gender,
            online_status: data.onlineStatus,
            activity_status: data.activityStatus,
            account_status: data.accountStatus,
            payment_to_method: data.payToMethod,
            payment_from_method: data.payFromMethod,
            avg_rating: data.avgRating,
            lifetime_service_count: data.lsCount,
            positive_review_id: data.pReviewId,
            nagetive_review_id: data.nReviewId,
            street_address: data.address,
            apt: data.apartment,
            zip_code: data.zipCode,
            city: data.city,
            state: data.state,
            country: data.country,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      );

      const resData = await response.json();
      console.log("Successfully updated");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>My Profile</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">My Profile</li>
          </ol>
        </div>

        <div>
          <div className="my-profile-box">
            <h3>Profile Details</h3>
            <form onSubmit={handlePhotoUpload}>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group profile-box">
                    {image ? (
                      <img src={image} width={400} height={400} alt="image" />
                    ) : (
                      <img src="/images/user1.jpg" alt="image" />
                    )}

                    <div className="file-upload">
                      <input
                        type="file"
                        id="file"
                        name="image"
                        className="inputfile"
                        onChange={onFileChange}
                      />
                      <label htmlFor="file">
                        <i className="bx bx-upload"></i>
                        Upload Photo
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-25">
                  save
                </button>
              </div>
            </form>
            <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="row">
                        <h6>Address</h6>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input
                              type="text"
                              {...register("country")}
                              className={`form-control ${
                                errors.country ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.country?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <select
                              name="state"
                              {...register("state")}
                              className={`form-control ${
                                errors.state ? "is-invalid" : ""
                              }`}
                            >
                              <option value="">Select one</option>
                              <option value="AL">AL</option>
                              <option value="AK">AK</option>
                              <option value="AZ">AZ</option>
                              <option value="AR">AR</option>
                              <option value="CA">CA</option>
                              <option value="CO">CO</option>
                              <option value="CT">CT</option>
                              <option value="DE">DE</option>
                              <option value="FL">FL</option>
                              <option value="GA">GA</option>
                              <option value="HI">HI</option>
                              <option value="ID">ID</option>
                              <option value="IL">IL</option>
                              <option value="IN">IN</option>
                              <option value="IA">IA</option>
                              <option value="KS">KS</option>
                            </select>
                            <div className="invalid-feedback">
                              {errors.state?.message}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <input
                              type="text"
                              {...register("city")}
                              className={`form-control ${
                                errors.city ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.city?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label> Zip Code </label>
                            <input
                              type="text"
                              {...register("zipCode")}
                              className={`form-control ${
                                errors.zipCode ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.zipCode?.message}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Street Address</label>
                            <input
                              type="text"
                              {...register("address")}
                              className={`form-control ${
                                errors.address ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.address?.message}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* START HIDDEN FIELD  */}
                    {/* <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>User Name</label>
                        <input
                          type="text"
                          {...register("username")}
                          className="form-control"
                          value={user?.username}
                        />
                      </div>
                    </div> */}
                    {/* <div className="d-none col-xl-6 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          {...register("email")}
                          className="form-control"
                          value={user?.email}
                        />
                      </div>
                    </div> */}
                    <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Online status</label>
                        <input
                          type="text"
                          {...register("onlineStatus")}
                          className="form-control"
                          value="True"
                        />
                      </div>
                    </div>
                    <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Activity status</label>
                        <input
                          type="text"
                          {...register("activityStatus")}
                          className="form-control"
                          value="True"
                        />
                      </div>
                    </div>
                    <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Account status</label>
                        <input
                          type="text"
                          {...register("accountStatus")}
                          className="form-control"
                          value="Active"
                        />
                      </div>
                    </div>
                    <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Avg Rating</label>
                        <input
                          type="text"
                          {...register("avgRating")}
                          className="form-control"
                          value="null"
                        />
                      </div>
                    </div>
                    <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Lifetime service count</label>
                        <input
                          type="text"
                          {...register("lsCount")}
                          className="form-control"
                          value="null"
                        />
                      </div>
                    </div>
                    <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Positive review id</label>
                        <input
                          type="text"
                          {...register("pReviewId")}
                          className="form-control"
                          value="null"
                        />
                      </div>
                    </div>
                    <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>negative review id</label>
                        <input
                          type="text"
                          {...register("nReviewId")}
                          className="form-control"
                          value="null"
                        />
                      </div>
                    </div>
                    {/* <div className="d-none col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Preferred Provider list</label>
                        <input
                          type="text"
                          {...register("pProviderList")}
                          className="form-control"
                          value="null"
                        />
                      </div>
                    </div> */}
                    {/* START HIDDEN FIELD  */}
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="row">
                    <h6>About</h6>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          {...register("firstName")}
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label> Middle Name</label>
                        <input
                          type="text"
                          {...register("middleName")}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label> Last Name</label>
                        <input
                          type="text"
                          {...register("lastName")}
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.lastName?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <select
                          name="state"
                          {...register("gender")}
                          className={`form-control ${
                            errors.gender ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">Select one</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.gender?.message}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          {...register("phone")}
                          className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.phone?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Apartment</label>
                        <input
                          type="text"
                          {...register("apartment")}
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
                        <input
                          type="text"
                          {...register("payToMethod")}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label> Payment from method </label>
                        <input
                          type="text"
                          {...register("payFromMethod")}
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
            </form>
          </div>
        </div>

        {/* <div className="flex-grow-1"></div> */}
      </div>
    </>
  );
};

export default Profile;
