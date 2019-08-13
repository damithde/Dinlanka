import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import AdminNavbar from '../layouts/AdminNavbar';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,CardSubtitle, CardBody,Row,Col,CardHeader, Container } from 'reactstrap';
import firebase from '../../config/fbConfig.js'



class AdminHome extends Component {
    render() {
    const { projects, auth } = this.props;
if (!auth.uid) return <Redirect to='/signin' />
else console.log(auth.uid) 
        
        return (
          <React.Fragment>
          <AdminNavbar/>
          <div className="dashboard container">
          <Container>
            {''}
            {''}
          <Card>
              <CardHeader className='bg-primary'>
                <strong><h3></h3></strong> 
              </CardHeader>
              <CardBody>
              <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
              </CardBody>
          </Card>
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
      profile:state.firebase.profile
    }
  }

  export default connect(mapStateToProps)(AdminHome)