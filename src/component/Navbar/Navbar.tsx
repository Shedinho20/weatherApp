import React, { CSSProperties } from "react";
import { NavLink as Link } from "react-router-dom";
import { NavbarProps } from "../Interface";

class Navbar extends React.Component<NavbarProps> {
  state = {
    Isopen: false,
  };

  keyClicked = (): void => {
    this.setState({ Isopen: !this.state.Isopen });
  };

  getStyle = () => {
    if (this.state.Isopen)
      return {
        transform: "translatex(0)",
      };
  };
  getStyleLine1 = (): CSSProperties | undefined => {
    if (this.state.Isopen)
      return {
        transform: "rotate(45deg) translate(5px, 5px)",
      };
  };
  getStyleLine2 = (): CSSProperties | undefined => {
    if (this.state.Isopen)
      return {
        visibility: "hidden",
      };
  };
  getStyleLine3 = (): CSSProperties | undefined => {
    if (this.state.Isopen)
      return {
        zIndex: 3,
        transform: "rotate(-45deg) translate(5px, -5px)",
      };
  };
  render() {
    const timezone = this.props.timezone;
    return (
      <div className="bg-col">
        <div className="container">
          <div className="navBox">
            <img src="/images/favicon.ico" alt="icon" id="logo" />
            <ul className="navBar">
              <Link to="/" className="btn">
                <li>Home</li>
              </Link>
              <Link to="/Weekly" className="btn">
                <li>Weekly</li>
              </Link>
              <li id="locationNav">
                <button>
                  <img src="/images/Loc.svg" alt="" id="locationPin" />
                  {this.props.location(timezone)}
                </button>
              </li>
            </ul>
            <div id="menu" onClick={() => this.keyClicked()}>
              <div className="hamBurger line1" style={this.getStyleLine1()}></div>
              <div className="hamBurger line2" style={this.getStyleLine2()}></div>
              <div className="hamBurger line3" style={this.getStyleLine3()}></div>
            </div>
          </div>
          <ul id="menu-BTN" style={this.getStyle()}>
            <Link to="/" className="btn" onClick={() => this.keyClicked()}>
              <li>Home</li>
            </Link>
            <Link to="/Weekly" className="btn" onClick={() => this.keyClicked()}>
              <li>Weekly</li>
            </Link>
            <li id="locationNav">
              <img src="/images/Loc.svg" alt="" id="locationPin" />
              {this.props.location(timezone)}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
