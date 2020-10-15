import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Behavior Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Tests
              </Link>
            </li>
            <li>
              <Link to="/create" className="nav-link">
                Create Test Log
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
