import router, { useRouter } from "next/router";
import { useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const BusinessAccount = () => {
  const user: any = useContext(AppContext);
  const router = useRouter();
  const onSubmit = (values) => {
    router.push(
      {
        pathname: "/providerAccount/aboutYourself",
        query: {
          ...values,
          serviceName: router.query.serviceName,
          location: router.query.location,
          checkboxOption: router.query.checkboxOption,
        },
      },
      "/providerAccount/aboutYourself"
    );
  };
  const initialValues = {
    phone: "",
    termsOfService: false,
  };
  const validationSchema = Yup.object({
    phone: Yup.string().required("Required"),
    termsOfService: Yup.bool().oneOf(
      [true],
      "You must accept the pricing policy terms and conditions"
    ),
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
                style={{ width: "36rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <Form>
                  <div className="card-body">
                    <h3 className={`card-title ${cls.font}`}>
                      Set up your business profile
                    </h3>
                    <p className={`card-text small ${cls.font}`}>
                      Where would you like house cleaning customers to contact
                      you ?
                    </p>

                    <div className="row">
                      <div className="col-md-6 col-lg-6 mb-2">
                        <Field
                          type="text"
                          className="form-control"
                          value={user.email}
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phone"
                        />
                        <ErrorMessage name="phone">
                          {(errMsg) => (
                            <div className="text-danger mb-2">{errMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="form-check mt-2">
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        name="termsOfService"
                      />

                      <label
                        className={`form-check-label ${cls.font}`}
                        htmlFor="flexCheckDefault"
                      >
                        Default checkbox
                      </label>
                      <ErrorMessage name="termsOfService">
                        {(errMsg) => (
                          <div className="text-danger mb-2">{errMsg}</div>
                        )}
                      </ErrorMessage>
                      <p className={`small ${cls.font}`}>
                        By leaving the box checked and clicking "Sign up", you
                        authorize Consult24 to send you automated text messages.
                        You can opt out anytime.
                        <a className="text-info" href="#">
                          Terms apply
                        </a>
                        .
                      </p>
                    </div>
                    <p className={`small ${cls.font}`}>
                      By clicking "Continue", you agree to the
                      <a className="text-info" href="#">
                        Terms of Use
                      </a>
                      and
                      <a className="text-info" href="#">
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <button
                      className="w-100 btn btn-info"
                      type="submit"
                      // onClick={() =>
                      //   router.push("/providerAccount/aboutYourself")
                      // }
                    >
                      Continue
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
export default BusinessAccount;
