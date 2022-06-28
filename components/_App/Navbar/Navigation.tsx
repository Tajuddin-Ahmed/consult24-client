// import Link from "next/link";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import { FaAngleDown, FaUser, FaUserTie } from "react-icons/fa";
import classes from "../../../pages/users/profile.module.css";
import { continueWithGoogle, userLogout } from "../../hooks/createAndLogin";
import queryString from "query-string";
import BookNewJob from "../../../pages/providerAccount/bookNewJob";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import RemoveCookie from "../../hooks/removeCookie";
// import { useSession, signIn, signOut } from "next-auth/react";

import dynamic from "next/dynamic";
import Link from "../../../utils/ActiveLink";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from "react-tabs";

export const AppContext = createContext({});

const Navigation = () => {
  const [loading, setLoading] = useState(false);
  const [isProvider, setIsprovider] = useState(false);
  const router = useRouter();
  const code = router.query.code;
  const state = router.query.state;
  const user: any = useContext(AppContext);
  // const { data: session } = useSession();
  // console.log(session);
  const currentUrl = router.pathname;
  let serviceStyle, leadStyle, msgStyle, calStyle, proStyle;
  if (currentUrl === "/providerAccount/addService") {
    serviceStyle = {
      color: "black",
      fontWeight: "bold",
      borderBottom: "2px solid #30EDED",
    };
  } else if (currentUrl === "/providerAccount/providerMessage") {
    msgStyle = {
      color: "black",
      fontWeight: "bold",
      borderBottom: "2px solid #30EDED",
    };
  } else if (currentUrl === "/providerAccount/providerCalendar") {
    calStyle = {
      color: "black",
      fontWeight: "bold",
      borderBottom: "2px solid #30EDED",
    };
  } else if (currentUrl === "/providerAccount/providerProfile") {
    proStyle = {
      color: "black",
      fontWeight: "bold",
      borderBottom: "2px solid #30EDED",
    };
  } else if (currentUrl === "/providerAccount/providerLead") {
    leadStyle = {
      color: "black",
      fontWeight: "bold",
      borderBottom: "2px solid #30EDED",
    };
  }

  let prorand;
  if (typeof window !== "undefined") {
    prorand = localStorage.getItem("prorand");
  } else {
    console.log("You are on the server");
  }
  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
    if (state && code) {
      console.log(code, state);
      continueWithGoogle(state, code);
    }

    const checkIsProvider = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      };
      if (user?.id && user.role === 3) {
        try {
          const res = await axios.get(
            `https://c24apidev.accelx.net/auth_api/provider_profile/${user?.id}`,
            config
          );
          if (res.status === 200) {
            setIsprovider(true);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    checkIsProvider();
  }, [user?.id]);
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
      <header className="container">
        <div className="border-bottom">
          {!isProvider ? (
            <div className="row">
              <div className=" col-md-6 col-lg-6 d-flex align-items-center">
                <Link href="/">
                  <a className="fs-1 fw-bold" style={{ color: "steelblue" }}>
                    Consult24
                  </a>
                </Link>
              </div>
              <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-end">
                <div>
                  <Link href="/providerAccount/bookNewJob">
                    <a className="text-primary text-decoration-underline pe-3">
                      <FaUserTie />
                      <span className={classes.font}>Join as Provider </span>
                    </a>
                  </Link>
                </div>
                {user?.username ? (
                  <div className="d-flex align-items-center">
                    <button
                      className="navbar-toggler d-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-target="#navbarNavDarkDropdown"
                      aria-controls="navbarNavDarkDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link href="/inbox">
                      <a className="pe-2">
                        <IoMdNotificationsOutline />
                      </a>
                    </Link>
                    <Link href="/">
                      <div id="navbarNavDarkDropdown">
                        <ul className="navbar nav">
                          <li className="nav-item dropdown">
                            <a
                              // className="d-flex align-items-center"
                              href="#"
                              id="navbarDarkDropdownMenuLink"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {user?.username}

                              <FaAngleDown />
                            </a>
                            <ul
                              className="dropdown-menu dropdown-menu-light"
                              style={{
                                width: "250px",
                                marginLeft: "-118px",
                                marginTop: "19px",
                              }}
                            >
                              <li className="p-2 ms-2">
                                <Link href={`/users/userInfo`}>
                                  <a className="dropdown-item">Profile</a>
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link href={`/users/profile/${user?.id}`}>
                                  <a className="dropdown-item">Appointments</a>
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link href={`/users/invoicing`}>
                                  <a className="dropdown-item">Invoicing</a>
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link href="/users/settings">
                                  <a className="dropdown-item">Settings</a>
                                </Link>
                              </li>
                              <li
                                onClick={userLogout}
                                className="list-group-item"
                              >
                                <a className="dropdown-item" href="#">
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="ps-1">
                    {/* <Link href="/home/login"> */}
                    <a href="/home/login" className="pe-2">
                      <span style={{ color: "steelblue", fontSize: "15px" }}>
                        <FaUser />
                      </span>
                      <span className={classes.font}>Sign In</span>
                    </a>
                    {/* </Link> */}
                    <Link href="/home/register">
                      <a>
                        <span style={{ color: "steelblue", fontSize: "15px" }}>
                          <FaUser />
                        </span>
                        <span className={classes.font}>Sign Up</span>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="row py-3">
              <div className=" col-md-6 col-lg-6 col-12 d-flex align-items-center">
                <Link href="/">
                  <a>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        backgroundColor: "#30EDED",
                        textAlign: "center",
                        marginRight: "5px",
                      }}
                    >
                      <p style={{ color: "white", paddingTop: "6px" }}>C</p>
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a className="px-2" style={leadStyle}>
                    Lead
                  </a>
                </Link>
                <Link href="/providerAccount/providerMessage">
                  <a className="px-2" style={msgStyle}>
                    Messages
                  </a>
                </Link>
                <Link href="/providerAccount/service/addService">
                  <a className="px-2" style={serviceStyle}>
                    Services
                  </a>
                </Link>
                <Link href="/providerAccount/providerCalendar">
                  <a className="px-2" style={calStyle}>
                    Calender
                  </a>
                </Link>

                <Link href="/providerAccount/providerProfile">
                  <a className="px-2" style={proStyle}>
                    Profile
                  </a>
                </Link>
              </div>
              <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-end">
                <div>
                  <Link href="/">
                    <a className="text-primary text-decoration-underline pe-3">
                      <FaUserTie />
                      <span className={classes.font}>Join as Customer </span>
                    </a>
                  </Link>
                </div>

                {user?.username ? (
                  <div className="d-flex align-items-center">
                    <button
                      className="navbar-toggler d-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-target="#navbarNavDarkDropdown"
                      aria-controls="navbarNavDarkDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link href="/inbox">
                      <a className="pe-3 fs-5">
                        <IoMdNotificationsOutline />
                      </a>
                    </Link>
                    <Link href="/">
                      <div id="navbarNavDarkDropdown">
                        <ul className="navbar nav">
                          <li className="nav-item dropdown">
                            <a
                              // className="d-flex align-items-center"
                              href="#"
                              id="navbarDarkDropdownMenuLink"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {user?.username}

                              <FaAngleDown />
                            </a>
                            <ul
                              className="dropdown-menu dropdown-menu-light"
                              // aria-labelledby="navbarDarkDropdownMenuLink"
                              style={{
                                width: "250px",
                                marginLeft: "-118px",
                                marginTop: "23px",
                              }}
                            >
                              <li className="p-2 ms-2">
                                <Link href="/providerAccount/accountSettings/insights/insights">
                                  <a className="dropdown-item">Insights</a>
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link href="/providerAccount/accountSettings/providerReviews">
                                  <a className="dropdown-item">Reviews</a>
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link href="/providerAccount/accountSettings/payments">
                                  <a className="dropdown-item">Payments</a>
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link href="/providerAccount/accountSettings/providerSettings">
                                  <a className="dropdown-item">Settings</a>
                                </Link>
                              </li>
                              <li className="list-group-item">
                                <Link href="/providerAccount/accountSettings/invitePros">
                                  <a className="dropdown-item" href="#">
                                    Refer pros. Get up to $200
                                  </a>
                                </Link>
                              </li>
                              <li
                                onClick={userLogout}
                                className="list-group-item"
                              >
                                <a className="dropdown-item" href="#">
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="ps-1">
                    {/* <Link href="/home/login"> */}
                    <a href="/home/login" className="pe-2">
                      <span style={{ color: "steelblue", fontSize: "15px" }}>
                        <FaUser />
                      </span>
                      <span className={classes.font}>Sign In</span>
                    </a>
                    {/* </Link> */}
                    <Link href="/home/register">
                      <a>
                        <span style={{ color: "steelblue", fontSize: "15px" }}>
                          <FaUser />
                        </span>
                        <span className={classes.font}>Sign Up</span>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {router.pathname === "/" && !isProvider ? (
          <div>
            <div
              className={displayAuth ? "body_overlay open" : "body_overlay"}
            ></div>
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
                      <Link href="/index-2">
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
                  <nav className="navbar navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse">
                      {/* <form className="navbar-search-box search-box-one">
                        <label>
                          <i className="flaticon-search"></i>
                        </label>
                        <input
                          type="text"
                          className="input-search"
                          placeholder="What are you looking for?"
                        />
                      </form> */}

                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a href="#" className="dropdown-toggle nav-link">
                            Home
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link href="/" activeClassName="active">
                                <a className="nav-link">Home Demo - 1</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/index-2" activeClassName="active">
                                <a className="nav-link">Home Demo - 2</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/index-3" activeClassName="active">
                                <a className="nav-link">Home Demo - 3</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/index-4" activeClassName="active">
                                <a className="nav-link">Home Demo - 4</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a href="#" className="dropdown-toggle nav-link">
                            Listings
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                List Layout{" "}
                                <i className="bx bx-chevron-right"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <Link
                                    href="/vertical-listings-left-sidebar"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Left Sidebar</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/vertical-listings-right-sidebar"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Right Sidebar</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/vertical-listings-full-width"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Full Width</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/vertical-listings-with-map"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Full Width + Map</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/vertical-listings-full-map"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">
                                      Full Width + Full Map
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                Grid Layout{" "}
                                <i className="bx bx-chevron-right"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <Link
                                    href="/grid-listings-with-left-sidebar"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Left Sidebar</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/grid-listings-with-right-sidebar"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Right Sidebar</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/grid-listings-full-width"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Full Width</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/grid-listings-with-map"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Full Width + Map</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/grid-listings-full-map"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">
                                      Full Width + Full Map
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/single-listings"
                                activeClassName="active"
                              >
                                <a className="nav-link">Listings Details</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/destinations"
                                activeClassName="active"
                              >
                                <a className="nav-link">Top Place</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/categories" activeClassName="active">
                                <a className="nav-link">Categories</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/user-profile"
                                activeClassName="active"
                              >
                                <a className="nav-link">Author Profile</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a href="#" className="dropdown-toggle nav-link">
                            User Panel
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link href="/dashboard" activeClassName="active">
                                <a className="nav-link">Dashboard</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/messages"
                                activeClassName="active"
                              >
                                <a className="nav-link">Messages</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/bookings"
                                activeClassName="active"
                              >
                                <a className="nav-link">Bookings</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/wallet"
                                activeClassName="active"
                              >
                                <a className="nav-link">Wallet</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/my-listing/active"
                                activeClassName="active"
                              >
                                <a className="nav-link">My Listings</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/reviews"
                                activeClassName="active"
                              >
                                <a className="nav-link">Reviews</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/bookmarks"
                                activeClassName="active"
                              >
                                <a className="nav-link">Bookmarks</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/add-listing"
                                activeClassName="active"
                              >
                                <a className="nav-link">Add Listings</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/profile"
                                activeClassName="active"
                              >
                                <a className="nav-link">My Profile</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/invoice"
                                activeClassName="active"
                              >
                                <a className="nav-link">Invoice</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a href="#" className="dropdown-toggle nav-link">
                            Shop
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link href="/shop" activeClassName="active">
                                <a className="nav-link">Products List</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/cart" activeClassName="active">
                                <a className="nav-link">Cart</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/checkout" activeClassName="active">
                                <a className="nav-link">Checkout</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/product-details"
                                activeClassName="active"
                              >
                                <a className="nav-link">Products Details</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a href="#" className="dropdown-toggle nav-link">
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link href="/blog-1" activeClassName="active">
                                <a className="nav-link">Grid (2 in Row)</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/blog-2" activeClassName="active">
                                <a className="nav-link">Grid (3 in Row)</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/blog-3" activeClassName="active">
                                <a className="nav-link">Grid (Full Width)</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/blog-4" activeClassName="active">
                                <a className="nav-link">Right Sidebar</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/blog-5" activeClassName="active">
                                <a className="nav-link">Left Sidebar</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                Single Post{" "}
                                <i className="bx bx-chevron-right"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <Link
                                    href="/single-blog-1"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Default</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/single-blog-2"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">With Video</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/single-blog-3"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">
                                      With Image Slider
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a href="#" className="dropdown-toggle nav-link">
                            Pages
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link href="/about" activeClassName="active">
                                <a className="nav-link">About Us</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/how-it-works"
                                activeClassName="active"
                              >
                                <a className="nav-link">How It Work</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/pricing" activeClassName="active">
                                <a className="nav-link">Pricing</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/gallery" activeClassName="active">
                                <a className="nav-link">Gallery</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                Events <i className="bx bx-chevron-right"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <Link href="/events" activeClassName="active">
                                    <a className="nav-link">Events</a>
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/single-events"
                                    activeClassName="active"
                                  >
                                    <a className="nav-link">Events Details</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/testimonial"
                                activeClassName="active"
                              >
                                <a className="nav-link">Testimonials</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/faq" activeClassName="active">
                                <a className="nav-link">FAQ</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/404" activeClassName="active">
                                <a className="nav-link">404 Error</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/coming-soon"
                                activeClassName="active"
                              >
                                <a className="nav-link">Coming Soon</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="/contact" activeClassName="active">
                                <a className="nav-link">Contact</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};
export default Navigation;
