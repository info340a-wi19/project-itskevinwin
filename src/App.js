import React, { Component } from 'react';
import { Nav , LoginNav } from './components/Navbar'
import { Header } from './components/Header'
import { Parallax, LoginPar } from './components/Parallax'
import { Description } from './components/Description'
import { Tools } from './components/Tools'
import { WatchHome } from './components/WatchHome'
import { Footer } from './components/Footer'

import { ContentTop } from './components/ContentTop'
import { ContentDesc } from './components/ContentDesc'
import { ContentWatch } from './components/ContentWatch'
import { ContentSim } from './components/ContentSim'

import { ProfileBody } from './components/ProfileBody'
import { SearchCards } from './components/SearchCards'
import { SearchBox } from './components/SearchBox'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/database';

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
      searchResults: [],
      searchPressed: false,
      watchList: [{
        title: "Split",
        overview: 'Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.',
        poster_path: '/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg'
      },
      {
        title: "Crazy Rich Asians",
        overview: "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
        poster_path: '/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg'
      }]
    }
    let rootRef = firebase.database().ref();
    rootRef.set({
      movie: {}
    });
  }

  addToList = (item) => {
    let movieList = firebase.database().ref('movie');
    movieList.push(item);
    let prevState = this.state.watchList;
    prevState = prevState.concat(item);
    this.setState({ watchList: prevState });
  }

  removeFromList = (item) => {
   firebase.database().ref('movie').child('' + item.key).remove();
    let prevState = this.state.watchList;
    prevState = prevState.splice(0, prevState.indexOf(item)).concat(prevState.slice(prevState.indexOf(item) + 1));
    this.setState({ watchList: prevState });
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
    this.setState({
      search: value
    });
    // console.log(this.state.search);
  }

  updateSearchPressed = () => {
    this.setState({
      searchPressed: !this.state.searchPressed
    });
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
    let insert = true;
    prevState.forEach((movie) => {
      if(item.title === movie.title || item.poster_path === null || item.poster_path === undefined || item.overview == ''){
        insert = false;
      }
    });
    if (insert) {
      prevState = prevState.concat(item);
    }
    this.setState({ searchResults: prevState });
  }

  emptySearchResults = () => {
    this.setState({ searchResults: []})
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

  handleSignUp = (email, password, first, last) => {
    this.setState({ errorMessage: null }); //clear any old errors

    /* TODO: sign up user here */
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;

        let updatePromise = user.updateProfile({ firstName: first, lastName: last });
        return updatePromise;
      })
      // .then(() => {
      //   this.setState((prevState) => {
      //     let updatedUser = { ...prevState.user, displayName: this.state.username }
      //     return { user: updatedUser }; //update state
      //   });
      // })
        .catch((err) => {
          this.setState({ errorMessage: err.message })
        });
  }

  //A callback function for logging in existing users
  handleSignIn = (email, password) => {
    this.setState({ errorMessage: null }); //clear any old errors

    /* TODO: sign in user here */
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {
        this.setState({ errorMessage: err })
      });
  }

  //A callback function for logging out the current user
  handleSignOut = () => {
    this.setState({ errorMessage: null }); //clear any old errors

    /* TODO: sign out user here */
    firebase.auth().signOut();
  }

  render() {
    
    if (!this.state.hasError) {
      return (
        <div>
        <Router>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
              <LoginPage {...routeProps} handleSignUp={this.handleSignUp} handleSignIn={this.handleSignIn}/>
            )} />
            <Route path='/home' render={(routeProps) => (
              <HomePage {...routeProps} getState={this.getState} selections={this.updateState} handleSearch={this.handleSearch} activateUpdate={this.activateUpdate}
                addContent={this.addContent} addRecs={this.addRecommendations} genres={this.state.genres} hasError={this.updateError} updateSearch={this.updateSearch}
                addSearchResults={this.addSearchResults} enterUpdate={this.enterUpdate} searchBoolean={this.state.entered} />
            )} />
            <Route path='/interacted' render={(routeProps) => (
              <Content {...routeProps} getState={this.getState} item={this.state.item} rating={this.state.rating} recs={this.state.recs} list={this.state.watchList} genreNames={this.state.genreNames}
                updateSearch={this.updateSearch} addSearchResults={this.addSearchResults} addToList={this.addToList} removeFromList={this.removeFromList} />
            )} />
            <Route path='/search/' render={(routeProps) => (
              <SearchPage {...routeProps} getState={this.getState} searchResults={this.state.searchResults} updateSearch={this.updateSearch} addSearchResults={this.addSearchResults} searchPressed={this.searchPressed}
              updateSearchPressed={this.updateSearchPressed} hasError={this.hasError} emptySearchResults={this.emptySearchResults}/>
            )} />
            <Route path='/search/:movieName' render={(routeProps) => (
              <SearchResults {...routeProps} getState={this.getState} searchResults={this.state.searchResults} updateSearch={this.updateSearch} addSearchResults={this.addSearchResults} searchPressed={this.searchPressed}
              updateSearchPressed={this.updateSearchPressed} hasError={this.hasError} emptySearchResults={this.emptySearchResults}/>
            )} />
            <Route path='/myprofile' render={(routeProps) => (
            <MyProfile {...routeProps} getState={this.getState} searchResults={this.state.searchResults} addSearchResults={this.addSearchResults} updateSearch={this.updateSearch} list={this.state.watchList} removeFromList={this.removeFromList}></MyProfile>
          )} />
            <Redirect to="/" />

          </Switch>
        </Router>
        </div>
      );
    } else{
      return (
        <div>
          <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} />
          <div className="alert alert-danger m-3" role="alert">No results found - please try again!</div>
        </div>);
    }
  }
}

class MyProfile extends Component {
  render() {
    return (
      <div>
      <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} />
      <Route path="/myprofile" />
      <ProfileBody list={this.props.list} removeFromList={this.props.removeFromList}/>
      </div>
    );
  }
}

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginNav signUpCallback={this.props.handleSignUp} signInCallback={this.props.handleSignIn} />
        <LoginPar signUpCallback={this.props.handleSignUp} signInCallback={this.props.handleSignIn} />
        <Description />
        <Tools />
        <Footer />
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <Route path="/home" />
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} hasError={this.props.hasError}/>
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
  render() {
    return (
      <div>
        <Route path="/interacted" />
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} hasError={this.props.hasError}/>
        <ContentTop item={this.props.item} rating={this.props.rating} genreNames={this.props.genreNames} />
        
        <ContentWatch item={this.props.item} list={this.props.list} removeFromList={this.props.removeFromList} recs={this.props.recs} addToList={this.props.addToList}/>
        <Footer />
      </div>
    );
  }
}

class SearchPage extends Component {

  render() {
    return (
      <div>
        <Route path="/search/" />
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} hasError={this.props.hasError}/>
        <SearchBox getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} searchPressed={this.props.searchPressed}
        updateSearchPressed={this.props.updateSearchPressed} hasError={this.props.hasError} emptySearchResults={this.props.emptySearchResults}/>
        <SearchCards getState={this.props.getState} searchResults={this.props.searchResults} />

      </div>
    );
  }
}

class SearchResults extends Component {

  render() {
    return (
      <div>
        <Route path="/search/:movieName" />
        <SearchBox getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} searchPressed={this.props.searchPressed}
        updateSearchPressed={this.props.updateSearchPressed} hasError={this.props.hasError} emptySearchResults={this.props.emptySearchResults}/>
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