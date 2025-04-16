import React from 'react';
import { NavLink } from 'react-router';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className=''>
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='mobiles'>Mobiles</NavLink></li>
            <li><NavLink to='users'>Users</NavLink></li>
            </ul>
        </aside>
    );
};

export default Sidebar;