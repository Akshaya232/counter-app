import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { onDelete, onIncrement, counter } = this.props;
    return (
      <div>
        <span
          className={
            counter.value
              ? 'badge m-2 badge-primary'
              : 'badge m-2 badge-warning'
          }>
          {counter.value === 0 ? 'zero' : counter.value}
        </span>
        <button
          className='btn btn-secondary m-2'
          onClick={() => onIncrement(counter)}>
          Increment
        </button>
        <button className='btn btn-danger' onClick={() => onDelete(counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
