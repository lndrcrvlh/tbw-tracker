import React, { Component } from "react";
import axios from "axios";

const Behavior = (props) => (
  <tr className="bg-dark text-light">
    <td>{props.behavior.name}</td>
    <td>{props.behavior.objective}</td>
    <td>{props.behavior.setting}</td>
    <td>{props.behavior.reinforcement_schedule}</td>
    <td>{props.behavior.materials_required}</td>
    <td>{props.behavior.program_procedure}</td>
    <td>{props.behavior.mastery_criteria}</td>
  </tr>
);

class ListBehavior extends Component {
  constructor(props) {
    super(props);

    this.state = {
      behaviors: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/behaviors/")
      .then((response) => {
        this.setState({ behaviors: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  behaviorsList() {
    return this.state.behaviors.map((currentBehavior) => {
      return (
        <Behavior
          behavior={currentBehavior}
          name={currentBehavior.name}
          objective={currentBehavior.objective}
          setting={currentBehavior.setting}
          reinforcement_schedule={currentBehavior.reinforcement_schedule}
          materials_required={currentBehavior.materials_required}
          program_procedure={currentBehavior.program_procedure}
          mastery_criteria={currentBehavior.mastery_criteria}
          key={currentBehavior._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="bg-dark text-light" >
        <h3>Behaviors</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Program</th>
              <th>Objective</th>
              <th>Setting</th>
              <th>Reinforcement Schedule</th>
              <th>Materials</th>
              <th>Procedure</th>
              <th>Mastery Criteria</th>
            </tr>
          </thead>
          <tbody>{this.behaviorsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ListBehavior;
