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
import { getCoordinates } from "./component/converter";

class App extends React.Component<AppState> {
  componentDidMount() {
    this.checkGeo();
    // this.setState({ isLoading: this.props.isLoading });
  }

  async checkGeo() {
    if ("geolocation" in navigator) {
      const position = await this.postion();
      this.props.fetchWeather(position);
    }
  }

  async postion() {
    let position: any;
    position = await getCoordinates();
    return position;
  }

  render() {
    if (this.props.isLoading === true) {
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

const mapStateToProps = (state: State) => {
  return {
    current: state.weather.current,
    isLoading: state.weather.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchWeather: (position: any) => dispatch(fetchWeather(position)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
