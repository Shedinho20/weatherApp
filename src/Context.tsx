import React, { Component } from "react";

const ProductContext = React.createContext({});

class Productprovider extends Component {
  state = {
    num: 24,
  };
  render() {
    return <ProductContext.Provider value={{ ...this.state }}>{this.props.children}</ProductContext.Provider>;
  }
}

const Productconsumer = ProductContext.Consumer;

export { Productprovider, Productconsumer };
