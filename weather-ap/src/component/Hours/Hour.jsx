import React from "react";

class Hour extends React.Component {
    // para() {
    //     return dt;
    // }

    //     new Date(hour.dt * 1000).toLocaleString("en-US", { day: "numeric" }) ===
    //     new Date(this.props.dt * 1000).toLocaleString("en-US", { day: "numeric" })

    render() {
        // const { temp_max, temp_min, hour, icon } = this.props.hour;
        const { dt, temp_max, icon, temp_min } = this.props.hour;
        const day = new Date(dt * 1000).toLocaleString("en-US", { hour: "numeric" });
        return (
            <div id="hour">
                <h3 className="exacthour">{day}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                <div id="tempHr">
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

export default Hour;
