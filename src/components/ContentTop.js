import React, { Component } from 'react';

export class ContentTop extends Component {
    render(){
        let item = this.props.item;
        let itemImg = 'http://image.tmdb.org/t/p/w185' + item.poster_path;
        let rating = () => {
            if (this.props.rating !== '') {
            return <p className="text-white">Film Rating: {this.props.rating}</p>;
        }}

        return(
            <div className="container-fluid padding pt-3">
            <div className="row padding">
                <div className="text-center col-lg-6 about">
                    <h2 className="dark-head display-4">{item.title}</h2>
                    <hr className="red" />
                    <p className="text-white">Genres</p>
                    <p className="text-white">IMDB Score: {item.vote_average}</p>
                    <p className="text-white">Release Date: {item.release_date}</p>
                    {rating()}
                </div>
    
                <div className="col-lg-6 text-center">
                    <img src={itemImg} alt={item.title} className="img-fluid cover" />
                </div>
            </div>
        </div>
        );
    }
}