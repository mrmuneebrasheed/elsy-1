import React from "react";
import styled from "styled-components";
let Div = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, ${parseInt(Math.random() * 255)}, 100) 0%,
    rgba(9, 9, ${parseInt(Math.random() * 255)}, 1) 35%,
    rgba(0, ${parseInt(Math.random() * 255)}, 255, 1) 100%
  );
  color: white;
`;

class Box extends React.Component {
  render() {
    // const Div = this.Div;
    return (
      <Div className="box col-sm-3 col-6">
        <span
          style={{ fontSize: 100, color: this.props.color }}
          class="material-icons"
        >
          {this.props.icon}
        </span>
        <p style={{ fontSize: "20px" }}>
          <strong>
            {this.props.value} {this.props.unit}
          </strong>
        </p>
        {this.props.icon !== "local_drink" && (
          <input
            type="range"
            value={this.props.value}
            min={this.props.min}
            max={this.props.max}
            onInput={this.props.onInput}
            onChange={this.props.onChange}
            step={this.props.unit === "steps" && 100}
          ></input>
        )}
      </Div>
    );
  }
}

export default Box;
