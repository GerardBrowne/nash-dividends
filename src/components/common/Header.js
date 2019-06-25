import React from "react";
import logo2 from "./logo-2.png";
import "./Header.css";
import Button from "@material-ui/core/Button";

const Header = () => {
  const url = e => {
    window.open("https://nash.io/referrals?code=21mCNx");
    e.preventDefault(e);
  };

  return (
    <div className="Header">
      <img src={logo2} alt="logo" className="Header-logo" />
      <Button variant="outlined" color="primary" type="submit" onClick={url}>
        Create your Nash Exchange account now
      </Button>
    </div>
  );
};

export default Header;
