import React, { Component } from 'react';

export class ContentWatch extends Component {
    render() {
        return (
            <div>
                <h2 id="watchTitle" className="text-center">Your Current Watch List</h2>
                <hr className="dark" />
                <p className="text-center">Hover or click on the movie image to see more information!</p>
                <div className="container container-fluid padding">
                    <div className="row" id="watchList">
                        {this.props.list.map((item) => {
                            return <Movie item={item}  key={item.name} removeFromList={this.props.removeFromList}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

class Movie extends Component {

    remove = (event) => {
        console.log("i work");
        this.props.removeFromList(this.props.item);
    }

    render() {
        return (
            <div className="column col-12 col-md-6 col-lg-3 d-flex justify-content-center mt-12 md-mt-0">
                <div className="img_wrap">
                    <div className="content">
                        <img src={'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path} alt={this.props.item.title} className="watchImg" />
                        <div className="container">
                            <div className="img_description_layer md-change row mt-0">
                                <p className="img_description col-sm-12">{this.props.item.overview}</p>
                                <button type="submit" className="btn btn-danger col-sm-6 rmvBtn"
                                    role="button" onClick={this.remove}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}