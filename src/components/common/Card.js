import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CalcForm from "../calculator/CalcForm";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.title}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          Calculate NEX Dividends
        </Typography>
        <CalcForm />
      </CardContent>
    </Card>
  );
}
