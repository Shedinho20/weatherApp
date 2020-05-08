import React from "react";
import NavbarWeekly from "./Navbar/NavbarWeekly";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hours from "./Hours/Hours";

class Weekly extends React.Component {
    state = {};
    render() {
        return (
            <Router>
                <div className="weekly">
                    <Switch>
                        {/* <Route path="/day:dt" component={(props) => <Hours {...props} Hours={this.props.Hours} />} /> */}
                    </Switch>
                    <NavbarWeekly
                        days={this.props.days}
                        converter={this.props.converter}
                        Weekday={this.props.Weekday}
                        wind_speed={this.props.wind_speed}
                    />
                </div>
            </Router>
        );
    }
}

export default Weekly;
