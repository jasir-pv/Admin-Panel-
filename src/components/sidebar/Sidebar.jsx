import React from 'react';
import "./Sidebar.css";
import {Link} from "react-router-dom"
import { LineStyle, Timeline, TrendingUp, Person, Store, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        
        {/* Dashboard Section */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to="/" className="Link">
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon'/>
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon'/>
              Sales
            </li>
          </ul>
        </div>

        {/* Quick Menu Section */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to="/users" className="Link">
            <li className="sidebarListItem">
              <Person className='sidebarIcon'/>
              Users
            </li>
            </Link>
            <Link to="/products" className="Link">
            <li className="sidebarListItem">
              <Store className='sidebarIcon'/>
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className='sidebarIcon'/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>

        {/* Notifications Section */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className='sidebarIcon'/>
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className='sidebarIcon'/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className='sidebarIcon'/>
              Messages
            </li>
          </ul>
        </div>

        {/* Staff Section */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className='sidebarIcon'/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
