import React, { Component } from "react";
import axios from "axios";

export default class CreateBehavior extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeObjective = this.onChangeObjective.bind(this);
    this.onChangeSetting = this.onChangeSetting.bind(this);
    this.onChangeReinforcement_schedule = this.onChangeReinforcement_schedule.bind(
      this
    );
    this.onChangeMaterials_required = this.onChangeMaterials_required.bind(
      this
    );
    this.onChangeProgram_procedure = this.onChangeProgram_procedure.bind(this);
    this.onChangeMastery_criteria = this.onChangeMastery_criteria.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      objective: "",
      setting: "",
      reinforcement_schedule: "",
      materials_required: "",
      program_procedure: "",
      mastery_criteria: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeObjective(e) {
    this.setState({
      objective: e.target.value,
    });
  }

  onChangeSetting(e) {
    this.setState({
      setting: e.target.value,
    });
  }

  onChangeReinforcement_schedule(e) {
    this.setState({
      reinforcement_schedule: e.target.value,
    });
  }

  onChangeMaterials_required(e) {
    this.setState({
      materials_required: e.target.value,
    });
  }

  onChangeProgram_procedure(e) {
    this.setState({
      program_procedure: e.target.value,
    });
  }

  onChangeMastery_criteria(e) {
    this.setState({
      mastery_criteria: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const behavior = {
      name: this.state.name,
      objective: this.state.objective,
      setting: this.state.setting,
      reinforcement_schedule: this.state.reinforcement_schedule,
      materials_required: this.state.materials_required,
      program_procedure: this.state.program_procedure,
      mastery_criteria: this.state.mastery_criteria
    };

    console.log(behavior);

    axios
      .post("http://localhost:5000/behaviors/add", behavior)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Addicione um Comportamento para Seguir</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Nome do Comportamento: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Objetivo do Comportamento: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.objective}
              onChange={this.onChangeObjective}
            />
          </div>
          <div className="form-group">
            <label>Onde este Comportamento sera treinado: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.setting}
              onChange={this.onChangeSetting}
            />
          </div>
          <div className="form-group">
            <label>reinforcement_schedule: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.reinforcement_schedule}
              onChange={this.onChangeReinforcement_schedule}
            />
          </div>
          <div className="form-group">
            <label>Materais Necessarios: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.materials_required}
              onChange={this.onChangeMaterials_required}
            />
          </div>
          <div className="form-group">
            <label>Procedimentos do Programa: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.program_procedure}
              onChange={this.onChangeProgram_procedure}
            />
          </div>
          <div className="form-group">
            <label>Mastery mastery_criteria: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.mastery_criteria}
              onChange={this.onChangeMastery_criteria}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Adicionar Comportamento"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
