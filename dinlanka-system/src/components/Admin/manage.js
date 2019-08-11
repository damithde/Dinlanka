import React, { Component } from 'react';
//import firebase from '../config/fbConfig'
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    //this.ref = firebase.firestore().collection('users');
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
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Users List
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Passwrod</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td>{board.fullname}</td>
                    <td>{board.username}</td>
                    <td>{board.email}</td>
                    <td>{board.password}</td>
                    <td>update</td>
                    <td>delte</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default Show;