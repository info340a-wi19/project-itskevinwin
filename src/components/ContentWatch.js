import React, { Component } from 'react';

export class ContentWatch extends Component {
    render() {
        let firstMovie;
        if(this.props.firstMovie.length === 1 && this.props.list.length >= 0 && this.props.firstMovie[0] !== undefined){
            firstMovie = <FirstMovie firstMovie={this.props.firstMovie} key={this.props.firstMovie.title} removeFromList={this.props.removeFromList} removeFirstFromList={this.props.removeFirstFromList}/>
        }

        return (
            <div>
                <h2 id="watchTitle" className="text-center">Your Current Watch List</h2>
                <hr className="dark" />
                <p className="text-center">Hover or click on the movie image to see more information!</p>
                <div className="container container-fluid padding">
                    <div className="row" id="watchList">
                        {firstMovie}
                        {this.props.list.map((item) => {
                            return <Movie item={item}  key={item.title} removeFromList={this.props.removeFromList}/>
                        })}
                    </div>
                </div>
            </div>
        );
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
            <div className="column col-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12 md-mt-0" key={this.props.item.title}>
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

class FirstMovie extends Component {
    remove = (event) => {
        this.props.removeFirstFromList(this.props.item);
    }

    render() {
        return (
            <div className="column col-12 col-md-6 col-lg-3 d-flex justify-content-center md-mt-0" key={this.props.firstMovie[0].title}>
                <div className="img_wrap">
                    <div className="content">
                        <img src={'http://image.tmdb.org/t/p/w185' + this.props.firstMovie[0].poster_path} alt={this.props.firstMovie[0].title} className="watchImg" />
                        <div className="container">
                            <div className="img_description_layer md-change row mt-0">
                                <p className="img_description col-sm-12 text-center">{this.props.firstMovie[0].overview}</p>
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