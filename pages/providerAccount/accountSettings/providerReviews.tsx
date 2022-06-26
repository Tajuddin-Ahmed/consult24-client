import Image from "next/image";
import router from "next/router";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import cls from "../../providerAccount/provider.module.css";
import photo from "../../../public/images/user4.jpg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const ProviderReviews = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="container my-5">
      <h3>Reviews</h3>
      <div className="row">
        <div className="col-md-12 col-lg-12 d-flex justify-content-center mt-5">
          <div className="text-center mt-5">
            <p className="fs-3">
              <FaStar />
            </p>
            <p>No reviews yet.</p>
            <button
              className="btn btn-info"
              onClick={() => setModalIsOpen(true)}
            >
              Ask for reviews
            </button>
          </div>
        </div>
      </div>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div className={`bg-light p-3`}>
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7">
              <h4>Get at leat one review from past customers</h4>
              <p>
                Ask past customers to write a review and help you get started on
                Consul24
              </p>
              <div className="mb-2">
                <label htmlFor="inputField" className="mb-2">
                  Send past customers an email
                </label>
                <br />
                <input type="text" className={cls.businessInput} />
              </div>
              <div>
                <a className="text-success" href="">
                  <span style={{ fontSize: "20px" }}>
                    <FcPlus />
                  </span>
                  Add Customer
                </a>
              </div>
              <div className="my-2">
                <label htmlFor="">Email preview</label>
                <div className="bg-white text-center p-3 my-2">
                  <Image
                    className="rounded-circle"
                    src={photo}
                    width={100}
                    height={100}
                    alt="Image"
                  />
                  <h6>John Doe</h6>
                  <ul className="list-unstyled d-flex justify-content-center text-warning">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                  <p>
                    Thanks for being a valued customer. I just signed up on
                    Consult24 to find more excellent customers like you , and
                    reviews are a big part of my profile. Can you take a moment
                    to write a couple of sentences about working with me? I'd
                    love if my future customers could hear about your experience
                    firsthand. <br />
                    Thanks, Jone doe
                  </p>
                </div>
                <a href="" className="text-info">
                  Copy shareable link
                </a>
              </div>
            </div>
            <div className="col-12 col-xs-5 col-md-5 col-lg-5">
              <div
                className="mt-5 p-2 bg-white shadow-sm"
                style={{
                  borderLeft: "3px solid blue",
                }}
              >
                <h6 style={{ fontSize: "14px" }}>
                  Reviews make you competitive
                </h6>
                <p style={{ fontSize: "12px" }}>
                  House Cleaners in your area have an average of 29 reviews
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="float-end btn btn-info mt-4 ms-2"
              onClick={() => router.push("/providerAccount/customerHire")}
            >
              Send request
            </button>
            <button
              className="float-end btn btn-info mt-4"
              onClick={() => setModalIsOpen(false)}
            >
              Skip
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ProviderReviews;
