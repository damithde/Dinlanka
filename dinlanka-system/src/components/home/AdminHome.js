import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import AdminNavbar from '../layouts/AdminNavbar';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,CardSubtitle, CardBody,Row,Col,CardHeader, Container } from 'reactstrap';
import firebase from '../../config/fbConfig.js'


class AdminHome extends Component {
  constructor(props) {
    super(props);
    
  }

  userCount = () => {
    return (dispatch, getState, {getFirestore}) => {
      //console.log(id);
      const firestore = getFirestore();
      const db = firestore.collection('users');
      var getCount;
      db.get()
  .then(function(querySnapshot) {
    console.log("njhjhjh"+querySnapshot)
    getCount=querySnapshot.size;
    console.log(getCount);
        
    });
};
}
    render() {

      this.userCount();
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
          <CardText></CardText>
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