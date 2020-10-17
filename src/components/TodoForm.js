import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                content: '',
                isFinish: false
            }
        };
    }

    onSubmitHandle = e => {
        e.preventDefault();
        const addToDo = { ...this.state.todo };
        addToDo.id = Math.random();
        this.props.addTodo(addToDo);
    }

    onChangeHandle = e => {
        this.setState({
            todo: {
                content: e.target.value,
                isFinish: false
            }
        })

    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandle}>
                <div className="form-group">
                    <input type="text" className="form-control" id="todo" placeholder="What needs to be done?" onChange={this.onChangeHandle} />
                </div>
            </form>

        )
    }
}

export default TodoForm;