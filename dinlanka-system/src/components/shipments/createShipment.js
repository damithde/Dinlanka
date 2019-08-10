import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createShipment } from '../../store/actions/shipmentActions'
import { updateShipment } from '../../store/actions/shipmentActions'
import { Redirect } from 'react-router-dom'
import  Quote  from '../customers/Quote'
import FlashMessage from 'react-flash-message'
import { browserHistory } from 'react-router';
import { createHashHistory } from 'history'
import { withRouter } from "react-router";
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
  Table

} from 'reactstrap';



class CreateShipment extends Component {
  
  state = {
    shipment_id: '',
    type: '',
    customer: '',
    customer_id:'',
    ship_er: true,
    val: ""
  }
  handleChange = (e) => {
    
    this.setState({
      [e.target.id]: e.target.value
    })
    
  }
  handleError = () => {
    if (this.state.shipment_id == '' && this.state.type == '' && this.state.customer == '' && this.state.customer_id == ''){
      this.setState({
        ship_er:false
      })
    }
    else {
      this.setState({
        ship_er:true
      })
  }
}
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleError();
    // console.log(this.state);
    if (this.state.ship_er) {
      console.log(this.state);
      this.props.createShipment(this.state);
      this.props.history.push('/');
      alert("Data Added Successfully")
      this.setState({
        val:"Data Added Successfully"
      })

      
    }
    else {
        console.log("check");
        alert("Please Fill all the required fields")
        console.log(this.state);
        this.setState({
          val:"Please Fill all the required fields"
        })

      console.log(this.state.val);
     
    }
    
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
         
        
        
  
  <Card>
              <CardHeader className='bg-primary'>
                <strong><h3>Create A New Shipment</h3></strong> 
              </CardHeader>
              <CardBody>
                <Form id="tex" onSubmit={this.handleSubmit} className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static"></p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">Shipment ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id='shipment_id' onChange={this.handleChange} name="text-input" placeholder="Shipment Id" />
                      
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="email-input">Shipment Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="type" name="text-input" placeholder="Type" onChange={this.handleChange} />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="email-input">Customer Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="customer" name="text-input" placeholder="Name" onChange={this.handleChange} />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="email-input">Customer ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="customer_id" name="text-input" placeholder="Customer Id" onChange={this.handleChange} />
                    
                    </Col>
                  </FormGroup>
                  
                </Form>
              </CardBody>
              <CardFooter>
                <Button form="tex" type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button form="tex" type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
              


  </Card>
  <br />

  
 
</div>

      
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateShipment))