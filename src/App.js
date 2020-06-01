import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Header } from "./components";
import {
  Events,
  EventInfo,
  EventEdit,
  Users,
  SignUp,
  SignIn,
  UserSingle
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="app-container__main">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/sign-up" />} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:eventId" component={EventInfo} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:userId" component={UserSingle} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route
              exact
              path="/my-business/events/:eventId"
              component={EventEdit}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
