export default function NavBar() {
  return (
    <nav className="sticky-top bg-white border-bottom border-dark">
      <div className="d-flex justify-content-between align-items-center my-3 mx-5">
        <div className="LogoText">
          <a href="#">
            <div className="d-flex">
              <img src="vite.svg" alt="Logo" />
              <h3>Saarthi</h3>
            </div>
          </a>
        </div>
        <div>
          <ul className="NavOptions d-flex mt-3">
            <li>Home</li>
            <li>Form</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <button className="btn btn-success px-3 py-2">Log In</button>
        </div>
      </div>
    </nav>
  );
}
