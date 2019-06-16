
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


class Home extends Component {
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
                  <li className="active"><a href="/home">HOME</a></li>
                  <li><a href="/aboutus">ABOUT US</a></li>
                  <li className="has-children">
                    <a href="services.html">KEY SERVICES</a>
                    <ul className="dropdown">
                      <li><a href="/korserice">KOR/EOR Services</a></li>
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

      <div className="container">
        <div className="row align-items-center no-gutters align-items-stretch overlap-section">
          <div className="col-md-4">
            <div className="feature-1 pricing h-100 text-center">
              <div className="icon">
                <span className="icon-dollar" />
              </div>
              <h2 className="my-4 heading">Find the best price for your cargo through our realtime Quotation System</h2>
              <p><b></b> </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="free-quote bg-dark h-100">
              <h2 className="my-4 heading  text-center">Get Free Quote</h2>
              <form method="post">
               
                <div className="form-group">
                  <input type="submit" className="btn btn-primary text-white py-2 px-4 btn-block" defaultValue="Get Quote" />  
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-3 pricing h-100 text-center">
              <div className="icon">
                <span className="icon-phone" />
              </div>
              <h2 className="my-4 heading"> Track your Cargo realtime through our GPS based tracking System</h2>
              <p> </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center border-primary">
              <h4 className="mb-0 text-primary"> <h1 style={{display: 'inline'}}>" </h1>Our Mission is to be the most successful provider of integrated supply chain solutions at origin and destination, providing customers with global reach and end-to-end supply chain visibility.</h4><h1 style={{display: 'inline'}}>" </h1>
              <p className="color-black-opacity-5">........</p>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary flaticon-travel" /></div>
                <div>
                  <h3>About Us</h3>
                  <p>DinLanka Logistics (Pvt) Ltd was established with a vision to be a leading integrated logistics service provider in the Asia pacific region with a strong global presence through service excellence.
                  We are also proud to announce that we work with internationally accredited ocean and air carriers and inland haulage providers to ensure maximum security and safe delivery of cargo
                  </p>
                  <p className="mb-0"><a href="#">See More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sea-ship-with-containers" /></div>
                <div>
                  <h3>Our Services</h3>
                  <p>A professional sales team to offer you the best & competitive rates.
A friendly customer service team to take care of your shipments & issues.
An efficient team of documentation to serve you better with zero errors on your valued documents.
A well experienced team of operations to handle your shipments safely and smoothly.
100% accurate and trustful accounting system.</p>
                  <p className="mb-0"><a href="#">See More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary flaticon-frontal-truck" /></div>
                <div>
                  <h3>Key Operations</h3>
                  <p>IOR / EOR services <br/>
Ocean and Air Freight <br/>
Loose Cargo Consolidations to worldwide <br/>
Inland Haulage <br/>
Customs House Brokerage <br/>
Complete Documentation Service <br/>
Warehousing and Distribution<br/> 
Cargo Insurance<br/>
Project Cargo Services <br/>
Container Transportation<br/>
Containers for Sale
</p>
                  <p className="mb-0"><a href="#">See More</a></p>
                </div>
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

  export default connect(mapStateToProps)(Home)