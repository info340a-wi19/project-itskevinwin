import React, { Component } from 'react';

export class ContentWatch extends Component {
    render() {
        return (
            <div>
                <h2 id="watchTitle" class="text-center">Your Current Watch List</h2>
                <hr class="dark" />
                <p class="text-center">Hover or click on the movie image to see more information!</p>
                <div class="container-fluid padding">
                    <div class="row" id="watchList">
                        <div class="column col-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12 md-mt-0">
                            <div class="img_wrap">
                                <div class="content">
                                    <img src="img/avengers.jpg" alt="Avengers Movie" class="watchImg" />
                                    <div class="container">
                                        <div class="img_description_layer md-change row mt-0">
                                            <p class="img_description col-sm-12">The Avengers and their
                                                allies must be
                                                willing to sacrifice all in
                                                an attempt to defeat the powerful Thanos before his blitz
                                            of devastation and ruin puts an end to the universe.</p>
                                            <button type="submit" class="btn btn-danger col-sm-6 rmvBtn"
                                                role="button">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12">
                            <div class="img_wrap">
                                <div class="content">
                                    <img src="img/split.jpg" alt="Split movie" class="watchImg"/>
                                    <div class="container">
                                        <div class="img_description_layer md-change row mt-0">
                                            <p class="img_description col-sm-12">Three girls are kidnapped
                                                by a man with
                                                a diagnosed 23 distinct
                                                personalities. They must try to escape before the apparent
                                            emergence of a frightful new 24th.</p>
                                            <button type="submit" class="btn btn-danger col-sm-6 rmvBtn"
                                                role="button">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12">
                            <div class="img_wrap">
                                <div class="content">
                                    <img src="img/crazy.png" alt="Crazy Rich Asians movie" class="watchImg" />
                                    <div class="container">
                                        <div class="img_description_layer md-change row mt-0">
                                            <p class="img_description col-sm-12">This contemporary romantic
                                                comedy, based on a global bestseller,
                                                follows native New Yorker Rachel Chu to Singapore to meet
                                                her
                                            boyfriend's family.</p>
                                            <button type="submit" class="btn btn-danger col-sm-6 rmvBtn"
                                                role="button">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12">
                            <div class="img_wrap">
                                <div class="content">
                                    <img class="watchImg" src="" alt="" />
                                    <div class="container">
                                        <div class="img_description_layer md-change row mt-0">
                                            <p class="new_img_description col-sm-12"></p>
                                            <button type="submit" class="btn btn-danger col-sm-6 rmvBtn"
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