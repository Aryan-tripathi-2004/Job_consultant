export default function Footer() {
  return (
    <footer>
      <div className="footer-outer mt-5">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="vite.svg" alt="logo" />
              <h2>Saarthi</h2>
            </div>
            <h3 className="ms-2">We are Here For You (❁´◡`❁).</h3>
          </div>

          <div className="footer-right">
            <div className="opt-1 opt-Margin">
              <h3>Solutions</h3>
              <a href="#">Marketing</a>
              <a href="#">Analystics</a>
              <a href="#">Commerce</a>
              <a href="#">Insight</a>
            </div>

            <div className="opt-2 opt-Margin">
              <h3>Support</h3>
              <a href="#">Pricing</a>
              <a href="#">Documentation</a>
              <a href="#">Guides</a>
              <a href="#">API Status</a>
            </div>

            <div className="opt-3 opt-Margin">
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Partners</a>
            </div>

            <div className="opt-3 opt-Margin">
              <h3>Legal</h3>
              <a href="#">Claim</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <h4>&#169;2024 Your Company, Inc. All rights reserved.</h4>
      </div>
    </footer>
  );
}
