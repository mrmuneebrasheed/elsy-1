import React from "react";
import Box from "./components/Box";
import "./style/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 1;
const stepsMax = 50000;
class App extends React.Component {
  constructor(value) {
    super();
    this.state = {
      heartValue: heartMax,
      stepsValue: stepsMax,
      tempValue: tempMax,
      waterValue: 1.5,
    };
  }
  componentDidMount = () => {
    this.calculateWater();
  };
  onHeartChange = (event) => {
    this.setState({ heartValue: event.target.value });
  };
  onStepsChange = (event) => {
    this.setState({ stepsValue: event.target.value });
  };
  onTempChange = (event) => {
    this.setState({ tempValue: event.target.value });
  };
  calculateWater = () => {
    let calculatedWater = 1.5;
    if (this.state.tempValue > 20) {
      calculatedWater = calculatedWater + (this.state.tempValue - 20) * 0.02;
    }
    if (this.state.heartValue > 120) {
      calculatedWater = calculatedWater + (this.state.tempValue - 120) * 0.0008;
    }
    if (this.state.stepsValue > 10000) {
      calculatedWater =
        calculatedWater + (this.state.stepsValue - 10000) * 0.00002;
    }
    this.setState({ waterValue: calculatedWater.toFixed(4) });
  };
  render() {
    return (
      <div className="mt-5 container-fluid">
        <div className="row">
          {/* Water */}
          <Box
            initialState={this.initialState}
            icon="local_drink"
            color="#3A85FF"
            value={this.state.waterValue}
            unit="L"
            backgroundHandler={this.backgroundHandler}
          />

          {/* Steps */}
          <Box
            icon="directions_walk"
            color="white"
            value={this.state.stepsValue}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onInput={this.onStepsChange}
            onChange={this.calculateWater}
            backgroundHandler={this.backgroundHandler}
          />

          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heartValue}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onInput={this.onHeartChange}
            onChange={this.calculateWater}
            backgroundHandler={this.backgroundHandler}
          />

          {/* Temperature */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.tempValue}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onInput={this.onTempChange}
            onChange={this.calculateWater}
            backgroundHandler={this.backgroundHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
