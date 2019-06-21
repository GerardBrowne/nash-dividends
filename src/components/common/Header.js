import React from "react";
import logo from "./logo.png";
import logo1 from "./logo-1.png";
import logo2 from "./logo-2.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo2} alt="logo" className="Header-logo" />
    </div>
  );
};

export default Header;
