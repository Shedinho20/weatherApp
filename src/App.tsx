import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import Weekly from "./component/Weekly";
import Loader from "./component/Loader";
import { AppProps, State } from "./component/Interface";

class App extends React.Component<AppProps, State> {
  state = {
    days: [],
    Hours: [],
    current: [],
    Timezone: "",
    currentWeather: [],
  };

  componentDidMount() {
    console.log("hello");

    this.checkGeo();
  }

  //when application starts, check of the webpage has ability to use Geolocatio.
  checkGeo = () => {
    if ("geolocation" in navigator) {
      this.weatherData();
    }
  };

  weatherData = async () => {
    let position: any;
    position = await this.getCoordinates();
    console.log(typeof position);
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c4bf502f01ad796b2ae93a93063fccb2`;
    const res = await fetch(url);
    const data = await res.json();
    const daily = data.daily;
    const dailyneed = this.dailyfilter(daily);
    this.weatherDataSeter(data, dailyneed);
  };

  // filter all the daily data gotten from the API to collect just 5
  dailyfilter = (daily: object[]): object[] => {
    let dailyneed: object[];
    dailyneed = [];
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
  weatherDataSeter = (data: any, dailyneed: object[]) => {
    this.setState({ days: dailyneed });
    this.setState({ Timezone: data.timezone });
    this.setState({ Hours: data.hourly });
    this.setState({ current: data.current });
    this.setState({ currentWeather: data.current.weather[0] });
  };

  converter = (temp: number): string => {
    return (temp - 273).toFixed(0);
  };

  time = (dt: number): string => {
    return new Date(dt * 1000).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  };
  date = (dt: number): string => {
    return new Date(dt * 1000).toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  windSpeed = (wind_speed: number): string => {
    return wind_speed.toFixed(1);
  };

  location = (loc: string): string => {
    const b = loc.split("");
    let place = "";
    b.forEach((element, index) => {
      if (element === "/") {
        place = loc.slice(index + 1);
      }
    });
    return place;
  };
  render() {
    if (this.state.currentWeather.length === 0) {
      return <Loader></Loader>;
    }
    return (
      <div className="App">
        <Navbar location={this.location} timezone={this.state.Timezone} />
        <Switch>
          <Route
            path="/"
            exact
            component={(props: any) => (
              <Home
                {...props}
                current={this.state.current}
                currentWeather={this.state.currentWeather}
                Timezone={this.state.Timezone}
                converter={this.converter}
                time={this.time}
                date={this.date}
                windSpeed={this.windSpeed}
                location={this.location}
              />
            )}
          />
          <Route
            strict
            path="/Weekly"
            component={(props: any) => (
              <Weekly
                {...props}
                days={this.state.days}
                Hours={this.state.Hours}
                converter={this.converter}
                windSpeed={this.windSpeed}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
