import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {id : undefined, searchTerm: ''}
    }

    componentDidMount() {
        this.props.emptySearchResults();
    }
    handleChange = (event) => {
        this.props.updateSearch(event.target.value);
    }

    handleSearch = (event) => {
        if (event.charCode === 13) {
        event.preventDefault();
        this.props.emptySearchResults()
        let curValue = this.props.getState().search;
        this.setState({searchTerm: curValue});
        curValue = curValue.split(' ').join('%20');
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&page=1&include_adult=false'
        let query = '&query=' + curValue;
        url = url + query;

        console.log(url);
        this.props.handleSpinner();
        fetch(url)
            .then((response) => {
                let dataPromise = response.json();
                return dataPromise;
            }).then((data) => {
                if (data.results.length !== 0) {
                    this.props.addSearchResults(data.results[0]);
                    this.props.handleSpinner();
                    return fetch( 'https://api.themoviedb.org/3/movie/' + data.results[0]['id'] + '/similar?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&page=1')
                } else {
                    this.props.handleSpinner();
                    this.props.hasError();
                }
            }).then((response) => {
                let dataPromise = response.json();
                return dataPromise;
            }).then((data) => {
                data.results.forEach((item) => {
                    this.props.addSearchResults(item)
                });
            })
            .catch((err) => {
                //do something with the error
                // this.props.hasError();
                console.error(err);  //e.g., show in the console
            });
        }
    }

    render() {
        return(
            <input className="input-form form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" value={this.props.getState.search} onKeyPress={this.handleSearch} onChange={this.handleChange}/>
          
        );
    };
}