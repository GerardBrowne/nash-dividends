import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
      this.state.stakeRate;

    this.setState({ result: x });
    event.preventDefault(event);
  };

  render() {
    return (
      <form className="form" noValidate autoComplete="off">
        <TextField
          label="Amount of NEX"
          type="number"
          margin="normal"
          variant="outlined"
          name="tokens"
          value={this.state.tokens}
          onChange={this.changeTokensHandler}
        />

        <br />
        <TextField
          label="Expected monthly fees"
          type="number"
          name="fees"
          margin="normal"
          variant="outlined"
          value={this.state.fees}
          onChange={this.changeFeesHandler}
        />
        <br />
        <TextField
          label="Stake percentage"
          type="number"
          name="stakeRate"
          margin="normal"
          variant="outlined"
          value={this.state.stakeRate}
          onChange={this.changeStakeHandler}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.calculateDividends}
        >
          Submit
        </Button>
        <br />
        <TextField
          label="Monthly dividends"
          margin="normal"
          variant="outlined"
          type="text"
          value={this.state.result}
          readOnly
        />
      </form>
    );
  }
}

export default Calculator;
