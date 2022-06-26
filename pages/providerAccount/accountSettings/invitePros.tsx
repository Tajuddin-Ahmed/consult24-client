import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import photo from "../../../public/images/refImage.jpg";
const InvitePros = () => {
  return (
    <div className="container">
      <div className="row container my-5">
        <div className="col-md-6 col-lg-6 text-center">
          <Image src={photo} width={400} height={400} />
        </div>
        <div className="col-md-6 col-lg-6">
          <h2>Refer a new pro, and you’ll both get up to $200.</h2>
          <p>
            Cleaners, Electricians, and Landscapers are in high demand in your
            area. Refer a pro in any of these services and you'll both get $200
            added to your Consult24 balance. Learn more
          </p>
          <div>
            <h6>Share your personal referral link</h6>
            <div className="d-flex align-items-center mt-2">
              <input
                type="text"
                style={{
                  width: "87%",
                  height: "36px",
                  border: "1px solid #03c6fc",
                }}
              />
              <button
                style={{
                  padding: "6px",
                  backgroundColor: "#03c6fc",
                  border: "1px solid green",
                }}
                className="rounded-end"
              >
                Copy
              </button>
            </div>
          </div>
          <p className="text-center my-4">OR</p>
          <div className="mb-4">
            <h6>Send an email invitation</h6>
            <div className="d-flex align-items-center mt-2">
              <input
                type="text"
                style={{
                  width: "87%",
                  height: "36px",
                  border: "1px solid #03c6fc",
                }}
              />
              <button
                style={{
                  padding: "6px",
                  backgroundColor: "#03c6fc",
                  border: "1px solid green",
                }}
                className="rounded-end"
              >
                Send
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              style={{
                width: "48%",
                border: "1px solid green",
                padding: "6px",
                backgroundColor: "#03c6fc",
                borderRadius: "5px",
              }}
            >
              <span className="text-dark fs-5 me-2">
                <FaFacebook />
              </span>
              Share on Facebook
            </button>
            <button
              style={{
                width: "48%",
                border: "1px solid green",
                padding: "6px",
                backgroundColor: "#03c6fc",
                borderRadius: "5px",
              }}
            >
              <span className="text-dark fs-5 me-2">
                <FaTwitter />
              </span>
              Share on Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvitePros;
