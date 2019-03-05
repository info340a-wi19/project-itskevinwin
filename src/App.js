import React, { Component } from 'react';
import { Nav } from './components/Navbar'
import { Header } from './components/Header'
import { Parallax } from './components/Parallax'
import { Description } from './components/Description'
import { Tools } from './components/Tools'
import { WatchHome } from './components/WatchHome'
import { Footer } from './components/Footer'

import { ContentTop } from './components/ContentTop'
import { ContentDesc } from './components/ContentDesc'
import { ContentWatch } from './components/ContentWatch'
import { ContentSim } from './components/ContentSim'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


library.add(faFilm);
library.add(faCalendarAlt);
library.add(faImdb);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      rating: '',
      score: '',
      year: '',
      firstImg : ''
    }
  }

  updateState = (genre, rating, score, year) => {
    this.setState({
      genre: genre,
      rating: rating,
      score: score,
      year: year
    });
  }

  getState = () => {
    return this.state;
  }

  addContentPic = (item) => {
    this.setState({firstImg : item});
  }

  shouldComponentUpdate() {
    if(this.state.year.length === 0 || this.state.year.length === 4) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {

    let url = "https://api.themoviedb.org/3/discover/movie?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1";

    let tempGenre;
    genres.forEach((genre) => {
      if (genre.name === this.state.genre) {
        tempGenre = genre.id;
      }
    });

    let tempRate;
    certs.forEach((cert) => {
      if (cert.name === this.state.rating) {
        tempRate = cert.id;
      }
    });
    
    if (this.state.genre !== '' && this.state.rating !== '' && this.state.score !== '' && this.state.year!== '' ) {
      url = url + "&with_genres=" + tempGenre + "&certification=" + this.state.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + this.state.year
        + "&vote_average.gte=" + this.state.score;
    } else if (this.state.genre !== '' && this.state.rating !== '' && this.state.score !== '' ) {
      url = url + "&with_genres=" + tempGenre + "&certification=" + this.state.rating + "&certification.lte=" + tempRate + "&vote_average.gte=" + this.state.score;
    } else if (this.state.genre !== '' && this.state.rating !== '' && this.state.year !== '') {
      url = url + "&with_genres=" + tempGenre + "&certification=" + this.state.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + this.state.year;
    } else if (this.state.genre !== '' && this.state.score !== '' && this.state.year !== '' ) {
      url = url + "&with_genres=" + tempGenre + "&primary_release_year=" + this.state.year + "&vote_average.gte=" + this.state.score;
    } else if (this.state.rating !== '' && this.state.score !== '' && this.state.year !== '' ) {
      url = url + "&certification=" + this.state.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + this.state.year
        + "&vote_average.gte=" + this.state.score;
    } else if (this.state.genre !== '' && this.state.rating !== '' ) {
      url = url + "&with_genres=" + tempGenre + "&certification=" + this.state.rating + "&certification.lte=" + tempRate;
    } else if (this.state.genre !== '' && this.state.score !== '' ) {
      url = url + "&with_genres=" + tempGenre + "&vote_average.gte=" + this.state.score;
    } else if (this.state.genre !== '' && this.state.year !== '' ) {
      url = url + "&with_genres=" + tempGenre + "&primary_release_year=" + this.state.year;
    } else if (this.state.rating !== '' && this.state.score !== '' ) {
      url = url + "&certification=" + this.state.rating + "&certification.lte=" + tempRate + "&vote_average.gte=" + this.state.score;
    } else if (this.state.rating !== '' && this.state.year !== '' ) {
      url = url + "&certification=" + this.state.rating + "&certification.lte=" + tempRate + "&primary_release_year=" + this.state.year;
    } else if (this.state.score !== '' && this.state.year !== '' ) {
      url = url + "&primary_release_year=" + this.state.year + "&vote_average.gte=" + this.state.score;
    } else if (this.state.genre !== '' ) {
      url = url + "&with_genres=" + tempGenre;
    } else if (this.state.rating !== '' ) {
      url = url + "&certification=" + this.state.rating + "&certification.lte=" + tempRate;
    } else if (this.state.score !== '' ) {
      url = url + "&vote_average.gte=" + this.state.score;
    } else if (this.state.year !== '' ) {
      console.log(this.state.year);
      url = url + "&primary_release_year=" + this.state.year;
      console.log(url);
    } else {
      let num = Math.floor(Math.random() * 10);
      url = url + "&vote_average.gte=" + num;
    }

    //   let similarTitles = [];
    //   let similarPosters = [];
    //   let similarOverview = [];
    //   let similarRatings = [];
    //   let similarGenreId = [];
    //   let similarGenreNames = [];
    //   let similarRelease = [];

    //   for(let i = 9; i < 13; i++) {
    //     similarTitles.push(data['results'][i]['original_title']);
    //     let baseUrl = 'http://image.tmdb.org/t/p/w185';
    //     baseUrl = baseUrl + data['results'][i]['poster_path'];
    //     similarPosters.push(baseUrl);
    //     similarOverview.push(data['results'][i]['overview']);
    //     similarRatings.push(data['results'][i]['vote_average'] + "/10");
    //     similarGenreId.push(data['results'][i]['genre_ids']);
    //     similarRelease.push(new Date((data['results'][i]['release_date'])).toLocaleDateString('en-US'));
    // }

    // Change genre ids into actual genre names


    fetch(url)
      .then(function (response) {
        let dataPromise = response.json();
        return dataPromise;
      }).then((data) => {
        // let baseUrl = 'http://image.tmdb.org/t/p/w185';
        // baseUrl = baseUrl + data['results'][0]['poster_path'];
        this.addContentPic(data.results[0]);
      })
      .catch(function (err) {
        //do something with the error
        console.error(err);  //e.g., show in the console
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(routeProps) => (
            <HomePage {...routeProps} getState={this.getState} selections={this.updateState} handleSearch={this.handleSearch}/>
          )}/>
          <Route path='/interacted' render={(routeProps) => (
              <Content {...routeProps} pic={this.state.firstImg} rating={this.state.rating}/>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <Route path="/" />
        <Nav />
        <Header selections={this.props.selections} getState={this.props.getState} handleSearch={this.props.handleSearch} />
        <Parallax />
        <Description />
        <Tools />
        <WatchHome />
        <Footer />
      </div>
    );
  }
}

class Content extends Component {

  render() {
    return (
      <div>
        <Route path="/interacted" />
        <Nav />
        <ContentTop pic={this.props.pic} rating={this.props.rating}/>
        <ContentDesc />
        <ContentWatch />
        <ContentSim />
        <Footer />
      </div>
    );
  }
}

export default App;

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