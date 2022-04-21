import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import { FaAngleDown, FaUser, FaUserTie } from "react-icons/fa";
import classes from "../../../pages/users/profile.module.css";
// import RemoveCookie from "../../hooks/removeCookie";

const Navigation = () => {
  const [user, setUser] = useState({});
  const router = useRouter();

  const userLogout = async () => {
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(token);
    try {
      await fetch("https://c24apidev.accelx.net/auth/token/logout/", {
        method: "POST",
        body: token,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + parsedToken,
        },
      });
      localStorage.setItem("token", null);
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null || token === "undefined") {
      return;
    } else {
      // window.location.href = "/";
      const parsedToken = JSON.parse(token);
      const userData = async () => {
        if (parsedToken) {
          try {
            const response = await fetch(
              "https://c24apidev.accelx.net/auth/users/me/",
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Token " + parsedToken,
                },
              }
            );
            const data = await response.json();
            setUser(data);
          } catch (error) {}
        } else {
          return;
        }
      };
      userData();
    }
  }, []);

  return (
    <>
      <header className="container">
        <div className="border-bottom">
          <div className="row">
            <div className="col col-md-6 d-flex align-items-center">
              <Link href="/">
                <a href="">
                  <h1>
                    <span style={{ color: "steelblue;" }}>Consult</span>
                    <span style={{ color: "orange" }}>24</span>
                  </h1>
                </a>
              </Link>
            </div>
            <div className="col col-md-6 d-flex align-items-center justify-content-end">
              <div>
                <Link href="/dashboard/add-listing">
                  <a className="text-primary text-decoration-underline pe-3">
                    <FaUserTie />
                    <span className={classes.font}>Join as an Expert</span>
                  </a>
                </Link>
              </div>
              {user.username ? (
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
                    <a className="pe-2">inbox</a>
                  </Link>
                  <Link href="/">
                    <a>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarNavDarkDropdown"
                      >
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
                              {user.username[0].toUpperCase() +
                                user.username.split(" ")[1][0].toUpperCase()}

                              <FaAngleDown />
                            </a>
                            <ul
                              className="dropdown-menu dropdown-menu-light"
                              // aria-labelledby="navbarDarkDropdownMenuLink"
                              style={{
                                marginLeft: "-123px",
                                marginTop: "14px",
                              }}
                            >
                              <li
                                onClick={() =>
                                  router.push({
                                    pathname: `/users/profile/${user.id}`,
                                    query: {
                                      username: JSON.stringify(user.username),
                                      email: JSON.stringify(user.email),
                                    },
                                  })
                                }
                              >
                                {/* <Link
                                  href={{
                                    pathname: `/users/profile/${user.id}`,
                                    query: {
                                      username: JSON.stringify(user.username),
                                      email: JSON.stringify(user.email),
                                    },
                                  }}
                                > */}
                                <a className="dropdown-item">Profile</a>
                                {/* </Link> */}
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Settings
                                </a>
                              </li>
                              <li onClick={userLogout}>
                                <a className="dropdown-item" href="#">
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </a>
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
        </div>
        {router.pathname === "/" ? (
          <nav
            className="navbar navbar-expand-lg navbar-light mean-menu"
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
