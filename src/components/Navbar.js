import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
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
        DropdownItem,
        NavDropdown,
        Form,
        FormControl,
        Button
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


// export class LoginNav extends Component {

//     render() {
//         return (
//             <Navbar bg="light" expand="lg">
//                 <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="mr-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     <Form inline>
//                         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                         <Button variant="outline-success">Search</Button>
//                     </Form>
//                 </Navbar.Collapse>
//             </Navbar>
//         );
//     }

// }
