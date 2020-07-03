import React, { CSSProperties } from "react";
import { NavLink as Link } from "react-router-dom";
import { NavbarProps, State } from "../Interface";
import { connect } from "react-redux";
import { location } from "../converter";

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
        zIndex: 4,
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
                  {location(timezone)}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  timezone: state.weather.Timezone,
});
export default connect(mapStateToProps)(Navbar);
