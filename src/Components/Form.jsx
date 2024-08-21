export default function Form() {
  return (
    <div className="col-8 mt-5 mx-auto p-2 mb-5 ">
      <h1 className="mb-3 text-center">Lets Work Together</h1>
      <form action="" className="row g-3 m-5 p-3 border border-dark rounded">
        <div className="mb-3 col-6">
          <label htmlFor="FirstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="LastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="ContactNumber" className="form-label">
            Contact Number
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="Role" className="form-label">
            Role you are applying For
          </label>
          <input type="text" className="form-control" id="" required />
        </div>
        <div className="mb-3">
          <label htmlFor="YourResume" className="form-label">
            Your Resume
          </label>
          <input type="file" className="form-control" id="" required />
        </div>
        <div className="mb-3">
          <label htmlFor="FirstName" className="form-label">
            Leave your Comment/ Cover Letter
          </label>
          <textarea
            name="Comment"
            id=""
            className="form-control"
            rows={3}
          ></textarea>
        </div>
        <button className="btn btn-success">SUBMIT</button>
      </form>
    </div>
  );
}
