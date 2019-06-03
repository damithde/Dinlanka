import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getquoate } from '../../store/actions/customerActions'


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
    weight: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.getquoate(this.state);
    this.props.history.push('/home');
  }


  render(){

    return(
      <React.Fragment>
        <Card>
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
                      <Input type="select" name="origin_country" id="origin_country">
                        <option value="1">England</option>
                        <option value="2">Scotland</option>
                        <option value="3">Wales</option>
                        <option value="4">France</option>
                        <option value="5">Italy</option>
                        <option value="6">Singapore</option>
                        <option value="7">Sri Lanka</option>
                        <option value="8">UAE</option>
                        <option value="9">Germany</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="ccmonth">Origin City</Label>
                      <Input type="select" name="origin-city" id="origin_city">
                        <option value="1">England</option>
                        <option value="2">Scotland</option>
                        <option value="3">Wales</option>
                        <option value="4">France</option>
                        <option value="5">Italy</option>
                        <option value="6">Singapore</option>
                        <option value="7">Sri Lanka</option>
                        <option value="8">UAE</option>
                        <option value="9">Germany</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="email-input">Origin Zip Code</Label>
                      <Input type="text" id="origin_zip" name="origin_zip" placeholder="Origin Zip Code" />
                  </FormGroup>

                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="ccyear">Destination Country</Label>
                      <Input type="select" name="desti-country" id="desti_countr">
                        <option value="1">England</option>
                        <option value="2">Scotland</option>
                        <option value="3">Wales</option>
                        <option value="4">France</option>
                        <option value="5">Italy</option>
                        <option value="6">Singapore</option>
                        <option value="7">Sri Lanka</option>
                        <option value="8">UAE</option>
                        <option value="9">Germany</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="ccyear">Destination City</Label>
                      <Input type="select" name="desti-city" id="desti_city">
                        <option value="1">England</option>
                        <option value="2">Scotland</option>
                        <option value="3">Wales</option>
                        <option value="4">France</option>
                        <option value="5">Italy</option>
                        <option value="6">Singapore</option>
                        <option value="7">Sri Lanka</option>
                        <option value="8">UAE</option>
                        <option value="9">Germany</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email-input">Destination Zip Code</Label>
                      <Input type="text" id="desti_zip" name="desti_zip" placeholder="Destination Zip Code" />
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
                    
                      <Label htmlFor="date-input"> <h5>Shipping Date </h5></Label>
                      <Input type="date" id="ship_date" name="ship_date" placeholder="date" />
                    
                  </FormGroup>
                  </Col>
                  <Col xs="3">
                  <FormGroup>
                  
                      <Label htmlFor="email-input"><h5>Weight of the Item (Kg)</h5></Label>
                      <Input type="number" id="weight" name="weight" placeholder="Weight" />
                      
                  </FormGroup>
                  </Col>
                  </Row>
                
              </CardBody>


              <CardFooter>
                <Button form="tex" type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button form="tex" type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
              </Form>
            </Card>
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
    getquoate: (quoate) => dispatch(getquoate(quoate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)