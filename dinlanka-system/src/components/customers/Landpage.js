import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createShipment } from '../../store/actions/shipmentActions'
import { updateShipment } from '../../store/actions/shipmentActions'
import { Redirect } from 'react-router-dom'
import  Quote  from '../customers/Quote'
import {
  
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,

} from 'reactstrap';

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