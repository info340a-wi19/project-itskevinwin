import React, { Component } from 'react';

export class ContentTop extends Component {
    render() {
        let item = this.props.item;
        let itemImg = 'http://image.tmdb.org/t/p/w185' + item.poster_path;
        let rating = () => {
            if (this.props.rating !== '') {
            return (<p className="text-white">Film Rating: {this.props.rating}</p>);
        }
      }
        return (
            <div className="container-fluid padding pt-3">
            <div className="row padding">
                <div className="text-center col-lg-6 about">
                    <h2 className="dark-head display-4">{item.title}</h2>
                    <hr className="red" />
                    <p className="text-white">Genres: {this.props.genreNames}</p>
                    <p className="text-white">IMDB Score: {item.vote_average}</p>
                    <p className="text-white">Release Date: {item.release_date}</p>
                    {rating()}
                </div>
                <div className="col-lg-6 text-center">
                    <img src={itemImg} alt={item.title} className="img-fluid cover w-50" />
                </div>
            </div>
        </div>
        );
    }
}

const genres = [
    { "name": "Genres" },
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]