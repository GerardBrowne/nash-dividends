import React from "react";
import {
  Container,
  Grid,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";

const Exchange = () => {
  return (
    <div>
      <Container>
        <Grid>
          <InputLabel>Select Exchange</InputLabel>
          <Select>
            <MenuItem>Binance</MenuItem>
            <MenuItem>Bitfinex</MenuItem>
            <MenuItem>KuCoin</MenuItem>
            <MenuItem>CoinBene</MenuItem>
            <MenuItem>BitMex</MenuItem>
            <MenuItem>Bittrex</MenuItem>
          </Select>
        </Grid>
      </Container>
    </div>
  );
};

export default Exchange;
