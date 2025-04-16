import React from 'react';
import { NavLink } from 'react-router';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className='w-[150px] pl-8 pt-7'>
            <ul className='space-y-3'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='mobiles'>Mobiles</NavLink></li>
            <li><NavLink to='users'>Users</NavLink></li>
            </ul>
        </aside>
    );
};

export default Sidebar;