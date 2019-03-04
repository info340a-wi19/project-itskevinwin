import React, { Component } from 'react';
import {Nav} from './components/Navbar'
import {Header} from './components/Header'
import {Parallax} from './components/Parallax'
import {Description} from './components/Description'
import {Tools} from './components/Tools'
import {WatchHome} from './components/WatchHome'
import {Footer} from './components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'


library.add(faFilm);
library.add(faCalendarAlt);
library.add(faImdb);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Parallax />
        <Description />
        <Tools />
        <WatchHome />
        <Footer />
      </div>
      );
  }
}

export default App;
