import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "../../../utils/ActiveLink";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from "react-tabs";
import Menu from "./Menu/Menu";
resetIdCounter();

const Navbar = () => {
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [sticky, setSticky] = useState(false);

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let abortController = new AbortController();
    // your async action is here
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className={displayAuth ? "body_overlay open" : "body_overlay"}></div>
      <div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
        <div className="miran-responsive-nav">
          <div className="container">
            <div className="miran-responsive-menu">
              <div
                onClick={() => toggleMenu()}
                className="hamburger-menu hamburger-two"
              >
                {showMenu ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="/images/black-logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
         <div className={showMenu ? "miran-nav show" : "miran-nav"}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md d-flex justify-content-end  navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/black-logo.png" alt="logo" />
                </a>
              </Link>
              <div className="collapse d-flex justify-content-end  navbar-collapse mean-menu">
                {/* Menu Items rendering from JSON object */}
                <Menu></Menu>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <span
                      data-toggle="modal"
                      onClick={toggleAuth}
                      className="auth-one"
                    >
                      <i className="flaticon-user"></i> Login / Register
                    </span>
                  </div>

                  <div className="option-item">
                    <Link
                      href="/dashboard/add-listing"
                      activeClassName="active"
                    >
                      <a className="default-btn button-one">
                        <i className="flaticon-more"></i> Provide a Service
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>      
        </div>


        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu" onClick={toggleMiniAuth}>
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className={displayMiniAuth ? "container active" : "container"}>
              <div className="option-inner">
                <div className="others-option">
                  <div className="option-item">
                    <form className="navbar-search-box">
                      <label>
                        <i className="flaticon-search"></i>
                      </label>
                      <input
                        type="text"
                        className="input-search"
                        placeholder="What are you looking for?"
                      />
                    </form>
                  </div>

                  <div className="option-item">
                    <span
                      data-toggle="modal"
                      data-target="#loginRegisterModal"
                      onClick={toggleAuth}
                    >
                      <i className="flaticon-user"></i> Login / Register
                    </span>
                  </div>

                  <div className="option-item">
                    <Link
                      href="/dashboard/add-listing"
                      activeClassName="active"
                    >
                      <a className="default-btn">
                        <i className="flaticon-more"></i> Add Listing
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ Auth Modal ------- */}
      <div
        className={
          displayAuth
            ? "modal loginRegisterModal show"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <Tabs>
              <button type="button" className="close" onClick={toggleAuth}>
                <i className="bx bx-x"></i>
              </button>

              <ul className="nav nav-tabs" id="myTab">
                <TabList>
                  <Tab className="nav-item">
                    <a className="nav-link" id="login-tab">
                      Login
                    </a>
                  </Tab>
                  <Tab className="nav-item">
                    <a className="nav-link" id="register-tab">
                      Register
                    </a>
                  </Tab>
                </TabList>
              </ul>

              <div className="tab-content" id="myTabContent">
                <TabPanel>
                  <div className="tab-pane fade show active" id="login">
                    <div className="miran-login">
                      <div className="login-with-account">
                        <span>Login with</span>
                        <ul>
                          <li>
                            <a href="#" className="facebook">
                              <i className="bx bxl-facebook"></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <i className="bx bxl-twitter"></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className="sub-title">
                        <span>Or login with</span>
                      </span>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Username or Email"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                          />
                        </div>

                        <button type="submit">Register Now</button>
                      </form>
                      <span className="dont-account">
                        Don't have an account? <a href="#">Register Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="tab-pane" id="register">
                    <div className="miran-register">
                      <div className="register-with-account">
                        <span>Register with</span>
                        <ul>
                          <li>
                            <a href="#" className="facebook">
                              <i className="bx bxl-facebook"></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <i className="bx bxl-twitter"></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className="sub-title">
                        <span>Or Register with</span>
                      </span>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Username"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                          />
                        </div>

                        <button type="submit">Register Now</button>
                      </form>
                      <span className="already-account">
                        Already have an account? <a href="#">Login Now</a>
                      </span>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
