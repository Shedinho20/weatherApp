import React from "react";
import { Hourprop } from "../Interface";

class Hour extends React.Component<Hourprop> {
  converter = (temp: number) => {
    return (temp - 273).toFixed(0);
  };
  render() {
    const { icon } = this.props.hour.weather[0];
    const { dt, feels_like } = this.props.hour;
    const day = new Date(dt * 1000).toLocaleString("en-US", { hour: "numeric" });
    return (
      <div className="BoxHour">
        <h3>{day}</h3>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
        <h2>
          {this.converter(feels_like)} <span>°C</span>
        </h2>
      </div>
    );
  }
}

export default Hour;
