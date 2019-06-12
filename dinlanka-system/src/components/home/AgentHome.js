import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col,CustomInput,FormGroup, Container,Modal,ModalHeader,ModalBody,ModalFooter, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {TextInput,NavItem,CardPanel,Select}from 'react-materialize';



class Home extends Component {
    render() {
    const { projects, auth,profile } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    else {
    if(profile.isAdmin) {return <Redirect to='/adminhome' />}
      
}
        
        return (
        <div className="app align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
                <Card className="p-4">
                  <CardBody style={{ color:'black' }}>
                    <CardPanel className="teal">
                        <span >
                        <div className="text-center" style={{color: 'black'}}><h1> Agent Home Page</h1></div>
                        </span>
                    </CardPanel>
                  </CardBody>
                </Card>         
            </Col>
          </Row>
        </Container>
      </div>
        )
     
    }




}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

  export default connect(mapStateToProps)(Home)