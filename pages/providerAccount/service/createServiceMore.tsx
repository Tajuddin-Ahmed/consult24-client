import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import cls from "../provider.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../components/_App/Navbar/Navigation";
import FormikControl from "../../../components/Provider/control/formikControls";
const CreateServiceMore = () => {
  const [zipcode, setZipcode] = useState();
  const router = useRouter();
  let user: any = useContext(AppContext);
  const data = router.query;
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    const getZipcCode = async () => {
      if (user.id) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/UserIDWiseAddressZipCodeAPIView/?user_id=${user.id}`,
            config
          );
          if (res.status === 200) {
            setZipcode(res.data[0].zip_code);
            console.log(res.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    getZipcCode();
  }, [user.id]);
  const onSubmit = async (values) => {
    router.push(
      {
        pathname: "/providerAccount/createServiceAdd",
        query: {
          ...values,
          ...data,
        },
      },
      "/providerAccount/service/createServiceAdd"
    );
  };

  const initialValues: any = {
    serviceKeyword: "",
    serviceName: "",
    serviceDescription: "",
    serviceExperience: "",
    zipcode: zipcode ? zipcode : "",
  };

  const validationSchema = Yup.object({
    serviceKeyword: Yup.string().required("Required"),
    serviceName: Yup.string().required("Required"),
    serviceDescription: Yup.string().required("Required"),
    serviceExperience: Yup.string().required("Required"),
  });
  return (
    <Formik
      enableReinitialize={true}
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
                      <h5>Tell us More about your Service</h5>
                      <p style={{ fontSize: "12px" }}>
                        Customer will see this when they search
                      </p>
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
                        <label htmlFor="serviceDescription">
                          Service Description
                        </label>
                        <Field
                          type="text"
                          name="serviceDescription"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="serviceDescription">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>

                      <div className="mb-2">
                        <label htmlFor="serviceKeyword">
                          Service Keyword (must add comma)
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
                        <label htmlFor="serviceExperience">
                          Service Experience
                        </label>
                        <Field
                          type="text"
                          name="serviceExperience"
                          className={cls.businessInput}
                        />
                        <ErrorMessage name="serviceExperience">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>

                      <div className="mb-2">
                        <label htmlFor="zipcode">Zip Code</label>
                        <FormikControl />

                        <Field
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          disabled
                          className={cls.businessInput}
                        ></Field>
                      </div>
                      <button
                        className="w-100 btn btn-info mt-3"
                        type="submit"
                        disabled={!(formProps.isValid && formProps.dirty)}
                      >
                        Next
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
export default CreateServiceMore;
