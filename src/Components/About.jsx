export default function About() {
  return (
    <div className="d-flex mt-5 mb-5 col-10 mx-auto">
      <div className="col-6 mt-5 mx-5">
        <div>
          <h2 className="fs-1">Stay focused on your skills </h2>
          <h2 className="text-info fs-4">
            Let us handle the Job tension for you
          </h2>
        </div>
        <div className="mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          totam iste eius incidunt repellendus neque quasi itaque modi eos
          architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam, doloremque.
        </div>
        <div className="d-flex mt-4 features">
          <div>
            <h5>100%</h5>
            <h5>Satisfaction</h5>
          </div>
          <div>
            <h5>24/7</h5>
            <h5>support</h5>
          </div>
          <div>
            <h5>1000+</h5>
            <h5>Customers</h5>
          </div>
        </div>
      </div>
      <div>
        <img src="Achievement.png" alt="image" className="AcheivementImage" />
      </div>
    </div>
  );
}
