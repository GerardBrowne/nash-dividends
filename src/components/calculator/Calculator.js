import React, { Component } from "react";
import Form from "./Form";

import "./Calculator.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      totalTokens: 50000000,
      tokens: 0,
      fees: 0,
      stakeRate: 0,
      baseRate: 25,
      result: 0
    };
  }

  changeTokensHandler = event => {
    this.setState({
      tokens: event.target.value
    });
  };

  changeFeesHandler = event => {
    this.setState({
      fees: event.target.value
    });
  };

  changeStakeHandler = event => {
    this.setState({
      stakeRate: event.target.value
    });
  };

  calculateDividends = event => {
    const x =
      ((this.state.fees * this.state.tokens) / this.state.totalTokens) *
      (this.state.stakeRate / 100);

    this.setState({ result: x });
    event.preventDefault(event);
  };

  render() {
    const { tokens, fees, stakeRate, result } = this.state;
    return (
      <Form
        tokens={tokens}
        fees={fees}
        stakeRate={stakeRate}
        result={result}
        changeTokensHandler={this.changeTokensHandler}
        changeFeesHandler={this.changeFeesHandler}
        changeStakeHandler={this.changeStakeHandler}
        calculateDividends={this.calculateDividends}
      />
    );
  }
}

export default Calculator;
