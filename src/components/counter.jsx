import React, { Component } from 'react';

class Counter extends Component {
  render() {
     return (
        <div>
          <span className={this.getBadgeClasses(this.props.counter.value)}>{this.formatCount()}</span>
          <button
            className='btn btn-primary m-2'
            onClick={ () => this.props.increamentCounter(this.props.counter.id)}>Increament
          </button>
          <button
            className='btn btn-primary m-2'
            onClick={() => this.props.decreamentCounter(this.props.counter.id)}>Decreament
          </button>
          <button
            className='btn btn-danger'
            onClick={() => this.props.onDelete(this.props.counter.id)}>Delete
          </button>
        </div>
     )
   }

    getBadgeClasses = (counterValue) => {
      return counterValue === 0 ? 'badge m-2 badge-warning' : 'badge m-2 badge-primary';
    }

    formatCount() {
      const value = this.props.counter.value;
      return value === 0 ? 'Zero ' : value;
    }
  }

export default Counter;
