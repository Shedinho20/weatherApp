import React from "react";

class Day extends React.Component {
    converter = (temp) => {
        return (temp - 273).toFixed(0);
    };
    day = (dt) => {
        return new Date(dt * 1000).toLocaleString("en-US", { weekday: "short" });
    };

    dayNum = (dt) => {
        return new Date(dt * 1000).toLocaleString("en-US", { day: "numeric" });
    };
    render() {
        const { max, min } = this.props.day.temp;
        const { dt } = this.props.day;
        const { icon } = this.props.day.weather[0];

        return (
            <div className="Box">
                <h3>
                    {this.day(dt)}, {this.dayNum(dt)}
                </h3>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                <div id="temp">
                    <div className="temp">
                        {this.converter(max)} <span>°C</span>
                    </div>
                    <div className="tempMin">
                        {this.converter(min)} <span>°C</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day;
