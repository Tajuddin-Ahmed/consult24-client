import Link from "next/link";
import router, { useRouter } from "next/router";
import { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { AppContext } from "../../components/_App/Navbar/Navigation";
import cls from "../../pages/providerAccount/provider.module.css";
const SearchByItem = () => {
  const [zipCode, setZipCode] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const user = useContext(AppContext);
  const router = useRouter();
  const handleOnChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setZipCode(e.target.value);
    setZipCode(value);
    if (value.length > 3 || value.length === 0) {
      document.getElementById("inputField").style.border = "1px solid blue";
      if (value.length > 3) {
        setIsDisabled(false);
      }
    } else {
      document.getElementById("inputField").style.border = "1px solid red";
      setIsDisabled(true);
    }
  };
  const data = router.query;
  const handleFindProps = () => {
    console.log("clicked");
    router.push({
      pathname: "/search/searchResult",
      query: {
        service: data?.item,
        zipcode: zipCode,
      },
    });
  };
  return (
    <>
      <div className={`bg-light pt-3 pb-5 ${cls.bgImg} ${cls.font}`}>
        <div className="row">
          <div className=" col col-lg-12 col-md-12 justify-content-center">
            <h3 className="text-center text-white mt-4">
              Find top-rated {data.item} in your area
            </h3>
            <p className="text-center text-white my-4">
              Enter your zip and get matched with up to 3 pros
            </p>
            <div className="d-flex justify-content-center">
              <div className="input-group mb-2 w-25" id="inputField">
                <span className="input-group-text" id="basic-addon1">
                  <GrLocation />
                </span>
                <input
                  type="text"
                  id="zipcode"
                  className={`form-control ${cls.businessInput}`}
                  placeholder="Zip Code"
                  //   aria-label="Username"
                  onChange={handleOnChange}
                  value={zipCode}
                  maxLength={4}
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="w-25 btn btn-info mt-3"
                id="findProps"
                disabled={isDisabled}
                onClick={() => handleFindProps()}
              >
                Find props
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchByItem;
