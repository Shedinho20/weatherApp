import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import Weekly from "./component/Weekly";
import Loader from "./component/Loader";
import { connect } from "react-redux";
import { fetchWeather } from "./action/weatherAction";
import { AppState, State } from "./component/Interface";

class App extends React.Component<AppState> {
  componentDidMount() {
    this.checkGeo();
    this.setState({ isLoading: this.props.isLoading });
  }

  checkGeo = (): void => {
    if ("geolocation" in navigator) {
      this.props.fetchWeather();
    }
  };
  render() {
    if (this.props.isLoading === undefined) {
      return <Loader></Loader>;
    }
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route strict path="/Weekly" component={Weekly} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  current: state.weather.current,
  isLoading: state.weather.isLoading,
});
export default connect(mapStateToProps, { fetchWeather })(App);
