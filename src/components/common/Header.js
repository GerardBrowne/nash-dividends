import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo2 from "./logo-2.png";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();
  const url = () => {
    window.open("https://nash.io/referrals?code=21mCNx");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <Typography variant="h6" className={classes.title}>
            <img src={logo2} alt="logo" className="Header-logo" />
          </Typography>

          <Button color="inherit" onClick={url}>
            Create Nash Exchange account
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
