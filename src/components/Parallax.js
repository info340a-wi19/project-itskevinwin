import React, { Component } from 'react';

export class Parallax extends Component {
    render(){
        return(
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