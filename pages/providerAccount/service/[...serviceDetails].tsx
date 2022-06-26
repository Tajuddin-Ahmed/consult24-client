import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ToastContainer, toast } from "react-toastify";
import cls from "./provider.module.css";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PreviewImage from "../../../components/Provider/control/PreviewImage";
const ServiceDetails = () => {
  const [service, setService]: any = useState({});
  const [category, setCategory]: any = useState({});
  const [subCategory, setSubCategory]: any = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage]: any = useState({});
  const [updatedImage, setUpdatedImage] = useState(null);
  const router = useRouter();
  const userid = router.query.serviceDetails?.[1];
  const serviceid = router.query.serviceDetails?.[2];
  const categoryid = router.query.serviceDetails?.[3];
  const subCategoryid = router.query.serviceDetails?.[4];
  console.log(userid, serviceid);
  const notify = () => {
    toast.success("Service Deleted Successfully !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const notify2 = () => {
    toast.error("Something went wrong !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const notify3 = () => {
    toast.success("Data updated Successfully", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const handleOnChange = (e) => {
    setUpdatedImage(e.target.files[0]);
  };
  const updateServicePhoto = async (id) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    let formData = new FormData();
    formData.append("service_image", updatedImage);
    const body = formData;
    console.log(
      updatedImage,
      image?.service_certificate,
      image?.service_user,
      image?.service
    );
    if (id) {
      try {
        const res = await axios.patch(
          `https://c24apidev.accelx.net/api/Service%20FileUpload/${id}/`,
          body,
          config
        );
        if (res.status === 200) {
          notify3();
        }
      } catch (error) {
        notify2();
      }
    }
  };

  const serviceDelete = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    if (serviceid) {
      try {
        const res = await axios.delete(
          `https://c24apidev.accelx.net/api/Provider%20Service/${serviceid}`,
          config
        );
        if (res.status === 204) {
          notify();
          router.push("/providerAccount/addService/");
        }
      } catch (error) {
        notify2();
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    // GETTING SERVICE IMAGE
    const getServiceImageAndFile = async () => {
      if (serviceid && userid) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/servicefileGet_APIView/?user_id=${userid}&service_id=${serviceid}`,
            config
          );
          if (res.status === 200) {
            console.log(res.data[0]);
            setImage(res.data[0]);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getServiceImageAndFile();
    // GETTING SERVICE DETAILS
    const getServiceDetails = async () => {
      if (serviceid && userid) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/service/Details/${serviceid}?user_id=${userid}`,
            config
          );
          if (res.status === 200) {
            setService(res.data);
            setLoading(true);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    getServiceDetails();

    // GETTING CATEGORY NAME

    const gettingCategory = async () => {
      if (categoryid) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/service_category/update/${categoryid}`,
            config
          );
          if (res.status === 200) {
            setCategory(res.data);
            setLoading(true);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    gettingCategory();

    // GETTING SUBCATEGORY NAME
    const gettingSubCategory = async () => {
      if (subCategoryid) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/api/service_sub_category/update/${subCategoryid}`,
            config
          );
          if (res.status === 200) {
            setSubCategory(res.data);
            setLoading(true);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    gettingSubCategory();
  }, [serviceid, userid, updatedImage]);
  const initialValues = {
    serviceName: service?.service_name,
    categoryName: category?.category_name,
    subCategoryName: subCategory?.service_sub_category_name,
    serviceKeyword: service?.service_keyword_list,
    description: service?.service_description,
    experience: service?.service_experiance_year,
    rateForAptVideoCall: service?.rate_apt_video_cons,
    rateForInstVideoCall: service?.rate_inst_video_cons,
    rateForInhouseService: service?.rate_inhouse_cons,
    rateForPromotion: service?.rate_promotion,
  };
  const validationSchema = Yup.object({
    serviceName: Yup.string().required("Required"),
    categoryName: Yup.string().required("Required"),
    subCategoryName: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    experience: Yup.string().required("Required"),
    rateForAptVideoCall: Yup.string().required("Required"),
    rateForInstVideoCall: Yup.string().required("Required"),
    rateForInhouseService: Yup.string().required("Required"),
    rateForPromotion: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    // Start Create Service api

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };

    const body = JSON.stringify({
      service_category: categoryid,
      service_sub_category: subCategoryid,
      service_keyword_list: values.serviceKeyword,
      service_name: values.serviceName,
      service_description: values.description,
      service_experiance_year: values.experience,
      rate_apt_video_cons: values.rateForAptVideoCall,
      rate_inst_video_cons: values.rateForInstVideoCall,
      rate_inhouse_cons: values.rateForInhouseService,
      rate_promotion: values.rateForPromotion,
      service_zip_code: service?.service_zip_code,
    });
    console.log(body.split(","));

    try {
      const res = await axios.put(
        `https://c24apidev.accelx.net/api/provider_service_update/${serviceid}`,
        body,
        config
      );
      if (res.status === 200) {
        notify3();
        setLoading(true);
        setEditModalIsOpen(false);
        window.location.reload();
      }
    } catch (error) {
      console.error(error.message);
    }

    // End Create Service api
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h3 style={{ marginLeft: "157px" }} className="my-3">
            Service Details
          </h3>
          <div className="col-md-10 col-lg-10 border">
            <div className="row">
              <div className="col-md-4 col-lg-4 mt-5">
                <img
                  src={
                    image?.service_image
                      ? image.service_image
                      : "/images/listings/listings7.jpg"
                  }
                  className="rounded"
                  alt="image"
                />
                <div>
                  <a
                    href={image?.service_certificate}
                    target={"_blank"}
                    download
                    className="btn btn-info mt-3"
                  >
                    Download your certificate
                  </a>
                </div>
              </div>
              {loading && (
                <div className="col-md-6 col-lg-6 p-3">
                  <h6>Service:{service?.service_name}</h6>
                  <p>Service category:{category?.category_name}</p>
                  <p>
                    Service sub category:
                    {subCategory?.service_sub_category_name}
                  </p>
                  <p>Description:{service.service_description}</p>
                  <p>Service creation date : {service?.service_created_date}</p>
                  <p>Experience Year:{service?.service_experiance_year}</p>
                  <p>
                    Rate for appointment video calling:
                    {service?.rate_apt_video_cons}
                  </p>
                  <p>
                    Rate for instant video calling:
                    {service?.rate_inst_video_cons}
                  </p>
                  <p>Rate for inhouse services:{service?.rate_inhouse_cons}</p>
                  <p>Rate for promotion:{service?.rate_promotion}</p>
                </div>
              )}
              <div className="col-md-2 col-lg-2 pt-4">
                <button
                  className="btn btn-info float-end"
                  onClick={() => setEditModalIsOpen(true)}
                >
                  Edit
                </button>
              </div>
            </div>

            <p
              className="text-warning text-center mb-2"
              role="button"
              onClick={() => setModalIsOpen(true)}
            >
              Remove this service
            </p>
          </div>
        </div>
        <Modal open={editModalIsOpen} onClose={() => setEditModalIsOpen(false)}>
          <h6 className="text-center">Edit details</h6>
          <div className={`bg-light p-3`}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-lg-4 border-end">
                  <div>
                    <h6>Update photo</h6>
                    {updatedImage ? (
                      <PreviewImage
                        width={240}
                        height={210}
                        file={updatedImage}
                      />
                    ) : (
                      <img
                        src={
                          image?.service_image
                            ? image?.service_image
                            : "/images/user1.jpg"
                        }
                        className="rounded"
                        alt="image"
                      />
                    )}

                    <div className="mt-2">
                      <div>
                        <div className="file-upload">
                          <input
                            type="file"
                            name="image"
                            id="file"
                            className="inputfile d-none"
                            onChange={handleOnChange}
                            required
                          />
                          <label htmlFor="file" className="p-2 bg-info rounded">
                            <i className="bx bx-upload"></i> Upload Photo
                          </label>
                          <button
                            className="btn btn-info ms-2"
                            onClick={() => updateServicePhoto(image?.id)}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                      {/* <button
                        className="btn btn-info me-2"
                        
                      >
                        Update
                      </button> */}
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6>Update Certificate</h6>
                    <div>
                      <a
                        href={image?.service_certificate}
                        target={"_blank"}
                        download
                        className="btn btn-info mt-3 w-100"
                      >
                        Your certificate
                      </a>
                    </div>
                    <div>
                      <button className="btn btn-info mt-3 ms-2">Upload</button>
                      <button className="btn btn-info mt-3 ms-2">Update</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-8 ">
                  <Form>
                    <div className={`bg-light ${cls.font}`}>
                      <div className="mb-2">
                        <label htmlFor="serviceName">Service Name</label>
                        <br />
                        <Field
                          type="text"
                          name="serviceName"
                          id="serviceName"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="serviceName">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="categoryName">Category Name</label>
                        <br />
                        <Field
                          type="text"
                          name="categoryName"
                          id="categoryName"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="categoryName">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="subCategoryName">
                          SubCategory Name
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="subCategoryName"
                          id="subCategoryName"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="subCategoryName">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="serviceKeyword">
                          Service Key Word List
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="serviceKeyword"
                          id="serviceKeyword"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="serviceKeyword">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="description">Description</label>
                        <Field
                          type="text"
                          name="description"
                          id="description"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="description">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="experience">Experience Year</label>
                        <br />
                        <Field
                          type="text"
                          name="experience"
                          id="experience"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="experience">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="rateForAptVideoCall">
                          Rate for appointment video calling
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="rateForAptVideoCall"
                          id="rateForAptVideoCall"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="rateForAptVideoCall">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="rateForInstVideoCall">
                          Rate for instant video calling
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="rateForInstVideoCall"
                          id="rateForInstVideoCall"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="rateForInstVideoCall">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="rateForInhouseService">
                          Rate for inhouse video calling
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="rateForInhouseService"
                          id="rateForInhouseService"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="rateForInhouseService">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="rateForPromotion">
                          Rate for promotion
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="rateForPromotion"
                          id="rateForPromotion"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="rateForPromotion">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <button className="w-100 btn btn-info mt-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <div>
            <h6 className="pt-3">
              Are you sure you want to remove this service ?
            </h6>
            <div style={{ marginTop: "80px", marginLeft: "280px" }}>
              <button
                className="btn btn-primary"
                onClick={() => setModalIsOpen(false)}
              >
                No
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => serviceDelete()}
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
        <ToastContainer />
      </div>
    </Formik>
  );
};

export default ServiceDetails;
