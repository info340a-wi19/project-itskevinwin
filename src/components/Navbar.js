import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav as NavStrap,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


export class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleChange = (event) => {
        this.props.updateSearch(event.target.value);
    }

    handleClick = () => {
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
                    this.props.hasError();
                }
            })
            .catch((err) => {
                //do something with the error
                this.props.hasError();
                console.error(err);  //e.g., show in the console
            });
    }

    handleKeyPress = (target) => {
        if (target.charCode === 13) {
            this.handleClick();
            this.setState({ entered: true });
        }
    }

    render() {
        if (this.state.entered === true) {
            return (
                <div>
                    <Redirect to='./search' />
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
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={this.props.getState.value} onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress} />
                                    <Link to='./search' className="btn btn-outline-light my-2 my-sm-0" type="submit" id="srchBtn" onClick={this.handleClick}>Search</Link>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        } else {
            return (
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/home">MoviePicks</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
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
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={this.props.getState.value} onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress} />
                                <Link to='./search' className="btn btn-outline-light my-2 my-sm-0" type="submit" id="srchBtn" onClick={this.handleClick}>Search</Link>
                            </form>
                        </div>
                    </div>
                </nav>
            );
        }
    }
}

export class LoginNav extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" className="navbar-dark" expand="md">
                <NavbarBrand href="/">MoviePicks</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <NavStrap className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem>
                    </NavStrap>
                </Collapse>
            </Navbar>
        );
    }

}
