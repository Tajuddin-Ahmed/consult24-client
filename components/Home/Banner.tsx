import Typist from "react-typist";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/router";
import { useState } from "react";

const Banner = () => {
  const [service, setService] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(service, zipCode);
    if (!service && !zipCode) {
      setError("Please Fill out this field");
      return;
    } else {
      router.push("/search/searchResult");
    }
  };

  const services = [
    {
      id: 0,
      name: "Cleaning",
    },
    {
      id: 1,
      name: "Land Scaping",
    },
    {
      id: 2,
      name: "Fencing",
    },
    {
      id: 3,
      name: "Plumbing",
    },
    {
      id: 4,
      name: "Roofing",
    },
  ];

  const locations = [
    {
      id: 0,
      name: "New York",
    },
    {
      id: 1,
      name: "San Francisco",
    },
    {
      id: 2,
      name: "Seattle",
    },
    {
      id: 3,
      name: "Washinton",
    },
    {
      id: 4,
      name: "Austin",
    },
  ];

  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results);
  // };
  const handleService = (string) => {
    setService(string);
  };
  const handleZipCode = (string) => {
    setZipCode(string);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  return (
    <>
      <div className="container">
        <section className="container banner-wrapper-area">
          <div className="container">
            <div className="banner-wrapper-content">
              <h1 className="banner-three-heading">
                <span className="typewrite"> Get Help With </span>
                <Typist>
                  <span>Cleaning </span>
                  <Typist.Backspace count={15} delay={300} />
                  <span> Landscaping </span>
                  <Typist.Backspace count={18} delay={300} />
                  <span> Appliance Repair </span>
                  <Typist.Backspace count={18} delay={300} />
                  <span> Car Repair </span>
                  <Typist.Backspace count={15} delay={300} />
                  <span> Anything </span>
                </Typist>

                <span className="wrap"></span>
              </h1>
              <p>Get help from anywhere, anytime...</p>
              <div className="row">
                <div className="col-md-10">
                  <form>
                    <div className="row m-0 align-items-center">
                      <div className="col-lg-5 col-md-12 p-0">
                        <div className="form-group">
                          <label></label>
                          <ReactSearchAutocomplete
                            items={services}
                            // onSearch={handleOnSearch}
                            onSearch={handleService}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                            placeholder="Search For a Service"
                            styling={{
                              zIndex: "5",
                              height: "44px",
                              border: "0px solid #dfe1e5",
                              borderRadius: "0px",
                              backgroundColor: "white",
                              boxShadow: "",
                              hoverBackgroundColor: "#eee",
                              color: "#212121",
                              fontSize: "16px",
                              fontFamily: "Arial",
                              iconColor: "grey",
                              lineColor: "rgb(232, 234, 237)",
                              placeholderColor: "grey",
                              clearIconMargin: "3px 14px 0 0",
                              searchIconMargin: "0 0 0 16px",
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 p-0">
                        <div className="form-group">
                          <label>
                            <i className="flaticon-pin"></i>
                          </label>
                          <ReactSearchAutocomplete
                            items={locations}
                            onSearch={handleZipCode}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                            placeholder="Zip Code"
                            styling={{
                              zIndex: "4",
                              height: "44px",
                              border: "0px solid #dfe1e5",
                              borderRadius: "0px",
                              backgroundColor: "white",
                              boxShadow: "",
                              hoverBackgroundColor: "#eee",
                              color: "#212121",
                              fontSize: "16px",
                              fontFamily: "Arial",
                              iconColor: "grey",
                              lineColor: "rgb(232, 234, 237)",
                              placeholderColor: "grey",
                              clearIconMargin: "3px 14px 0 0",
                              searchIconMargin: "0 0 0 16px",
                            }}
                          />
                          {/* <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    /> */}
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-12 p-0">
                        <div className="submit-btn">
                          <button type="submit" onClick={handleSubmit}>
                            Search Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {error && <p>{error}</p>}
                </div>
                <div className="col-md-2 "></div>
              </div>
              <ul className="popular-search-list">
                <li>
                  <a
                    className="btn btn-outline-primary text-decoration-none"
                    type="button"
                  >
                    Restaurants
                  </a>
                </li>

                <li>
                  <a
                    className="btn btn-outline-primary text-decoration-none"
                    href="#"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-primary text-decoration-none"
                    href="#"
                  >
                    Clothing
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-primary text-decoration-none"
                    href="#"
                  >
                    Bank
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-primary text-decoration-none"
                    href="#"
                  >
                    Fitness
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-primary text-decoration-none"
                    href="#"
                  >
                    Bookstore
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
