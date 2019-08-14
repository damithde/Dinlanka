import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createShipment } from '../../store/actions/shipmentActions'
import { Redirect } from 'react-router-dom'


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


} from 'reactstrap';



class CreateShipment extends Component {
  constructor(props){
    super(props) 
  }
  state = {
    shipment_id: '',
    type: '',
    customer: '',
    customer_email:'',
    ship_er: true,
    val: "",
    origin_port:'',
    desti_port:'',
    ship_date:''
  }

  handleChange = (e) => {
    
    this.setState({
      [e.target.id]: e.target.value
    })
    
  }
  handleError = () => {
    if (this.state.shipment_id === '' && this.state.type === '' && this.state.customer === '' && this.state.customer_email === ''&& this.state.desti_port === ''){
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
    if (this.state.ship_er) {
      console.log(this.state);
      this.props.createShipment(this.state, this.state.origin_port);
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
     
      <div className="container" style={{width: '600px',padding:'15px'}}>
         
        
        
  
  <Card style={{padding:'15px'}} >
              <CardHeader className='bg-primary'>
                <strong><h3>Create A New Shipment</h3></strong> 
              </CardHeader>
              
              <CardBody>
                <Form id="tex" onSubmit={this.handleSubmit} className="form-horizontal">
                  <FormGroup row>
                    
                    <Col xs="9" md="9">
                      <p className="form-control-static"></p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    
                      <Label htmlFor="text-input">Shipment Reference Number</Label>
                    
                      <Input type="text" id='shipment_id' onChange={this.handleChange} name="text-input" placeholder="Shipment Ref" />
                      
                      
                    
                  </FormGroup>
                  <FormGroup row>
                      <Label htmlFor="ccmonth">Shipment Item Type</Label>
                      <Input type="select" name="type" id="type" onChange={this.handleChange}>
                        <option value="Electronics-(No Battery)">Electronics-(No Battery)</option>
                        <option value="Books and Collectibles">Books and Collectibles</option>
                        <option value="Dry Food and Supplements">Dry Food and Supplements</option>
                        <option value="Fashion, Health, Beauty">Fashion, Health, Beauty</option>
                        <option value="Toy, Sports, Leisure">Toy, Sports, Leisure</option>

                      </Input>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="ccyear">Origin Port</Label>
                      <Input type="select" name="desti-city" id="origin_port" onChange={this.handleChange}>
                      <option value="London">London</option>
                        <option value="Liverpool">Liverpool</option>
                        <option value="Grimsby">Grimsby</option>
                        <option value="Hartlepool">Hartlepool</option>
      
                      </Input>
                    </FormGroup>

                    <FormGroup row>
                      <Label htmlFor="ccyear">Destination Port</Label>
                      <Input type="select" name="desti_port" id="desti_port" onChange={this.handleChange}>
                      <option value="Colombo">Colombo</option>
                        <option value="Hambanthota">Hambanthota</option>
                        <option value="Singapore">Singapore Port</option>
                        <option value="Kerala">Kerala</option>
      
                      </Input>
                    </FormGroup>
                    <FormGroup row >
                    
                      <Label htmlFor="date-input"> Shipment Date </Label>
                      <Input type="date" id="ship_date" name="ship_date" placeholder="date" onChange={this.handleChange} />
                    
                  </FormGroup>
                  <FormGroup row>
              
                      <Label htmlFor="email-input">Customer Name</Label>
                  
                      <Input type="text" id="customer" name="text-input" placeholder="Name" onChange={this.handleChange} />
                     
               
                  </FormGroup>
                  <FormGroup row>
                 
                      <Label htmlFor="email-input">Customer Email</Label>
                  
                      <Input type="email" id="customer_email" name="text-input" placeholder="Customer Email" onChange={this.handleChange} />
                    
                  
                  </FormGroup>


                  
                </Form>
              </CardBody>
              <CardFooter>
                <Button form="tex" type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <div class="divider" style={{width:'30px',height:'auto',display:'inline-block'}}/>
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