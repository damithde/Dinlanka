import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const AgentNavbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg  bg-dark">
        
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Create Shipment<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Location Update</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Employee Details</a>
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
  
  export default connect(null, mapDispatchToProps)(AgentNavbar)
