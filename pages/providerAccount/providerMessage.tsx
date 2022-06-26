import dynamic from "next/dynamic";
import { Fragment } from "react";
import { resetIdCounter, Tab, TabList, TabPanel } from "react-tabs";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
const ProviderMessage = () => {
  return (
    <Fragment>
      {/* <section className="listings-area listings-area-three pb-70"> */}
      <div className="container-fluid">
        <Tabs>
          <div className="row">
            <div className="col-md-3 col-lg-3">
              <div className="shorting-menu">
                <TabList className="list-unstyled">
                  <Tab>
                    <button className="filter" data-filter="all">
                      <i className="flaticon-category"></i> Messages
                    </button>
                  </Tab>

                  <Tab>
                    <button className="filter" data-filter=".restaurant">
                      <i className="flaticon-cooking"></i> Unread
                    </button>
                  </Tab>

                  <Tab>
                    <button className="filter" data-filter=".shopping">
                      <i className="flaticon-shopping-bags"></i> Archired
                    </button>
                  </Tab>

                  <Tab>
                    <button className="filter" data-filter=".hotel">
                      <i className="flaticon-hotel"></i> Sent quotes
                    </button>
                  </Tab>

                  <Tab>
                    <button className="filter" data-filter=".fitness">
                      <i className="flaticon-exercise"></i> Starred
                    </button>
                  </Tab>

                  <Tab>
                    <button className="filter" data-filter=".beautySpa">
                      <i className="flaticon-cleansing"></i> Pending
                    </button>
                  </Tab>
                  <Tab>
                    <button className="filter" data-filter=".beautySpa">
                      <i className="flaticon-cleansing"></i> Job confirmed
                    </button>
                  </Tab>
                  <Tab>
                    <button className="filter" data-filter=".beautySpa">
                      <i className="flaticon-cleansing"></i> Job done
                    </button>
                  </Tab>
                  <Tab>
                    <button className="filter" data-filter=".beautySpa">
                      <i className="flaticon-cleansing"></i> Not hired
                    </button>
                  </Tab>
                </TabList>
              </div>
            </div>
            <div className="col-md-9 col-lg-9">
              <div className="shorting">
                <div className="row">
                  <TabPanel>
                    <h3>Your Messages</h3>
                  </TabPanel>

                  <TabPanel>
                    <h3>Unread Messages</h3>
                  </TabPanel>

                  <TabPanel>
                    <h3>Your Archive</h3>
                  </TabPanel>

                  <TabPanel>
                    <h3>Sent quotes</h3>
                  </TabPanel>

                  <TabPanel>
                    <h3>Starred</h3>
                  </TabPanel>

                  <TabPanel>
                    <h3>Pending</h3>
                  </TabPanel>
                  <TabPanel>
                    <h3>Job confirmed</h3>
                  </TabPanel>
                  <TabPanel>
                    <h3>Job Done</h3>
                  </TabPanel>
                  <TabPanel>
                    <h3>Not hired</h3>
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
      {/* </section> */}
    </Fragment>
  );
};
export default ProviderMessage;
