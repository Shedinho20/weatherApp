import React from "react";
import Day1 from "../Days/Day1";
import Day2 from "../Days/Day2";

class NavbarWeekly extends React.Component {
    render() {
        return (
            <div className="WeeklyNav">
                <Day1
                    keyClicked={this.props.keyClicked}
                    days={this.props.days}
                    info={this.props.info}
                    wind_speed={this.props.wind_speed}
                    converter={this.props.converter}
                    Weekday={this.props.Weekday}
                />
                <Day2 day={this.props.days[1]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day2 day={this.props.days[2]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day2 day={this.props.days[3]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day2 day={this.props.days[4]} keyClicked={this.props.keyClicked} info={this.props.info} />
            </div>
        );
    }
}

export default NavbarWeekly;
