import React from "react";

class Day extends React.Component {
    state = {};
    render() {
        const { temp_max, temp_min, day, icon } = this.props.day;
        return (
            <div className="Box">
                <h3>{day}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                <div id="temp">
                    <div className="temp">
                        {temp_max} <span>°C</span>
                    </div>
                    <div className="tempMin">
                        {temp_min} <span>°C</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day;
