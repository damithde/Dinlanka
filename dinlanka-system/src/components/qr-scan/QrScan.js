import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateShipment2 } from '../../store/actions/shipmentActions'
import { updateShipment3 } from '../../store/actions/shipmentActions'
import { updateShipment4 } from '../../store/actions/shipmentActions'

import {
  
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
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
    }
 
    this.handleScan = this.handleScan.bind(this)
    this.handleScan2 = this.handleScan2.bind(this)
    this.handleScan3 = this.handleScan3.bind(this)
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
      return <Redirect to='/create' />
    } 
  }
  renderRedirect2 = () => {
    if (this.state.dat2) {
      this.props.updateShipment3(this.state.result2);
      return <Redirect to='/create' />
    }
  }
  renderRedirect3 = () => {
    if (this.state.dat3) {
      this.props.updateShipment4(this.state.result3);
      return <Redirect to='/create' />
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
      height: 680,
      width:  600,
    }
    
 
    return(
      <React.Fragment>
        <div className = 'container'>
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
      <div className = 'container'>
      <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
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
                                            
                              
                              <QrReader
                                delay={this.state.delay}
                                style={previewStyle}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                />
                                {this.renderRedirect()}
                               
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