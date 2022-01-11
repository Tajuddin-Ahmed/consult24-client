import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Indice - Directory & Listing React Next Template</title>
      </Head>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
