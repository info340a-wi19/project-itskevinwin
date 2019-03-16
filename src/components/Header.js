import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    onClick = () => {
        this.props.handleSpinner();
        let url = "https://api.themoviedb.org/3/discover/movie?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1";
        let curState = this.props.getState();

        let tempGenre;
        this.props.genres.forEach((genre) => {
            if (genre.name === curState.genre) {
                tempGenre = genre.id;
            }
        });

        let tempRate;
        certs.forEach((cert) => {
            if (cert.name === curState.rating) {
                tempRate = cert.id;
            }
        });

        let num = Math.floor(Math.random() * 10);
        url = url + "&vote_average.gte=" + num;


        if (curState.genre !== '' && curState.rating !== '' && curState.score !== '' && curState.year !== '') {
            url = url + "&with_genres=" + tempGenre + "&certification=" + curState.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + curState.year.substring(0, 3) + num
                + "&vote_average.gte=" + curState.score;
        } else if (curState.genre !== '' && curState.rating !== '' && curState.score !== '') {
            url = url + "&with_genres=" + tempGenre + "&certification=" + curState.rating + "&certification.lte=" + tempRate + "&vote_average.gte=" + curState.score;
        } else if (curState.genre !== '' && curState.rating !== '' && curState.year !== '') {
            url = url + "&with_genres=" + tempGenre + "&certification=" + curState.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + curState.year.substring(0, 3) + num;
        } else if (curState.genre !== '' && curState.score !== '' && curState.year !== '') {
            url = url + "&with_genres=" + tempGenre + "&primary_release_year=" + curState.year.substring(0, 3) + num + "&vote_average.gte=" + curState.score;
        } else if (curState.rating !== '' && curState.score !== '' && curState.year !== '') {
            url = url + "&certification=" + curState.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + curState.year.substring(0, 3) + num
                + "&vote_average.gte=" + curState.score;
        } else if (curState.genre !== '' && curState.rating !== '') {
            url = url + "&with_genres=" + tempGenre + "&certification=" + curState.rating + "&certification.lte=" + tempRate;
        } else if (curState.genre !== '' && curState.score !== '') {
            url = url + "&with_genres=" + tempGenre + "&vote_average.gte=" + curState.score;
        } else if (curState.genre !== '' && curState.year !== '') {
            url = url + "&with_genres=" + tempGenre + "&primary_release_year=" + curState.year.substring(0, 3) + num;
        } else if (curState.rating !== '' && curState.score !== '') {
            url = url + "&certification=" + curState.rating + "&certification.lte=" + tempRate + "&vote_average.gte=" + curState.score;
        } else if (curState.rating !== '' && curState.year !== '') {
            url = url + "&certification=" + curState.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + curState.year.substring(0, 3) + num;
        } else if (curState.score !== '' && curState.year !== '') {
            url = url + "&primary_release_year=" + curState.year.substring(0, 3) + num + "&vote_average.gte=" + curState.score;
        } else if (curState.genre !== '') {
            url = url + "&with_genres=" + tempGenre;
        } else if (curState.rating !== '') {
            url = url + "&certification=" + curState.rating + "&certification.lte=" + tempRate;
        } else if (curState.score !== '') {
            url = url + "&vote_average.gte=" + curState.score;
        } else if (curState.year !== '') {
            url = url + "&primary_release_year=" + curState.year.substring(0, 3) + num;
        } else {
            url = url + "&vote_average.gte=" + num;
        }

        fetch(url)
            .then((response) => {
                let dataPromise = response.json();
                return dataPromise;
            }).then((data) => {
                if (data.results.length !== 0) {
                    let num = Math.floor(Math.random() * data.results.length);
                    this.props.addContent(data.results[num]);
                    this.props.addRecs();
                    this.props.handleSpinner();
                } else {
                    this.props.hasError();
                }
            })
            .catch((err) => {
                this.props.hasError();
            });
    }

    callError = () => {
        this.props.hasError();
    }
    render() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 className="text-center text-uppercase display-2">Can't Decide?</h1>
                        <h2 className="text-center text-uppercase display-2 d-none">We Got it.</h2>
                        <div className="inputs">
                            <Filters options={this.props.genres} purpose="Genre" selections={this.props.selections} getState={this.props.getState} />
                            <Filters options={[{ name: "Film Rating" }, { name: "G" }, { name: "PG" }, { name: "PG-13" }, { name: "R" }, { name: "NC-17" }]} purpose="Film Rating" selections={this.props.selections} getState={this.props.getState} />
                            <Filters options={[{ name: "IMDB Score" }, { name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }, { name: "6" },
                            { name: "7" }, { name: "8" }, { name: "9" }]} purpose="IMDB Score" selections={this.props.selections} getState={this.props.getState} />
                            <Filters options={[{ name: "Year" }, { name: "1920" }, { name: "1930" }, { name: "1940" }, { name: "1950" }, { name: "1960" }, { name: "1970" },
                            { name: "1980" }, { name: "1990" }, { name: "2000" }, { name: "2010" }]} purpose="Year" selections={this.props.selections} getState={this.props.getState} />
                            <div className="text-center">
                                <Link to="./interacted" className="btn btn-secondary btn-lg" role="button" aria-pressed="true"
                                    alt="" onClick={this.onClick}>GO</Link>
                            </div>
                        </div>
                        <hr />
                        <p className="dark-head text-center">Leave your preferences blank if you want a random movie!</p>
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
            value: ''
        }
    }

    handleChange = (event) => {
        let prevState = this.props.getState();
        let type = this.props.purpose;
        if (type === "Genre") {
            this.props.selections(event.target.value, prevState.rating, prevState.score, prevState.year);
        } else if (type === "Film Rating") {
            this.props.selections(prevState.genre, event.target.value, prevState.score, prevState.year);
        } else if (type === "IMDB Score") {
            this.props.selections(prevState.genre, prevState.rating, event.target.value, prevState.year);
        } else if (type === "Year") {
            this.props.selections(prevState.genre, prevState.rating, prevState.score, event.target.value);
        } else {
            this.props.selections(prevState.genre, prevState.rating, prevState.score, prevState.year);
        }
        this.setState({ value: event.target.value })
    }

    render() {
        let allOptions = this.props.options.map((item) => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        });
        return (
            <div className="container" value=''>
                <div className="row justify-content-around">
                    <div className="form-group col-5">
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

const certs = [
    {
        "id": 1,
        "name": "G"
    },
    {
        "id": 2,
        "name": "PG"
    },
    {
        "id": 3,
        "name": "PG-13"
    },
    {
        "id": 4,
        "name": "R"
    },
    {
        "id": 5,
        "name": "NC-17"
    }
]