import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { Entry } from "./pages";

import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="app-container__main">
          <Switch>
            <Route path="/" component={Entry} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
