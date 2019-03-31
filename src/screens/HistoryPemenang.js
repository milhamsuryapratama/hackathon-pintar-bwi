import React, { Component } from 'react';

import DisplayHistory from '../components/HistoryPemenang';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

import firebase from '../config/firebase';

class HistoryPemenang extends Component {

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
                        <DisplayHistory />
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HistoryPemenang;