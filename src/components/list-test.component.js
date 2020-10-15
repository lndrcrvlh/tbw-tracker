import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
//import { response } from "express";

const Test = (props) => (
  <tr>
    <td>{props.test.pass.toString()}</td>
    <td>{props.test._id}</td>
  </tr>
);

export default class TestsList extends Component {
  constructor(props) {
    super(props);

    this.state = { tests: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/tests/")
      .then((response) => {
        this.setState({ tests: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  testsList() {
    return this.state.tests.map((currentTest) => {
      console.log(currentTest.pass)
      return <Test test={currentTest} passed={currentTest.pass} key={currentTest._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>current Tests</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>pass?</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>{this.testsList()}</tbody>
        </table>
      </div>
    );
  }
}
