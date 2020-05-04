import React from "react";
import { Link } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import "./header.styles.scss";

const Header = () => {
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
            <Link to="#" className="header-link">
              Home
            </Link>
            <Link to="#" className="header-link">
              About
            </Link>
            <Link to="#" className="header-link">
              Events
            </Link>
            <Link to="#" className="header-link">
              Pages
            </Link>
            <Link to="#" className="header-link">
              Blog
            </Link>
            <Link to="/my-business/events/create" className="header-link">
              Add events
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
