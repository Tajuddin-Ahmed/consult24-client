import axios from "axios";

// create user
export async function createUser(
  username: string,
  role: string,
  email: string,
  password: string,
  re_password: string
) {
  const response = await fetch("https://c24apidev.accelx.net/auth/users/", {
    method: "POST",
    body: JSON.stringify({ username, role, email, password, re_password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}
// user login
export const loginToUser = async (userEmail: string, userPassword: string) => {
  try {
    const response = await fetch(
      "https://c24apidev.accelx.net/auth/token/login/",
      {
        method: "POST",
        body: JSON.stringify({ email: userEmail, password: userPassword }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.auth_token);
    return data.auth_token;
  } catch (error) {}
};

// get user
export async function getUser() {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await fetch(
      "https://c24apidev.accelx.net/auth/users/me/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {}
}
// logout
export const userLogout = async () => {
  const token = localStorage.getItem("token");
  try {
    await fetch("https://c24apidev.accelx.net/auth/token/logout/", {
      method: "POST",
      body: token,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    });
    localStorage.setItem("token", null);

    window.location.href = "/";
  } catch (error) {
    console.log(error.message);
  }
};

// google authentication
export const continueWithGoogle = async (state, code) => {
  console.log(state, code);
  if (state && code && !localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const details = {
      state: state,
      code: code,
    };

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`,
        config
      );
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
};
