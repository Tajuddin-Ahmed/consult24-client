const UserInfo = () => {
  return (
    <>
      <h5 className="pb-2 text-white">User info</h5>
      <div className="row  gx-3 rounded">
        <div className="col-md-4 bg-white shadow-sm p-2">
          <div className="text-center">
            <label
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <input type="file" className="d-none" />
              <img
                src="/images/profile/profileImg.jpg"
                width="170px"
                height="170px"
                alt="image"
              />
            </label>
            <br />
            <label
              style={{
                border: "1px solid #ccc",
                display: "inline-block",
                padding: "4px 8px",
                cursor: "pointer",
                backgroundColor: "steelblue",
                color: "white",
                borderRadius: "3px",
              }}
            >
              <input className="d-none" type="file" />
              Upload Photo
            </label>
          </div>
        </div>
        <div className="col-md-8 bg-white shadow-sm p-3">
          <h6>Name:Alom Hossain</h6>
          <p>Email:user123@gmail.com</p>
          <address>location:</address>
          <div className="row gx-1">
            <div
              className="col-md-6 text-center py-4"
              style={{
                backgroundColor: "lightblue",
                width: "45%",
                marginRight: "10%",
              }}
            >
              <h6>0</h6>
              <p>Projects</p>
            </div>
            <div
              className="col-md-6 text-center py-3"
              style={{ backgroundColor: "lightyellow", width: "45%" }}
            >
              <h6>0</h6>
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
