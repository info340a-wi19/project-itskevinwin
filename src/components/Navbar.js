import React, { Component } from 'react';



export class Nav extends Component {

    handleChange = (event) => {
        this.props.updateSearch(event.target.value);
    }

    handleClick = (event) => {
        event.preventDefault();
        let curValue = this.props.getState().search;
        curValue = curValue.split(' ').join('%20');
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&page=1&include_adult=false'
        let query = '&query=' + curValue;
        url = url + query;

        fetch(url)
            .then((response) => {
                let dataPromise = response.json();
                return dataPromise;
            }).then((data) => {
                if (data.results.length !== 0) {
                    data.results.forEach((item) => {
                        this.props.addSearchResults(item);
                    })
                } else {
                    this.callError();
                }
            })
            .catch((err) => {
                //do something with the error
                this.callError();
                console.error(err);  //e.g., show in the console
            });
    }

    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">MoviePicks</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Watch Later</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Profile</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.props.getState.value} onChange={this.handleChange}/>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit" id="srchBtn" onClick={this.handleClick}>Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        );
    }
}
