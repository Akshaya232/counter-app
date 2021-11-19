import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import countersArray from './counters.json';
import './App.css';

class App extends Component {
  state = {
    counters: countersArray,
  };
  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  };

  handleIncrement = counterObj => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterObj);
    counters[index] = { ...counterObj };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalItems={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
