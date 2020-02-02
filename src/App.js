import React, { Component } from 'react';
import './App.css';
import Snake from './Snake';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      snakeDots:[
        [2, 0],
        [4, 0],
        [6, 0]
      ]
    };
  }

  render() {
    return (
      <div className="game-board">
        <Snake snakeDots={this.state.snakeDots} />
      </div>
    )
  }
}
