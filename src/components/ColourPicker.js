
import "../../src/App.css";
import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      selectedColor: null,
    };
  }

  colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33E9', '#33E9FF'];

  toggleColorList = () => {
    this.setState((prevState) => ({
      showColors: !prevState.showColors,
    }));
  };

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      showColors: false,
    });
  };

  render() {
    const containerStyle = {
      backgroundColor: this.state.selectedColor,
      transition: 'background-color 0.5s',
    };

    return (
      <div className="color-picker-container">
        <h1 className="color-picker-title">Color Picker</h1>
        <div className="selected-color-container" style={containerStyle}>
          {this.state.selectedColor && (
            <p className="selected-color-text">Selected Color: {this.state.selectedColor}</p>
          )}
          <button className="pick-color-button" onClick={this.toggleColorList}>
            Pick a color
          </button>
          {this.state.showColors && (
            <div className="color-list">
              {this.colors.map((color, index) => (
                <div
                  key={index}
                  className="color-box"
                  style={{ backgroundColor: color }}
                  onClick={() => this.handleColorClick(color)}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
