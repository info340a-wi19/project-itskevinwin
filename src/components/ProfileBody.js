import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';

export class ProfileBody extends Component {
    //firebase user content
    render() {
        console.log(this.props.list);
        return(
        <ProfileInfo list={this.props.list}></ProfileInfo>
        )
    }
}

class ProfileInfo extends Component {
    render() {
        firebase.database().ref('movie').once('value').then(function(snapshot){
            console.log(snapshot.val());
            let movieObject = snapshot.val();
            let movieKeys = Object.keys(movieObject);
            let movieArray = movieKeys.map((key) =>{
                let movie = movieObject[key];
                movie.key = key;
                return <Movie item={movie}  key={movie.title} removeFromList={this.props.removeFromList}/>
            })
        })
        return (
            <div className="text-center">
            <img className="profile-pic mt-4 mb-3" src="https://pbs.twimg.com/profile_images/605545593482547200/9Zotvyw5_400x400.jpg" alt="profile picture"/>
            <h2 id="profile-name">Lucas Woo</h2>
            <hr className="dark"></hr>
            <div>
                <h2 id="profile-watch" className="text-center">Your Current Watch List</h2>
                <p className="text-center">Hover or click on the movie image to see more information!</p>
                <div className="container container-fluid padding">
                    <div className="row justify-content-around" id="watchList">
                        {this.props.list.map((item) => {
                            return <Movie item={item}  key={item.title} removeFromList={this.props.removeFromList}/>
                        })}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

class Movie extends Component {

    remove = (event) => {
        this.props.removeFromList(this.props.item);
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