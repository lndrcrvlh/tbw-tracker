import React, { useState, Component } from "react";
import Select from "react-select";
import axios from "axios";

// const options = [
//   { _id: "5fa026645bf07b1fc4c08a46", s_name: "me", s_age: 334, __v: 0 },
//   { _id: "5fa026f55bf07b1fc4c08a47", s_name: "hello", s_age: 4, __v: 0 },
//   { _id: "5fa2ff62aedc4ff986e203f5", s_name: "bobby", s_age: 12, __v: 0 },
//];

export default class StudentProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: [],
      s_name: "",
      s_id: "",
    };
  }

  async getOptions() {
    const res = await axios.get("http://localhost:5000/students");
    const data = res.data;

    const options = data.map((d) => ({
      value: d._id,
      label: d.s_name,
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    this.setState({ id: e.value, name: e.label });
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    console.log(this.state.selectOptions);
    return (
      <div>
        <Select
          options={this.state.selectOptions}
          onChange={this.handleChange.bind(this)}
        />
        <p>
          You have selected <strong>{this.state.name}</strong> whose id is{" "}
          <strong>{this.state.id}</strong>
        </p>
      </div>
    );
  }
}

// export default function App() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   //console.log(options, "-=-=0-0=-0=-0=-0=-0=-0-09=89=98-09");

//   const findOptions = () => {
//     return axios
//       .get("http://localhost:5000/students")
//       .then((response) => setOptions(response.data))
//       .catch((err) => console.log(err));
//   };

//   let options = [];

//   const setOptions = (res) => {
//     return (options = res);
//   };

//   return (
//     <div className="App bg-dark text-light">
//       <Select
//         defaultValue={selectedOption}
//         onChange={setSelectedOption}
//         options={findOptions()}
//         getOptionLabel={(option) => `${option.s_name}`}
//       />
//     </div>
//   );
// }
