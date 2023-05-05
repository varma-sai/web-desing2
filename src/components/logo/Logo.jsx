import "./Logo.scss";
import logo from "./../../images/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Logo;
