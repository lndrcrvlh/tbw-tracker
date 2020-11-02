import React, { Component } from "react";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeS_name = this.onChangeS_name.bind(this);
    this.onChangeS_age = this.onChangeS_age.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      s_name: "",
      s_age:""
    };
  }

  onChangeS_name(e) {
    this.setState({
      s_name: e.target.value,
    });
  }
  onChangeS_age(e) {
    this.setState({
      s_age: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const student = {
      s_name: this.state.s_name,
      s_age: parseInt(this.state.s_age)
    };

    console.log(student);

    axios
      .post("http://localhost:5000/students/add", student)
      .then((res) => console.log(res.data));

    this.setState({
      s_name: "",
      s_age: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Adicionar um Aluno</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome do Aluno: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.s_name}
              onChange={this.onChangeS_name}
            />
          </div>
          <div className="form-group">
            <label>Idade: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.s_age}
              onChange={this.onChangeS_age}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Adicionar Aluno"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}