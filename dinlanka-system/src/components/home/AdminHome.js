import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'



class AdminHome extends Component {
    render() {
    const { projects, auth } = this.props;
if (!auth.uid) return <Redirect to='/signin' />
else console.log(auth.uid) 
        
        return (
            <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <h1>Admin Home works</h1>
          </div>
          
        </div>
</div>
        )
     
    }




}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.firebase.auth,
      profile:state.firebase.profile
    }
  }

  export default connect(mapStateToProps)(AdminHome)