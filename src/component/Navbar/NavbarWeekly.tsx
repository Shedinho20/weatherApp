import React from "react";
import Day from "../Days/Day";

interface NavbarWekly {
  keyClicked: (dt: number) => void;
  info: number;
  days: {
    dt: number;
    temp: Temp;
    weather: [Icon];
  }[];
}
interface Icon {
  icon: string;
}
interface Temp {
  max: number;
}
class NavbarWeekly extends React.Component<NavbarWekly> {
  render() {
    return (
      <div className="WeeklyNav">
        {this.props.days.map((day) => (
          <Day day={day} keyClicked={this.props.keyClicked} info={this.props.info} />
        ))}
      </div>
    );
  }
}

export default NavbarWeekly;
