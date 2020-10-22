import React, { Component } from "react";
import axios from "axios";

export default class CreateTest extends Component {
  constructor(props) {
    super(props);

    this.onChangeResult = this.onChangeResult.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      result: "pass",
    };
  }

  onChangeResult(e) {
    this.setState({
      Result: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const test = {
      result: this.state.result,
    };

    console.log(test);
    
    axios
      .post("http://localhost:5000/tests/add", test)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>First Test of adding data</h3>
        {/* <form>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="pass"
                checked={true}
                className="form-check-input"
              />
              Option 1
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="fail"
                className="form-check-input"
              />
              Option 2
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-primary mt-2" type="submit">
              Save
            </button>
          </div>
        </form> */}

        <form onSubmit={this.onSubmit}>
          <label>Result</label>
          <br/>
          <div className="form-check">
            <label>
              <input
                type="radio"
                value="pass"
                name="result"
                onChange={this.onChangeResult}
              />
              pass
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                value="fail"
                name="result"
                onChange={this.onChangeResult}
              />
              fail
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-primary mt-2" type="submit">
              Submit Test
            </button>
          </div>
        </form>
      </div>
    );
  }
}
