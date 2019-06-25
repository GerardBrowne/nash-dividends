import React, { Component } from "react";
import CalcForm from "./CalcForm";
//import SimpleCard from "../common/Card";

class Calculator extends Component {
  // Initial state
  state = {
    totalTokens: 50000000,
    tokens: "",
    fees: "",
    stakeRate: "",
    baseRate: 25,
    dividend: ""
  };

  // NEX dividend formula
  calculateDividends = event => {
    const x =
      ((this.state.fees * this.state.tokens) / this.state.totalTokens) *
      (this.state.stakeRate / 100);

    this.setState({ dividend: x });
    // Prevents page reload
    event.preventDefault(event);
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { tokens, fees, stakeRate, dividend } = this.state;
    const values = { tokens, fees, stakeRate, dividend };

    return (
      <div>
        <CalcForm
          values={values}
          handleChange={this.handleChange}
          calculateDividends={this.calculateDividends}
        />
        <br />
        {/* <SimpleCard /> */}
      </div>
    );
  }
}

export default Calculator;
