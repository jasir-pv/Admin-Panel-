import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from "./pages/home/Home"
import "./app.css"

export default function App() {
  return (
    <div>
      <Topbar/>
      <div className='container'>
          <Sidebar/>
          <Home/>
      </div>
    </div>
  )
}