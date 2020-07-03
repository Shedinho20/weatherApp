import React from "react";
import Day from "../Days/Day";
import { NavbarWekly, State } from "../Interface";
import { connect } from "react-redux";

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

const mapStateToProps = (state: State) => ({
  days: state.weather.days,
});
export default connect(mapStateToProps)(NavbarWeekly);
