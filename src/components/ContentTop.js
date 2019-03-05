import React, { Component } from 'react';

export class ContentTop extends Component {
    render(){
        let item = this.props.item;
        console.log(item);
        let itemImg = 'http://image.tmdb.org/t/p/w185' + item.poster_path;
        let rating = () => {
            if (this.props.rating !== '') {
            return <p class="text-white">Film Rating: {this.props.rating}</p>;
        }}

        return(
            <div class="container-fluid padding pt-3">
            <div class="row padding">
                <div class="text-center col-lg-6 about">
                    <h2 class="dark-head display-4">{item.title}</h2>
                    <hr class="red" />
                    <p class="text-white">Genres</p>
                    <p class="text-white">IMDB Score: {item.vote_average}</p>
                    <p class="text-white">Release Date: {item.release_date}</p>
                    {rating()}
                </div>
    
                <div class="col-lg-6 text-center">
                    <img src={itemImg} alt={item.title} class="img-fluid cover" />
                </div>
            </div>
        </div>
        );
    }
}