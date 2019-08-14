import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateShipment2 } from '../../store/actions/shipmentActions'
import { updateShipment3 } from '../../store/actions/shipmentActions'
import { updateShipment4 } from '../../store/actions/shipmentActions'
import AgentNavbar from '../layouts/AgentNavbar';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



import {
  
  Button,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Collapse

} from 'reactstrap';

 
class QrScan extends Component {
  constructor(props){
    super(props)
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      delay: 100,
      result: 'No result',
      result2: 'No result',
      result3: 'No result',
      dat : false,
      dat2 : false,
      dat3 : false,
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
      modal: false

    }
 
    this.handleScan = this.handleScan.bind(this)
    this.handleScan2 = this.handleScan2.bind(this)
    this.handleScan3 = this.handleScan3.bind(this)
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleScan(data){
    
    if (data){
      this.setState({
        result: data,
        dat : true
      })
    }
    console.log(this.state.result)
  }

  handleScan2(data){
    
    if (data){
      this.setState({
        result2: data,
        dat2 : true
      })
    }
    console.log(this.state.result2)
  }
  handleScan3(data){
    
    if (data){
      this.setState({
        result3: data,
        dat3 : true
      })
    }
    console.log(this.state.result3)
  }

  handleError(err){
    console.error(err)
  }

  renderRedirect = () => {
    if (this.state.dat) {
      this.props.updateShipment2(this.state.result);
      this.toggle();
    } 
  }
  renderRedirect2 = () => {
    if (this.state.dat2) {
      this.props.updateShipment3(this.state.result2);
      this.toggle();

    }
  }
  renderRedirect3 = () => {
    if (this.state.dat3) {
      this.props.updateShipment4(this.state.result3);
      this.toggle();

    }
  }
  setRedirect = () => {
    this.setState({
      dat: true
    })
  }
  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }
  render(){
    const previewStyle = {
      height: 780,
      width:  700,
    }
    
 
    return(
      <React.Fragment>
        <AgentNavbar/>

        <div className='container'>
      <Card>
        <CardBody>
         {/*  <Col md='3'></Col>
        <Col md="3">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          {this.renderRedirect()}
          </Col> */}
        </CardBody>
      </Card>
      </div>
      <div className='container'>
      <Card>
              
              <CardHeader className='bg-primary'>
                <strong><h3>QR Code Update Location</h3></strong> 
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Chekpoint 01</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <div className="row pb-5 p-5">
                  <div className="col-md-6">
                    <p className="font-weight-bold mb-4">Location - Port of Algeciras</p>
                    <p className="font-weight-bold mb-1">Spain</p>
                    
                  </div>
               
                              
                              <QrReader
                                delay={this.state.delay}
                                style={previewStyle}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                />
                                {this.renderRedirect()}
                                </div>

                               
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Chekpoint 02</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <div className="row pb-5 p-5">
                  <div className="col-md-6">
                    <p className="font-weight-bold mb-4">Location - Port of Algeciras</p>
                    <p className="font-weight-bold mb-1">Spain</p>
                    
                  </div>
               </div>
                              <QrReader
                                delay={this.state.delay}
                                style={previewStyle}
                                onError={this.handleError}
                                onScan={this.handleScan2}
                                />
                                {this.renderRedirect2()}
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Checkpoint 03</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <div className="row pb-5 p-5">
                  <div className="col-md-6">
                    <p className="font-weight-bold mb-4">Location - Port of Algeciras</p>
                    <p className="font-weight-bold mb-1">Spain</p>
                    
                  </div>
               </div>
                      <QrReader
                                delay={this.state.delay}
                                style={previewStyle}
                                onError={this.handleError}
                                onScan={this.handleScan3}
                                />
                                {this.renderRedirect3()}
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
            </div>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Remove User</ModalHeader>
            <ModalBody>
                Do you want to delete?
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={console.log("check")}>Yes</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
          
        </React.Fragment>

      
          
        
        
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateShipment2: (project) => dispatch(updateShipment2(project)),
    updateShipment3: (project) => dispatch(updateShipment3(project)),
    updateShipment4: (project) => dispatch(updateShipment4(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QrScan)