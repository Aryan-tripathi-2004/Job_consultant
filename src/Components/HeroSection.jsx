export default function HeroSection() {
  return (
    <div className="Hero col-10 d-flex mt-5 mb-5 mx-auto">
      <div className="col-5 mt-5 mx-5">
        <div className="mb-3 mt-5">
          <h1 className="mb-3 fw-bold">
            Welcome to <span className="text-info">Saathi</span>
          </h1>
          <h3 className="fs-3 fst-italic"> Make Your dreams come true</h3>
        </div>
        <p className="mb-5 fs-5 text-info text-opacity-75">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Autem, molestias?
        </p>
        <div className="mt-5">
          <button className="me-5 btn btn-primary px-4 py-2">
            Apply for Job
          </button>
          <button className="btn btn-info px-4 py-2">view More</button>
        </div>
      </div>
      <div className="HeroSectionImage mx-5 my-5">
        <img src="job_consultant.png" alt="" />
      </div>
    </div>
  );
}
