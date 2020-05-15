import React from "react";
import NavbarWeekly from "./Navbar/NavbarWeekly";
import Hour from "./Hours/Hour";
class Weekly extends React.Component {
    state = {
        info: "",
    };
    key = (dt) => {
        this.setState({ info: dt });
    };

    hours = () => {
        if (this.state.info !== null) {
            const day = new Date(this.state.info * 1000).toLocaleString("en-US", { day: "numeric" });
            const currenthr = this.props.Hours.filter(
                (hour) => day === new Date(hour.dt * 1000).toLocaleString("en-US", { day: "numeric" })
            );
            return currenthr;
        }
    };

    render() {
        const hours = this.hours();

        return (
            <div className="weekly">
                <div className="weeklybanner">
                    <div className="Hour">
                        {hours.map((hour) => (
                            <Hour hour={hour} key={hour.dt} />
                        ))}
                    </div>
                    <div>
                        <NavbarWeekly
                            keyClicked={this.key}
                            info={this.state.info}
                            days={this.props.days}
                            converter={this.props.converter}
                            Weekday={this.props.Weekday}
                            wind_speed={this.props.wind_speed}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Weekly;
