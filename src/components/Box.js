import React from "react";
import styled from "styled-components";

class Box extends React.Component {
  render() {
    let backgroundColor = () => {
      return (
        (this.props.icon === "favorite" && (this.props.value / 180) * 100) ||
        (this.props.icon === "directions_walk" &&
          (this.props.value / 100000) * 100) ||
        (this.props.icon === "wb_sunny" && (this.props.value / 40) * 100) ||
        (this.props.icon === "local_drink" && (this.props.value / 4) * 100)
      );
    };
    const color1 = 1 + backgroundColor();
    let Div = styled.div`
      background: linear-gradient(
        90deg,
        rgba(0, 0, 255, 0.8) ${color1}%,
        rgba(2, 0, 36, 1) 90%
      );
      color: white;
    `;
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
            step={(this.props.unit === "steps" && 100) || 1}
          ></input>
        )}
      </Div>
    );
  }
}

export default Box;
