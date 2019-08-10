import React from 'react'
import ShipmentSummary from './shipmentSummary'

const ShipmentList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <ShipmentSummary project={project} key={project.shipment_id} />
        )
      })}  
    </div>
  )
}

export default ShipmentList