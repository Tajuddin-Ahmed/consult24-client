import React, { useState, useEffect } from 'react';
import { IndiceProvider } from '../contexts';

import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';
import '../public/css/meanmenu.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../public/css/nice-select.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import Layout from '../components/_App/Layout';
import Loader from '../components/_App/Shared/Loader';
import GoTop from '../components/_App/Shared/GoTop';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  return (
    <>
      <Layout>
        <IndiceProvider>
          <Component {...pageProps} />
          <Loader loading={loading} />
          <GoTop />
        </IndiceProvider>
      </Layout>
    </>
  );
}

export default MyApp;
