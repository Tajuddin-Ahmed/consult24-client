import axios from "axios";
// create user
export async function createUser(
  role: string,
  email: string,
  password: string,
  re_password: string
) {
  const response = await fetch("https://c24apidev.accelx.net/auth/users/", {
    method: "POST",
    body: JSON.stringify({
      username: email,
      role: role,
      email: email,
      password: password,
      re_password: re_password,
    }),
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
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  };
  if (token) {
    try {
      const res = await axios.get(
        "https://c24apidev.accelx.net/auth/users/me/",
        config
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
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
  if (state && code && !localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const details = {
      state: state,
      code: code,
      role: 2,
    };

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");
    try {
      const res = await axios.post(
        `https://c24apidev.accelx.net/auth/o/google-oauth2/?${formBody}`,
        config
      );
      const data = res.data;
      console.log(data);
      console.log("It is called");
    } catch (error) {
      console.log(error.message);
    }
  }
};
