import React, { Component } from "react";
import axios from "axios";


const Student = (props) => (
  <tr className="bg-dark text-light">
    <td>{props.student.s_name}</td>
    <td>{props.student.s_age}</td>
  </tr>
);

class ListStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/students/")
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  studentsList() {
    return this.state.students.map((currentStudent) => {
      return (
        <Student
          student={currentStudent}
          s_id={currentStudent.s_name}
          s_age={currentStudent.s_age}
        />
      );
    });
  }

  render() {
    return (
      <div className="bg-dark text-light" >
        <h3>Alunos</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nome do Aluno</th>
              <th>Idade Do Aluno</th>
            </tr>
          </thead>
          <tbody>{this.studentsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ListStudent;