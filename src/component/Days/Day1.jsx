import React from "react";

class Day1 extends React.Component {
    render() {
        const day = this.props.days[0];
        if (day == null) return null;
        else {
            const { max, min } = day.temp;
            const { dt, wind_speed } = day;
            const { icon } = day.weather[0];
            return (
                <div className="day1" onClick={() => this.props.keyClicked(dt)} style={this.getStyle()}>
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
    getStyle = () => {
        if (this.props.info == this.props.days[0].dt)
            return {
                backgroundColor: "#ffc93d",
            };
    };
}

export default Day1;
