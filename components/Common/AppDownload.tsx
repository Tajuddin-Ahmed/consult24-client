const AppDownload = () => {
  return (
    <>
      <section className="app-download-area bg-main-color">
        <div className="container">
          <hr className="my-5" />
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="app-download-content">
                <h5>
                  When you need instant help- we find an expert for you free
                </h5>
                <p>
                  Read reviews , chat and video consult an expert. All in the
                  app.
                </p>
                <div className="btn-box">
                  <a href="#" className="playstore-btn">
                    <img src="/images/play-store.png" alt="image" />
                    GET IT ON
                    <span>Google Play</span>
                  </a>
                  <a href="#" className="applestore-btn">
                    <img src="/images/apple-store.png" alt="image" />
                    Download on the
                    <span>Apple Store</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="app-download-image">
                <img src="/images/app-download.png" alt="image" />
              </div>
            </div>
          </div>
          <hr className="my-5" />
        </div>
      </section>
    </>
  );
};

export default AppDownload;
