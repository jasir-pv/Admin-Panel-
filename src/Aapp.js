import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from "./pages/home/Home"
import "./app.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserList from './pages/userList/UserList'
import User from './pages/user/User'


export default function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
          <Sidebar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />

          </Routes>
      </div>
    </Router>
  )
}