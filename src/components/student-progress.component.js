import React, { useState } from "react";
import Select from "react-select";

const options = [
  { _id: "5fa026645bf07b1fc4c08a46", s_name: "me", s_age: 334, __v: 0 },
  { _id: "5fa026f55bf07b1fc4c08a47", s_name: "hello", s_age: 4, __v: 0 },
  { _id: "5fa2ff62aedc4ff986e203f5", s_name: "bobby", s_age: 12, __v: 0 },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App bg-dark text-light">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        getOptionLabel={option => `${option.s_name}`}
      />
    </div>
  );
}
