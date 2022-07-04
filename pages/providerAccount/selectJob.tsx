import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/Provider/control/formikControls";

const SelectJob = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const user: any = useContext(AppContext);
  const router = useRouter();
  const data = router.query;
  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsChecked(true);
    if (isCheckAll) {
      setIsChecked(false);
    }
  };
  const handleOnClick = () => {
    if (user?.username) {
      router.push("/providerAccount/businessAccount");
    } else {
      router.push("/home/register");
    }
  };
  const checkboxOptions = [
    { key: "House Cleaning", value: "House Cleaning" },
    { key: "Photo Booth Rental", value: "Photo Booth Rental" },
    {
      key: "Wedding and Event Decorating",
      value: "Wedding and Event Decorating",
    },
    { key: "Event Planning", value: "Event Planning" },
    { key: "Wedding Florist", value: "Wedding Florist" },
    { key: "Wedding Coordination", value: "Wedding Coordination" },
    { key: "Balloon Decorations", value: "Balloon Decorations" },
    { key: "Wedding Planning", value: "Wedding Planning" },
    { key: "Calligraphy", value: "Calligraphy" },
    { key: "Valet Parking", value: "Valet Parking" },
  ];
  const onSubmit = (values) => {
    if (user?.username) {
      router.push({
        pathname: "/providerAccount/businessAccount",
        query: {
          ...values,
          ...data,
        },
      });
    } else {
      router.push({
        pathname: "/providerAccount/providerSignUp",
        query: {
          from: window.location.pathname + window.location.search,
        },
      });
    }
  };
  const initialValues = {
    checkboxOption: [],
  };
  const validationSchema = Yup.object({
    checkboxOption: Yup.array().min(1, "Select at least one service you do"),
  });
  return (
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
              <div className={`card-body ${cls.font}`}>
                <h5 className="card-title">
                  Select any other services you do.
                </h5>
                <p className={`card-text ${cls.font}`}>
                  You’ll show up in search results and get leads for all
                  services you select.
                </p>
                <p
                  className={`card-text text-info ${cls.font}`}
                  style={{ cursor: "pointer" }}
                  id="selectBtn"
                  onClick={handleSelectAll}
                >
                  Select all
                </p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <FormikControl
                      control="checkbox"
                      name="checkboxOption"
                      options={checkboxOptions}
                    />

                    <button className="w-100 btn btn-info mt-3" type="submit">
                      Next
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectJob;
