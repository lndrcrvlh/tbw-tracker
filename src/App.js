import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ListBehavior from "./components/behavior-list.component";
import ListStudent from "./components/student-list.component";
import CreateBehavior from "./components/behavior-create.component";
import CreateStudent from "./components/student-create.component";
import StudentProgress from "./components/student-progress.component";

function App() {
  return (
    <Router>
      <div className="container bg-dark text-light">
        <Navbar />
        <br />
        <Route path="/" exact component={ListBehavior} />
        <Route path="/students" component={ListStudent} />
        <Route path="/add_behavior" component={CreateBehavior} />
        <Route path="/add_student" component={CreateStudent} />
        <Route path="/track_progress" component={StudentProgress} />
      </div>
    </Router>
  );
}

export default App;
