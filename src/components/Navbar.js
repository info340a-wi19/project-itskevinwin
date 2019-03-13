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
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MoviePicks</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
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
                        <a href="/search/" className="btn btn-outline-light my-2 my-sm-0" type="submit"  onClick={this.handleClick}>Search</a>
                        
                    </form>
                    </div>
                    </div>
                </nav>
            );
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
