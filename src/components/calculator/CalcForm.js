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
              <TextField
                label="NEX amount"
                onChange={handleChange("tokens")}
                defaultValue={values.tokens}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                label="Expected monthly fees"
                onChange={handleChange("fees")}
                defaultValue={values.fees}
              />
            </Grid>{" "}
            <br />
            <Grid item xs={12}>
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
            <h3>${values.dividend}</h3>
          </Grid>
        </Card>
      </React.Fragment>
    );
  }
}

export default CalcForm;
