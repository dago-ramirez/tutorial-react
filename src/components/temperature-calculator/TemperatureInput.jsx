import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Enter temperature in {scaleNames[scale]}:</label>
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" value={temperature}
          onChange={this.handleChange} />
      </div>
    );
  }
}