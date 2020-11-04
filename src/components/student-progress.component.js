import React, { Component } from "react";
import axios from "axios";

export default class StudentProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s_id: "",
      b_id: "",
      num_passed: "",
      num_failed: "",
      times_tested: "",
      phase: "",
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
          s_id: response[0].data[0].s_name,
        });
      }
      if (response[1].data.length) {
        this.setState({
          behaviors: response[1].data.map((behavior) => behavior.name),
          b_id: response[1].data[0].name,
        });
      }
    });
  }

  //   componentDidMount() {
  //     axios.get("http://localhost:5000/students").then((response) => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           students: response.data.map((student) => student.s_name),
  //           s_id: response.data[0].s_name,
  //         });
  //       }
  //     });
  //   }

  render() {
    return <div></div>;
  }
}
