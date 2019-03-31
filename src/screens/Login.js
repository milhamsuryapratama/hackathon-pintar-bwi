import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { singIn } from '../actions/actionsCreators';
import { red } from 'ansi-colors';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.auth.auth.authError == null) {
            this.props.history.push('/admin')
        }
    }

    handleLogin = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    seePwd() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    submitLogin = (event) => {
        event.preventDefault();
        this.props.singIn(this.state);
    }

    render() {
        //console.log(this.props.auth.auth);
        return (
            <Fragment>
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">

                                <div className="card card-primary">
                                    <div className="card-header"><h4>Login</h4></div>
                                    <center><p id="error" style={{ color: 'red' }}></p></center>
                                    <div className="card-body">
                                        <form className="needs-validation" noValidate="" onSubmit={this.submitLogin}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" className="form-control" name="email" tabIndex="1" required autoFocus onChange={this.handleLogin} />
                                                <div className="invalid-feedback">
                                                    Please fill in your email
                                            </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="d-block">
                                                    <label htmlFor="password" className="control-label">Password</label>
                                                    {/* <div className="float-right">
                                                        <a href="http://localhost/stisla-codeigniter/dist/auth_forgot_password" className="text-small">
                                                            Forgot Password?
                                                        </a>
                                                    </div> */}
                                                </div>
                                                <input id="password" type="password" className="form-control" name="password" tabIndex="2" required onChange={this.handleLogin} />
                                                <div className="invalid-feedback">
                                                    please fill in your password
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me" />
                                                    <label className="custom-control-label" htmlFor="remember-me" onClick={this.seePwd}>Remember Me</label>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4">
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                        <div className="text-center mt-4 mb-3">
                                            <div className="text-job text-muted">Login With Social</div>
                                        </div>
                                        <div className="row sm-gutters">
                                            <div className="col-6">
                                                <a className="btn btn-block btn-social btn-facebook">
                                                    <span className="fab fa-facebook"></span> Facebook
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                <a className="btn btn-block btn-social btn-twitter">
                                                    <span className="fab fa-twitter"></span> Twitter
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        singIn
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);