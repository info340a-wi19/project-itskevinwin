import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ContentSim extends Component {
    render() {
        return (
            <div className="cushion" >
                <h2 id="similarTitle" className="dark-head text-center">Similar Movies</h2>
                <hr className="red" />
                <div className="container wrapper text-center w-sim">
                    <div id="slider" className="text-center pb-5">
                        {this.props.recs.map((item) => {
                          return <Slide item={item} addToList={this.props.addToList} key={item.id}
                          hasError={this.props.hasError} addContent={this.props.addContent}
                          emptySimilar={this.props.emptySimilar} addRecs={this.props.addRecs} revealUpdate={this.props.revealUpdate}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

class Slide extends Component {

    updateList = (event) => {
        this.refs.btn.setAttribute("disabled", "disabled")
        this.props.addToList(this.props.item);
        this.props.revealUpdate();
    }

    onClick = (event) => {
      event.preventDefault();
      // this.props.emptySimilar();
      this.props.addContent(this.props.item);
      this.props.addRecs();
      console.log(this.props.item);
    }


  render() {
    let genreIds = this.props.item.genre_ids;
    let genreNames = genreIds.map((genreId) => {
      for (let i = 0; i < genres.length; i++) {
        if (genreId === genres[i].id) {
          return genres[i].name;
        }
      }
    });

    let genresComplete = [];
    for (let i = 0; i < genreNames.length - 1; i++) {
      genresComplete.push(genreNames[i] + ', ');
    }

    genresComplete.push(genreNames[genreNames.length - 1]);

    let overview = this.props.item.overview;
    if (this.props.item.overview.length > 630) {
      overview = this.props.item.overview.substring(0, 630) + "...";
    }

    return (
      <div className="slide img_wrap">
        <img className="d-block w-100 resize" src={'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path} alt={this.props.item.title} />
        <div className="container">
          <div className="img_description_layer row mt-0">
            <Link to="./interacted" className="text-white" style={{ textDecoration: 'none' }} onClick={this.onClick}>
              <p className="img_description col-sm-12 wrapword">{overview}</p>
            </Link>
            <button ref="btn" type="submit" className="btn btn-success col-sm-6 addBtn w-75" role="button" onClick={this.updateList}>Watch
                                                            Later</button>
          </div>
        </div>
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