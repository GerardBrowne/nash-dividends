import React from "react";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: 100
  },
  container: {
    display: "flex"
  },
  paper: {
    margin: theme.spacing(1)
  },
  svg: {
    width: 300,
    height: 500
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export default function Intro() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <div className={classes.container}>
        <Zoom in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg} />
          </Paper>
        </Zoom>
        {/* <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "500ms" : "0ms" }}
        >
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg} />
          </Paper>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "1000ms" : "0ms" }}
        >
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg} />
          </Paper>
        </Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "1500ms" : "0ms" }}
        >
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg} />
          </Paper>
        </Zoom> */}
      </div>
    </div>
  );
}
