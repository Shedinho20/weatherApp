import React from "react";
import NavbarWeekly from "./Navbar/NavbarWeekly";
import Hour from "./Hours/Hour";
import Slider from "react-slick";

interface WeeklyProps {
  Hours: {
    dt: number;
    feels_like: number;
    weather: [Icon];
  }[];
  converter: (temp: number) => string;
  days: {
    dt: number;
    temp: Temp;
    weather: [Icon];
  }[];
}

interface Icon {
  icon: string;
}
interface Temp {
  max: number;
}

class Weekly extends React.Component<WeeklyProps> {
  state = {
    info: 0,
  };
  key = (dt: number): void => {
    this.setState({ info: dt });
  };

  hours = (): object[] | undefined => {
    let currenthr: object[];
    if (this.state.info !== 0) {
      const day = new Date(this.state.info * 1000).toLocaleString("en-US", {
        day: "numeric",
      });
      currenthr = this.props.Hours.filter(
        (hour) => day === new Date(hour.dt * 1000).toLocaleString("en-US", { day: "numeric" })
      );
      return currenthr;
    }
  };

  render() {
    const hours = this.hours();

    if (hours.length === 0) {
      return (
        <div className=" weekly">
          <NavbarWeekly keyClicked={this.key} info={this.state.info} days={this.props.days} />
        </div>
      );
    }
    return (
      // I need to position the Slider at the left top corner of the screen
      <div className=" weekly">
        <div className="container ">
          <div className="slidercon">
            <Slider slidesToShow={2} speed={300} slidesToScroll={2} infinite={false} className="slidecon">
              {hours.map((hour) => (
                <Hour hour={hour} key={hour.dt} />
              ))}
            </Slider>
          </div>
          <NavbarWeekly keyClicked={this.key} info={this.state.info} days={this.props.days} />
        </div>
      </div>
    );
  }
}

export default Weekly;
