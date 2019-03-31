import React, { Component } from 'react';

import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { singIn, fetchEvent, fetchWisata, fetchToDo } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';

import firebase from '../config/firebase';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.props.fetchEvent();
        this.props.fetchWisata();
        this.props.fetchToDo();
        //window.location.href = '/';
        // this.props.history.push('/');    
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                return null
            } else {
                alert("Login Dulu");
                window.location.href = '/';
            }
        });
    }

    // componentWillReceiveProps(nextProps) {
    //     //console.log()
    //     const auth = nextProps.auth.auth;
    //     console.log(auth)
    // }

    // componentWillMount() {
    //     const st = this.props.auth.auth;
    //     if (st.authLogin) {
    //         return null
    //     } else {
    //         window.location.href = '/';
    //     }
    // }

    render() {
        console.log(this.props.auth.auth)
        return (
            <div className="main-wrapper main-wrapper-1">
                <TopNav />
                <SideBar />
                <div className="main-content">
                    <section className="section">
                        <div className="section-header">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-danger">
                                        <i className="far fa-newspaper"></i>
                                    </div>
                                    <div className="card-wrap">
                                        <div className="card-header">
                                            <h4>Event</h4>
                                        </div>
                                        <div className="card-body">
                                            {this.props.event.event.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-warning">
                                        <i className="far fa-file"></i>
                                    </div>
                                    <div className="card-wrap">
                                        <div className="card-header">
                                            <h4>Wisata</h4>
                                        </div>
                                        <div className="card-body">
                                            {this.props.wisata.wisata.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-success">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="card-wrap">
                                        <div className="card-header">
                                            <h4>Members</h4>
                                        </div>
                                        <div className="card-body">
                                            {this.props.users.users.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state,
    event: state,
    wisata: state,
    users: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        singIn,
        fetchEvent,
        fetchWisata,
        fetchToDo
    }, dispatch)
}

//export default Dashboard;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);