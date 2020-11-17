import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

export default class StudentProgress extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      selectBehaviors: [],
      b_name: "",
      b_id: "",
      selectStudents: [],
      s_name: "",
      s_id: "",
      trials: [],
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

  onSubmit(e) {
    e.preventDefault();

    const progress = {
      student: {
        s_name: this.state.s_name,
        s_id: this.state.s_id,
      },
      behavior: {
        b_name: this.state.b_name,
        b_id: this.state.b_id,
      },
      trials: [],
    };

    console.log(progress);

    axios
      .post("http://localhost:5000/progress/add", progress)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // this.setState({
    //   this.
    // })
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
        <input type="button" onClick={this.onSubmit} value="submit progress" />
      </div>
    );
  }
}
