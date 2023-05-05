import "./Footer.scss";
import Navbar from "../navbar/Navbar";
import fabcebookLogo from "./../../images/icon-facebook.svg";
import tiwtterLogo from "./../../images/icon-twitter.svg";
import pinterestLogo from "./../../images/icon-pinterest.svg";
import instagramLogo from "./../../images/icon-instagram.svg";

function RightSection() {
  return (
    <div>
      <div className="Footer-right-section">
        <div className="social-links">
          <div className="facebook img-box">
            <img src={fabcebookLogo} alt="Social media Icons" />
          </div>
          <div className="twitter img-box">
            <img src={tiwtterLogo} alt="Social media Icons" />
          </div>
          <div className="pinterest img-box">
            <img src={pinterestLogo} alt="Social media Icons" />
          </div>
          <div className="instagram img-box">
            <img src={instagramLogo} alt="Social media Icons" />
          </div>
        </div>
        <div className="copyright">
          &copy; 2021 Loopstudios. All rights reserved.
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="Footer-left-section">
        </div>
        <RightSection />
      </div>
    </div>
  );
}

export default Footer;
