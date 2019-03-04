import React, { Component } from 'react';

export class WatchHome extends Component {
    render(){
        return(
            <div className="container-fluid padding cushion">
        <div className="row title text-center">
            <div className="col-12">
                <h1 className="display-4 dark-head">Your Watch Later for the Week!</h1>
                <hr />
            </div>
        </div>

        <div className="container-fluid padding d-flex justify-content-center">
            <div className="row padding">
                <div className="col-md-6 col-lg-4 d-flex justify-content-center padding">
                    <div className="card shadow">
                        <img className="card-img-top" src="img/avengers.jpg" alt="Avengers movie" />
                        <div className="card-body">
                            <h4 className="card-title">Avengers: Infinity War</h4>
                            <p className="card-text">The Avengers and their allies must be willing to sacrifice all in
                                an attempt to defeat the powerful Thanos before his blitz
                                of devastation and ruin puts an end to the universe.</p>
                            <a href="#" className="btn btn-outline-secondary" role="button">See More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 d-flex justify-content-center padding">
                    <div className="card shadow">
                        <img className="card-img-top" src="img/split.jpg" alt="Split movie" />
                        <div className="card-body">
                            <h4 className="card-title">Split</h4>
                            <p className="card-text">Three girls are kidnapped by a man with a diagnosed 23 distinct
                                personalities. They must try to escape before the apparent
                                emergence of a frightful new 24th.</p>
                            <a href="#" className="btn btn-outline-secondary" role="button">See More</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-12 col-lg-4 d-flex justify-content-center padding">
                    <div className="card shadow">
                        <img className="card-img-top" src="img/crazy.png" alt="Crazy Rich Asians movie" />
                        <div className="card-body">
                            <h4 className="card-title">Crazy Rich Asians</h4>
                            <p className="card-text">This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu
                                to Singapore to meet her boyfriend's family.</p>
                            <a href="./interacted.html" className="btn btn-outline-secondary" role="button">See More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}