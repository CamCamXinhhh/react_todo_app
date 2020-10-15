import { render } from '@testing-library/react';
import React from 'react';

const TodoList = () => {

    const todo = [
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
    ];

    return (
        <div className="form-check mt-4">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </label>
        </div>
    )
}

export default TodoList;