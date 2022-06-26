import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
import photo from "../../public/images/listings/listings7.jpg";
import photo2 from "../../public/images/user9.jpg";
import photo3 from "../../public/images/user6.jpg";
import photo4 from "../../public/images/user7.jpg";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PreviewImage from "../../../components/Provider/control/PreviewImage";
import axios from "axios";

const ServiceImage = () => {
  const user: any = useContext(AppContext);
  const router = useRouter();
  const data: any = router.query;
  console.log(data);
  const onSubmit = async (values) => {
    console.log(values);
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    let formData = new FormData();
    formData.append("service_image", values.image);
    formData.append("service_certificate", values.serviceCertificate);
    formData.append("service_user", user?.id);
    formData.append("service", data.serviceId);
    const body = formData;
    try {
      const res = await axios.post(
        "https://c24apidev.accelx.net/api/Service%20FileUpload/",
        body,
        config
      );
      if (res.status === 201) {
        console.log(res.data);
        router.push(
          {
            pathname: "/providerAccount/addService",
            query: {
              ...data,
            },
          },
          "/providerAccount/addService"
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/png",
    "image/jpeg",
    "image/gif",
  ];
  const SUPPORTED_FORMATS2 = ["application/pdf"];
  const initialValues = {
    image: "",
    serviceCertificate: "",
  };
  const validationSchema = Yup.object().shape({
    image: Yup.mixed()
      .nullable()
      .required("Required")
      .test(
        "size",
        "File size is too big",
        (value) => value && value.size <= 1024 * 1024 // 5MB
      )
      .test(
        "type",
        "Invalid file format selection",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
    serviceCertificate: Yup.mixed().test(
      "type",
      "Invalid file format selection",
      (value) => !value || (value && SUPPORTED_FORMATS2.includes(value?.type))
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formProps: any) => (
        <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
          <div className="row">
            <div className="container">
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                <div
                  className="card p-4 bg-white me-5 shadow-sm"
                  style={{ width: "44rem" }}
                >
                  <div className="d-flex justify-content-between">
                    <p
                      className="card-text"
                      onClick={() => router.back()}
                      style={{ cursor: "pointer" }}
                    >
                      <IoMdArrowBack /> Back
                    </p>
                    <button
                      className="card-text btn btn-info me-2 mb-2"
                      onClick={() =>
                        router.push("/providerAccount/createServiceAdd")
                      }
                    >
                      Skip
                    </button>
                  </div>

                  <Form>
                    <div className={`card-body bg-light ${cls.font}`}>
                      <div className="text-center">
                        <h6>Add your Service photo</h6>
                        <p>
                          Make a good first impression. Upload a clear photo of
                          Service
                        </p>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-5 col-lg-5">
                          <div>
                            {formProps.values.image ? (
                              <PreviewImage
                                width={210}
                                height={210}
                                file={formProps.values.image}
                              />
                            ) : (
                              <Image
                                src={photo}
                                className="rounded"
                                width={210}
                                height={210}
                                alt=""
                              />
                            )}
                            <div className="file-upload">
                              <input
                                type="file"
                                name="image"
                                id="file"
                                className="inputfile d-none"
                                onChange={(event) => {
                                  formProps.setTouched({
                                    ...formProps.touched,
                                    image: true,
                                  });
                                  formProps.setFieldValue(
                                    "image",
                                    event.target.files[0]
                                  );
                                }}
                              />
                              <label
                                htmlFor="file"
                                className="p-2 px-5 bg-info rounded"
                              >
                                <i className="bx bx-upload"></i> Upload Photo
                              </label>
                              {formProps.touched.image &&
                              formProps.errors.image ? (
                                <small className="text-danger">
                                  {formProps.errors.image}
                                </small>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <div style={{ borderLeft: "3px solid blue" }}>
                            <h6 className="ps-3">Photo Tips</h6>
                            <ul>
                              <li>
                                A photo of your face works better than a logo
                              </li>
                              <li>Make sure to smile</li>
                              <li>Try to use a solid background</li>
                            </ul>
                            <div className="d-flex justify-content-between ps-3">
                              <Image
                                src={photo2}
                                width={100}
                                height={145}
                                alt="Image"
                              />
                              <Image
                                src={photo3}
                                width={100}
                                height={145}
                                alt="Image"
                              />
                              <Image
                                src={photo4}
                                width={100}
                                height={145}
                                alt="Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <h6>Add your service certificate pdf (optional)</h6>
                      </div>
                      <div>
                        <input
                          type="file"
                          name="serviceCertificate"
                          id="file"
                          className="inputfile"
                          onChange={(event) => {
                            formProps.setTouched({
                              ...formProps.touched,
                              serviceCertificate: true,
                            });
                            formProps.setFieldValue(
                              "serviceCertificate",
                              event.target.files[0]
                            );
                          }}
                        />
                        <div>
                          {formProps.touched.serviceCertificate &&
                          formProps.errors.serviceCertificate ? (
                            <small className="text-danger">
                              {formProps.errors.serviceCertificate}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div
                        className="row mt-3 d-flex text-center align-items-center "
                        style={{ height: "400px" }}
                      >
                        <p>Preview</p>
                      </div>

                      <button
                        className="btn btn-info mt-4 float-end"
                        type="submit"
                        // onClick={() =>
                        //   router.push("/providerAccount/pastCustomerReview")
                        // }
                      >
                        submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default ServiceImage;
