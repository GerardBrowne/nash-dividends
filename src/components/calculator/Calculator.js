import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
      <Container maxWidth="sm">
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Amount of NEX"
                type="number"
                margin="normal"
                variant="filled"
                name="tokens"
                value={this.state.tokens}
                onChange={this.changeTokensHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Expected monthly fees"
                type="number"
                name="fees"
                margin="normal"
                variant="filled"
                value={this.state.fees}
                onChange={this.changeFeesHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Stake percentage"
                type="number"
                name="stakeRate"
                margin="normal"
                variant="filled"
                value={this.state.stakeRate}
                onChange={this.changeStakeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={this.calculateDividends}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Monthly dividends"
                margin="normal"
                variant="filled"
                type="text"
                value={this.state.result}
                readOnly
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default Calculator;
