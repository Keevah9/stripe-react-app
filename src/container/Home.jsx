import React from 'react'
import Main from './Main'
import Navbar from '../components/Navbar'
import Submenu from '../components/Submenu'

const Home = () => {
  return (
    <div className= 'px-12 sm:px-20 w-full relative '>
    <Navbar/>
    <Submenu/>
    <Main/>
    
    </div>
  )
}

export default Home