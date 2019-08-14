import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Link} from 'react-router-dom'
import AgentNavbar from '../layouts/AgentNavbar';
import {Card,CardHeader} from 'reactstrap';

var firebase = require('firebase')

class  MapShip  extends Component{
constructor(){
  super()
  this.state={
    Data:[]
  }
}

componentDidMount(){
var ref =  firebase.firestore().collection('shipments')
ref.get().then(snapshot => {
var Data=[]
snapshot.forEach(data=>{
 console.log(data.data())
Data.push(data.data())
})
this.setState({Data:Data})
})
}


  static defaultProps = {
    center: {
      lat: 24.6050353
      ,
      lng: 32.7470408
    },
    zoom: 4
  };
  
  renderMarkers(map, maps) {
    this.state.Data.map(data=>{
      var infowindow = new maps.InfoWindow({
        maxWidth: 300,
        content: '<div id = \"infowindow\"><strong>' + data.shipment_id + '</strong><br>' +
         
        data.customer + '</div>'
      });
      let marker = new maps.Marker({
        
        position:{lat: data.location2._lat, lng: data.location2._long} ,
        animation: maps.Animation.DROP,
        map:map,
        title: data.shipment_id
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
        marker.setAnimation(maps.Animation.BOUNCE);
        setTimeout(function () {
          marker.setAnimation(null);
      }, 4000)
      });
    })
  }

  render(){
     
    return (
        <React.Fragment>
        <AgentNavbar/>

        
      <div style={{ height: '100vh', width: '80%', padding: '50px', margin:'auto', border:'5px', borderColor:'#f89d13' }}>
      <div style={{paddingBottom:'60px'}}>
      <Card>
              <CardHeader className='bg-primary' >
                <strong><h3>Create A New Shipment</h3></strong> 
              </CardHeader>
              </Card>
              </div>
  {this.state.Data.length>0 ?
  
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBrNnazhg3iQlhgWfw9gT6FtTKy9pwJpVY" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}

      >
        </GoogleMapReact> 
        :
        <div>please wait..........</div>
  }
  <Link to ="/"><button className="btn btn-md btn-primary" >Back</button></Link>
   
    </div>
    </React.Fragment>
    )
    }
}

export default MapShip