import React, { Component } from "react";
import CalcForm from "./CalcForm";
import NexInfo from "../tokenInfo/NexInfo";

class Calculator extends Component {
  // Initial state
  state = {
    totalTokens: 50000000, //never changes
    tokens: "", //no. of user's tokens
    fee: 0.19, //average fee per tx, this will be default value
    stakeRate: "", //based on no. of months staked; min:25,max:75
    baseRate: 25, //min stake percentage
    dividend: "", //total dividend received/month
    monthlyVolume: "" //total volume transacted per month
  };

  // NEX dividend formula
  calculateDividends = event => {
    const x =
      ((this.state.monthlyVolume * (this.state.fee / 100) * this.state.tokens) /
        this.state.totalTokens) *
      (this.state.stakeRate / 100);

    this.setState({ dividend: x });
    // Prevents page reload
    event.preventDefault(event);
  };

  // Handles input change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { tokens, monthlyVolume, fee, stakeRate, dividend } = this.state;
    const values = {
      tokens,
      monthlyVolume,
      fee,
      stakeRate,
      dividend
    };

    return (
      <div>
        <CalcForm
          values={values}
          handleChange={this.handleChange}
          calculateDividends={this.calculateDividends}
        />
        <br />
        <NexInfo />
      </div>
    );
  }
}

export default Calculator;
