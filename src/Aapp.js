import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from "./pages/home/Home"
import "./app.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserList from './pages/userList/UserList'


export default function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
          <Sidebar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />

          </Routes>
      </div>
    </Router>
  )
}