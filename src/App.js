import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day1 from "./component/Days/Day1";
import Day2 from "./component/Days/Day2";
import Day3 from "./component/Days/Day3";
import Day4 from "./component/Days/Day4";
import Day5 from "./component/Days/Day5";
import Hours from "./component/Hours/Hours";
import Location from "./component/place";
class App extends React.Component {
    state = {
        days: [],
        Hours: [],
        Timezone: ""
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
    dailyfilter = daily => {
        let dailyneed = [];
        daily.forEach(element => {
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
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Location Timezone={this.state.Timezone} />
                    <div className="navBar">
                        <Day1 days={this.state.days} />
                        <Day2 days={this.state.days} />
                        <Day3 days={this.state.days} />
                        <Day4 days={this.state.days} />
                        <Day5 days={this.state.days} />
                    </div>
                    <Switch>
                        <Route path="/day:dt" component={props => <Hours {...props} Hours={this.state.Hours} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
