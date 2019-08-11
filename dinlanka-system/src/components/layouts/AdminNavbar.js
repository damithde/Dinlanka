import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const AdminNavbar = (props) => {
    return(
      <nav className="navbar navbar-expand-lg  bg-dark">
        
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Agents</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/signup">Register Agents</a>
          <a className="dropdown-item" href="/manage">Manage Agents</a>         
        </div>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shipments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Orders</a>
          </li>
       
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link bg-primary" onClick={props.signOut}>Log Out</a>
          </li>
        </ul>
     
      </div>
    </nav>

    )


}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(AdminNavbar)