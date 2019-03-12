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

import { SearchCards } from './components/SearchCards'


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

  genres = [];

  constructor(props) {
    // let num = Math.floor(Math.random() * 10);
    super(props);
    this.state = {
      genre: '',
      rating: '',
      score: '',
      year: '',
      item: '',
      recs: [],
      genreNames: [],
      update: false,
      genres: [],
      hasError: false,
      search: '',
      searchResults: []
    }
  }

  getGenres = (item) => {
    let genreIds = item.genre_ids;

    let genreNames = genreIds.map((genreId) => {
      for (let i = 0; i < this.state.genres.length; i++) {
        if (genreId === this.state.genres[i].id) {
          return this.state.genres[i].name;
        }
      }
    });

    let genresComplete = [];
    for (let i = 0; i < genreNames.length - 1; i++) {
      genresComplete.push(genreNames[i] + ', ');
    }

    genresComplete.push(genreNames[genreNames.length - 1]);

    this.setState({ genreNames: genresComplete });
  }

  updateState = (genre, rating, score, year) => {
    this.setState({
      genre: genre,
      rating: rating,
      score: score,
      year: year
    });
  }

  updateSearch = (value) => {
    console.log(value);
    this.setState({
      search: value
    })
  }

  getState = () => {
    return this.state;
  }

  addContent = (item) => {
    this.setState({ item: item })
    this.getGenres(item);
  }

  addRecommendations = (item) => {
    let prevState = this.state.recs;
    if (this.state.item.title !== item.title && item.poster_path !== null && item.poster_path !== undefined) {
      prevState = prevState.concat(item);
    }
    this.setState({ recs: prevState });
  }

  addSearchResults = (item) => {
    let prevState = this.state.searchResults;
    if (item.poster_path !== null && item.poster_path !== undefined) {
      prevState = prevState.concat(item);
    }
    this.setState({ searchResults: prevState });
  }

  updateError = () => {
    this.setState({ hasError: true });
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let edit = data.genres;
        edit.unshift({ name: "Genre" })
        this.setState({ genres: edit });
      })
      .catch(function (err) {
        //do something with the error
        console.error(err);  //e.g., show in the console
      });
  }


  render() {
    if (!this.state.hasError) {
      return (
        <Router>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
              <HomePage {...routeProps} getState={this.getState} selections={this.updateState} handleSearch={this.handleSearch} activateUpdate={this.activateUpdate}
                addContent={this.addContent} addRecs={this.addRecommendations} genres={this.state.genres} hasError={this.updateError} updateSearch={this.updateSearch}
                addSearchResults={this.addSearchResults} />
            )} />
            <Route path='/interacted' render={(routeProps) => (
              <Content {...routeProps} getState={this.getState} item={this.state.item} rating={this.state.rating} recs={this.state.recs} list={this.state.watchList} genreNames={this.state.genreNames}
                firstMovie={this.state.firstMovie} updateSearch={this.updateSearch} addSearchResults={this.addSearchResults} />
            )} />
            <Route path='/search' render={(routeProps) => (
              <Search {...routeProps} getState={this.getState} searchResults={this.state.searchResults} addSearchResults={this.addSearchResults} updateSearch={this.updateSearch} />
            )} />
          </Switch>
        </Router>
      );
    } else {
      return (
        <div>
          <Nav />
          <div className="alert alert-danger m-3" role="alert">No results found - please try again!</div>
        </div>);
    }
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <Route path="/" />
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} />
        <Header selections={this.props.selections} getState={this.props.getState} handleSearch={this.props.handleSearch} activateUpdate={this.props.activateUpdate}
          addContent={this.props.addContent} addRecs={this.props.addRecs} genres={this.props.genres} hasError={this.props.hasError} />
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
  constructor(props) {
    super(props);
    this.state = {
      watchList: [
        {
          title: "Split",
          overview: 'Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.',
          poster_path: '/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg'
        },
        {
          title: "Crazy Rich Asians",
          overview: "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
          poster_path: '/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg'
        }
      ],
      firstMovie: [
        {
          title: "The Avengers",
          overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
          poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
        }
      ]
    }
  }

  addToList = (item) => {
    let prevState = this.state.watchList;
    prevState = prevState.concat(item);
    this.setState({ watchList: prevState });
  }

  removeFromList = (item) => {
    let prevState = this.state.watchList;
    prevState = prevState.splice(0, prevState.indexOf(item)).concat(prevState.slice(prevState.indexOf(item) + 1));
    this.setState({ watchList: prevState });
  }

  removeFirstFromList = (item) => {
    let watchList = this.state.watchList;
    let newState;
    if (watchList.length > 1) {
      newState = watchList.slice(1, watchList.length + 1);
    } else {
      newState = [];
    }

    this.setState({
      watchList: newState,
      firstMovie: [watchList[0]]
    });
  }

  render() {
    return (
      <div>
        <Route path="/interacted" />
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} />
        <ContentTop item={this.props.item} rating={this.props.rating} genreNames={this.props.genreNames} />
        <ContentDesc item={this.props.item} addToList={this.addToList} />
        <ContentWatch item={this.props.item} list={this.state.watchList} removeFromList={this.removeFromList} removeFirstFromList={this.removeFirstFromList} firstMovie={this.state.firstMovie} />
        <ContentSim recs={this.props.recs} addToList={this.addToList} />
        <Footer />
      </div>
    );
  }
}

class Search extends Component {

  render() {
    return (
      <div>
        <Route path="/search" />
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} />
        <SearchCards getState={this.props.getState} searchResults={this.props.searchResults} />
      </div>
    );
  }
}

export default App;

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