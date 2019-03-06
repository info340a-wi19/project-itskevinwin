import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: false }
    }

    handleSelect = () => {
        this.setState({ selected: true });
    }

    onClick = () => {
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
            console.log(url)

        } else if (curState.genre !== '' && curState.rating !== '' && curState.score !== '') {
            url = url + "&with_genres=" + tempGenre + "&certification=" + curState.rating + "&certification.lte=" + tempRate + "&vote_average.gte=" + curState.score;
            console.log(url)

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

        console.log(url)

        fetch(url)
            .then(function (response) {
                let dataPromise = response.json();
                return dataPromise;
            }).then((data) => {
                // let baseUrl = 'http://image.tmdb.org/t/p/w185';
                // baseUrl = baseUrl + data['results'][0]['poster_path'];
                let num = Math.floor(Math.random() * data.results.length);
                this.props.addContent(data.results[num]);
                data.results.forEach((item) => {
                    console.log(item);
                    this.props.addRecs(item);
                })
            })
            .catch(function (err) {
                //do something with the error
                console.error(err);  //e.g., show in the console
            });
    }

    render() {
        let searchBtn;
        if (this.state.selected === false) {
            searchBtn = <Link to="./interacted" className="btn btn-secondary btn-lg ml-3 disabled" role="button" aria-pressed="true"
                alt="" onClick={this.handleClick}>GO!</Link>
        } else {
            searchBtn = <Link to="./interacted" className="btn btn-secondary btn-lg ml-3" role="button" aria-pressed="true"
                alt="" onClick={this.onClick}>GO!</Link>
        }
        console.log(this.props.genres);
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 className="text-center text-uppercase display-2">Can't Decide?</h1>
                        <h2 className="text-center text-uppercase display-2 d-none">We Got it.</h2>
                        <div className="inputs">
                            <Filters options={this.props.genres} purpose="Genre" selections={this.props.selections} getState={this.props.getState} handleSelect={this.handleSelect} />
                            <Filters options={[{ name: "Film Rating" }, { name: "G" }, { name: "PG" }, { name: "PG-13" }, { name: "R" }, { name: "NC-17" }]} purpose="Film Rating" selections={this.props.selections} getState={this.props.getState} handleSelect={this.handleSelect} />
                            <Filters options={[{ name: "IMDB Score" }, { name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }, { name: "6" },
                            { name: "7" }, { name: "8" }, { name: "9" }]} purpose="IMDB Score" selections={this.props.selections} getState={this.props.getState} handleSelect={this.handleSelect} />
                            <Filters options={[{ name: "Year" }, { name: "1920" }, { name: "1930" }, { name: "1940" }, { name: "1950" }, { name: "1960" }, { name: "1970" },
                            { name: "1980" }, { name: "1990" }, { name: "2000" }, { name: "2010" }]} purpose="Year" selections={this.props.selections} getState={this.props.getState} handleSelect={this.handleSelect} />
                            <div className="text-center">
                                {searchBtn}
                            </div>
                        </div>
                        <hr />
                        <p className="dark-head text-center">Input your preferences and search!</p>
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
        this.props.handleSelect();
        let type = this.props.purpose;
        if (type === "Genre") {
            console.log(1);
            this.props.selections(event.target.value, prevState.rating, prevState.score, prevState.year);
        } else if (type === "Film Rating") {
            console.log(2);
            this.props.selections(prevState.genre, event.target.value, prevState.score, prevState.year);
        } else if (type === "IMDB Score") {
            console.log(3);
            this.props.selections(prevState.genre, prevState.rating, event.target.value, prevState.year);
        } else if (type === "Year") {
            console.log(4);

            this.props.selections(prevState.genre, prevState.rating, prevState.score, event.target.value);
        } else {
            console.log(5);

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

const genres = []
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