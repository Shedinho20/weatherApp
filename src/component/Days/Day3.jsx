import React from "react";
import Day from "./Day";
import { NavLink as Link } from "react-router-dom";

class Day3 extends React.Component {
    render() {
        const day = this.props.days[2];
        if (day == null) return null;
        else {
            return (
                <div className="box">
                    <Link key={day.dt} to={`/day${day.dt}`} activeClassName="active">
                        <Day day={day} />
                    </Link>
                </div>
            );
        }
    }
}

export default Day3;
