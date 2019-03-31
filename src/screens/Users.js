import React, { Component } from 'react';
import '../App.css';

import DisplayUsers from '../components/DisplayUser';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

import firebase from '../config/firebase';

class Users extends Component {

    constructor(props) {
        super(props);
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                return null
            } else {
                alert("Login Dulu");
                window.location.href = '/';
            }
        });
    }

    render() {
        return (
            <div className="main-wrapper main-wrapper-1">
                <TopNav />
                <SideBar />
                <div className="main-content">
                    <section className="section">
                        <div className="section-header">
                            <h1>Dashboard</h1>
                        </div>
                        <DisplayUsers />
                    </section>
                </div>
                <Footer />
            </div>
        )
    }

}

export default Users;