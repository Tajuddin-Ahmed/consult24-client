import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import cls from "./provider.module.css";
import FormikControl from "../../components/Provider/control/formikControls";
const ProviderPaymentMethod = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  const PaymentOption = [
    { key: "Select a mehtod", value: "" },
    { key: "Cash", value: "cash" },
    { key: "Debit", value: "debit" },
    { key: "Credid", value: "credit" },
    { key: "Paypal", value: "paypal" },
  ];
  const onSubmit = (values) => {
    router.push({
      pathname: "/providerAccount/addProfilePhoto",
      query: {
        ...values,
        ...data,
      },
    });
  };
  const initialValues = { paymentTo: "", paymentFrom: "" };
  const validationSchema = Yup.object({
    paymentTo: Yup.string().required("Required"),
    paymentFrom: Yup.string().required("Required"),
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
                style={{ width: "28rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className={`card-body bg-light ${cls.font}`}>
                  <h5>Payment Method</h5>
                  <p style={{ fontSize: "12px" }}>
                    Please mention your method that helps customer to pay you.
                  </p>
                  <Form>
                    <div className="mb-2">
                      <label htmlFor="paymentTo" className="mb-2">
                        Payment to method
                      </label>
                      <FormikControl
                        control="select"
                        name="paymentTo"
                        options={PaymentOption}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="paymentFrom" className="mb-2">
                        Payment from method
                      </label>
                      <FormikControl
                        control="select"
                        name="paymentFrom"
                        options={PaymentOption}
                      />
                    </div>
                    <button type="submit" className="w-100 btn btn-info">
                      Next
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};
export default ProviderPaymentMethod;
