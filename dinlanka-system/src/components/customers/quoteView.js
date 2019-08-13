import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuoteView extends Component {

    calc(){
        
    }

render(){
    const {data} = this.props.location;
    console.log('After');
    console.log(data);
    return (

        <React.Fragment>

          

          

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="row p-5">
                  <div className="col-md-6">
                    <img src="http://via.placeholder.com/400x90?text=logo" />
                  </div>
                  <div className="col-md-6 text-right">
                    <p className="font-weight-bold mb-1">Quotation for Shipment</p>
                    <p className="text-muted">Shipping from: {data.ship_date}</p>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="row pb-5 p-5">
                  <div className="col-md-6">
                    <p className="font-weight-bold mb-4">Shipment Information</p>
                    <p className="font-weight-bold mb-1">From</p>
                    <p>{data.origin_country}</p>
                    <p className="mb-1">Postal Code - {data.origin_zip}</p>
                    <p className="mb-1">Port - Port of {data.origin_city}</p>
                  </div>
                  <div className="col-md-6 ">
                    <p className="font-weight-bold mb-4">Destination</p>
                    <p className="font-weight-bold mb-1">To</p>
                    <p>{data.desti_country}</p>
                    <p className="mb-1">Postal Code - {data.desti_zip}</p>
                    <p className="mb-1">Port - Port of Colombo</p>
                  </div>
                </div>
                <div className="row p-5">
                  <div className="col-md-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="border-0 text-uppercase small font-weight-bold">ID</th>
                          <th className="border-0 text-uppercase small font-weight-bold">Item</th>
                          <th className="border-0 text-uppercase small font-weight-bold">Description</th>
                          <th className="border-0 text-uppercase small font-weight-bold">Weight</th>
                          <th className="border-0 text-uppercase small font-weight-bold">Unit Cost</th>
                          <th className="border-0 text-uppercase small font-weight-bold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Software</td>
                          <td>{data.category}</td>
                          <td>{data.weight} kg</td>
                          <td>${data.value}</td>
                          <td>${data.value*data.weight}</td>
                        </tr>
                    
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="d-flex flex-row-reverse bg-primary text-white p-4">
                  <div className="py-3 px-5 text-right">
                    <div className="mb-2">Grand Total</div>
                    <div className="h2 font-weight-light">${data.value*data.weight*1.07}</div>
                  </div>
                  <div className="py-3 px-5 text-right">
                    <div className="mb-2">Vat</div>
                    <div className="h2 font-weight-light">7%</div>
                  </div>
                  <div className="py-3 px-5 text-right">
                    <div className="mb-2">Sub - Total amount</div>
                    <div className="h2 font-weight-light">${data.value*data.weight}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-light mt-5 mb-5 text-center small">by : <a className="text-light" target="_blank" href="">Dinalanka.com</a></div>
      </div>
        </React.Fragment>
    )


}

}
export default QuoteView;