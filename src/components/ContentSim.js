import React, { Component } from 'react';

export class ContentSim extends Component {
    render() {
        return (
            <div className="cushion">
                <h2 id="similarTitle" className="dark-head text-center">Similar Movies</h2>
                <hr className="red" />
                <div className="container wrapper text-center w-50">
                    <div id="slider" className="text-center pb-5">
                        <div className="slide img_wrap" id="sim1">
                            <img className="d-block w-100 resize" src="" alt="" />
                            <div className="container">
                                <div className="img_description_layer row mt-0">
                                    <p className="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" className="btn btn-primary col-sm-6 addBtn" role="button">Watch
                                                        Later</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide img_wrap" id="sim2">
                            <img className="d-block w-100 resize" src="" alt="" />
                            <div className="container">
                                <div className="img_description_layer row mt-0">
                                    <p className="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" className="btn btn-primary col-sm-6 addBtn" role="button">Watch
                                                        Later</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide img_wrap" id="sim3">
                            <img className="d-block w-100 resize" src="" alt="" />
                            <div className="container">
                                <div className="img_description_layer row mt-0">
                                    <p className="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" className="btn btn-primary col-sm-6 addBtn" role="button">Watch
                                                        Later</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide img_wrap" id="sim4">
                            <img className="d-block w-100 resize" src="" alt="" />
                            <div className="container">
                                <div className="img_description_layer row mt-0">
                                    <p className="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" className="btn btn-primary col-sm-6 addBtn" role="button">Watch
                                                        Later</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}