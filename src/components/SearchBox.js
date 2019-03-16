import React, { Component } from 'react';

export class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { id: undefined, searchTerm: '' }
    }

    componentDidMount() {
        this.props.emptySearchResults();
    }
    handleChange = (event) => {
        this.props.updateSearch(event.target.value);
    }

    handleSearch = (event) => {
        this.props.resetSearchError();
        if (event.charCode === 13) {
            event.preventDefault();
            this.props.emptySearchResults()
            let curValue = this.props.getState().search;
            this.setState({ searchTerm: curValue });
            curValue = curValue.split(' ').join('%20');
            let url = 'https://api.themoviedb.org/3/search/movie?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&page=1&include_adult=false'
            let query = '&query=' + curValue;
            url = url + query;


            this.props.handleSpinner();
            fetch(url)
                .then((response) => {
                    let dataPromise = response.json();
                    return dataPromise;
                }).then((data) => {
                    this.props.handleSpinner();
                    if (data.results.length !== 0) {
                        this.props.addSearchResults(data.results[0]);
                        return fetch('https://api.themoviedb.org/3/movie/' + data.results[0]['id'] + '/similar?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&page=1')
                    } else {
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

                });
        }
    }

    render() {
        console.log("rendering")
        return (
            <div className="text-center">
                <div className="jumbotron search-jumbo ">
                    <div className="search-content pt-5" align="center">
                        <h1><span className="search-title"> Search For Similar Movies </span></h1>
                        <input className="input-form form-control mr-sm-2 mt-2" type="search" placeholder="Search..." aria-label="Search" value={this.props.getState.search} onKeyPress={this.handleSearch} onChange={this.handleChange} />
                        {this.props.searchError}
                    </div>
                </div>
            </div>
        );
    }
}