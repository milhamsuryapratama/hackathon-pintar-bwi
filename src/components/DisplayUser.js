import React, { Component } from 'react';
//import firebase from '../config/firebase';

import { connect } from 'react-redux';
import { fetchToDo } from '../actions/actionsCreators';
import { bindActionCreators } from 'redux';

// import firebase from '../config/firebase';

class DisplayUser extends Component {
    constructor(props) {
        super(props);
        this.props.fetchToDo();
        this.state = {
            imgUrl: []
        }
    }

    // componentDidMount() {
    //     const im = this.state.imgUrl;

    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             user.forEach(data => {
    //                 im.push(data.photoURL);
    //             })
    //             this.setState({ imgUrl: im })
    //         } else {
    //             this.props.history.push('/');
    //         }
    //     });
    // }

    render() {
        // console.log(this.state.imgUrl);
        return (
            <div className="row">
                {
                    this.props.users.users.length > 0 ?
                        this.props.users.users.map(data => {
                            return (
                                <div className="col-12 col-sm-12 col-lg-6" key={data.id}>
                                    <div className="card author-box card-primary">
                                        <div className="card-body">
                                            <div className="author-box-left">
                                                <img alt="image" src="http://localhost/stisla-codeigniter/assets/img/avatar/avatar-1.png" className="rounded-circle author-box-picture" />
                                                <div className="clearfix"></div>
                                                {/* <a href="#" className="btn btn-primary mt-3 follow-btn" data-follow-action="alert('follow clicked');" data-unfollow-action="alert('unfollow clicked');">Follow</a> */}
                                            </div>
                                            <div className="author-box-details">
                                                <div className="author-box-name">
                                                    <a href="#">{data.nama}</a>
                                                </div>
                                                {/* <div className="author-box-job">Web Developer</div> */}
                                                <div className="author-box-description">
                                                    <p>{data.alamat}</p>
                                                </div>
                                                {/* <div className="mb-2 mt-3"><div className="text-small font-weight-bold">Follow Hasan On</div></div> */}
                                                <a href="#" className="btn btn-social-icon mr-1 btn-facebook">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#" className="btn btn-social-icon mr-1 btn-twitter">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#" className="btn btn-social-icon mr-1 btn-github">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                                <a href="#" className="btn btn-social-icon mr-1 btn-instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                                {/* <div className="w-100 d-sm-none"></div>
                                                <div className="float-right mt-sm-0 mt-3">
                                                    <a href="#" className="btn">View Posts <i className="fas fa-chevron-right"></i></a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <tr><td colSpan="3"><center><h4>... Loading ...</h4></center></td></tr>
                }
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    users: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchToDo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUser);