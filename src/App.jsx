import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'
import HeaderUser from './components/headeruser'
import AddedUserList from './components/addeduserlist'

function App() {


  return (
    <div className='app'>
      <Hero />
      <Navbar />
      <HeaderUser />
      <AddedUserList />
    </div>
  )
}

export default App
