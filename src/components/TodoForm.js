import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="todo" placeholder="What needs to be done?" />
                </div>
            </form>

        )
    }
}

export default TodoForm;