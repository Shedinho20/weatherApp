import React from "react";

class Hour extends React.Component {
    converter = temp => {
        return (temp - 273).toFixed(0);
    };
    render() {
        const { icon } = this.props.hour.weather[0];
        const { dt, temp, feels_like } = this.props.hour;
        const day = new Date(dt * 1000).toLocaleString("en-US", { hour: "numeric" });
        return (
            <div id="hour">
                <h3 className="exacthour">{day}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                <div id="tempHr">
                    <div className="temp">
                        {this.converter(temp)} <span>°C</span>
                    </div>
                    <div className="tempFeel">
                        {this.converter(feels_like)} <span>°C</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hour;
