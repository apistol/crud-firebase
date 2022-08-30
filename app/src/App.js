import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Counter from './Counter';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  render() {
    return (
      <div>
        {this.state.show && <Counter />}
        <button onClick={() => this.setState({ show: !this.state.show })}> {this.state.show ? "Hide" : "Show"}</button>
      </div>
    );
  }
}

export default App;
