import React, { useState } from 'react'
import "./App.css";
import ToDoLists from './toDoList';

const App = () => {

  const [inputList, setInputList] = useState("")

  const [items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")
  }

  const deleteItems = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrElem , index) => {
        return id !== index
      })
    })
  }

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text" value={inputList} placeholder='add a items' onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>

            {items.map((itemsVal, index) => {
              return <ToDoLists text={itemsVal}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>

  )
}


export default App;