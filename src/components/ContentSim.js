import React, { Component } from 'react';

export class ContentSim extends Component {
    render() {
        return (
            <div class="cushion">
                <h2 id="similarTitle" class="dark-head text-center">Similar Movies</h2>
                <hr class="red" />
                <div class="container wrapper text-center w-50">
                    <div id="slider" class="text-center pb-5">
                        <div class="slide img_wrap" id="sim1">
                            <img class="d-block w-100 resize" src="" alt="" />
                            <div class="container">
                                <div class="img_description_layer row mt-0">
                                    <p class="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" class="btn btn-primary col-sm-6 addBtn" role="button">Watch
                                                        Later</button>
                                </div>
                            </div>
                        </div>

                        <div class="slide img_wrap" id="sim2">
                            <img class="d-block w-100 resize" src="" alt="" />
                            <div class="container">
                                <div class="img_description_layer row mt-0">
                                    <p class="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" class="btn btn-primary col-sm-6 addBtn" role="button">Watch
                                                        Later</button>
                                </div>
                            </div>
                        </div>

                        <div class="slide img_wrap" id="sim3">
                            <img class="d-block w-100 resize" src="" alt="" />
                            <div class="container">
                                <div class="img_description_layer row mt-0">
                                    <p class="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" class="btn btn-primary col-sm-6 addBtn" role="button">Watch
                                                        Later</button>
                                </div>
                            </div>
                        </div>

                        <div class="slide img_wrap" id="sim4">
                            <img class="d-block w-100 resize" src="" alt="" />
                            <div class="container">
                                <div class="img_description_layer row mt-0">
                                    <p class="img_description col-sm-12 wrapword"></p>
                                    <button type="submit" class="btn btn-primary col-sm-6 addBtn" role="button">Watch
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