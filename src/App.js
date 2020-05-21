import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import Weekly from "./component/Weekly";
class App extends React.Component {
    state = {
        days: [],
        Hours: [],
        current: [],
        Timezone: "",
        currentWeather: [],
    };

    componentDidMount() {
        this.checkGeo();
    }

    //when application starts, check of the webpage has ability to use Geolocatio.
    checkGeo = () => {
        if ("geolocation" in navigator) {
            this.weatherData();
        }
    };

    weatherData = async () => {
        const position = await this.getCoordinates();
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c4bf502f01ad796b2ae93a93063fccb2`;
        const res = await fetch(url);
        const data = await res.json();
        const daily = data.daily;
        const dailyneed = this.dailyfilter(daily);
        this.weatherDataSeter(data, dailyneed);
    };

    // filter all the daily data gotten from the API to collect just 5
    dailyfilter = (daily) => {
        let dailyneed = [];
        daily.forEach((element) => {
            if (dailyneed.length < 5) {
                dailyneed.push(element);
            }
        });
        return dailyneed;
    };

    // return a promise which gives our location when its resolved
    getCoordinates = (option = {}) => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, option);
        });
    };

    //Set the state for the weather App
    weatherDataSeter = (data, dailyneed) => {
        this.setState({ days: dailyneed });
        this.setState({ Timezone: data.timezone });
        this.setState({ Hours: data.hourly });
        this.setState({ current: data.current });
        this.setState({ currentWeather: data.current.weather[0] });
    };

    converter = (temp) => {
        return (temp - 273).toFixed(0);
    };

    time = (dt) => {
        return new Date(dt * 1000).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    };
    date = (dt) => {
        return new Date(dt * 1000).toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric" });
    };

    Weekday = (dt) => {
        return new Date(dt * 1000).toLocaleString("en-US", { weekday: "long" });
    };

    wind_speed = (wind_speed) => {
        return parseFloat(wind_speed).toFixed(1);
    };

    Location = (loc) => {
        const b = loc.split("");
        let place = null;
        b.forEach((element, index) => {
            if (element === "/") {
                place = loc.slice(index + 1);
            }
        });
        return place;
    };
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar Location={this.Location} Timezone={this.state.Timezone} />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={(props) => (
                                <Home
                                    {...props}
                                    current={this.state.current}
                                    currentWeather={this.state.currentWeather}
                                    Timezone={this.state.Timezone}
                                    converter={this.converter}
                                    time={this.time}
                                    date={this.date}
                                    wind_speed={this.wind_speed}
                                    Location={this.Location}
                                />
                            )}
                        />
                        <Route
                            strict
                            path="/Weekly"
                            component={() => (
                                <Weekly
                                    days={this.state.days}
                                    Hours={this.state.Hours}
                                    converter={this.converter}
                                    Weekday={this.Weekday}
                                    wind_speed={this.wind_speed}
                                />
                            )}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
