import React, { Component } from "react";
import axios from "axios";

export default class StudentProgress extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudent = this.onChangeStudent.bind(this);
    this.onChangeStudents = this.onChangeStudents.bind(this);
    this.onChangeBehavior = this.onChangeBehavior.bind(this);
    this.onChangeBehaviors = this.onChangeBehaviors.bind(this);

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

  onChangeStudents(e) {
    this.setState({
      students: e.target.value,
    });
  }

  onChangeStudent(e) {
    this.setState({
      student: e.target.value,
    });
  }

  onChangeBehavior(e) {
    this.setState({
      behavior: e.target.value,
    });
  }

  onChangeBehaviors(e) {
    this.setState({
      behaviors: e.target.value,
    });
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
        <form>
          <div>
            <label>Alunos: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              //value={this.state.student.s_name}
              onChange={this.onChangeStudents}
            >
              {this.state.students.map((s) => {
                return (
                  <option key={s} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
    );
  }
}
