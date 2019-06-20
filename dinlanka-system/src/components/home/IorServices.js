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


class KorServices extends Component {
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
              <p>Dinlanka is a specialist in providing IOR / EOR services through its global network. Its current Customers include Global Technical & Telecommunication Companies.</p>
            </div>             
            <div className="h-entry">
              <h2 className="font-size-regular "><a href="#">What is IOR (Importer of Records)?</a></h2>
              <p>When you are importing a product into a Country, Your Company or your Agent must be physically present at the importing Country as you are responsible in fulfilling all legal obligations that is enforced by Country’s Customs. Unfortunately this would be challenging due to the following</p>
              <ul>
              <li>Cost involved in establishing and running such an Entity.</li>
              <li>Your Organization will attract unnecessary Corporate Tax Exposure.</li>
              <li>You will have to know the importation regulations of that Country as local laws differ from Country to Country.</li>
              <li>There may be requirements to possess a license / Permit to import.</li>
              <li>In such a situation as a solution you can opt for an IOR service Provider, who will fulfil end to end tasks of the Importer. The Importer of Records will take care of all the services that need to be done complying with local regulations, Customs formalities (Filing of Customs entries, Payment of duties and other levies)</li>
             </ul>
            </div>
            <div className="h-entry">
              <h2 className="font-size-regular "><a href="#">What is EOR (Exporter of Records?)</a></h2>
              <p>When you are exporting a products out of your Country you need to follow your Countries export regulations which may include securing of export licenses etc.</p>
              <p>What are the services provided by Dinlanka as your IOR /EOR Provider?</p>
              <p>Dinlanka will act as your legal representative for at the Exporting/ importing destination and will perform all services in relation to your shipment which will ease you of complicated affairs in forwarding/ collection/ clearances and delivery.</p>
              <p>The Customs clearance in relation to duration and process will differ from Country to Country and can be long and difficult if the documentations are not handled effectively and will pose risks of additional costs and delays. Dinlanka being Specialists will take care of all these complication risks due to its established network.</p>
              <p>Accordingly Dinlanka will perform the following services</p>
              <ul>
              <li>Dinlanka will act as your Legal representative at importing Country for Imports and Exporter for Exports.</li>
              <li>Dinlanka will take care of performing compliance assessments to understand import / Export regulations / restrictions ( securing import or Export permits/certifications)</li>
              <li>Dinlanka will perform shipments customs clearance including payment of customs duties//taxes, filing of completed duty entry and associated documents.</li>
              <li>Dinlanka will provide warehousing & storage facilities if required</li>
              <li>Dinlanka will ensure that the shipment is collected from the Exporter and delivered to the ultimate Customer destination within the shortest duration.</li>
              <li>Dinlanka will maintain records as per In country local law requirement</li>
             </ul>
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

  export default connect(mapStateToProps)(KorServices)