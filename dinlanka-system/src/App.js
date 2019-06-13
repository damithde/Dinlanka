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
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
