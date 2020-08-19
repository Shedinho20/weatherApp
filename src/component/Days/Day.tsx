import React, { CSSProperties } from "react";
import { Dayprops } from "../Interface";
import { converter, day, dayNum } from "../converter";

class Day extends React.Component<Dayprops> {
  render() {
    const { max } = this.props.day.temp;
    const { dt } = this.props.day;
    const { icon } = this.props.day.weather[0];

    return (
      <div onClick={() => this.props.keyClicked(dt)} style={this.getStyle()}>
        <div className="Box">
          <h3>
            {day(dt)}, {dayNum(dt)}
          </h3>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
          <h2>
            {converter(max)} <span>°C</span>
          </h2>
        </div>
      </div>
    );
  }
  getStyle = (): CSSProperties | undefined => {
    if (this.props.info === this.props.day.dt)
      return {
        backgroundColor: "#ffc93d",
      };
  };
}

export default Day;
