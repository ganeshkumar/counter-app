import React, { Component } from 'react';
import Counter from './counter';
import NavBar from './navbar';

class Counters extends Component {
  state = {
    count: 0,
    isLoaded: false,
    counters: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            counters: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
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
