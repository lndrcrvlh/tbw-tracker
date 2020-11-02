import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ListBehavior from "./components/behavior-list.component"
import CreateBehavior from "./components/behavior-create.component"
import CreateStudent from "./components/student-create.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ListBehavior} />
        <Route path="/add_behavior" component={CreateBehavior}/>
        <Route path="/add_student" component={CreateStudent} />
      </div>
    </Router>
  );
}

export default App;
