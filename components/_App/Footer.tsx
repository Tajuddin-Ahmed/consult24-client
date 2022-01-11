import React from "react";

const Footer = ({ bgColor }: { bgColor?: string }) => {
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>About</h3>

                <ul className="link-list">
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> About Indice
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Careers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Recent News
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Investor
                      Relations
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Content
                      Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Discover</h3>

                <ul className="link-list">
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Project Cost
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Upcoming Events
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Developers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Collections
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Our Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Business With Indice</h3>

                <ul className="link-list">
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Claim your
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Advertise on
                      Indice
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Restaurant
                      Owners
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Business Success
                      Stories
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Business Support
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Blog for
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-left-chevron"></i> Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Languages</h3>
                <div className="languages-switch">
                  <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Russian</option>
                    <option>Chinese</option>
                  </select>
                </div>

                <h3>Countries</h3>
                <div className="country-switch">
                  <select>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Spain</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              Copyright @2021 <span>Indice</span> is Proudly Crafted by{" "}
              <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>

        <div className="footer-image text-center">
          <img src="/images/footer-image.png" alt="image" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
