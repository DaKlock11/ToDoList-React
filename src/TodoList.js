import React, {useState} from 'react';
import TodoItem from './TodoItem';
import './ToDoList.css';

const TodoList = props => {
    const { items } = props;
    // Render all your TO DO items
    // They are being passed in through a prop
    // Render all objects in the items array 
    // as <TodoItem> components
    return (
    //<div>Hello World</div>
        <div className="toDoList">
            {items.map( (toDoListData) => {
                return (
                    <TodoItem
                        key={toDoListData.id}
                        data={toDoListData}

                    />
                )
            })}
        </div>
    );
};

export default TodoList;
