import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 className="text-center text-uppercase display-2">Can't Decide?</h1>
                        <h2 className="text-center text-uppercase display-2 d-none">We Got it.</h2>
                        <div className="inputs">
                            <div className="dropdown-labels ml-3 text-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Genre
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#" aria-label="Action">Action</a>
                                        <a className="dropdown-item" href="#" aria-label="Adventure">Adventure</a>
                                        <a className="dropdown-item" href="#" aria-label="Animation">Animation</a>
                                        <a className="dropdown-item" href="#" aria-label="Biography">Biography</a>
                                        <a className="dropdown-item" href="#" aria-label="Comedy">Comedy</a>
                                        <a className="dropdown-item" href="#" aria-label="Crime">Crime</a>
                                        <a className="dropdown-item" href="#" aria-label="Documentry">Documentry</a>
                                        <a className="dropdown-item" href="#" aria-label="Drama">Drama</a>
                                        <a className="dropdown-item" href="#" aria-label="Family">Family</a>
                                        <a className="dropdown-item" href="#" aria-label="Fantasy">Fantasy</a>
                                        <a className="dropdown-item" href="#" aria-label="History">History</a>
                                        <a className="dropdown-item" href="#" aria-label="Horror">Horror</a>
                                        <a className="dropdown-item" href="#" aria-label="Musical">Musical</a>
                                        <a className="dropdown-item" href="#" aria-label="Mystery">Mystery</a>
                                        <a className="dropdown-item" href="#" aria-label="Romance">Romance</a>
                                        <a className="dropdown-item" href="#" aria-label="Sci-Fi">Sci-Fi</a>
                                        <a className="dropdown-item" href="#" aria-label="Sport">Sport</a>
                                        <a className="dropdown-item" href="#" aria-label="Thriller">Thriller</a>
                                        <a className="dropdown-item" href="#" aria-label="War">War</a>
                                        <a className="dropdown-item" href="#" aria-label="Western">Western</a>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-labels mt-3 text-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Film Rating</button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" aria-label="Rated G">G</a>
                                        <a class="dropdown-item" href="#" aria-label="Rated PG">PG</a>
                                        <a class="dropdown-item" href="#" aria-label="Rated PG-13">PG-13</a>
                                        <a class="dropdown-item" href="#" aria-label="Rated R">R</a>
                                        <a class="dropdown-item" href="#" aria-label="Rated NC-17">NC-17</a>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="input-group input-group-sm mb-3 ml-3 mx-auto w-50">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">IMDB Score Higher Than: </span>
                                </div>
                                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>

                            <div className="input-group input-group-sm mb-3 ml-3 mx-auto w-50">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Year Released: </span>
                                </div>
                                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>

                            <div className="text-center">
                                <a href="./interacted.html" className="btn btn-secondary btn-lg ml-3" role="button" aria-pressed="true"
                                    alt="">GO!</a>
                            </div>
                        </div>
                        <hr />
                        <p className="dark-head text-center">Leave everything blank if you want a random movie!</p>
                    </div>
                </div>
            </header>
        );
    }
}