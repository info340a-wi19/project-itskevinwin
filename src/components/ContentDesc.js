import React, { Component } from 'react';

export class ContentDesc extends Component {
    render() {
        let url = '';
        if (this.props.item.backdrop === null) {
            url = 'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path;
        } else{
            url = 'http://image.tmdb.org/t/p/w185' + this.props.item.backdrop_path;
        }
        return (
            <div class="container-fluid padding pt-2 h-lg">
                <div class="row padding">
                    <div class="flex-md">
                        <div class="col-lg-6">
                            <img src={url} alt="The Disaster Artist" class="img-fluid cover" />
                        </div>

                        <div class="text-center col-lg-6 about">
                            <h2 class="display-4">Movie Description</h2>
                            <p>{this.props.item['overview']}</p>
                            <button id="myBtn" class="btn btn-outline-secondary btn-lg" role="button">Add to 'Watch Later'</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

