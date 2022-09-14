import {addItem, removeItem, clearItem} from './Slice'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'

function TODOApp() {
    const TODOList = useSelector((state)=>state.TODO.todoList)
    const dispatch = useDispatch();
    let listItem;

    const ListToDisplay = TODOList.map((a)=>{
        return (<li className='fontBlack' key={`item-${a}`} > {a} </li>)
    });

  return (
    <div>
        <h1>ToDo App 3</h1>
        <input type='text' onChange={(e)=>{listItem = e.target.value}}></input>
        <button onClick={()=>{dispatch(addItem(listItem))}}>Add</button>
        <button onClick={()=>{dispatch(removeItem(listItem))}}>Remove</button>
        <button onClick={()=>{dispatch(clearItem(listItem))}}>Clear</button>
        <ul> {ListToDisplay} </ul>
    </div>
  )
}

export default TODOApp