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
import img1 from '../../images/rsz_20gp_04.jpg';
import img2 from '../../images/rsz_120gp_09.jpg';


class NewUsedContain extends Component {
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
              <h2 className="font-size-regular"><a href="#">	New and used containers </a></h2>
              <h5>WE SELL NEW AND USED 10’ 20’ 40’ AND 45’ SHIPPING CONTAINERS</h5>
              <p>New and used shipping containers can be delivered to any location in the world directly from our manufacturing site in China. These are available in various RAL colors, but we can also have the container painted in your desired color and include customized features.</p>
              <p>We can supply everything from reefer container, and tank containers to specials, like half height containers, open top containers, and many more besides commonly used inter modal Containers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
        <div className="row">
        <div className="col-md-10 col-lg-10 mb-10 ">
            <div className="meta mb-4">
            <img src={img1} alt="Image" className="img-fluid rounded"></img>
            <img src={img2} alt="Image" className="img-fluid rounded"></img>
            </div>
        </div>
        </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-4">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sea-ship-with-containers"></span></div>
              <div>
                <h3>10′ Containers</h3>
                <p>10’ shipping containers are ideal for small spaces like job sites, small offices and residences. These containers are easy to transport and place on site in small areas and offer the same security as the standard size units. 10’ shipping containers are available with standard barn doors and roll up doors.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-4">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sea-ship-with-containers"></span></div>
              <div>
                <h3>20′ Containers</h3>
                <p>20’ shipping containers are the most common, accessible and affordable option when purchasing a shipping container. 20’ in length, these units are ideal for agriculture, industrial, military, personal use, document storage, car storage and construction use to name a few</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-4">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sea-ship-with-containers"></span></div>
              <div>
                <h3>40′ & 45’Containers</h3>
                <p>40’ & 45’shipping containers compared to 20’ containers are much more cost effective per square foot. These containers are ideal for warehouses, job sites, car dealerships, tire storage and large storage needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-4">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sea-ship-with-containers"></span></div>
              <div>
                <h3>Used containers</h3>
                <p>Used containers can also be supplied by to any location, globally.</p>
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

  export default connect(mapStateToProps)(NewUsedContain)