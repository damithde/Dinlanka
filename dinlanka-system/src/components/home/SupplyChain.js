import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import '../../css/bootstrap.min.css';
import '../../css/magnific-popup.css';
import '../../css/jquery-ui.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import '../../css/bootstrap-datepicker.css';
import '../../fonts/flaticon/font/flaticon.css';
import '../../css/aos.css';
import '../../css/style.css';
import '../../js/jquery-3.3.1.min.js';
import AOS from 'aos'
import '../../js/aos.js';
import '../../js/main.js';
import bg from '../../images/hero_bg_1.jpg';


class SupplyChain extends Component {
    render() {
    const { projects, auth,profile } = this.props;
        
        return (
        <React.Fragment>
           <header className="site-navbar py-3" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-11 col-xl-2">
              <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0">DinLanka</a></h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                  <li className="active"><a href="index.html">HOME</a></li>
                  <li><a href="/aboutus">ABOUT US</a></li>
                  <li className="has-children">
                    <a href="services.html">KEY SERVICES</a>
                    <ul className="dropdown">
                      <li><a href="/iorservice">IOR/EOR Services</a></li>
                      <li><a href="/oceanfreight">Ocean Freight</a></li>
                      <li><a href="/airfreight">Air Freight</a></li>
                      <li><a href="/seaairservice">Sea Air Service</a></li>
                      <li><a href="/cargoinsurance">Cargo Insurance</a></li>
                      <li><a href="/containers">New and Used Containers</a></li>
                      <li><a href="/supplychain">Supply Chain Management</a></li>
                    </ul>
                  </li>
                  <li><a href="/upbcargo">UPB CARGO</a></li>
                  <li className="has-children">
                    <a href="services.html">CUSTOMERS</a>
                    <ul className="dropdown">
                      <li><a href="/supportcenter">Support Center</a></li>
                      <li><a href="/tracking">Dinlanka Tracking</a></li>
                      <li><a href="/needquote">Need A Quote</a></li>
                    </ul>
                  </li>
                  <li><a href="/contact">CONTACT US</a></li>
                  <li><a href="/signin">LOGIN</a></li>
                  
                </ul>
              </nav>
            </div>
            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: 'relative', top: '3px'}}><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a></div>
          </div>
        </div>
      </header>
      <div className="site-blocks-cover overlay" style={{backgroundImage: "url(" + bg + ")"}} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay={400}>
            
              <h1 className="text-white font-weight-light mb-5 font-weight-bold">DinLanka Logistics (Pvt) Ltd</h1>
              <h3 className="text-white font-weight-light mb-5 font-weight">“SERVICE BEYOND BORDERS” ONE OF THE BEST TOTAL LOGISTICS PROVIDER</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
      <div className="container">
        <div className="row">
        <div class="col-md-10 col-lg-10 mb-10 ">
            <div class="meta mb-4">
              <h2 className="font-size-regular"><a href="#">DINLANKA –THE GLOBAL IOR/EOR PROVIDER</a></h2>
              
            </div>             
            <div className="h-entry">
            Many logistics providers claim to offer supply chain integration, yet very few have the infrastructure to provide this service. The Dinlanka Group strategy is to be a specialist in each segment of the supply chain and integrate these businesses to provide a single offering to our clients. The coordination and management of this service involves a single Client Relationship Management (CRM) structure and our information control platform.

Dinlanka Group’s land-based logistics services include contract warehousing and distribution services in both the originating and destination countries. Dinlanka’s infrastructure and capabilities provide a seamless execution from placement of international purchase order through to delivery to store/site/point of consumption. If our land-based logistics is not the ‘right fit’ we will source and work with your chosen third-party provider.
            </div>
           
          </div>          
        </div>
      </div>
    </div>

         
        </React.Fragment>
        )
     
    }




}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

  export default connect(mapStateToProps)(SupplyChain)