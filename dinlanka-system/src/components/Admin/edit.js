import React, { Component } from 'react';
import firebase from '../../config/fbConfig.js'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col,CustomInput,FormGroup, Container,Modal,ModalHeader,ModalBody,ModalFooter, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Label, FormFeedback, FormText , CardFooter,CardHeader,} from 'reactstrap';
import AdminNavbar from '../layouts/AdminNavbar';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      fullname: '',
      username: '',
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          fullname: board.fullname,
          username: board.username,
          email: board.email,
          password:board.password
        });
      } else {
        console.log("No user!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { fullname, username, email,password} = this.state;

    const updateRef = firebase.firestore().collection('users').doc(this.state.key);
    updateRef.set({
        fullname,
        username,
        email,
        password
    }).then((docRef) => {
      this.setState({
        fullname: '',
        username: '',
        email: '',
        password: ''
      });
      this.props.history.push("/manage/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
        <React.Fragment>
        <AdminNavbar/> 
        <div className="container">

        <Card>
            <CardHeader className='bg-primary'>
              <strong><h3>Regsiter Agents</h3></strong> 
            </CardHeader>
            <CardBody>
              <Form id="tex" onSubmit={this.onSubmit} className="form-horizontal">
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
                    <Input type="text" id='fullname' onChange={this.onChange}  value={this.state.fullname} name="text-input" placeholder="Full name" />
                    
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="text-input">User Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="username" name="text-input" placeholder="username" value={this.state.username} onChange={this.onChange}  />
                    
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="email-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="email" name="text-input" placeholder="email"  value={this.state.email} onChange={this.onChange}  />
                   
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="text-input">Password</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="password" id="password" name="text-input" placeholder="password" value={this.state.password} onChange={this.onChange}  />                    
                  </Col>
                </FormGroup>
                               
            
            <CardFooter>
              <Button form="tex" type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button form="tex" type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
            </Form>
            </CardBody>

         </Card>
         </div>
    </React.Fragment>
    );
  }
}

export default Edit;