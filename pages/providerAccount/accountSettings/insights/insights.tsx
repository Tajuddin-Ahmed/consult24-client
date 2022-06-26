import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";
import cls from "./insights.module.css";
const Widgets = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8 col-lg-8">
          <h2 className="my-4">Insights</h2>
          <div className="my-4">
            <ul className="d-flex list-unstyled">
              <li className={`me-3 ${cls.activity}`}>
                <Link href="/providerAccount/accountSettings/insights/insights">
                  <a>Your activity</a>
                </Link>
              </li>
              <li className={cls.fromActivity}>
                <Link href="/providerAccount/accountSettings/insights/compareYou">
                  How you compare
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h4>4 Week Overview</h4>
            <p>May 23 - June 20</p>
          </div>
          <div className="d-flex">
            <div
              style={{ width: "170px", height: "120px" }}
              className="bg-light border rounded p-2 me-2"
            >
              <h5>Views</h5>
              <h3>0</h3>
              <p>
                <span className="text-info me-2">
                  <BsArrowUp /> $0
                </span>{" "}
                vs. a week ago
              </p>
            </div>
            <div
              style={{ width: "170px", height: "120px" }}
              className="bg-light border rounded p-2 me-2"
            >
              <h5>Leads</h5>
              <h3>0</h3>
              <p>
                <span className="text-info me-2">
                  <BsArrowUp /> $0
                </span>
                vs. a week ago
              </p>
            </div>
            <div
              style={{ width: "170px", height: "120px" }}
              className="bg-light border rounded p-2"
            >
              <h5>Spent</h5>
              <h3>0</h3>
              <p>
                <span className="text-info me-2">
                  <BsArrowUp /> $0
                </span>{" "}
                vs. a week ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Widgets;
