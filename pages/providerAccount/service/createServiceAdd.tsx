import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import cls from "../provider.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useRef, useState } from "react";
const CreateServiceAdditional = () => {
  const router = useRouter();
  const data: any = router.query;
  console.log(data);
  const onSubmit = async (values) => {
    // Start Create Service api

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };

    const body = JSON.stringify({
      service_category: data.serviceCategory,
      service_sub_category: data.serviceSubCategory,
      service_keyword_list: [data.serviceKeyword],
      service_name: data.serviceName,
      service_description: data.serviceDescription,
      service_experiance_year: data.serviceExperience,
      rate_apt_video_cons: values.rateOfAppVideoCall,
      rate_inst_video_cons: values.rateOfIntVideoCall,
      rate_inhouse_cons: values.rateOfHouseService,
      rate_promotion: values.rateForPromotion,
      service_zip_code: data.zipcode,
      service_status: true,
      service_visibility: true,
    });
    console.log(body.split(","));

    try {
      const res = await axios.post(
        "https://c24apidev.accelx.net/api/provider_service_create/",
        body,
        config
      );
      if (res.status === 201) {
        console.log(res.data);
        router.push(
          {
            pathname: "/providerAccount/serviceImage",
            query: {
              serviceId: res.data.id,
            },
          },
          "/providerAccount/service/serviceImage"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    // End Create Service api
  };
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/png",
    "image/jpeg",
    "image/gif",
  ];

  const initialValues = {
    servicePhoto: "",
    rateOfAppVideoCall: "",
    rateOfIntVideoCall: "",
    rateOfHouseService: "",
    rateForPromotion: "",
  };
  const validationSchema = Yup.object({
    // servicePhoto: Yup.mixed()
    //   .nullable()
    //   .required("Required")
    //   .test(
    //     "size",
    //     "File size is too big",
    //     (value) => value && value.size <= 1024 * 1024 // 5MB
    //   )
    //   .test(
    //     "type",
    //     "Invalid file format selection",
    //     (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    //   ),

    rateOfAppVideoCall: Yup.string().required("Required"),
    rateOfIntVideoCall: Yup.string().required("Required"),
    rateOfHouseService: Yup.string().required("Required"),
    rateForPromotion: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formProps) => (
        <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
          <div className="row">
            <div className="container">
              <div className="col-md-12 mt-5 d-flex justify-content-center">
                <div
                  className="card p-4 bg-white me-5 shadow-sm"
                  style={{ width: "32rem" }}
                >
                  <p
                    className="card-text"
                    onClick={() => router.back()}
                    style={{ cursor: "pointer" }}
                  >
                    <IoMdArrowBack /> Back
                  </p>
                  <Form>
                    <div className={`card-body bg-light ${cls.font}`}>
                      <h5>Tell us More about your Service Rating</h5>
                      <p style={{ fontSize: "12px" }}>
                        Customer will see this when they search
                      </p>

                      <div className="mb-2">
                        <label htmlFor="rateOfAppVideoCall">
                          Rate for appointment video calling
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="rateOfAppVideoCall"
                          id="rateOfAppVideoCall"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="rateOfAppVideoCall">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="rateOfIntVideoCall">
                          Rate for instant video calling
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="rateOfIntVideoCall"
                          id="rateOfIntVideoCall"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="rateOfIntVideoCall">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="rateOfHouseService">
                          Rate for inhouse service
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="rateOfHouseService"
                          id="rateOfHouseService"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="rateOfHouseService">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="rateForPromotion">
                          Rate for promotion
                        </label>
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
                      <button
                        className="w-100 btn btn-info mt-3"
                        type="submit"
                        disabled={!(formProps.isValid && formProps.dirty)}
                      >
                        Submit
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
export default CreateServiceAdditional;
