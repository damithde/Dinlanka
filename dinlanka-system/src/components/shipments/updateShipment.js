import React, { Component } from 'react';

import { connect } from 'react-redux';

import AgentNavbar from '../layouts/AgentNavbar';

import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import ShipmentList from './shipmentList';
import { Redirect } from 'react-router-dom'


class UpdateShipment extends Component {
    
  renderTableHeader(ship) {
    let header = Object.keys(ship[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 renderTableData(ship) {
  return ship.map((student, index) => {
     const { customer, shipment_id, customer_id, type, id, title,content } = student //destructuring
     return (
        <tr key={shipment_id}>
           <td>{shipment_id}</td>
           <td>{customer}</td>
           <td>{type}</td>
          
        </tr>
     )
  })
}
  render() {

        console.log(this.props)
        const { ship, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
        return (
          <React.Fragment>
            <AgentNavbar/>
       <div className="container">

      <ShipmentList projects={ship} />
      </div>
      </React.Fragment>
        )
     
    }




}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      ship:state.firestore.ordered.shipments3
    }
  }

  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'shipments3' }
    ])
  )(UpdateShipment)