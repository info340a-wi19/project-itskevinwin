import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';

export class ProfileBody extends Component {
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
            <ProfileInfo list={this.props.list} removeFromList={this.props.removeFromList} movies={this.state.movies} revealUpdate={this.revealUpdate} user={this.props.user}
                addContent={this.props.addContent}></ProfileInfo>
        );
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let movieArray = '';
                let userID = firebase.auth().currentUser.uid;
                firebase.database().ref(userID).once('value').then((snapshot) => {
                    let movieObject = snapshot.val();
                    if (movieObject == null) {
                        movieArray = ''
                    } else {
                        let movieKeys = Object.keys(movieObject);
                        movieArray = movieKeys.map((key) => {
                            let movie = movieObject[key];
                            movie.key = key;
                            return movie;
                        });
                    }
                    this.setState({ movies: movieArray })
                })
            }
        })
    }
}

class ProfileInfo extends Component {

    revealUpdate = (event) => {
        this.props.revealUpdate();
    }

    render() {
        let movies = this.props.movies;
        let name = this.props.user;
        console.log(this.props.user);
        if (Array.isArray(movies)) {
            return (
                <div className="text-center bg-light">
                    <h2 id="profile-name" className="text-center">{name.displayName}</h2>
                    <hr className="dark"></hr>
                    <div>
                        <h2 id="profile-watch" className="text-center">Your Current Watch List</h2>
                        <p className="text-center">Hover or click on the movie image to see more information!</p>
                        <div className="container container-fluid padding">
                            <div className="row justify-content-around" id="watchList">
                                {movies.map((item) => {
                                    return <Movie item={item} key={item.title} removeFromList={this.props.removeFromList} revealUpdate={this.revealUpdate} addContent={this.props.addContent} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2 id="profile-name">{name.displayName}</h2>
                    <hr className="dark"></hr>
                    <div>
                        <h2 id="profile-watch" className="text-center">Your Current Watch List</h2>
                        <p className="text-center">No Movies Here Yet :(</p>
                        <div className="container container-fluid padding">
                            <div className="row justify-content-around" id="watchList">
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class Movie extends Component {
    remove = (event) => {
        this.props.removeFromList(this.props.item);
        this.props.revealUpdate();
    }

    onClick = (event) => {
        this.props.addContent(this.props.item);
    }

    render() {
        let overview = this.props.item.overview;
        if (this.props.item.overview.length > 225) {
            overview = this.props.item.overview.substring(0, 225) + "...";
        }

        return (
            <div className="column col-12 col-md-6 col-lg-3 d-flex justify-content-center mt-2 mx-lg-3 md-mt-0" key={this.props.item.title}>
                <div className="img_wrap">
                    <div className="content">
                        <img src={'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path} alt={this.props.item.title} className="watchImg" />
                        <div className="container">
                            <div className="img_description_layer md-change row mt-0">
                                <Link to="/interacted" className="text-white" style={{ textDecoration: 'none' }} onClick={this.onClick}>
                                    <p className="img_description col-sm-12 text-center">{overview}</p>
                                </Link>
                                <button type="submit" className="btn btn-danger col-sm-6 rmvBtn w-75"
                                    onClick={this.remove}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}