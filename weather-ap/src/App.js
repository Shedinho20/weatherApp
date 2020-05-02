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
        days: [
            { dt: 1588064400, temp_min: 38, temp_max: 45, day: "Mon", icon: "10d" },
            { dt: 1588150800, temp_min: 38, temp_max: 45, day: "Tue", icon: "10d" },
            { dt: 1588237200, temp_min: 23, temp_max: 78, day: "Wed", icon: "01d" },
            { dt: 1588323600, temp_min: 19, temp_max: 55, day: "Thu", icon: "10n" },
            { dt: 1588410000, temp_min: 20, temp_max: 35, day: "Fri", icon: "10d" },
            { dt: 1588420000, temp_min: 20, temp_max: 35, day: "tt", icon: "10d" }
        ]
    };
    // async componentDidMount() {
    //     const url = "";
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     this.setState({ day: data });
    //     console.log(data);
    // }
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
