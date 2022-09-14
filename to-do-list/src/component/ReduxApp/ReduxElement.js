import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from './Slice'






function ReduxElement() {

const count = useSelector((state)=>state.counter.value)
const dispatch = useDispatch()

  return (
    <div className='reduxContainer'>
        <p className='fontBlack'> Value: {count} </p>
        <button onClick={()=>dispatch(increment())}> Increment</button>
    </div>
  )
}

export default ReduxElement