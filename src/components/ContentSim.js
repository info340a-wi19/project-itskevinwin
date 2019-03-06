import React, { Component } from 'react';

export class ContentSim extends Component {
    render() {
        return (
            <div className="cushion">
                <h2 id="similarTitle" className="dark-head text-center">Similar Movies</h2>
                <hr className="red" />
                <div className="container wrapper text-center w-50">
                    <div id="slider" className="text-center pb-5">
                        {this.props.recs.map((item) => {
                            return <Slide item={item} addToList={this.props.addToList} key={item.name}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

class Slide extends Component {

    updateList = (event) => {
        this.props.addToList(this.props.item);
    }

    render() {
        return (
            <div className="slide img_wrap">
                <img className="d-block w-100 resize" src={'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path} alt={this.props.item.title} />
                <div className="container">
                    <div className="img_description_layer row mt-0">
                        <p className="img_description col-sm-12 wrapword">{this.props.item.overview}</p>
                        <button type="submit" className="btn btn-primary col-sm-6 addBtn" role="button" onClick={this.updateList}>Watch
                                                        Later</button>
                    </div>
                </div>
            </div>
        );
    }
}