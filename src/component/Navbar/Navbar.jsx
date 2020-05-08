import React from "react";
import { NavLink as Link } from "react-router-dom";

class Navbar extends React.Component {
    state = {};
    render() {
        const Timezone = this.props.Timezone;
        return (
            <div className="navBox">
                <img src="/images/favicon.ico" alt="icon" />
                <ul className="navBar">
                    <Link to="/" className="btn">
                        <li>Home</li>
                    </Link>
                    <Link to="/Weekly" className="btn">
                        <li>Weekly</li>
                    </Link>
                    <li id="locationNav">
                        <img src="/images/Loc.svg" alt="" id="locationPin" />
                        {this.props.Location(Timezone)}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
