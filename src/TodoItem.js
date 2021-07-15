import React, { useState } from 'react';
//import { DATA } from './App'; <--- Not needed?
import CurrentDate from './CurrentDate';
import './ToDoItem.css'

// TodoItems can have 3 possible states
// 'INCOMPLETE' - Item has not been done yet (background color is white)
// 'COMPLETE' - Item has been completed (background color is green)
// 'OVERDUE' - Item is overdue (background color is red)


// Todo items have a button on the left hand side
// When the <button> is clicked, it will allow you to complete the item
// State needs to be one of three strings - 'INCOMPLETE' 'COMPLETE' or 'OVERDUE'
// All Todo Item's start off in the 'INCOMPLETE' state


// If a 'INCOMPLETE' item has its button clicked, that item changes state to 'COMPLETE'
// If a 'COMPLETE' item has its button clicked, that item changes state to 'INCOMPLETE'
// If an item is 'OVERDUE' but it is 'INCOMPLETE' - Show the background color as red. It is still deemed 'OVERDUE'
// If an item is 'OVERDUE' but it is 'COMPELTE' - keep the state as 'COMPLETE'

// <TodoItem> components should display the title, due date, and description clearly

// Everything in the OVERDUE state is 'EXTRA CREDIT!'
// If the item is past its due date, its beginning state should be 'OVERDUE'
const getNextItemState = (itemState) => {
    switch (itemState) {
        case "INCOMPLETE":
            return "COMPLETE";
        case "COMPLETE":
            return "IMCOMPLETE";
        default:
            return itemState;        
    }
};

const getBgClass = (itemState, isOverdue) => {
    if (isOverdue) return "bg-red";
    if (itemState === "COMPLETE") return "bg-green";
    return "bg-white";
}

const getItemText = (itemState, isOverdue) => {
    if (isOverdue) return "OVERDUE";
    return itemState;
};

const TodoItem = props => {

    const [itemState, setItemState] = useState("INCOMPLETE");

    const isOverdue = new Date(props.data.dueDate) < new Date();

    const onBtnClick = () => {
        //(Conditional terniary attempt) const newClass = toggleClass.className === 
        setItemState(getNextItemState(itemState));
    } 
    
    return (
        <div className={getBgClass(itemState, isOverdue)}>
            <button className="button" onClick={onBtnClick}>{getItemText(itemState, isOverdue)}</button>
            <div className="toDoText">
                <div className="title">{props.data.title}</div>
                <div className="description">{props.data.description}</div>
            </div>
            <div className="dateBox">
                <CurrentDate />
                <div>
                    <span>Due Date: <br /></span>
                    <div className="date">{props.data.dueDate}</div>
                </div>               
            </div> 
        </div>
    )
};

export default TodoItem;
