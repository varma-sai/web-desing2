import { Link } from "react-router-dom";
import "./NavLinks.scss";
// import { useState } from "react";
function NavLinks(props) {
  //   const [styleLink, styleMenu] = useState("links");
  return (
    <>
      {/* <div className="links"> */}
      <div className={props.MenuStyle}>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/careers">
          Careers
        </Link>
        <Link className="link" to="/events">
          Events
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
        <Link className="link" to="/support">
          Support
        </Link>
      </div>
    </>
  );
}

export default NavLinks;
