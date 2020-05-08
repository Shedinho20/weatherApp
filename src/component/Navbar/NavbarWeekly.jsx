import React from "react";
import Day1 from "../Days/Day1";
import Day2 from "../Days/Day2";
import Day3 from "../Days/Day3";
import Day4 from "../Days/Day4";
import Day5 from "../Days/Day5";

class NavbarWeekly extends React.Component {
    state = {};
    render() {
        return (
            <div className="weekly">
                <div className="WeeklyNav">
                    <Day1
                        days={this.props.days}
                        wind_speed={this.props.wind_speed}
                        converter={this.props.converter}
                        Weekday={this.props.Weekday}
                    />
                    <Day2 days={this.props.days} />
                    <Day3 days={this.props.days} />
                    <Day4 days={this.props.days} />
                    <Day5 days={this.props.days} />
                </div>
            </div>
        );
    }
}

export default NavbarWeekly;
