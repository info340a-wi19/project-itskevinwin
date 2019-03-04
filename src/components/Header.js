import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 className="text-center text-uppercase display-2">Can't Decide?</h1>
                        <h2 className="text-center text-uppercase display-2 d-none">We Got it.</h2>
                        <div className="inputs">
                            <Filters options={genres} purpose="Genre" selections={this.props.selections} getState={this.props.getState}/>
                            <Filters options={[{ name: "Film Rating" }, { name: "G" }, { name: "PG" }, { name: "PG-13" }, { name: "R" }, { name: "NC-17" }]} purpose="Film Rating" selections={this.props.selections} getState={this.props.getState}/>
                            <br />
                            <Inputs text="IMDB Score Higher Than: " />
                            <Inputs text="Year Realeased: " />

                            <div className="text-center">
                                <a href="./interacted.html" className="btn btn-secondary btn-lg ml-3" role="button" aria-pressed="true"
                                    alt="">GO!</a>
                            </div>
                        </div>
                        <hr />
                        <p className="dark-head text-center">Leave everything blank if you want a random movie!</p>
                    </div>
                </div>
            </header>
        );
    }
}

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
    }
    handleChange = (event) => {
        let prevState = this.props.getState();
        console.log(prevState);
        let type = this.props.purpose;
        // this.setState({value : event.target.value});
        if(type === "Genre") {
            console.log(event.target.value);
            this.props.selections(event.target.value, prevState.rating, '', '');
        } else {
            console.log(prevState.genre);
            this.props.selections(prevState.genre, event.target.value, '', '');
        }
    }

    render() {
        let allOptions = this.props.options.map((item) => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        });
        return (
            <div className="container" value=''>
                <div className="row justify-content-around">
                    <div className="form-group col-2">
                        <label htmlFor={this.props.purpose}></label>
                        <select className="form-control" id={this.props.purpose} value={this.state.value} onChange={this.handleChange}>
                            {allOptions})}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

class Inputs extends Component {
    render() {
        return (
            <div className="input-group input-group-sm mb-3 ml-3 mx-auto w-50">
                <div className="input-group-prepend">
                    <span className="input-group-text">{this.props.text}</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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