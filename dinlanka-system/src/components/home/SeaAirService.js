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
import bg from '../../images/242.jpg';


class SeaAirService extends Component {
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
        <div className="col-md-10 col-lg-10 mb-10 ">
            <div className="meta mb-4">
              <h2 className="font-size-regular"><a href="#">Sea-Air Service </a></h2>
              <p>Where ocean is too slow but air is not needed, Dinalanka’s Sea Air solution may be the answer. Combining the advantages of economy and speed, the Sea Air solution is often the perfect balance. As always, you are kept up to date with your shipment’s progress though our state of the art technology and global air and sea freight teams.</p>
              <p>Sea Air can be up to 80% faster than ocean freight for a fraction of the cost. Our team are adept at helping you assess what the right solution is for you in order to streamline your supply chain requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-travel"></span></div>
              <div>
                <h3>Ecological Advantages</h3>
                <p>Our combined Sea-Air service is not only an economical alternative for urgent goods but also saves CO2 emissions and thus offers a more ecological option to pure airfreight services.</p>
                <p>By using Sea-Air, the amount of post-carriage trucking is less than with pure sea freight since the goods arrive at the nearest international airport rather than having to be trucked across the country from the ports located on the coast.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sea-ship-with-containers"></span></div>
              <div>
                <h3>Suitable Commodities</h3>
                <p>Generally all types of commodities are suitable for Sea-Air Transport, even fragile, heavy, or high-value goods. If you are unsure whether your goods are suitable for Sea-Air Transport please do not hesitate to contact us, we will be glad to find out for you.</p>
                <p>Since the second half of the transport is executed via air, the same general regulations about dangerous and hazardous goods apply as for pure airfreight.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-frontal-truck"></span></div>
              <div>
                <h3>Geographical Areas covered</h3>
                <p>We serve all international ports in Far East and India, and supply all destinations in Europe, Africa, North and South America. If the final destination is in Europe, for example, our sea freight does not waste time by routing around Western Europe and our airfreight has the flexibility to serve Northern, Western, Southern and Eastern Europe–following the needs of the cargo itself.</p>
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

  export default connect(mapStateToProps)(SeaAirService)