import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import {TextInput,NavItem,CardPanel}from 'react-materialize';



class Login extends Component {
  state = {
    email : "",
    password : ""

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  render() {
    const { authError, auth, profile } = this.props;
    console.log(profile)
    if(auth.uid){
      if(profile.isAdmin) {return <Redirect to='/adminhome' />}
      else {return <Redirect to='/agenthome' />}
  
    }     
    return (
      <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody style={{ color:'black' }}>
                  <Form onSubmit={this.handleSubmit}>
                  <CardPanel className="teal">
                      <span >
                      <div className="text-center" style={{color: 'black'}}><h1>SIGN IN</h1></div>
                      </span>
                  </CardPanel>
                    <InputGroup className="mb-3">
                      <TextInput  icon="email" type="email" placeholder="Email" id = 'email'   onChange={this.handleChange} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <TextInput  icon="lock" type="password" placeholder="Password" id = 'password'  onChange={this.handleChange} />
                    </InputGroup>
                    <Row >
                        <Col xs={{ size: 7.5, offset: 5 }} >
                        <div className="text-right"><Button  color="dark" className="text-center">Login</Button></div>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs="7" >
                    <p>
                    <div className="text-right"><NavItem  style={{color: 'black'}} href="" >Forgot Password?</NavItem></div>
                    </p>
                    </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>         
            </CardGroup>
          </Col>
        </Row>
      </Container>
      <div className="center red-text">
      { authError ? <p>{authError}</p> : null }
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
console.log(state)
  return{
    authError: state.auth.authError,
    profile:state.firebase.profile,
    auth: state.firebase.auth
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
