import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navbar/Navigation";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
          integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
          crossOrigin="anonymous"
        ></script>
        <title>Consult24</title>
      </Head>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
