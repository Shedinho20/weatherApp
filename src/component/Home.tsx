import React from "react";

interface Home {
    current: { feels_like: number; temp: number; dt: number; wind_speed: any };
    currentWeather: { icon: string; main: string };
    Timezone: string;
    location: (loc: string) => string;
    converter: (temp: number) => string;
    time: (dt: number) => string;
    date: (dt: number) => string;
    windSpeed: (wind_speed: string) => string;
}

class Home extends React.Component<Home> {
    render() {
        const { feels_like, temp, dt, wind_speed } = this.props.current;
        const { icon, main } = this.props.currentWeather;
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

                        {/* <div className="weatherHome2">
                            <div id="infoHomeInner">
                                <img src="/images/sunrise.png" alt="sunrise" />
                                <h3>Sunrise</h3>
                            </div>
                            <h2>{this.props.time(sunrise)}</h2>
                        </div> */}
                        {/* <div className="weatherHome2">
                            <div id="infoHomeInner">
                                <img src="/images/sunset.png" alt="sunrise" />
                                <h3>Sunset</h3>
                            </div>
                            <h2>{this.props.time(sunset)}</h2>
                        </div> */}
                        <div className="weatherHome2">
                            <div id="infoHomeInner">
                                <img src="/images/wind.png" alt="sunrise" />
                                <h3>Wind</h3>
                            </div>
                            <h2>{this.props.windSpeed(wind_speed)} M/S</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
