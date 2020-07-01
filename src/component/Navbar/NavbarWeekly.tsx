import React from "react";
import Day from "../Days/Day";
import { NavbarWekly } from "../Interface";

class NavbarWeekly extends React.Component<NavbarWekly> {
  render() {
    return (
      <div className="WeeklyNav">
        {this.props.days.map((day) => (
          <Day day={day} keyClicked={this.props.keyClicked} converter={this.props.converter} info={this.props.info} />
        ))}
      </div>
    );
  }
}

export default NavbarWeekly;
