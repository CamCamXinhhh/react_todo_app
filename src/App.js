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
          id: 3,
          content: 'Learn MAS291 & do homework',
          isFinish: false
        },
      ],
      filter: 'all'
    };

  }

  addTodo = todo => {
    const todosChanged = [...this.state.todos];
    todosChanged.push(todo);
    this.setState({
      todos: todosChanged
    })
  }

  changeATodoStatus = todoId => {
    const todosChanged = [...this.state.todos];
    const index = todosChanged.findIndex(todo => todo.id === todoId);
    todosChanged[index].isFinish = !todosChanged[index].isFinish;
    this.setState({
      todos: todosChanged
    })

  }

  render() {
    return (
      <div className="p-5">
        <Header />
        <TodoForm addTodo={this.addTodo} />
        <FilterStatus />
        <TodoList
          todos={this.state.todos}
          changeATodoStatus={this.changeATodoStatus}
        />
      </div>
    )
  }
}

export default App;
