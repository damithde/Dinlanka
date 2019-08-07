import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import {CardPanel}from 'react-materialize';
import AgentNavbar from '../layouts/AgentNavbar';



class Home extends Component {
    render() {
    const { projects, auth,profile } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    else {
    if(profile.isAdmin) {return <Redirect to='/adminhome' />}
      
}
        
        return (
          <React.Fragment>
          <AgentNavbar/>
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

  export default connect(mapStateToProps)(Home)