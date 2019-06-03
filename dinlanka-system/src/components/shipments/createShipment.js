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

class CreateShipment extends Component {
  state = {
    shipment_id: '',
    type: '',
    customer: '',
    customer_id:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createShipment(this.state);
    this.props.history.push('/home');
  }

  render() {
    const { auth } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">

        
        {/* <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Shipment</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form> */}
  
  <Card>
              <CardHeader>
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

  <Quote/>
 
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateShipment)