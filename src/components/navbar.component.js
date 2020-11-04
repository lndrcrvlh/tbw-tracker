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
                Programas
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/students" className="nav-link">
                Alunos
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add_behavior" className="nav-link">
                Criar Programa
              </Link>
            </li>
            <li>
              <Link to="/add_student" className="nav-link">
                Adicionar Aluno
              </Link>
            </li>
            <li>
              <Link to="/track_progress" className="nav-link">
                Track Progress
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
