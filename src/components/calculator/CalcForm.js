import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export class CalcForm extends Component {
  render() {
    const { values, handleChange, calculateDividends } = this.props;
    return (
      <React.Fragment>
        {/* <Card> */}
        <br />
        <Grid
          item
          sm
          container
          style={{ margin: 0 }}
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs>
            <TextField
              variant="outlined"
              margin="dense"
              label="NEX amount"
              onChange={handleChange("tokens")}
              value={values.tokens}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="dense"
              label="Expected volume/month"
              onChange={handleChange("monthlyVolume")}
              value={values.monthlyVolume}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="dense"
              label="No. of months"
              onChange={handleChange("stakeLength")}
              value={values.stakeLength}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="dense"
              label="Fee %"
              onChange={handleChange("fee")}
              value={values.fee}
            />
            <br />
          </Grid>
          <Grid item xs={12}>
            <br />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={calculateDividends}
            >
              <i className="material-icons">send</i>
              Submit
            </Button>
          </Grid>
          <br />
          <h3>Total Dividends: ${Math.round(values.dividend * 100) / 100}</h3>
        </Grid>
        {/* </Card> */}
      </React.Fragment>
    );
  }
}

export default CalcForm;
