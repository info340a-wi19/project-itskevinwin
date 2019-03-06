import React, { Component } from 'react';

export class ContentDesc extends Component {

    updateList = (event) => {
        this.props.addToList(this.props.item);
    }

    render() {
        let url = '';
        // if (this.props.item.backdrop === null) {
            url = 'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path;
        // } else {
            // url = 'http://image.tmdb.org/t/p/w185' + this.props.item.backdrop_path;
        // }
        return (
            <div className="container-fluid padding pt-2 h-lg">
                <div className="row padding">
                    <div className="flex-md">
                        <div className="col-lg-6">
                            <img src={url} alt="The Disaster Artist" className="img-fluid cover" />
                        </div>

                        <div className="text-center col-lg-6 about">
                            <h2 className="display-4">Movie Description</h2>
                            <p>{this.props.item['overview']}</p>
                            <button id="myBtn" className="btn btn-outline-secondary btn-lg" role="button" onClick={this.updateList}>Add to 'Watch Later'</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

