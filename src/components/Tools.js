import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Tools extends Component {

    render() {
        return (
            <div className="bg-secondary">
                <div className="container-fluid padding">
                    <div className="row title text-center">
                        <div className="col-12">
                            <h1 className="display-4 dark-head">How It Works</h1>
                        </div>
                        <hr />
                        <div className="col-12">
                            <p className="lead text-white">MoviePicks is an easy-to-use tool that makes the movie selection process easy for you and your friends.
                                We find a movie that best fits your needs, based on four categories:</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid padding">
                    <div className="row text-center padding">
                        <div className="col-sm-6 col-md-3">
                            <FontAwesomeIcon icon='film' />
                            <h3 className="dark-head">Genre</h3>
                            <p className="text-white">Select from a wide variety of movie genres!</p>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <img src="img/r.png" alt="Rated R" id="rated" />
                            <h3 className="dark-head">Rating</h3>
                            <p className="text-white">Preference your picks by the MPAA movie ratings!</p>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <FontAwesomeIcon icon='calendar-alt' />
                            <h3 className="dark-head">Release Year</h3>
                            <p className="text-white">Feeling nostalgic or looking for the new releases? You can find movies by selecting a range of years that best suits your needs!</p>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <FontAwesomeIcon icon={['fab', 'imdb']} />
                            <h3 className="dark-head">IMDB Rating</h3>
                            <p className="text-white">Using IMDB ratings, you can display movies that are well rated by critics!</p>
                        </div>
                    </div>
                    <hr className="my-4" />
                </div>
            </div>
        );
    }
}