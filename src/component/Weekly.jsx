import React from "react";
import NavbarWeekly from "./Navbar/NavbarWeekly";
import Hour from "./Hours/Hour";
import Slider from "react-slick";

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
        console.log(hours);

        if (hours.length == 0) {
            return (
                <div className=" weekly">
                    <NavbarWeekly
                        keyClicked={this.key}
                        info={this.state.info}
                        days={this.props.days}
                        converter={this.props.converter}
                        Weekday={this.props.Weekday}
                        wind_speed={this.props.wind_speed}
                    />
                </div>
            );
        }
        return (
            <div className=" weekly">
                <div className="container ">
                    <div className="slidercon">
                        <Slider slidesToShow={2} speed={300} slidesToScroll={2} infinite={false} className="slidecon">
                            {hours.map((hour) => (
                                <Hour hour={hour} key={hour.dt} />
                            ))}
                        </Slider>
                    </div>
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
        );
    }
}

export default Weekly;
