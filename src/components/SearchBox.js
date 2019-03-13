import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {redirect : false}
    }

    handleChange = (event) => {
        this.props.updateSearch(event.target.value);
    }

    handleClick = (event) => {
        if (event.charCode === 13) {
        event.preventDefault();
        this.setState({redirect : true})
        this.setState({redirect : false})
        this.props.emptySearchResults()
        let curValue = this.props.getState().search;
        curValue = curValue.split(' ').join('%20');
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&page=1&include_adult=false'
        let query = '&query=' + curValue;
        url = url + query;

        console.log(url);
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
                    this.props.hasError();
                }
            })
            .catch((err) => {
                //do something with the error
                // this.props.hasError();
                console.error(err);  //e.g., show in the console
            });
        }
    }

    render() {
        let movie = this.props.getState().search; //shortcut
        if(this.state.redirect){
            let url = '/search/' + movie;
            return <Redirect push to={url} />
        }
        return(
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.props.getState.search} onKeyPress={this.handleClick} onChange={this.handleChange}/>

        );
    };
}