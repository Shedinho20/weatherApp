import React, { CSSProperties } from "react";

interface Dayprops {
    day: {
        dt: number;
        temp: Temp;
        weather: [Icon];
    };
    info: number;
    keyClicked: (dt: number) => void;
}
interface Icon {
    icon: string;
}
interface Temp {
    max: number;
}
class Day extends React.Component<Dayprops> {
    converter = (temp: number): string => {
        return (temp - 273).toFixed(0);
    };
    day = (dt: number): string => {
        return new Date(dt * 1000).toLocaleString("en-US", { weekday: "short" });
    };

    dayNum = (dt: number): string => {
        return new Date(dt * 1000).toLocaleString("en-US", { day: "numeric" });
    };
    render() {
        const { max } = this.props.day.temp;
        const { dt } = this.props.day;
        const { icon } = this.props.day.weather[0];

        return (
            <div onClick={() => this.props.keyClicked(dt)} style={this.getStyle()}>
                <div className="Box">
                    <h3>
                        {this.day(dt)}, {this.dayNum(dt)}
                    </h3>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                    <h2>
                        {this.converter(max)} <span>°C</span>
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
