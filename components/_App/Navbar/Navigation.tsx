import Link from "next/link";
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
          // <Navbar bg="light" expand="lg">
          //   <Container>
          //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
          //     <Navbar.Collapse id="basic-navbar-nav">
          //       <Nav className="me-auto">
          //         <Nav.Link href="#home">Home</Nav.Link>
          //         <Nav.Link href="#link">Link</Nav.Link>
          //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          //           <NavDropdown.Item href="#action/3.1">
          //             Action
          //           </NavDropdown.Item>
          //           <NavDropdown.Item href="#action/3.2">
          //             Another action
          //           </NavDropdown.Item>
          //           <NavDropdown.Item href="#action/3.3">
          //             Something
          //           </NavDropdown.Item>
          //           <NavDropdown.Divider />
          //           <NavDropdown.Item href="#action/3.4">
          //             Separated link
          //           </NavDropdown.Item>
          //         </NavDropdown>
          //       </Nav>
          //     </Navbar.Collapse>
          //   </Container>
          // </Navbar>

          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "steelblue", height: "40px" }}
          >
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-flex justify-content-between"
                id="navbarTogglerDemo01"
              >
                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <Menu></Menu>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
};
export default Navigation;
