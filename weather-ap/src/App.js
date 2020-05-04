import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day1 from "./component/Days/Day1";
import Day2 from "./component/Days/Day2";
import Day3 from "./component/Days/Day3";
import Day4 from "./component/Days/Day4";
import Day5 from "./component/Days/Day5";
import Hours from "./component/Hours/Hours";

class App extends React.Component {
    state = {
        days: []
    };
    async componentDidMount() {
        const url =
            "https://api.openweathermap.org/data/2.5/onecall?lat=6.5244&lon=3.3792&appid=c4bf502f01ad796b2ae93a93063fccb2";
        const res = await fetch(url);
        const data = await res.json();
        const daily = data.daily;
        let dailyneed = [];
        const dailyfilter = daily.forEach(element => {
            if (dailyneed.length < 5) {
                dailyneed.push(element);
            }
        });

        this.setState({ days: dailyneed });
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="navBar">
                        <Day1 days={this.state.days} />
                        <Day2 days={this.state.days} />
                        <Day3 days={this.state.days} />
                        <Day4 days={this.state.days} />
                        <Day5 days={this.state.days} />
                    </div>
                    <Switch>
                        <Route path="/day:dt" component={props => <Hours {...props} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
