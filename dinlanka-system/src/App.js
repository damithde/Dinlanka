import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Login from './components/auth/Login';
import QrScan from './components/qr-scan/QrScan';
import CreateShipment from './components/shipments/createShipment'
import Home from './components/home/Home';
import AdminHome from './components/home/AdminHome';
import Landpage from './components/customers/Landpage';
import AgentHome from './components/home/AgentHome';
import Signup from './components/auth/SignUp';
import AboutUs from './components/home/AboutUs';
import AirFreight from './components/home/AirFreight';
import CargoInsurance from './components/home/CargoInsurance';
import Contact from './components/home/Contact';
import KorServices from './components/home/KorServices';
import NewUsedContain from './components/home/NewUsedContain';
import OceanFreight from './components/home/OceanFreight';
import SeaAirService from './components/home/SeaAirService';
import SupplyChain from './components/home/SupplyChain';
import SupportCenter from './components/home/SupportCenter';
import UPBCargo from './components/home/UPBCargo';
import NeedQuote from './components/home/NeedQuote';
import Tracking from './components/home/Tracking';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
            
      <Switch>
      
      <Route path='/home' component = {Home} />
      <Route path='/adminhome' component = {AdminHome} />
      <Route path='/signin' component = {Login} />
      <Route path='/qr' component={QrScan} />
      <Route path='/create' component={CreateShipment} />
      <Route path='/quote' component={Landpage} />
      <Route path='/agenthome' component={AgentHome} />
      <Route path='/signup' component={Signup} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/airfreight' component={AirFreight} />
      <Route path='/cargoinsurance' component={CargoInsurance} />
      <Route path='/contact' component={Contact} />
      <Route path='/korservice' component={KorServices} />
      <Route path='/containers' component={NewUsedContain} />
      <Route path='/oceanfreight' component={OceanFreight} />
      <Route path='/seaairserice' component={SeaAirService} />
      <Route path='/supplychain' component={SupplyChain} />
      <Route path='/supportcenter' component={SupportCenter} />
      <Route path='/upbcargo' component={UPBCargo} />
      <Route path='/needquote' component={NeedQuote} />
      <Route path='/tracking' component={Tracking} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
