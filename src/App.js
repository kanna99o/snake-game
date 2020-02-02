import React, { Component } from 'react';
import './App.css';
import Snake from './Snake';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      direction: 'RIGHT',
      speed: 500,
      snakeDots:[
        [2, 0],
        [4, 0],
        [6, 0]
      ]
    };

    this.makeMove = this.makeMove.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
  }

  componentDidMount() {
    window.setInterval(this.makeMove, this.state.speed);
    document.addEventListener('keydown', this.changeDirection);
  }

  changeDirection(e){
    const event = e || window.event;
    console.log(event);
    let direction = null;
    switch(event.key){
      case 'ArrowUp':
        direction = 'UP'; break;
      case 'ArrowDown':
        direction = 'DOWN'; break;
      case 'ArrowLeft':
        direction = 'LEFT'; break;
      default:
        direction = 'RIGHT'; break;
    }

    this.setState({...this.state, direction});

  }

  makeMove(){
    const snakeDots = [...this.state.snakeDots];
    const currentHead = this.state.snakeDots[this.state.snakeDots.length - 1];
    let newHead = [];
    switch(this.state.direction){
      case 'RIGHT':
        newHead = [currentHead[0] + 2, currentHead[1]]; break;
      case 'LEFT':
        newHead = [currentHead[0] - 2, currentHead[1]]; break;
      case 'UP':
        newHead = [currentHead[0], currentHead[1] - 2]; break;
      default:
        newHead = [currentHead[0], currentHead[1] + 2]; break;
    }

    snakeDots.push(newHead);
    snakeDots.shift();

    this.setState({...this.state, snakeDots});
  }

  render() {
    return (
      <div className="game-board">
        <Snake snakeDots={this.state.snakeDots} />
      </div>
    )
  }
}
