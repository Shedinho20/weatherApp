import React from "react";
import Day from "./Day";
import { NavLink as Link } from "react-router-dom";

class Day1 extends React.Component {
    render() {
        const day = this.props.days[0];
        if (day == null) return null;
        else {
            return (
                <div style={this.getStyle()}>
                    <Link key={day.dt} to={`/day${day.dt}`} activeClassName="active">
                        <Day day={day} />
                    </Link>
                </div>
            );
        }
    }
    getStyle = () => {
        return {
            display: "flex",
            justifyContent: "center"
        };
    };
}

export default Day1;
