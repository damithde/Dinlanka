import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap';
import {CardPanel}from 'react-materialize';
import AgentNavbar from '../layouts/AgentNavbar';
import CreateShipment from './createShipment'



class UpdateShipment extends Component {
    render() {
    const { projects, auth,profile } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    else {
    if(profile.isAdmin) {return <Redirect to='/adminhome' />}
      
}
        
        return (
          <React.Fragment>
          <AgentNavbar/>
          <img src={require('../../images/logiman.png')} class="floatRight"></img>

        <div className="app align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
                <Card className="p-4">
                  <CardBody style={{ color:'black' }}>
                    <CardPanel className="teal">
                        
                        <CreateShipment/>
                    </CardPanel>
                  </CardBody>
                </Card>         
            </Col>
          </Row>
        </Container>

      </div>
      </React.Fragment>
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

  export default connect(mapStateToProps)(UpdateShipment)