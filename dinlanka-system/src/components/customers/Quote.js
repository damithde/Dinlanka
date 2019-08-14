import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getquoate } from '../../store/actions/customerActions';
import { Link } from 'react-router-dom'
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
  Row,
  Badge

} from 'reactstrap';

class Quote extends Component {
  state = {
    origin_country: '',
    desti_country: '',
    origin_city: '',
    desti_city: '',
    origin_zip: '',
    desti_zip: '',
    ship_date: '',
    weight: '',
    value :'',
    category:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
     
     this.setState ({
       value:this.calc()
     }, function(){
      
      this.props.history.push({
        pathname: '/qview',
        data: this.state
      }); 
     })
    
    //this.props.getquoate(this.state);
     

  }
  calc(){
    var origin = ["Scotland", "England",  "France", "Italy"];
    var des = ["Sri Lanka", "Singapore"];
    var origin2 = [[60, 70], [65,75], [70,80], [55, 65]]
    var a = origin.indexOf(this.state.origin_country);
    var b = des.indexOf(this.state.desti_country);
    var val = origin2[a][b] 
    console.log(val)
    return val
  
  }


  render(){

    return(
      <React.Fragment>
              <div className="container"  style={{width: '900px',padding:'15px'}}>


        <Card style={{padding:'15px'}} >
              <CardHeader className='bg-primary'>
                <strong>Online Quotation</strong>
                <small> Dinlanka (Pvt) Ltd</small>
              </CardHeader>
              <Form id="tex" onSubmit={this.handleSubmit} className="form-horizontal">
              <CardBody>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Origin Country</Label>
                      <Input type="select" name="origin_country" id="origin_country" onChange={this.handleChange}>
                        <option value="Wales">Wales</option>
                        <option value="Scotland">Scotland</option>
                        <option value="England">England</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="8">UAE</option>
                        <option value="9">Germany</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="ccmonth">Origin City</Label>
                      <Input type="select" name="origin-city" id="origin_city" onChange={this.handleChange}>
                        <option value="London">London</option>
                        <option value="Cardif">Cardif</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Bristol">Bristol</option>

                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="email-input">Origin Zip Code</Label>
                      <Input type="text" id="origin_zip" name="origin_zip" placeholder="Origin Zip Code" onChange={this.handleChange} />
                  </FormGroup>

                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="ccyear">Destination Country</Label>
                      <Input type="select" name="desti-country" id="desti_country" onChange={this.handleChange}>
                        <option value="1">England</option>
                        <option value="2">Scotland</option>
                        <option value="3">Wales</option>
                        <option value="4">France</option>
                        <option value="5">Italy</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="8">UAE</option>
                        <option value="9">Germany</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="ccyear">Destination City</Label>
                      <Input type="select" name="desti-city" id="desti_city" onChange={this.handleChange}>
                      <option value="Colombo">Colombo</option>
                        <option value="Galle">Galle</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Jaffna">Jaffna</option>
      
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email-input">Destination Zip Code</Label>
                      <Input type="text" id="desti_zip" name="desti_zip" placeholder="Destination Zip Code" onChange={this.handleChange} />
                  </FormGroup>
                 
                  </Col>
                </Row>
                </CardBody>
                <CardHeader className='bg-primary'>
                </CardHeader>
                <CardBody>
                  <Row>
                <Col xs="3">
                <FormGroup >
                    
                      <Label htmlFor="date-input"> Shipping Date </Label>
                      <Input type="date" id="ship_date" name="ship_date" onChange={this.handleChange} />
                    
                  </FormGroup>
                  </Col>
                  <Col xs="3">
                  <FormGroup>
                  
                      <Label htmlFor="email-input">Weight of the Item </Label>
                      <Input type="number" id="weight" name="weight" step="0.1" placeholder="Weight (Kg)" onChange={this.handleChange} />
                      
                  </FormGroup>
                  </Col>
                  <Col md="6">
                  <FormGroup>
                      <Label htmlFor="ccmonth">Shipment Item Category</Label>
                      <Input type="select" name="origin-city" id="category" onChange={this.handleChange}>
                        <option value="Electronics-(No Battery)">Electronics-(No Battery)</option>
                        <option value="Books and Collectibles">Books and Collectibles</option>
                        <option value="Dry Food and Supplements">Dry Food and Supplements</option>
                        <option value="Fashion, Health, Beauty">Fashion, Health, Beauty</option>
                        <option value="Toy, Sports, Leisure">Toy, Sports, Leisure</option>

                      </Input>
                    </FormGroup>
                  </Col>
                  </Row>
                
              </CardBody>


              <CardFooter>
                

                <Button form="tex" type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <div class="divider" style={{width:'30px',height:'auto',display:'inline-block'}}/>
              
                <Button form="tex" type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
              </Form>
            </Card>
            </div>
           
            </React.Fragment>

    )

  }
}

export default withRouter(Quote)