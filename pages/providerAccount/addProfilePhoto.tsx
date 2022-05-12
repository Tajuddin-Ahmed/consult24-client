import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "./provider.module.css";
import photo from "../../public/images/user4.jpg";
import photo2 from "../../public/images/user9.jpg";
import photo3 from "../../public/images/user6.jpg";
import photo4 from "../../public/images/user7.jpg";
const AddProfilePhoto = () => {
  const user = useContext(AppContext);
  const router = useRouter();

  return (
    <>
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg}`}>
        <div className="row">
          <div className="container">
            <div className="col-md-12 mt-5 d-flex justify-content-center">
              <div
                className="card p-4 bg-white me-5 shadow-sm"
                style={{ width: "44rem" }}
              >
                <p
                  className="card-text"
                  onClick={() => router.back()}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdArrowBack /> Back
                </p>
                <div className={`card-body bg-light ${cls.font}`}>
                  <div className="text-center">
                    <h6>Add your profile photo</h6>
                    <p>
                      Make a good first impression. Upload a clear photo of
                      yourself
                    </p>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-5 col-lg-5">
                      <div>
                        <Image
                          src={photo}
                          className="rounded"
                          width={210}
                          height={210}
                          alt=""
                        />
                        <div className="file-upload">
                          <input
                            type="file"
                            name="file"
                            id="file"
                            className="inputfile d-none"
                          />
                          <label
                            htmlFor="file"
                            className="p-2 px-5 bg-info rounded"
                          >
                            <i className="bx bx-upload"></i> Upload Photo
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-7">
                      <div style={{ borderLeft: "3px solid blue" }}>
                        <h6 className="ps-3">Photo Tips</h6>
                        <ul>
                          <li>A photo of your face works better than a logo</li>
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

                  <button
                    className="btn btn-info mt-3 float-end"
                    onClick={() =>
                      router.push("/providerAccount/pastCustomerReview")
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProfilePhoto;
