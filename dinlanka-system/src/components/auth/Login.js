import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'

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
      else {return <Redirect to='/home' />}
  
    } 
    

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" id = 'email'  onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" id = 'password' onChange={this.handleChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="dark" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
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
