import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/common/Header";
import Calculator from "./components/calculator/Calculator";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Calculator />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
