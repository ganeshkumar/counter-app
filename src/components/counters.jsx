import React, { Component } from 'react';
import Counter from './counter';
import NavBar from './navbar';

class Counters extends Component {
  state = {
    count: 0,
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters: counters });
  }

  increamentCounter = (counterId) => {
    const counters = [...this.state.counters];
    const counter = counters[counterId - 1];
    counter.value = counter.value + 1;
    this.setState({ counters: counters });
  }

  decreamentCounter = (counterId) => {
    const counters = [...this.state.counters];
    const counter = counters[counterId - 1];
    if(counter.value > 0) {
      counter.value = counter.value - 1;
    }
    this.setState({ counters: counters });
  }

  render() {
     return (
       <>
       <NavBar totalCounters={this.state.counters.length}/>
        { this.state.counters.map(counter =>
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            increamentCounter={this.increamentCounter}
            decreamentCounter={this.decreamentCounter} />) }
       </>
     )
   }
 }

 export default Counters;
