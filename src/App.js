import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Page } from "./Page";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Some text
        <Page />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
