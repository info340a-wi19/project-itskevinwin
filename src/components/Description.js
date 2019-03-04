import React, { Component } from 'react';

export class Description extends Component {
    render(){
        return(
            <div className="container-fluid done mt-5">
            <div className="row">
                <div className="col-lg-6 done">
                    <h2 className="center">If Done Correctly...</h2>
                    <hr className="light" />
                    <p>This site should reduce the time you spend searching for the right movie, so you can spend that time
                        watching it!</p>
                    <p>If we don't display a movie that interests you at first, just try again! We promise that you will
                        find one in a matter of seconds.</p>
                    <p>And if you see a movie that you don't want to watch now, save it in your "Watch Later" so you can
                        remember to watch it another time!</p>
                    <p>If you don't want us to generate a movie for you, and instead you want to look through a bunch of
                        the movies and filter through them yourself, then click here!</p>
                    <div className="text-center">
                        <a href="#" className="btn btn-info" type="search" placeholder="Search" role="button">Search</a>
                    </div>
                    <br />
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
