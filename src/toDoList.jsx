import React from "react";
// import './App.css'

const ToDoLists = (props) => {
    return (
        <>
            <div className="ToDo-Style">
                <i class="fa-solid fa-trash"
                    onClick={() => {
                        props.onSelect(props.id)
                    }}></i>
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default ToDoLists;