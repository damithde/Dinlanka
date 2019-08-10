
import React from 'react'
import { Button } from 'reactstrap';


const ShipmentSummary = ({project}) => {
  return (
      <React.Fragment>
   
    <div className="card border-primary  mb-3">
       
        <div className="card-body text-primary">
          <h5 className="card-title">{project.customer}</h5>
          <p className="card-text">{project.shipment_id}</p>
          <Button form="tex" type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Edit</Button>
                <Button form="tex" type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Delete</Button>
                <button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(e) } }>
              Delete
</button>
        </div>
      </div>
  </React.Fragment>
  )
}


export default ShipmentSummary