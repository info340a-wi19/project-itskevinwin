import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class Parallax extends Component {
    render() {
        return (
            <div className="parallax">
                <div className="container-fluid">
                    <div className="row jumbotron gradient">
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            <p className="text-center lead">Have you ever sat down with your friends, ready to watch a movie, but
                                can't
                                ever decide which one to watch? Well, this website will help you with that!
                                Rather than spending up to an hour searching for the perfect movie to watch, we'll take your
                                preferences and find one for you!
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 text-center">
                            <a href="#" role="button"><button type="button" className="btn btn-outline-dark btn-lg">View Profile</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class LoginPar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
            login: false,
        }
    }

    signUp = () => {
        this.setState({ signUp: !this.state.signUp });
    }

    login = () => {
        this.setState({ login : !this.state.login });
    }

    render() {
        if (!this.state.signUp && !this.state.login) {
            return (
                <div className="parallax">
                    <div className="container-fluid">
                        <div className="row jumbotron gradient">
                            <div className="col-12 col-sm-6 col-lg-8 my-auto">
                                <p className="text-center lead">Have you ever sat down with your friends, ready to watch a movie, but
                                    can't
                                    ever decide which one to watch? Well, this website will help you with that!
                                    Rather than spending up to an hour searching for the perfect movie to watch, we'll take your
                                    preferences and find one for you!
                            </p>
                                <div className="container d-sm-none">
                                    <div className="row justify-content-center">
                                        <button className="btn btn-outline-secondary col-xs-6 mx-2" data-toggle="collapse" onClick={this.login}>Login</button>
                                        <button className="btn btn-outline-danger col-xs-6 mx-2" data-toggle="collapse" onClick={this.signUp}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up d-none d-sm-block col-sm-6 col-lg-4">
                                <h1 className="text-center text-dark">Get started now!</h1>
                                <form className="container">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1" className="title">Name</label>
                                        <div className="row">
                                            <div className="col-6">
                                                <input type="text" className="form-control" placeholder="First" id="fname" aria-label="First name" />
                                            </div>
                                            <div className="col-6">
                                                <input type="text" className="form-control" placeholder="Last" id="lname" aria-label="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className="title">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1" className="title">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="row justify-content-center">
                                            <Link to='/home' className="btn btn-outline-dark" id="sign-up-button">Sign Up</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>);
        } else if (this.state.signUp) {
            return (
                <div className="parallax">
                    <div className="container-fluid">
                        <div className="row jumbotron gradient">
                            <div className="col-sm-12 col-md-7 col-lg-8">
                                <p className="text-center lead">Have you ever sat down with your friends, ready to watch a movie, but
                                    can't
                                    ever decide which one to watch? Well, this website will help you with that!
                                    Rather than spending up to an hour searching for the perfect movie to watch, we'll take your
                                    preferences and find one for you!
                            </p>
                                <div className="container d-sm-none">
                                    <div className="row justify-content-center">
                                        <h1 className="text-center">Get started now!</h1>
                                        <form class="container">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1" class="title">Name</label>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <input type="text" class="form-control" placeholder="First" id="fname" aria-label="First name" />
                                                    </div>
                                                    <div class="col-6">
                                                        <input type="text" class="form-control" placeholder="Last" id="lname" aria-label="Last Name" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1" class="title">Email address</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" value="" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1" class="title">Password</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                <div className="row justify-content-between px-3">
                                                    <Link to='/' class="btn btn-outline-success" id="sign-up-button" onClick={this.signUp}>Back</Link>

                                                    <Link to='/home' class="btn btn-outline-danger" id="sign-up-button">Sign Up</Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.login) {
            return (
                <div className="parallax">
                    <div className="container-fluid">
                        <div className="row jumbotron gradient">
                            <div className="col-sm-12 col-md-7 col-lg-8">
                                <p className="text-center lead">Have you ever sat down with your friends, ready to watch a movie, but
                                    can't
                                    ever decide which one to watch? Well, this website will help you with that!
                                    Rather than spending up to an hour searching for the perfect movie to watch, we'll take your
                                    preferences and find one for you!
                            </p>
                                <div className="container d-sm-none">
                                    <div className="row justify-content-center">
                                        <h1 className="text-center">Welcome Back!</h1>
                                        <form className="container">
                                            <div className="form-group">
                                                <div className='row'>
                                                    <div className="form-group col-6">
                                                        <label for="exampleInputEmail1" className="title">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value="" />
                                                    </div>
                                                    <div className="form-group col-6">
                                                        <label for="exampleInputPassword1" className="title">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="row justify-content-between px-3">
                                                    <Link to='/' className="btn btn-outline-success" id="sign-up-button" onClick={this.login}>Back</Link>
                                                    <Link to='/home' className="btn btn-outline-danger" id="sign-up-button">Login</Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}