import React, { Component } from "react";
import axios from "axios";

export default class CreateTest extends Component {
  constructor(props) {
    super(props);

    this.onChangePassed = this.onChangePassed.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pass: "",
    };
  }

  onChangePassed(e) {
    this.setState({
      pass: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const test = {
      pass: this.state.pass,
    };

    console.log(test);

    axios
      .post("https://localhost:5000/tests/add")
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>First Test of adding data</h3>
        <form className="form-group" onSubmit={this.onSubmit}>
          <label>Passed?</label>
          <input
            type="radio"
            value="true"
            name="passed"
            onChange={this.onChangePassed}
          />
          true
          <input
            type="radio"
            value="false"
            name="passed"
            onChange={this.onChangePassed}
          />
          false
          <div className="form-group">
            <input
              type="submit"
              value="Create Test Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
