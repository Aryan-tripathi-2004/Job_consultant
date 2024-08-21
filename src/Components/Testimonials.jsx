import CarouselCard from "./CaroselCard";

export default function Testimonials() {
  return (
    <div className="col-10 mt-5 mx-auto">
      <div className="mx-auto">
        <h1 className="text-center">Our Customers are our biggest fans.</h1>
        <p className="col-5 mx-auto text-center">
          We do not like to brag, but we do not mind letting our customers do it
          for us. Here are a few nice things folks have said about our themes
          over the years.
        </p>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CarouselCard />
          </div>
          <div className="carousel-item">
            <CarouselCard />
          </div>
          <div className="carousel-item">
            <CarouselCard />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon border-dark border border-round p-4 rounded-5"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon border border-dark border-round p-4 rounded-5"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
