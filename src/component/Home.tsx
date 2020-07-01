import React from "react";
import { Homeprops } from "./Interface";
import { connect } from "react-redux";
import { fetchWeather } from "../action/weatherAction";

class Home extends React.Component<Homeprops> {
  componentDidMount() {
    this.checkGeo();
  }

  checkGeo = () => {
    if ("geolocation" in navigator) {
      this.props.fetchWeather();
    }
  };

  render() {
    const { feels_like, temp, dt, wind_speed, sunrise, sunset } = this.props.current;
    const { icon, main } = this.props.weather;
    const Timezone = this.props.Timezone;
    return (
      <div className="home">
        <div className="homeBanner container">
          <div id="weatherHome">
            <h3 className="secColor">{this.props.date(dt)}</h3>
            <h2>{this.props.location(Timezone)}</h2>
          </div>
          <div id="weatherHome2">
            <div id="main">
              <h1>{this.props.converter(temp)}°C</h1>
              <h4 className="secColor">FEELS LIKE {this.props.converter(feels_like)}°C</h4>
            </div>
            <div id="infoHomeInner1">
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
              <h3>{main}</h3>
            </div>

            <div className="weatherHome2">
              <div id="infoHomeInner">
                <img src="/images/sunrise.png" alt="sunrise" />
                <h3>Sunrise</h3>
              </div>
              <h2>{this.props.time(sunrise)}</h2>
            </div>
            <div className="weatherHome2">
              <div id="infoHomeInner">
                <img src="/images/sunset.png" alt="sunrise" />
                <h3>Sunset</h3>
              </div>
              <h2>{this.props.time(sunset)}</h2>
            </div>
            <div className="weatherHome2">
              <div id="infoHomeInner">
                <img src="/images/wind.png" alt="sunrise" />
                <h3>Wind</h3>
              </div>
              <h2>{wind_speed} M/S</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  current: state.weather.current,
  weather: state.weather.weather,
});
export default connect(mapStateToProps, { fetchWeather })(Home);
