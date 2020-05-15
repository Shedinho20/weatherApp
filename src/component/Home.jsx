import React from "react";

class Home extends React.Component {
    render() {
        const { feels_like, temp, sunset, sunrise, dt, wind_speed } = this.props.current;
        const { icon, main } = this.props.currentWeather;
        const Timezone = this.props.Timezone;
        return (
            <div className="home">
                <div className="homeBanner">
                    <div id="weatherHome">
                        <h3 className="secColor">{this.props.date(dt)}</h3>
                        <h2>{this.props.Location(Timezone)}</h2>
                    </div>
                    <div id="weatherHome2">
                        <div className="weatherHome2" id="main">
                            <h1>{this.props.converter(temp)}°C</h1>
                            <h3>FEELS LIKE {this.props.converter(feels_like)}°C</h3>
                        </div>
                        <div id="infoHomeInner1">
                            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                            <h3>{main}</h3>
                        </div>

                        <div className="weatherHome2" id="infoHome">
                            <div id="infoHomeInner">
                                <img src="/images/sunrise.png" alt="sunrise" />
                                <h3>Sunrise</h3>
                            </div>
                            <h2>{this.props.time(sunrise)}</h2>
                        </div>
                        <div className="weatherHome2" id="infoHome">
                            <div id="infoHomeInner">
                                <img src="/images/sunset.png" alt="sunrise" />
                                <h3>Sunset</h3>
                            </div>
                            <h2>{this.props.time(sunset)}</h2>
                        </div>
                        <div className="weatherHome2" id="infoHome">
                            <div id="infoHomeInner">
                                <img src="/images/wind.png" alt="sunrise" />
                                <h3>Wind</h3>
                            </div>
                            <h2>{this.props.wind_speed(wind_speed)} M/S</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
