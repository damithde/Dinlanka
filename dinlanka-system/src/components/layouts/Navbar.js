import React from 'react';

import {connect} from 'react-redux';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

;
import {Navbar,NavItem} from 'react-materialize';
import Logo from "./dinlanka.png";
import './style.css';

const Img = <img src={Logo} alt={"YourBrand"} style={{padding:5+ 'px', left: 150+ 'px', top:5 + 'px'}}/>;

const NavBar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <React.Fragment>       
        <Navbar className="Header black" brand={Img} alignLinks="right">
          {links}
        </Navbar>

        {/* <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav> */}
        
       
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
       

            
              
            
        
            
          
            </React.Fragment>
    )
}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }

}
export default connect(mapStateToProps) (NavBar);