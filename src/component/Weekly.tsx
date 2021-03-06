import React from "react";
import NavbarWeekly from "./Navbar/NavbarWeekly";
import Hour from "./Hours/Hour";
import Slider from "react-slick";
import { WeeklyProps } from "./Interface";

class Weekly extends React.Component<WeeklyProps> {
  state = {
    hours: [],
    info: 0,
  };

  key = (dt: number): void => {
    const day = new Date(dt * 1000).toLocaleString("en-US", {
      day: "numeric",
    });
    let currenthr = this.props.Hours.filter(
      (hour) => day === new Date(hour.dt * 1000).toLocaleString("en-US", { day: "numeric" })
    );
    this.setState({ hours: currenthr });
    this.setState({ info: dt });
  };

  render() {
    // const hours = this.hours();

    if (this.state.hours.length === 0) {
      return (
        <div className=" weekly">
          <NavbarWeekly
            keyClicked={this.key}
            info={this.state.info}
            days={this.props.days}
            converter={this.props.converter}
          />
        </div>
      );
    }
    return (
      // I need to position the Slider at the left top corner of the screen
      <div className=" weekly">
        <div className="container ">
          <div className="slidercon">
            <Slider slidesToShow={2} speed={300} slidesToScroll={2} infinite={false} className="slidecon">
              {this.state.hours.map((hour) => (
                <Hour hour={hour} />
              ))}
            </Slider>
          </div>
          <NavbarWeekly
            keyClicked={this.key}
            info={this.state.info}
            days={this.props.days}
            converter={this.props.converter}
          />
        </div>
      </div>
    );
  }
}

export default Weekly;
