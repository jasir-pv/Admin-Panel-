import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import './app.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import NewProduct from './pages/newProduct/NewProduct';

export default function App() {
  // Fetch user data from local storage
  const currentUser = JSON.parse(localStorage.getItem('persist:root'))?.user 
      && JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser;

  // Check if the user is an admin
  const isAdmin = currentUser?.isAdmin;

  // A Protected Route component for Admin users
  const ProtectedRoute = ({ children }) => {
    return isAdmin ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      {isAdmin && <Topbar />} {/* Only show Topbar if user is an admin */}
      <div className="container">
        {isAdmin && <Sidebar />} {/* Only show Sidebar if user is an admin */}
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Home route, available only for admins */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          
          {/* User-related routes, protected by admin check */}
          <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
          <Route path="/user/:userId" element={<ProtectedRoute><User /></ProtectedRoute>} />
          <Route path="/newUser" element={<ProtectedRoute><NewUser /></ProtectedRoute>} />
          
          {/* Product-related routes, protected by admin check */}
          <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
          <Route path="/product/:productId" element={<ProtectedRoute><Product /></ProtectedRoute>} />
          <Route path="/newproduct" element={<ProtectedRoute><NewProduct /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}
