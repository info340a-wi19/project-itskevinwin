import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class SearchCards extends Component {
    render() {
        return (
            <div className="container wrapper text-center">
                <div className="row">
                    {this.props.searchResults.map((item) => {
                        return <SearchCard getState={this.props.getState} key={item.title + item.release_date} addToList={this.props.addToList} 
                        addContent={this.props.addContent} emptySimilar={this.props.emptySimilar} addRecs={this.props.addRecs} item={item}/>
                    })}
                </div>
            </div>

        );
    }
}

class SearchCard extends Component {
    onClick = (event) => {
    // console.log(this.props.item);
    //   this.props.emptySimilar();
      this.props.addContent(this.props.item);
      console.log(this.props.getState().item)
    //   this.props.addRecs();
    }
    render() {
        return (
            <div className="card flex-row col-12">
                <img src={'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path} />
                <div className="d-flex flex-column">
                    <div className="card-body">
                        <div className="flex-column">
                            <h4 className="card-title font-weight-bold">{this.props.item.title}</h4>
                            <p className="card-text wrapword text-left">Rating: {this.props.item.vote_average}</p>
                            <p className="card-text wrapword text-left">Release Date: {this.props.item.release_date}</p>
                            <p className="card-text wrapword text-left">{this.props.item.overview}</p>
                        </div>
                        <Link to="/interacted" className="text-white btn btn-info mt-5" style={{ textDecoration: 'none' }} onClick={this.onClick}>See More</Link>
                    </div>
                </div>
            </div>
        );
    }
}
