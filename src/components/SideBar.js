import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SideBar extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <div className="main-sidebar sidebar-style-2">
                        <aside id="sidebar-wrapper">
                            <div className="sidebar-brand">
                                <a href="/">PHOTO HUNT</a>
                            </div>
                            <div className="sidebar-brand sidebar-brand-sm">
                                <a href="index.html">St</a>
                            </div>
                            <ul className="sidebar-menu">
                                <li className="menu-header">Dashboard</li>
                                <li className="dropdown active">
                                    {/* <a href="http://localhost:3000/" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a> */}
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="/admin">Dasboard</a></li>
                                        <li><a className="nav-link" href="/admin/users">Users</a></li>
                                        <li><a className="nav-link" href="/admin/pariwisata">Pariwisata</a></li>
                                        <li><a className="nav-link" href="/admin/event">Event</a></li>
                                        <li><a className="nav-link" href="/admin/history">History Pemenang</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                                <a href="#" className="btn btn-primary btn-lg btn-block btn-icon-split">
                                    <i className="fas fa-rocket"></i> ---------- || ----------
                            </a>
                            </div>
                        </aside>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

export default SideBar;