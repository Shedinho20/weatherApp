import React from "react";
import Day from "./Day";
// import { NavLink as Link } from "react-router-dom";

class Day1 extends React.Component {
    render() {
        const day = this.props.days[0];
        if (day == null) return null;
        else {
            const { max, min } = day.temp;
            const { dt, wind_speed } = day;
            const { icon } = day.weather[0];
            return (
                <div className="day1">
                    <div id="day1maxTemp">
                        <h1>{this.props.converter(max)}°C</h1>
                        <h3> {this.props.Weekday(dt)}</h3>
                    </div>
                    <div id="day1maximg">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                        <h3>
                            {this.props.wind_speed(wind_speed)}
                            M/S / {this.props.converter(min)}°C
                        </h3>
                    </div>
                </div>
            );
        }
    }
}

export default Day1;
