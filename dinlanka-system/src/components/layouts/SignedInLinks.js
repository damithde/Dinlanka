import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { NavItem } from 'reactstrap';


const SignedInLinks = (props) => {
  return (
      
    <React.Fragment>
    
    <NavItem className="px-3">
          <NavLink to="/create" className="nav-link" >Shipment</NavLink>
        </NavItem>
        <NavItem className="px-3">
          <Link to="/qr" className="nav-link">QR-Code</Link>
        </NavItem>
        <NavItem className="px-5">
          <NavLink onClick={props.signOut} className="nav-link">Sign Out</NavLink>
         
        </NavItem>
    </React.Fragment>


  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)