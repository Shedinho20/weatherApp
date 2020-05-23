import React from "react";
import Day2 from "../Days/Day2";

class NavbarWeekly extends React.Component {
    render() {
        return (
            <div className="WeeklyNav">
                <Day2 day={this.props.days[0]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day2 day={this.props.days[1]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day2 day={this.props.days[2]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day2 day={this.props.days[3]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day2 day={this.props.days[4]} keyClicked={this.props.keyClicked} info={this.props.info} />
            </div>
        );
    }
}

export default NavbarWeekly;
