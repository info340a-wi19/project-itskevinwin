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
      searched: false
    }
  }

  updateState = (genre, rating, score, year) => {
    console.log(this.state);
    console.log(year);
    this.setState({
      genre: genre,
      rating: rating,
      score: score,
      year: year
    });
    console.log(this.state);
  }

  handleSearch = () => {
    console.log(this.state.searched);
    this.setState({
      searched: true,
    })
    console.log(this.state.searched);
  }

  getState = () => {
    return this.state;
  }

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/interacted' component={Content} />
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
        <Header selections={this.updateState} getState={this.getState} handleSearch={this.handleSearch} />
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
        <ContentTop />
        <ContentDesc />
        <ContentWatch />
        <ContentSim />
        <Footer />
      </div>
    );
  }
}

export default App;
