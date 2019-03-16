import React, { Component } from 'react';

export class Description extends Component {
    render() {
        return (
            <div className="container-fluid done mt-5">
                <div className="row">
                    <div className="col-lg-6 done">
                        <h2 className="center">Our Goal</h2>
                        <hr className="light" />
                        <p>Our goal is to reduce the time you spend searching for the right movie, so you can spend more time
                        watching!</p>
                        <p>If we don't display a movie that interests you, just try again! We promise that you will
                        find one in a matter of seconds.</p>
                        <p>Interested in a movie, but don't want to watch now? Save it to your "Watch Later" list and access the title later!</p>
                    </div>
                    <div className="col-lg-6">
                        <img src="img/action.jpg" className="img-thumbnail" alt="Film and popcorn" />
                    </div>
                </div>
                <hr className="light" />
            </div>
        );
    }
}