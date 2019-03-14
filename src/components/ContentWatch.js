import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { ContentSim } from './ContentSim';
import { ContentDesc } from './ContentDesc';

export class ContentWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: ''
        }
    }

    revealUpdate = (event) => {
        this.componentDidMount();
        this.forceUpdate();
    }

    render() {
        return (
            <div>
             <ContentDesc item={this.props.item} addToList={this.props.addToList} revealUpdate={this.revealUpdate} />
            <WatchList list={this.props.list} removeFromList={this.props.removeFromList} movies={this.state.movies} revealUpdate={this.revealUpdate}></WatchList>
            <ContentSim recs={this.props.recs} addToList={this.props.addToList} revealUpdate={this.revealUpdate}/>
            </div>
        );
    }

    componentDidMount() {
        let movieArray = '';
        let userID = firebase.auth().currentUser.uid;
        firebase.database().ref(userID).once('value').then((snapshot) => {
        let movieObject = snapshot.val();
        if(movieObject == null) {
            movieArray =''
        } else {
        let movieKeys = Object.keys(movieObject);
            movieArray = movieKeys.map((key) => {
                let movie = movieObject[key];
                movie.key = key;
                return movie;
            });
        }
        this.setState({movies: movieArray})
    })
    }
}

class WatchList extends Component {

    revealUpdate = (event) => {
        this.props.revealUpdate();
    }

    render() {
        let movies = this.props.movies;
        if(Array.isArray(movies)) {
        return (
            <div>
                <h2 id="generator-watch" className="text-center">Your Current Watch List</h2>
                <hr className="dark"></hr>
                <p className="text-center">Hover or click on the movie image to see more information!</p>
                <div className="container container-fluid padding">
                    <div className="row justify-content-around" id="watchList">
                    {movies.map((item) => {
                            return <Movie item={item}  key={item.title} removeFromList={this.props.removeFromList} revealUpdate={this.revealUpdate}/>
                        })}
                    </div>
                </div>
            </div>
        )
     } else {
         return (
                <div className="text-center bg-light">
                <div>
                    <h2 id="generator-watch" className="text-center">Your Current Watch List</h2>
                    <hr className="dark"></hr>
                    <p className="text-center">No Movies Here Yet :(</p>
                    <div className="container container-fluid padding">
                        <div className="row justify-content-around" id="watchList">
                        </div>
                    </div>
                </div>
                </div>
         )
     }
    }
}

class Movie extends Component {

    remove = (event) => {
        this.props.removeFromList(this.props.item);
        this.props.revealUpdate();
    }

    render() {
        let overview = this.props.item.overview;
        if(this.props.item.overview.length > 225){
            overview = this.props.item.overview.substring(0,225) + "...";
        }

        return (
            <div className="column col-12 col-md-6 col-lg-3 d-flex justify-content-center mt-2 mx-lg-3 md-mt-0" key={this.props.item.title}>
                <div className="img_wrap">
                    <div className="content">
                        <img src={'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path} alt={this.props.item.title} className="watchImg" />
                        <div className="container">
                            <div className="img_description_layer md-change row mt-0">
                                <p className="img_description col-sm-12 text-center">{overview}</p>
                                <button type="submit" className="btn btn-danger col-sm-6 rmvBtn w-75"
                                    role="button" onClick={this.remove}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
