import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
    setInterval(() => this.updateClock(),1000)
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
    render() {
      return (
        <p className="App-clock">
          The time is {this.state.time}.
        </p>
      );
    }
 }

export default App;
