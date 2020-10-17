import React from 'react';

const TodoList = ({ filterTodoList, changeATodoStatus }) => {
    const handleOnChange = (id) => {
        changeATodoStatus(id);
    }
    const todos = filterTodoList();
    const todoList = todos.map((todo, index) => {
        return (

            <div className="form-check mb-2" key={index}>
                <input className="form-check-input" type="checkbox" checked={todo.isFinish} onChange={() => { handleOnChange(todo.id) }} />
                <label className="form-check-label">
                    {todo.content}
                </label>

            </div>
        )
    }
    )

    return (
        todoList
    )
}

export default TodoList;