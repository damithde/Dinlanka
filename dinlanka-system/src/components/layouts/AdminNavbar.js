import React from 'react'
import { NavLink } from 'react-router-dom'


const AdminNavbar = () => {
    return(
        <div>
      <ul id="dropdown1" className="dropdown-content" >
      <li><NavLink to='/'>Register New Agent</NavLink></li>
            <li><NavLink to='/'>Edit</NavLink></li>
            </ul>
            <ul className="right">
        <li><NavLink to='/'>Agents</NavLink></li>
            
        
        <li><NavLink to='/'>Login</NavLink></li>
        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>

      </ul>
    </div>

    )


}
export default AdminNavbar;