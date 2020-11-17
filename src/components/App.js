import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./navbar.component";
import ListBehavior from "./behavior-list.component";
import ListStudent from "./student-list.component";
import CreateBehavior from "./behavior-create.component";
import CreateStudent from "./student-create.component";
import StudentProgress from "./student-progress.component";

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
