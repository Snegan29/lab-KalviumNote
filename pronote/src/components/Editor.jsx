import React, { Component } from 'react';
import './Editor.css'; // Make sure to adjust the path to your CSS file
import icon from './images/refresh-icon.png';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClear = () => {
    // Clear only the textarea content
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <h1>Kalvium Note</h1>
        <p>
          "Hey there, listen up! This ain't no fancy email, so don't expectany fancy formatting. You can hit enter all you want, but it won't doa thing. Just keep your thoughts flowing in one long, uninterruptedstream, like a waterfall of words. Got it?"
        </p>
        <div className="container">
          <div className="input">
            <h2>Input</h2>
            <textarea
              className="input-text"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <img
              className="clear"
              onClick={this.handleClear}
              src={icon}
              alt="Clear"
            />
          </div>
          <div className="output">
            <h2>Pro Note</h2>
            <div className="output-text">{this.state.value}</div>
          </div>
        </div>
      </div>
    );
  }
}
