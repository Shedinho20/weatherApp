import React from "react";
import Day from "./Day";

class Day2 extends React.Component {
    render() {
        const day = this.props.day;
        if (day == null) return null;
        else {
            return (
                <div className="box" onClick={() => this.props.keyClicked(day.dt)} style={this.getStyle()}>
                    <Day day={this.props.day} />
                </div>
            );
        }
    }
    getStyle = () => {
        if (this.props.info == this.props.day.dt)
            return {
                backgroundColor: "#ffc93d",
            };
    };
}

export default Day2;
