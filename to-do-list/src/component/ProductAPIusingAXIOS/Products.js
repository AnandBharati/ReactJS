import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import ProductCard from './ProductCard';
import './Products.css'

/*
Function component fetches product list from dummy API and display Brand Name
*/

function Products() {
    let data, products, ProdListJSX;
    const [ProductList, setProductList] = useState([]);
  
    async function getData(url) {
      try {
        data = await axios.get(url);
        products = data.data.products;
        ProdListJSX = products.map((p,i) => { 
            return (<ProductCard key={"ProductCard-"+i}>
               <p className='product' key={'product-'+i}> {p.title}</p> 
               <p className='product-brand'> Brand: {p.brand}</p>
               <p className='product-desc'> Desc:  {p.description}</p>
               <p className='product-price'> Price: $ {p.price}</p>
               </ProductCard> )
        });
        setProductList(ProdListJSX);
  
      } catch (error) {
        console.error(error);
      }
    }
    getData('https://dummyjson.com/products')

  return (
    <> {ProductList} </>
  )
}

export default Products;
