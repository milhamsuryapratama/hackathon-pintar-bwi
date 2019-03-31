import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { singOut } from '../actions/actionsCreators';

class TopNav extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.auth.auth.authLogout == true) {
      window.location.href = '/';
    }
  }

  signOut = () => {
    this.props.singOut()
  }

  render() {
    return (
      <Fragment>
        <div className="navbar-bg"></div>
        <nav className="navbar navbar-expand-lg main-navbar">
          <form className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
              <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
            </ul>
          </form>
          <ul className="navbar-nav navbar-right">

            <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img alt="m" src="http://localhost:3000/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
              <div className="d-sm-none d-lg-inline-block">Hi, Admin</div></a>
              <div className="dropdown-menu dropdown-menu-right">

                <div className="dropdown-divider"></div>
                {/* <a href="#" className="dropdown-item has-icon text-danger">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </a> */}
                <button className="dropdown-item has-icon text-danger" onClick={this.signOut}>Keluar</button>
              </div>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    singOut
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);