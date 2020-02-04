import React, { Component } from 'react';
import './App.css';
import { Snake, SnakeFood } from './Snake.jsx';
import { getRandomFood } from './utils';

const initState = {
  direction: 'RIGHT',
  speed: 100,
  snakeDots:[
    [0, 0],
    [2, 0],
    [4, 0]
  ],
  food: getRandomFood([
    [0, 0],
    [2, 0],
    [4, 0]
  ]),
};

export default class App extends Component {

  constructor(){
    super();
    this.state = initState;

    this.makeMove = this.makeMove.bind(this);
    this.changeDirection = this.changeDirection.bind(this);
    this.checkFood = this.checkFood.bind(this);
  }

  componentDidMount() {
    window.setInterval(this.makeMove, this.state.speed);
    document.addEventListener('keydown', this.changeDirection);
  }

  componentDidUpdate(){
    this.checkBorders();
    this.checkFood();
  }

  changeDirection(e){
    const event = e || window.event;
    console.log(event);
    let direction = null;
    switch(event.key){
      case 'ArrowUp':
        if(this.state.direction !== 'DOWN') direction = 'UP' ; break;
      case 'ArrowDown':
        if(this.state.direction !== 'UP') direction = 'DOWN'; break;
      case 'ArrowLeft':
        if(this.state.direction !== 'RIGHT') direction = 'LEFT'; break;
      default:
        if(this.state.direction !== 'LEFT') direction = 'RIGHT'; break;
    }

    if(direction != null){
      this.setState({...this.state, direction});
    }

  }

  checkBorders(){
    const head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if(head[0] < 0 || head[0] >= 100 || head[1] < 0 || head[1] >= 100){
      this.onGameOver();
    }
  }

  onGameOver(){
    window.alert(`Game Over. The length of your snake is ${this.state.snakeDots.length}`);
    this.setState({...initState});
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

  checkFood(){
    const snakeDots = this.state.snakeDots;
    const head = snakeDots[this.state.snakeDots.length - 1];
    const food = this.state.food;
    
    if(head[0] === food[0] && head[1] === food[1]){
      snakeDots.unshift([]);
      this.setState({...this.state, snakeDots, food: getRandomFood(snakeDots)});
    }
  }

  render() {
    return (
      <div className="game-board">
        <SnakeFood foodDot={this.state.food} />
        <Snake snakeDots={this.state.snakeDots} />
      </div>
    )
  }
}
