import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

export default class StudentProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectBehaviors: [],
      b_name: "",
      b_id: "",
      selectStudents: [],
      s_name: "",
      s_id: "",
    };
  }

  async getStudents() {
    const res = await axios.get("http://localhost:5000/students");
    const data = res.data;

    const students = data.map((d) => ({
      value: d._id,
      label: d.s_name,
    }));

    this.setState({ selectStudents: students });
  }

  async getBehaviors() {
    const res = await axios.get("http://localhost:5000/behaviors");
    const data = res.data;

    const behaviors = data.map((d) => ({
      value: d._id,
      label: d.name,
    }));

    this.setState({ selectBehaviors: behaviors });
  }

  handleChangeBehavior(e) {
    this.setState({ b_id: e.value, b_name: e.label });
  }

  handleChangeStudent(e) {
    this.setState({ s_id: e.value, s_name: e.label });
  }

  componentDidMount() {
    this.getStudents();
    this.getBehaviors();
  }

  render() {
    console.log(this.state.selectStudents, "-----");
    return (
      <div>
        <Select
          options={this.state.selectStudents}
          onChange={this.handleChangeStudent.bind(this)}
        />
        <p>
          You have selected <strong>{this.state.s_name}</strong> whose id is{" "}
          <strong>{this.state.s_id}</strong>
        </p>
        <Select
          options={this.state.selectBehaviors}
          onChange={this.handleChangeBehavior.bind(this)}
        />
        <p>
          You have selected <strong>{this.state.b_name}</strong> whose id is{" "}
          <strong>{this.state.b_id}</strong>
        </p>
        
      </div>
    );
  }
}
