import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Error from './Pages/ErrorPage';
import SharedLayout from './Pages/SharedLayout';
import Products from './Pages/Products.js';
import SingleProduct from './Pages/SingleProduct';
import './router.css'

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}> {/*for using Outlet we are wrapping this component*/}
            <Route index element={<Home />} /> {/* added index so that it should always display on wen=bsite load */}
            <Route path='products' element={<Products />} />
            <Route path='products/:product_id' element={<SingleProduct />} /> {/*product_id will be used in SingleProduct comp using useParams method of React router dom*/}
            <Route path='contact' element={<Contact />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;