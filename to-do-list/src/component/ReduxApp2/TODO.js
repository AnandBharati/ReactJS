import { addTodo, removeTodo, clearTodo } from "./TODO_SLICE";
import { useDispatch, useSelector } from "react-redux";


import React from 'react'

function TODO() {
    let item; //this can be done using hooks efficiently
    const list = useSelector((state)=>state.TODOAPP.list)
    console.log(list)
    const dispatch = useDispatch();
    
    const todoLists = list.map((a,i)=> <p className="fontBlack" key={`${a} - ${i}`}>{a}</p>) 

    function onChangeHandler(e){
        item = e.target.value;
    }

  return (
    <div>
        <div className="fontBlack"> {todoLists} </div>
        <input className="fontBlack" type="text" id="txtList" onChange={(e)=>onChangeHandler(e)}></input>
        <button onClick={()=>dispatch(addTodo(item))}>Add</button>
        <button onClick={()=>dispatch(removeTodo())}>Remove</button>
        <button onClick={()=>dispatch(clearTodo())}>Clear</button>
    </div>
  )
}

export default TODO;