import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/lab/Slider";

const Form = props => {
  const {
    tokens,
    fees,
    stakeRate,
    dividend,
    changeTokensHandler,
    changeFeesHandler,
    changeStakeHandler,
    calculateDividends
  } = props;

  // function valuetext(value) {
  //   return value;
  // }

  return (
    <Card>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12}>
            <h3>Staking {tokens} NEX</h3>
            <TextField
              label="Amount of NEX"
              type="string"
              margin="normal"
              variant="filled"
              name="tokens"
              value={tokens}
              onChange={changeTokensHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <h3>With monthly fees of ${fees}</h3>
            <TextField
              label="Expected monthly fees"
              type="string"
              name="fees"
              margin="normal"
              variant="filled"
              value={fees}
              onChange={changeFeesHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <h3>At a stake percentage of {stakeRate}%</h3>
            <TextField
              label="Stake percentage"
              type="string"
              name="stakeRate"
              margin="normal"
              variant="filled"
              value={stakeRate}
              onChange={changeStakeHandler}
            />
            {/* <Typography gutterBottom>Stake Rate</Typography>
            <Slider
              //value={stakeRate}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              defaultValue={25}
              step={2.17}
              marks
              min={25}
              max={75}
              onChange={changeStakeHandler}
            /> */}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={calculateDividends}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <h3>Will net you approx ${dividend}</h3>
          </Grid>
          {/* <Grid item md={12}>
            <Exchange />
          </Grid> */}
        </Grid>
      </Container>
    </Card>
  );
};

// Form.propTypes = {
//   changeFeesHandler: PropTypes.func.isRequired,
//   changeTokensHandler: PropTypes.func.isRequired,
//   changeStakeHandler: PropTypes.func.isRequired
// };

export default Form;
