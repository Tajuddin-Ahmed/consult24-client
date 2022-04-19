import cls from "./profile.module.css";
const Notification = () => {
  return (
    <>
      <h6 className="text-white text-center">Notification</h6>
      <label className={`text-white ${cls.font}`}>
        Get push notifications about
      </label>
      <div className="border bg-white shadow rounded">
        <div className="border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Messages</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              Pros send you messages
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
        <div className="border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Promotion and tips</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              There are coupons, promotions, surveys,and project ideas you might
              like.
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
        <div className="border border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Account support</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              We have updates about your account, projects, and security/privacy
              matters.
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
      </div>
      <label htmlFor="" className={`text-white ${cls.font}`}>
        Text me about
      </label>
      <div className="border bg-white shadow rounded mt-1">
        <div className="border d-flex align-items-center justify-content-between">
          <div className={cls.font}>All Text Notifications</div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
      </div>
      <label className={`text-white ${cls.font}`}>Email me about</label>
      <div className="border bg-white shadow rounded">
        <div className="border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Helpful tips and inspiration</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              Cost guides, project checklists, and tips from consult24 pros
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
        <div className="border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Recommendations</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              Personalized suggestions for projects, pros, and more
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
        <div className="border border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Special Offers</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              Discounts, rewards, and promotions
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
        <div className="border border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Invitations to give feedback</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              Quick surveys to get your ideas for improving Consult24
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
        <div className="border border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Reminders</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              Incomplete request reminders, recurring project reminders, and
              more
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
        <div className="border border d-flex align-items-center justify-content-between">
          <div>
            <span className={cls.font}>Other</span>
            <p style={{ fontSize: "12px" }} className={cls.font}>
              Feature updates and product announcements
            </p>
          </div>
          <div className="form-check form-switch" style={{ fontSize: "22px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            ></label>
          </div>
        </div>
      </div>
      <button className={`btn btn-warning mt-1 ${cls.font}`}>
        Unsubscribe All
      </button>
    </>
  );
};
export default Notification;
