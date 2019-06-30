import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export class CalcForm extends Component {
  render() {
    const { values, handleChange, calculateDividends } = this.props;
    return (
      <React.Fragment>
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
            <Typography>{values.tokens} NEX</Typography>
            <TextField
              variant="outlined"
              margin="dense"
              label="NEX amount"
              onChange={handleChange("tokens")}
              value={values.tokens}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Monthly volume of ${values.monthlyVolume} billion
            </Typography>
            <TextField
              variant="outlined"
              margin="dense"
              label="Volume/month (billions)"
              onChange={handleChange("monthlyVolume")}
              value={values.monthlyVolume}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Locked in for {values.stakeLength} months</Typography>
            <TextField
              variant="outlined"
              margin="dense"
              label="No. of months"
              onChange={handleChange("stakeLength")}
              value={values.stakeLength}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Average fee of {values.fee}%</Typography>
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
      </React.Fragment>
    );
  }
}

export default CalcForm;
