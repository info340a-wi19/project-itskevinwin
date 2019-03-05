import React, { Component } from 'react';

export class ContentWatch extends Component {
    render() {
        return (
            <div>
                <h2 id="watchTitle" className="text-center">Your Current Watch List</h2>
                <hr className="dark" />
                <p className="text-center">Hover or click on the movie image to see more information!</p>
                <div className="container-fluid padding">
                    <div className="row" id="watchList">
                        <div className="column col-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12 md-mt-0">
                            <div className="img_wrap">
                                <div className="content">
                                    <img src="img/avengers.jpg" alt="Avengers Movie" className="watchImg" />
                                    <div className="container">
                                        <div className="img_description_layer md-change row mt-0">
                                            <p className="img_description col-sm-12">The Avengers and their
                                                allies must be
                                                willing to sacrifice all in
                                                an attempt to defeat the powerful Thanos before his blitz
                                            of devastation and ruin puts an end to the universe.</p>
                                            <button type="submit" className="btn btn-danger col-sm-6 rmvBtn"
                                                role="button">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12">
                            <div className="img_wrap">
                                <div className="content">
                                    <img src="img/split.jpg" alt="Split movie" className="watchImg"/>
                                    <div className="container">
                                        <div className="img_description_layer md-change row mt-0">
                                            <p className="img_description col-sm-12">Three girls are kidnapped
                                                by a man with
                                                a diagnosed 23 distinct
                                                personalities. They must try to escape before the apparent
                                            emergence of a frightful new 24th.</p>
                                            <button type="submit" className="btn btn-danger col-sm-6 rmvBtn"
                                                role="button">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12">
                            <div className="img_wrap">
                                <div className="content">
                                    <img src="img/crazy.png" alt="Crazy Rich Asians movie" className="watchImg" />
                                    <div className="container">
                                        <div className="img_description_layer md-change row mt-0">
                                            <p className="img_description col-sm-12">This contemporary romantic
                                                comedy, based on a global bestseller,
                                                follows native New Yorker Rachel Chu to Singapore to meet
                                                her
                                            boyfriend's family.</p>
                                            <button type="submit" className="btn btn-danger col-sm-6 rmvBtn"
                                                role="button">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12">
                            <div className="img_wrap">
                                <div className="content">
                                    <img className="watchImg" src='' alt='' />
                                    <div className="container">
                                        <div className="img_description_layer md-change row mt-0">
                                            <p className="new_img_description col-sm-12"></p>
                                            <button type="submit" className="btn btn-danger col-sm-6 rmvBtn"
                                                role="button">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}