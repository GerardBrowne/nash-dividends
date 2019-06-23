import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Form = props => {
  const {
    tokens,
    fees,
    stakeRate,
    result,
    changeTokensHandler,
    changeFeesHandler,
    changeStakeHandler,
    calculateDividends
  } = props;

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
              value={tokens}
              onChange={changeTokensHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Expected monthly fees"
              type="number"
              name="fees"
              margin="normal"
              variant="filled"
              value={fees}
              onChange={changeFeesHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Stake percentage"
              type="number"
              name="stakeRate"
              margin="normal"
              variant="filled"
              value={stakeRate}
              onChange={changeStakeHandler}
            />
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
            <TextField
              label="Monthly dividends"
              margin="normal"
              variant="filled"
              type="text"
              value={result}
              readOnly
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

// Form.propTypes = {
//   tokens: PropTypes.number.isRequired,
//   fees: PropTypes.number.isRequired,
//   stakeRate: PropTypes.number.isRequired,
//   changeFeesHandler: PropTypes.func.isRequired,
//   changeTokensHandler: PropTypes.func.isRequired,
//   changeStakeHandler: PropTypes.func.isRequired
// };

export default Form;
