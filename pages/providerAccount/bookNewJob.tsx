import { useRouter } from "next/router";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import cls from "../providerAccount/provider.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const BookNewJob = () => {
  const router = useRouter();
  const onSubmit = (values) => {
    router.push(
      {
        pathname: "/providerAccount/selectJob",
        query: {
          ...values,
        },
      },
      "/providerAccount/selectJob"
    );
  };
  const initialValues = {
    serviceName: "",
    location: "Albany,California",
  };
  const validationSchema = Yup.object({
    serviceName: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
        <div className="row">
          <div className="container">
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <div
                className="card p-4 bg-white me-5 shadow-sm"
                style={{ width: "24rem" }}
              >
                <Form>
                  <div className="card-body">
                    <h3 className="card-title">Book new jobs in Albany.</h3>
                    <p className="card-text">What is your line of work?</p>
                    <ul className="list-group list-group-flush">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                          <FcSearch />
                        </span>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="e.g. House Cleaning"
                          name="serviceName"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <ErrorMessage name="serviceName">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>

                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">
                          <GrLocation />
                        </span>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Location"
                          name="location"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      <ErrorMessage name="location">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                    </ul>
                    <h3 className="card-text">30,000+</h3>
                    <p className="card-text">leads on Consult 24 a day</p>
                    <button type="submit" className="w-100 btn btn-info">
                      Get leads
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};
export default BookNewJob;
