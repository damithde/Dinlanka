import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Login from './components/auth/Login';
import QrScan from './components/qr-scan/QrScan';
import CreateShipment from './components/shipments/createShipment'
import Home from './components/home/Home';
import AdminHome from './components/home/AdminHome';
import Landpage from './components/customers/Landpage';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      
      <Switch>
      
      <Route path='/home' component = {Home} />
      <Route path='/adminhome' component = {AdminHome} />
      <Route path='/signin' component = {Login} />
      <Route path='/qr' component={QrScan} />
      <Route path='/create' component={CreateShipment} />
      <Route path='/quote' component={Landpage} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
