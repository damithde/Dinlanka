import React, { Component } from 'react';
import firebase from '../../config/fbConfig.js'
import { Link } from 'react-router-dom';
import AdminNavbar from '../layouts/AdminNavbar';
import { Table ,Button, Card, CardHeader, CardFooter, CardBody,CardTitle, CardText,Row,Col} from 'reactstrap';

class Show extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { fullname,username,email,password } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fullname,
        username,
        password,
        email
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <React.Fragment>
      <AdminNavbar/>
      <Row></Row>
       
      <div class="container"> 
        <Row>
          <Col>
        <Card>
        <CardHeader>Agent Details</CardHeader>
        <CardBody>
            
          <Table dark>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td>{board.fullname}</td>
                    <td>{board.username}</td>
                    <td>{board.email}</td>
                    <td>{board.password}</td>
                    <td>{this.state.key}</td>
                    <td><Button color="info" size="sm" href={`/edit/${board.key}`}>Update</Button></td>
                    <td><Button color="danger" size="sm">Delete</Button></td>
                  </tr>
                )}
              </tbody>
            </Table>
            </CardBody>
            </Card>
            </Col>
            </Row>
      </div>
    </React.Fragment>
    );
  }
}


export default Show;