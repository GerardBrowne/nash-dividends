import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export class CalcForm extends Component {
  render() {
    const { values, handleChange, calculateDividends } = this.props;
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
              <Typography>
                With monthly volume of
                <br />$<strong>{values.monthlyVolume}</strong>
              </Typography>
              <TextField
                label="Expected volume/month"
                onChange={handleChange("monthlyVolume")}
                defaultValue={values.monthlyVolume}
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
              <Typography>
                And a fee % of <strong>{values.fee}</strong>%
              </Typography>
              <TextField
                label="Fee %"
                onChange={handleChange("fee")}
                defaultValue={values.fee}
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
