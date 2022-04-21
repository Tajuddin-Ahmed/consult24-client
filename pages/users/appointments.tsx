import cls from "./profile.module.css";
const Appointment = () => {
  return (
    <>
      <h5 className={`text-center text-white ${cls.font}`}>Appointments</h5>
      <div className="pb-1">
        <button className={` btn btn-outline-light  float-end ${cls.font}`}>
          Make Appointment
        </button>
      </div>
      <div className={`mt-5 bg-white p-2 rounded ${cls.font}`}>
        <h6 className="pb-2">Current Appointment</h6>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`mt-2 bg-white p-2 rounded ${cls.font}`}>
        <h6 className="pb-2">Past Appointment</h6>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Start-Date</th>
              <th scope="col">End-Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>done</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>done</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>done</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`mt-2 bg-white p-2 rounded ${cls.font}`}>
        <h6 className="pb-2">Preferred Providers List</h6>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Pro Name</th>
              <th scope="col">Service Name</th>
              <th scope="col">Appointment Start</th>
              <th scope="col">Appointment End</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>done</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>done</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>done</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Appointment;
