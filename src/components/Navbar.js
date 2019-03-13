import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link, Redirect } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

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
                                   <Link className="nav-link" to='./myprofile'>My Profile</Link>
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

    render() {
        return (
            // <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            //     <div className="container-fluid">
            //         <a className="navbar-brand" href="./">MoviePicks</a>

            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            //             aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarResponsive">
            //             <ul className="navbar-nav ml-auto">
            //                 <li className="nav-item active">
            //                     <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="#">About</a>
            //                 </li>
            //                 {/* <li className="nav-item"><a href="#" role="navigation">Login</a></li> */}
            //             </ul>
            //         </div>
            //         <div class="d-none d-md-block">
            //             <form class="container login">
            //                 <div class="row justify-content-end">
            //                     <div class="col-2 col-md-3">
            //                         <input id="email1" type="text" class="form-control" placeholder="Email" value="" aria-label="Email" />
            //                     </div>
            //                     <div class="col-2 col-md-3">
            //                         <input id="password1" type="password" class="form-control" placeholder="Password" aria-label="Password"
            //                             value="" />
            //                     </div>
            //                     <div class="col-2">
            //                         <a href="home.html" role="button" class="btn btn-secondary" id="login-button1">Login</a>
            //                     </div>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </nav>
            // <ResponsiveMenu
            //     menuOpenButton={
            //         <div>
            //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            //                 aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span className="navbar-toggler-icon"></span>
            //             </button>
            //         </div>
            //     }
            //     menuCloseButton={
            //         <div>
            //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            //                 aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span className="navbar-toggler-icon"></span>
            //             </button>
            //         </div>
            //     }
            //     changeMenuOn='598px'
            //     menu={
            //         <ul class="nav nav-justified">
            //             <div className='container'>
            //                 <li class="nav-item col-2">
            //                         <a class="navbar-brand" href="/">MoviePicks</a>
            //                     </li>
            //                     <div className='row'>
            //                     <li class="nav-item col-1 mx-3 ml-5">
            //                         <a class="nav-link active" href="/">Home</a>
            //                     </li>
            //                     <li class="nav-item col-1 mx-3">
            //                         <a class="nav-link" href="#">About</a>
            //                     </li>
            //                     <li class="nav-item col-1 mx-3">
            //                         <a class="nav-link" href="#">Login</a>
            //                     </li>
            //                 </div>
            //             </div>
            //         </ul>
            //     }
            // />
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
