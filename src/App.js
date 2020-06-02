import React, { useEffect } from "react";
import { connect } from "react-redux";

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
  UserSingle,
  MyProfile
} from "./pages";

import { setLoginStatus, logOut, setMyProfile } from "./redux/action-exporter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = ({
  isUserLoggedIn,
  setLoginStatus,
  userRequestStatus,
  logOut,
  setMyProfile
}) => {
  useEffect(() => {
    if (localStorage.hasOwnProperty("portalToken")) {
      setLoginStatus(true);
    }
    if (localStorage.hasOwnProperty("myProfile")) {
      setMyProfile(JSON.parse(localStorage.getItem("myProfile")));
    }
  }, [setLoginStatus, userRequestStatus, setMyProfile]);

  return (
    <div className="app-container">
      <Router>
        <Header isUserLoggedIn={isUserLoggedIn} logOut={logOut} />
        <div className="app-container__main">
          {isUserLoggedIn ? (
            <Switch>
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/events/:eventId" component={EventInfo} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/users/:userId" component={UserSingle} />
              <Route
                exact
                path="/my-business/events/:eventId"
                component={EventEdit}
              />
              <Route render={() => <Redirect to="/events" />} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route render={() => <Redirect to="/sign-in" />} />
            </Switch>
          )}
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({
  isUserLoggedIn: state.usersReducer.isUserLoggedIn,
  userRequestStatus: state.usersReducer.userRequestStatus
});

export default connect(mapStateToProps, {
  setLoginStatus,
  logOut,
  setMyProfile
})(App);
