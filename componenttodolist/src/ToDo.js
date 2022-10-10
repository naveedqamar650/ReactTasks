import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id}>
            {todo.task}
        </div>
    );
};

export default ToDo;