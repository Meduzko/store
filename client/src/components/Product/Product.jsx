import React from 'react';

function TodoItem(props) {
    console.log(props);
    props.anotherOneFn();
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem