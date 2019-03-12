import React, { Component } from 'react';

export class SearchCards extends Component {
    render() {
        return (
            <div className="container wrapper text-center">
                <div className="row">
                    {this.props.searchResults.map((item) => {
                        return <SearchCard getState={this.props.getState} item={item} key={item.title} />
                    })}
                </div>
            </div>

        );
    }
}

class SearchCard extends Component {
    render() {
        console.log(this.props.item);
        return (
            <div className="card flex-row col-12">
                <img src={'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path} />
                <div className="d-flex flex-column">
                    <div className="card-body">
                        <div className="flex-column">
                            <h4 className="card-title font-weight-bold">{this.props.item.title}</h4>
                            <p className="card-text wrapword">Rating: {this.props.item.vote_average}</p>
                            <p className="card-text wrapword">Release Date: {this.props.item.release_date}</p>
                            <p className="card-text wrapword">Description: {this.props.item.overview}</p>
                        </div>
                        <button ref="btn" type="submit" className="btn btn-info mt-5" role="button" onClick={this.updateList}>Watch Later</button>
                    </div>
                </div>
            </div>
        );
    }
}
