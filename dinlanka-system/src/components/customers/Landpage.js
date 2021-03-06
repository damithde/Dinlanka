import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createShipment } from '../../store/actions/shipmentActions'

import  Quote  from '../customers/Quote'


class Landpage extends Component {

    render() {

           return (
            <React.Fragment>
                <Quote/>

            </React.Fragment>


           ) 
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      createShipment: (project) => dispatch(createShipment(project))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Landpage)