import Link from "next/link";

const ManageBusiness = () => {
  return (
    <>
      <section className="manage-your-business-area bg-main-color">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="manage-your-business-image">
                <img src="/images/woman.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="manage-your-business-content">
                <h2>
                  Share your knowledge and make money . Become an expert on
                  Consult24
                </h2>
                <Link href="/dashboard/add-listing">
                  <a className="default-btn">
                    <i className="flaticon-more"></i> Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageBusiness;
