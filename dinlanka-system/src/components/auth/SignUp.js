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
  handleError = () => {
    if (this.state.fullname == '' && this.state.username == '' && this.state.email== '' && this.state.password == ''){
      this.setState({
        user_er:false
      })
    }
    else {
      this.setState({
        user_er:true
      })
  }
}
  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.signUp(this.state);
    this.handleError();
    // console.log(this.state);
    if (this.state.user_er) {
      console.log(this.state);
      this.props.createShipment(this.state);
      this.props.history.push('/signup');
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
    const { auth,authError } = this.props;
    //if(!auth.uid){return <Redirect to='/signin' />}
    
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