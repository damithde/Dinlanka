import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Button, Card, CardBody, CardGroup, Col,CustomInput,FormGroup, Container,Modal,ModalHeader,ModalBody,ModalFooter, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {TextInput,NavItem,CardPanel,Select}from 'react-materialize';


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    fName: '',
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
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (     
        <div className="app align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody style={{ color:'black' }}>
                    <Form onSubmit={this.handleSubmit}>
                    <CardPanel className="teal">
                        <span >
                        <div className="text-center" style={{color: 'black'}}><h1>REGISTER USERS</h1></div>
                        </span>
                    </CardPanel>
                      <InputGroup className="mb-3">
                        <TextInput  icon="face" type="text" placeholder="Full Name"  id= 'fName'  onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <TextInput  icon="face" type="text" placeholder="Username"  id= 'username'  onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <TextInput  icon="email" type="email" placeholder="Email" id= 'email' onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Select icon="cloud" id='isAdmin'  onChange={this.handleChange}>
                            <option value="Admin" >
                                Admin
                            </option>
                            <option value="Agent">
                                Agent
                            </option>
                        </Select>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <TextInput  icon="lock" type="password" placeholder="Password" id= 'password' onChange={this.handleChange} />
                      </InputGroup>                
                      <Row >
                          <Col xs={{ size: 7.5, offset: 5 }} >
                          <div className="text-right"><Button   color="dark" className="text-center">Submit</Button></div>
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
