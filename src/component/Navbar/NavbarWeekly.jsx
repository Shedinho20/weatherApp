import React from "react";
import Day from "../Days/Day";

class NavbarWeekly extends React.Component {
    render() {
        return (
            <div className="WeeklyNav">
                <Day day={this.props.days[0]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day day={this.props.days[1]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day day={this.props.days[2]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day day={this.props.days[3]} keyClicked={this.props.keyClicked} info={this.props.info} />
                <Day day={this.props.days[4]} keyClicked={this.props.keyClicked} info={this.props.info} />
            </div>
        );
    }
}

export default NavbarWeekly;
