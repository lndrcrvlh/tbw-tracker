import React, { Component } from "react";
import axios from "axios";

export default class StudentProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {},
      behavior: {},
      trials: {},
      students: [],
      behaviors: [],
    };
  }

  getStudents() {
    return axios.get("http://localhost:5000/students");
  }

  getBehaviors() {
    return axios.get("http://localhost:5000/behaviors");
  }

  componentDidMount() {
    Promise.all([this.getStudents(), this.getBehaviors()]).then((response) => {
      if (response[1].data.length) {
        this.setState({
          students: response[0].data.map((student) => student.s_name),
          student: {
            s_name: response[0].data[0].s_name,
            s_id: response[0].data[0]._id,
          },
        });
      }
      if (response[1].data.length) {
        this.setState({
          behaviors: response[1].data.map((behavior) => behavior.name),
          behavior: {
            b_name: response[1].data[0].name,
            b_id: response[1].data[0]._id,
          },
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Create a relationship</h3>
      </div>
    );
  }
}
