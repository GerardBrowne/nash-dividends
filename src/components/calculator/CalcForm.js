import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";

export class CalcForm extends Component {
  render() {
    const {
      values,
      handleChange,
      handleDragChange,
      calculateDividends
    } = this.props;
    return (
      <React.Fragment>
        <Card>
          <br />
          <Grid
            item
            sm={12}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              <Typography>
                Having <strong>{values.tokens}</strong> NEX
              </Typography>
              <TextField
                label="NEX amount"
                onChange={handleChange("tokens")}
                defaultValue={values.tokens}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <Typography>With an average TX fee of {values.fee}%</Typography>
              <Slider
                defaultValue={0.19}
                valueLabelDisplay="auto"
                step={0.01}
                marks
                min={0.1}
                max={0.25}
                //value={this.values.fee}
                onChange={handleChange("fee")}
                onDragStop={handleDragChange}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <Typography>
                With monthly fees of $<strong>{values.monthlyFees}</strong>
              </Typography>
              <TextField
                label="Expected monthly fees"
                onChange={handleChange("monthlyFees")}
                defaultValue={values.monthlyFees}
              />
            </Grid>{" "}
            <br />
            <Grid item xs={12}>
              <Typography>
                And a stake rate of <strong>{values.stakeRate}</strong>%
              </Typography>
              <TextField
                label="Stake %"
                onChange={handleChange("stakeRate")}
                defaultValue={values.stakeRate}
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
                Submit
              </Button>
            </Grid>
            <br />
            <h3>Total Dividends: ${values.dividend}</h3>
          </Grid>
        </Card>
      </React.Fragment>
    );
  }
}

export default CalcForm;
