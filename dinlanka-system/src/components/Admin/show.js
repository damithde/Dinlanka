import React, { Component } from 'react';
import firebase from '../../config/fbConfig.js'
import { Link } from 'react-router-dom';
import AdminNavbar from '../layouts/AdminNavbar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: '',
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  
  componentDidMount() {
    const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('users').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/manage")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
        <React.Fragment>
      <AdminNavbar/>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
          <h4><Link to={`/manage/${this.state.key}`} className="btn btn-primary">Agent List</Link></h4>
            <h3 className="panel-title">
              {this.state.board.fullname}
            </h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.board.username}</dd>
              <dt>Author:</dt>
              <dd>{this.state.board.email}</dd>
              <dt>Author:</dt>
              <dd>{this.state.board.password}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
            <button  className="btn btn-danger" onClick={this.toggle}>Delete</button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Remove User</ModalHeader>
            <ModalBody>
                Do you want to delete?
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.delete.bind(this, this.state.key)}>Yes</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Show;