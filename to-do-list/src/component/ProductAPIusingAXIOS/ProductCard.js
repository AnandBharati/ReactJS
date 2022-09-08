import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
  return (
    <>
        <div className="ProductCard">
            {props.children}
        </div>
    </>
  )
}

export default ProductCard;