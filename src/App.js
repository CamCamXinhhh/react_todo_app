import React, { Component } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import FilterStatus from './components/FilterStatus';
import TodoList from './components/TodoList';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          content: 'Play Fifa Online 4',
          isFinish: true
        },
        {
          id: 2,
          content: 'Play Valorant',
          isFinish: true
        },
        {
          id: 1,
          content: 'Learn MAS291 & do homework',
          isFinish: false
        },
      ],
      filter: 'all'
    };

  }

  render() {
    return (
      <div className="p-5">
        <Header />
        <TodoForm />
        <FilterStatus />
        <TodoList />
      </div>
    )
  }
}

export default App;
