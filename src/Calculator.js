import React, { Component } from "react";

const containerStyle = {
  borderRadius: "25% 10%",
  border: "2px solid black",
  padding: "10px",
  textAlign: "center",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"
};

const headingStyle = {
  fontFamily: "Arial, sans-serif",
  margin: "0"
};

const headerContainerStyle = {
  marginBottom: "20px"
};

const inputContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px"
};

const inputStyle = {
  border: "2px solid black",
  borderRadius: "25% 10%",
  padding: "5px",
  margin: "5px"
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center"
};

const buttonStyle = {
  background: "#00050a",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "5px 10px",
  margin: "5px",
  cursor: "pointer"
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  handleNum1Change = (e) => {
    this.setState({ num1: Number(e.target.value) });
  };

  handleNum2Change = (e) => {
    this.setState({ num2: Number(e.target.value) });
  };

  add = () => {
    this.setState({ result: this.state.num1 + this.state.num2 });
  };

  subtract = () => {
    this.setState({ result: this.state.num1 - this.state.num2 });
  };

  render() {
    return (
      <div style={containerStyle}>
        <div style={headerContainerStyle}>
          <h2 style={headingStyle}>Calculator</h2>
        </div>
        <div style={inputContainerStyle}>
          <input
            type="number"
            style={inputStyle}
            onChange={this.handleNum1Change}
          />
          <input
            type="number"
            style={inputStyle}
            onChange={this.handleNum2Change}
          />
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={this.add}>
            Add
          </button>
          <button style={buttonStyle} onClick={this.subtract}>
            Subtract
          </button>
        </div>
        <div>
          <p>Result: {this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
