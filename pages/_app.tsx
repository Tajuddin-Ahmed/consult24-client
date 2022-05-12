import React, { useState, useEffect } from "react";
import { IndiceProvider } from "../contexts";
import "../public/css/animate.min.css";
import "../public/css/bootstrap.min.css";
import "../public/css/meanmenu.min.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "../public/css/nice-select.min.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import Layout from "../components/_App/Layout";
import Loader from "../components/_App/Shared/Loader";
import GoTop from "../components/_App/Shared/GoTop";
import "../public/css/tabStyle.css";
import { AppContext } from "../components/_App/Navbar/Navigation";
import { getUser } from "../components/hooks/createAndLogin";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token === undefined || token === null) {
        return;
      } else {
        const user = await getUser();
        setUser(user);
      }
    };
    fetchData();

    setTimeout(() => setLoading(false), 0);
  }, []);

  return (
    <>
      <SessionProvider session={session}>
        <AppContext.Provider value={user}>
          <Layout>
            <IndiceProvider>
              <Component {...pageProps} />
              <Loader loading={loading} />
              <GoTop />
            </IndiceProvider>
          </Layout>
        </AppContext.Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
