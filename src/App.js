import React, { Component } from 'react';
import { Nav, LoginNav } from './components/Navbar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';

import { Header } from './components/Header'
import { Parallax, LoginPar } from './components/Parallax'
import { Description } from './components/Description'
import { Tools } from './components/Tools'
import { Footer } from './components/Footer'
import { ContentTop } from './components/ContentTop'
import { ContentWatch } from './components/ContentWatch'
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
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import Loader from 'react-loader-spinner'

library.add(faFilm);
library.add(faCalendarAlt);
library.add(faImdb);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faSpinner);


class App extends Component {

  genres = [];

  constructor(props) {
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
      searchTerm: '',
      showSpinner: false
    }
  }

  addToList = (item) => {
    let userID = firebase.auth().currentUser.uid;
    firebase.database().ref(userID).push(item);
  }

  removeFromList = (item) => {
    let userID = firebase.auth().currentUser.uid;
    if (userID) {
      firebase.database().ref(userID).child('' + item.key).remove();
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
    this.setState({
      search: value
    });
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
    this.setState({ item: item }, this.addRecommendations)
    this.getGenres(item);
  }

  addRecommendations = () => {
    let url = "https://api.themoviedb.org/3/movie/" + this.state.item.id + "/similar?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US";
    let prevState = [];
    this.handleSpinner();
    fetch(url)
      .then((response) => {
        let dataPromise = response.json();
        return dataPromise;
      }).then((data) => {
        this.handleSpinner();
        if (data.length !== 0) {
          data.results.forEach((item) => {
            if (this.state.item.title !== item.title && item.poster_path !== null && item.poster_path !== undefined) {
              prevState.push(item);
            }
          })
        } else {
          this.hasError();
        }
      }).then(() => {
        this.setState({ recs: prevState });
      })
      .catch((err) => {
      });
  }

  addSearchResults = (item) => {
    let prevState = this.state.searchResults;
    let insert = true;

    prevState.forEach((movie) => {
      if (item.title === movie.title || item.poster_path === null || item.poster_path === undefined || item.overview === '') {
        insert = false;
      }
    });

    if (insert) {
      prevState = prevState.concat(item);
    }

    this.setState({ searchResults: prevState });
  }

  emptySearchResults = () => {
    this.setState({ searchResults: [] })
  }

  hasError = () => {
    this.setState({ hasError: true });
  }

  componentWillUnmount() {
    this.authUnRegFunc();
  }

  componentDidMount() {
    this.handleSpinner();
    this.authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser){
        console.log('logged in')
        console.log(firebaseUser)
        this.setState({ user: firebaseUser, loading: false });
      } else {
        console.log('logged out')
        // this.handleSpinner();
        this.setState({user: null});
      }
    });

    // this.handleSpinner()
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let edit = data.genres;
        edit.unshift({ name: "Genre" })
        this.setState({ genres: edit });
        this.handleSpinner();
      })
      .catch(function (err) {
        //do something with the error
        console.error(err);  //e.g., show in the console
      });
  }

  handleSignUp = (email, password, first, last) => {
    this.handleSpinner();
    this.setState({ errorMessage: null }); //clear any old errors

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        let updatePromise = user.updateProfile({ displayName: first + ' ' + last });
        this.handleSpinner();
        return updatePromise;
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message })
      });
  }

  //A callback function for logging in existing users
  handleSignIn = (email, password) => {
    this.handleSpinner();
    this.setState({ errorMessage: null }); //clear any old errors

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      this.handleSpinner();
    })
      .catch((err) => {
        this.setState({ errorMessage: err })
      });
  }

  //A callback function for logging out the current user
  handleSignOut = () => {
    this.handleSpinner();
    this.setState({ errorMessage: null }); //clear any old errors
    firebase.auth().signOut().then(() => {
      this.handleSpinner();
    });
  }

  handleSpinner = () => {
    this.setState({ showSpinner: !this.state.showSpinner })
  }

  render() {
    if (this.state.showSpinner) {
      return (
        <div className="text-center">
          <Loader 
         type="Rings"
         color="#D43F3F"
         height="250"	
         width="250"
      /> 
        </div>)
    }
    if (!this.state.hasError) {
      return (
        <div>
        <Router>
          <Switch>
            <Route exact path='/' render={(routeProps) => (
              <LoginPage {...routeProps} getState={this.getState} handleSignUp={this.handleSignUp} handleSignIn={this.handleSignIn} user={this.state.user} />
            )} />
            <Route path='/home' render={(routeProps) => (
              <HomePage {...routeProps} getState={this.getState} selections={this.updateState} handleSearch={this.handleSearch} activateUpdate={this.activateUpdate}
                addContent={this.addContent} addRecs={this.addRecommendations} genres={this.state.genres} hasError={this.hasError} updateSearch={this.updateSearch}
                addSearchResults={this.addSearchResults} enterUpdate={this.enterUpdate} searchBoolean={this.state.entered} handleSignOut={this.handleSignOut} user={this.state.user} 
                emptySearchResults={this.emptySearchResults} handleSpinner={this.handleSpinner} />
            )} />
            <Route path='/interacted' render={(routeProps) => (
                <Content {...routeProps} getState={this.getState} item={this.state.item} rating={this.state.rating}
                  recs={this.state.recs} list={this.state.watchList} genreNames={this.state.genreNames}
                  updateSearch={this.updateSearch} addSearchResults={this.addSearchResults}
                  addToList={this.addToList} removeFromList={this.removeFromList} hasError={this.hasError}
                  addContent={this.addContent} emptySimilar={this.emptySimilar} addRecs={this.addRecommendations} emptySearchResults={this.emptySearchResults} handleSpinner={this.handleSpinner} />
              )} />
              <Route path='/search/' render={(routeProps) => (
                <SearchPage {...routeProps} getState={this.getState} searchResults={this.state.searchResults} updateSearch={this.updateSearch} addSearchResults={this.addSearchResults} searchPressed={this.searchPressed}
                  updateSearchPressed={this.updateSearchPressed} hasError={this.hasError} emptySearchResults={this.emptySearchResults} handleSignOut={this.handleSignOut} user={this.state.user}
                  item={this.state.item} addToList={this.addToList} addContent={this.addContent} emptySimilar={this.emptySimilar} addRecs={this.addRecommendations} handleSpinner={this.handleSpinner} />
              )} />
              <Route path='/search/:movieName' render={(routeProps) => (
                <SearchResults {...routeProps} getState={this.getState} searchResults={this.state.searchResults} updateSearch={this.updateSearch} addSearchResults={this.addSearchResults} searchPressed={this.searchPressed}
                  updateSearchPressed={this.updateSearchPressed} hasError={this.hasError} emptySearchResults={this.emptySearchResults} handleSignOut={this.handleSignOut} user={this.state.user}
                  item={this.state.item} addToList={this.addToList} addContent={this.addContent} emptySimilar={this.emptySimilar} addRecs={this.addRecommendations} handleSpinner={this.handleSpinner} />
              )} />
              <Route path='/myprofile/:uid' render={(routeProps) => (
                <MyProfile {...routeProps} getState={this.getState} searchResults={this.state.searchResults} addSearchResults={this.addSearchResults} updateSearch={this.updateSearch} list={this.state.watchList}
                  removeFromList={this.removeFromList} handleSignOut={this.handleSignOut} user={this.state.user} emptySearchResults={this.emptySearchResults} addContent={this.addContent} handleSpinner={this.handleSpinner} ></MyProfile>
              )} />
              <Redirect to="/" />

            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} handleSignOut={this.handleSignOut} user={this.state.user} />
          <div className="alert alert-danger m-3" role="alert">No results found - please try again!</div>
        </div>);
    }
  }
}

