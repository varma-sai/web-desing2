import "./navbar.scss";
import React from "react";
import menuLogo from "./../../images/icon-hamburger.svg";
import closeLogo from "./../../images/icon-close.svg";
import Media from "react-media";
import { Link } from "react-router-dom";
import Logo from "./../logo/Logo";

// navLinks
function NavLinks(props) {
  return (
    <>
      <div className={props.css}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/worldWide">
          Worldwide
        </Link>
        <Link className="link" to="/symptoms">
          Symptoms
        </Link>
        <Link className="link" to="/needHelp">
          Need Help
        </Link>
      </div>
    </>
  );
}
//  navLinks End

//
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <div className="menu">
          {this.state.isToggleOn ? (
            <img src={menuLogo} alt="Menu" />
          ) : (
            <div className="closeMenu">
              <div className="logo-and-Menu">
                <Logo />
                <img className="close-img" src={closeLogo} alt="Menu" />
              </div>
              <NavLinks css="menuLinks" />
              {/* <h1> Heading 2</h1> */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

//
function Menu() {
  return <Toggle />;
}
function Navbar(props) {
  return (
    <div className="navbar">
      <Logo />
      <Media queries={{ MediumScreen: "(max-width: 875px)" }}>
        {(matches) => (matches.MediumScreen ? <Menu /> : <div></div>)}
      </Media>
      <NavLinks css={props.navCss} />
    </div>
  );
}

export default Navbar;
