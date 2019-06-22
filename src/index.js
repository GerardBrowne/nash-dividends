import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/common/Header";
import "./index.css";
import Calculator from "./components/calculator/Calculator";

const App = () => {
  return (
    <div>
      <Header />
      <Calculator />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
