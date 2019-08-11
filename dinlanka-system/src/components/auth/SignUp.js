import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Button, Card, CardBody, CardGroup, Col,CustomInput,FormGroup, Container,Modal,ModalHeader,ModalBody,ModalFooter, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Label, FormFeedback, FormText , CardFooter,CardHeader,} from 'reactstrap';
import AdminNavbar from '../layouts/AdminNavbar';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    fullName: '',
    username: '',
    isAdmin:'',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth,authError } = this.props;
    if(!auth.uid){return <Redirect to='/signin' />}
    
    return ( 
     
      <React.Fragment>
          <AdminNavbar/> 
          <div className="container">
 
          <Card>
              <CardHeader className='bg-primary'>
                <strong><h3>Regsiter Agents</h3></strong> 
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
                      <Label htmlFor="text-input">Full Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id='fullname' onChange={this.handleChange} name="text-input" placeholder="Full name" />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">User Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="username" name="text-input" placeholder="username" onChange={this.handleChange} />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">User Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="isAdmin" id="isAdmin" onChange={this.handleChange} >
                            <option value="yes"> Admin</option>
                            <option value="no">Agent</option>
                    </Input>                     
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="email-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="email" name="text-input" placeholder="email" onChange={this.handleChange} />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="text-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password" name="text-input" placeholder="password" onChange={this.handleChange} />                    
                    </Col>
                  </FormGroup>
                                 
              
              <CardFooter>
                <Button form="tex" type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button form="tex" type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
              </Form>
              </CardBody>

           </Card>
           <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>

      </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)