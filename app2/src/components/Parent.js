import React from 'react'
import Child from './ChildNode'

function Parent() {
    const lists = ['apple','mango','banana']
  return (
    <div>this is from parent <Child lists ={lists}/></div>
  )
}


export default  Parent;