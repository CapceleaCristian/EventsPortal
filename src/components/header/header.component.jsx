import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import "./header.styles.scss";

const Header = ({ isUserLoggedIn, logOut }) => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              Events <span>Portal</span>
            </Link>
          </div>
          <div className="header__links">
            {!isUserLoggedIn ? (
              <>
                <Link to="/sign-up" className="header-link">
                  Sign Up
                </Link>
                <Link to="/sign-in" className="header-link">
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <Link to="/events" className="header-link">
                  Events
                </Link>
                <Link to="/users" className="header-link">
                  Users
                </Link>
                <Link to="/my-business/events/create" className="header-link">
                  Add events
                </Link>
                <Link to="/my-profile">My profile</Link>
                <button onClick={() => logOut()} style={{ margin: "0 10px" }}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
