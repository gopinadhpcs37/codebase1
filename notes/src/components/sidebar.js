import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const SideBar = props => {
    return <nav className="sidebar">
        <div className="sidebar-logo"> 
            <ul>
                <li><Link to="/notes">Add Notes</Link></li>
                <li><Link to="/managenotes">Manage Notes</Link></li>
                <li><Link to="/image">Add Image</Link></li>
                <li><Link to="/links">Add Links</Link></li>
            </ul>
        </div>
        
    </nav>
}

export default SideBar;