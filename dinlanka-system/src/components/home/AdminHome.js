import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AdminNavbar from "../layouts/AdminNavbar";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Row,
  Col,
  CardHeader,
  Container
} from "reactstrap";
import firebase from "../../config/fbConfig.js";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state ={
      count1 :0,
      count2 :0,
      count3 :0
    }
  }

  componentDidMount = () =>{
    this.userCount();
    this.shipmentCount();
    this.quatationCount();
  }

  userCount = () => {
    var count1 = this.state.count1;
    var that = this
    const docref = firebase.firestore().collection('users');
    
    docref.get().then(snapshot => {
      snapshot.forEach(doc=> {
        if(doc.data().isAdmin =="no"){
          that.setState({
            count1:that.state.count1 + 1
          }) 
        }
              
      })  
        
    })    
  }
  shipmentCount = () => {
    var count2 = this.state.count2;
    var that = this
    const docref = firebase.firestore().collection('shipments3');
    
    docref.get().then(snapshot => {
      snapshot.forEach(doc=> {
          that.setState({
            count2 : that.state.count2 + 1
          })               
      })  
        
    })    
  }

  quatationCount = () => {
    var count3 = this.state.count3;
    var that = this
    const docref = firebase.firestore().collection('quote');
    
    docref.get().then(snapshot => {
      snapshot.forEach(doc=> {
          that.setState({
            count3 :that.state.count3 + 1
          })               
      })  
        
    })    
  }
  render() {
    
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    else console.log(auth.uid);

    return (
      <React.Fragment>
        
        <AdminNavbar />
        <div className="dashboard container">
          <Container>
            {""}
            {""}

            <Card>
              <CardHeader className="bg-primary">
                <strong>
                </strong>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle>Agent count {this.state.count1}</CardSubtitle>
                    <CardText />
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="bg-primary">
                <strong>
                </strong>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle>Shipment count {this.state.count2}</CardSubtitle>
                    <CardText />
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="bg-primary">
                <strong>
                </strong>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle>Quatation count {this.state.count3}</CardSubtitle>
                    <CardText />
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(AdminHome);
