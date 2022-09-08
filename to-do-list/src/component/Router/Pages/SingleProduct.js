import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const product_id = useParams().product_id; 
  /* product_id passed in url can be accessed using useParams*/
  console.log(product_id)
  return (
    <>
      <p className='blackFont'>SingleProduct</p>
      <h1 className='blackFont'> Product id - {product_id} </h1>
    </>
    
  )
}

export default SingleProduct