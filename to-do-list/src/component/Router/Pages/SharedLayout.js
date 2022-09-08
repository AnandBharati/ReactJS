import React from 'react'
import NavBar from './NavBar'
import {Outlet } from 'react-router-dom'

function SharedLayout() {
  return (
    <>
        <NavBar/>
        <section className='OutletSection fullWidth'>
                 <Outlet/> {/*outlet will allow to use shared layout which means that all route result/page will display here*/}
        </section>
    </>
  )
}

export default SharedLayout