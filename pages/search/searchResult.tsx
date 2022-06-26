import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AiOutlineDollar,
  AiOutlineQuestionCircle,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaRegComment, FaSearch, FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import cls from "../providerAccount/provider.module.css";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
const SearchResult = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const zipcode = router.query.zipcode;
  const service = router.query.service;
  const loaderCss = css`
    margin-left: 45%;
    margin-right: 45%;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const allSearchedResult = async () => {
      try {
        const res = await axios.get(
          `https://c24apidev.accelx.net/api/SearchServiceList/?zip_code=${zipcode}&search=${service}`,
          config
        );
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    allSearchedResult();
    const getServiceImage = async () => {
      try {
        const res = await axios.get(
          "https://c24apidev.accelx.net/api/search_service_file_APIView/",
          config
        );
        if (res.status === 200) {
          console.log(res.data.results);
          setImage(res.data.results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getServiceImage();
  }, [zipcode, service]);
  return (
    <>
      <div className="container">
        <div className={`row ${cls.font}`}>
          <div className="col-lg-3 col-md-3 border-end py-3">
            <div>
              <h5>Filters</h5>
              <h6 className="small">
                Sort by Reviews
                <span className="ps-2">
                  <AiOutlineQuestionCircle />
                </span>
              </h6>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Try 'best'"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <FaSearch />
                </span>
              </div>
            </div>
            <div>
              <h6 className="small">
                Frequency
                <span className="ps-2">
                  <AiOutlineDollar />
                </span>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Just once
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Every week
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Every 2 weeks
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Once a month
                </label>
              </div>
            </div>
            <div id="bedroom">
              <h6 className="small">
                Number of bedrooms
                <span className="ps-2">
                  <AiOutlineDollar />
                </span>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bedroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  1 bedroom
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bedroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  2 bedrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bedroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  3 bedrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bedroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  4 bedrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bedroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  5 bedrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bedroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  6 bedrooms
                </label>
              </div>
            </div>
            <div id="bathroom">
              <h6 className="small">
                Number of bathrooms
                <span className="ps-2">
                  <AiOutlineDollar />
                </span>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bathroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  1 bathroom
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bathroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  2 bathrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bathroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  3 bathrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bathroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  4 bathrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bathroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  5 bathrooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bathroom"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  6 bathrooms
                </label>
              </div>
            </div>
            <div id="cleaningType">
              <h6 className="small">
                Cleaning Type
                <span className="ps-2">
                  <AiOutlineDollar />
                </span>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cleaningType"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Standard cleaning
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cleaningType"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Deep cleaning
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cleaningType"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Move out cleaning
                </label>
              </div>
            </div>
            <div id="extraService">
              <h6 className="small">
                Extra services
                <span className="ps-2">
                  <AiOutlineDollar />
                </span>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="extraService"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Window cleaning (interior)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="extraService"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Friedge cleaning
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="extraService"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Oven cleaning
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="extraService"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Laundry
                </label>
              </div>
            </div>
            <div id="pets">
              <h6 className="small">
                Pets
                <span className="ps-2">
                  <AiOutlineDollar />
                </span>
              </h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pets"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  No pets in home
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pets"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Pets in home
                </label>
              </div>
            </div>
            <div className="my-3">
              <a href="" className="text-info">
                Reset
              </a>
            </div>
          </div>

          <div className="col-lg-9 col-md-9">
            <div className="container py-3">
              <h6 className="py-4">Hire these pros now with Instant Book</h6>
              {loading ? (
                <BeatLoader loading css={loaderCss} size={20} />
              ) : (
                data.map((result) => (
                  <div key={result.id} className="row mb-3">
                    <div className="col-lg-9 col-md-9">
                      <div className="d-flex">
                        <div className="pe-3">
                          {image?.map(
                            (img) =>
                              img.service === result.id && (
                                <Link
                                  key={img.id}
                                  href={`/search/provider/provider1/${result.service_user}/${result.id}/${result.service_category}/${result.service_sub_category}`}
                                >
                                  <a>
                                    <img
                                      src={img.service_image}
                                      className="rounded"
                                      alt="Image"
                                    />
                                  </a>
                                </Link>
                              )
                          )}
                        </div>
                        <Link
                          href={`/search/provider/provider1/${result.service_user}/${result.id}/${result.service_category}/${result.service_sub_category}`}
                        >
                          <a>
                            <div>
                              <h6>{result.service_name}</h6>
                              <p
                                style={{ margin: "0", padding: "0" }}
                                className="small"
                              >
                                Very good 4.5
                                <span>
                                  <FaStar />
                                </span>
                                <span>
                                  <FaStar />
                                </span>
                                <span>
                                  <FaStar />
                                </span>
                                <span>
                                  <FaStar />
                                </span>
                                <span>
                                  <FaStar />
                                </span>
                                <span>(277)</span>
                              </p>
                              <button className="btn btn-info btn-sm">
                                Great value
                              </button>

                              <p
                                style={{ margin: "0", padding: "0" }}
                                className="small"
                              >
                                <span className="pe-2">
                                  <BsFillTrophyFill />
                                </span>
                                878 hires on Consult24
                              </p>
                              <p
                                style={{ margin: "0", padding: "0" }}
                                className="small"
                              >
                                <span className="pe-2">
                                  <GrLocation />
                                </span>
                                12 similar jobs done near you
                              </p>
                              <p className="small">
                                <span className="pe-2">
                                  <FaRegComment />
                                </span>
                                Responds in about 28 min
                              </p>
                              <p className="ps-3 small">
                                Hina A. says, "They were very professional and
                                did a through cleaning. they are"
                              </p>
                              <p className="small">
                                <span className="pe-1">
                                  <AiOutlineThunderbolt />
                                </span>
                                Intant Book availability for
                                <span className="fw-bold"> Tue, May 10</span>
                              </p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <p
                        className="fw-bold text-end"
                        style={{ margin: "0", padding: "0" }}
                      >
                        $50
                      </p>
                      <p className="small text-end">estimated cost</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchResult;
