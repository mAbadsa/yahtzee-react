import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.props.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