class MyProfile extends Component {
  render() {
    return (
      <div>
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} handleSignOut={this.props.handleSignOut} emptySearchResults={this.emptySearchResults} />
        <Route path="/myprofile" />
        <ProfileBody list={this.props.list} removeFromList={this.props.removeFromList} user={this.props.user} addContent={this.props.addContent} />
      </div>
    );
  }
}

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Route path="/" />
        <LoginNav getState={this.props.getState} signUpCallback={this.props.handleSignUp} signInCallback={this.props.handleSignIn} />
        <LoginPar signUpCallback={this.props.handleSignUp} signInCallback={this.props.handleSignIn} handleSpinner={this.handleSpinner}/>
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
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} hasError={this.props.hasError} handleSignOut={this.props.handleSignOut} emptySearchResults={this.emptySearchResults} />
        <Header selections={this.props.selections} getState={this.props.getState} handleSearch={this.props.handleSearch} activateUpdate={this.props.activateUpdate}
          addContent={this.props.addContent} addRecs={this.props.addRecs} genres={this.props.genres} hasError={this.props.hasError} handleSpinner={this.props.handleSpinner} />
        <Parallax />
        <Description />
        <Tools />
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
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} hasError={this.props.hasError} handleSignOut={this.props.handleSignOut} emptySearchResults={this.emptySearchResults} />
        <ContentTop item={this.props.item} rating={this.props.rating} genreNames={this.props.genreNames} />
        <ContentWatch item={this.props.item} list={this.props.list} removeFromList={this.props.removeFromList} recs={this.props.recs} addToList={this.props.addToList} emptySimilar={this.props.emptySimilar}
          recs={this.props.recs} addToList={this.props.addToList} selections={this.props.selections} getState={this.props.getState} handleSearch={this.props.handleSearch} activateUpdate={this.props.activateUpdate}
          addContent={this.props.addContent} addRecs={this.props.addRecs} genres={this.props.genres} hasError={this.props.hasError} handleSpinner={this.props.handleSpinner}
        />
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
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} hasError={this.props.hasError} handleSignOut={this.props.handleSignOut} />
        <SearchBox getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} searchPressed={this.props.searchPressed}
          updateSearchPressed={this.props.updateSearchPressed} hasError={this.props.hasError} emptySearchResults={this.props.emptySearchResults} handleSpinner={this.props.handleSpinner}/>
        <SearchCards searchResults={this.props.searchResults} getState={this.props.getState} item={this.props.item} addToList={this.props.addToList} 
                        addContent={this.props.addContent} emptySimilar={this.props.emptySimilar} addRecs={this.props.addRecs} handleSpinner={this.props.handleSpinner} />
      </div>
    );
  }
}

class SearchResults extends Component {
  render() {
    return (
      <div>
        <Route path="/search/:movieName" />
        <Nav getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} hasError={this.props.hasError} handleSignOut={this.props.handleSignOut}  />
        <SearchBox getState={this.props.getState} updateSearch={this.props.updateSearch} addSearchResults={this.props.addSearchResults} searchPressed={this.props.searchPressed}
          updateSearchPressed={this.props.updateSearchPressed} hasError={this.props.hasError} emptySearchResults={this.props.emptySearchResults} handleSignOut={this.props.handleSignOut} 
          handleSpinner={this.props.handleSpinner}/>
        <SearchCards searchResults={this.props.searchResults} getState={this.props.getState} item={this.props.item} addToList={this.props.addToList} 
                        addContent={this.props.addContent} emptySimilar={this.props.emptySimilar} addRecs={this.props.addRecs} handleSpinner={this.props.handleSpinner} />
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