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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class Nav extends Component {

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
            // <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            //     <div className="container-fluid">
            //         <a className="navbar-brand" href="/">MoviePicks</a>
            //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            //                 aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span className="navbar-toggler-icon"></span>
            //             </button>
            //         <div className="collapse navbar-collapse" id="navbarResponsive">
            //         <ul className="navbar-nav ml-auto">
            //             <li className="nav-item active">
            //                 <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#">About</a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#">Watch Later</a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#">My Profile</a>
            //             </li>
            //         </ul>
            //         <form className="form-inline my-2 my-lg-0">
            //             <a href="/search/" className="btn btn-outline-light my-2 my-sm-0" type="submit"  onClick={this.handleClick}>Search</a>

            //         </form>
            //         </div>
            //         </div>
            //     </nav>
            <Navbar color="dark" className="navbar-dark" expand="md">
                <NavbarBrand href="/home">MoviePicks</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <NavStrap className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/myprofile">Watch Later</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/search/">Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Log Out</NavLink>
                        </NavItem>
                    </NavStrap>
                </Collapse>
            </Navbar>
        );
    }
}

export class LoginNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isOpen: false,
            modal: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
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
                            <NavLink href="#" onClick={this.toggleModal}>Login</NavLink>
                            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}>Welcome Back!</ModalHeader>
                                <ModalBody>
                                    <form className="container">
                                        <div className="form-group">
                                            <div className='row'>
                                                <div className="form-group col-6">
                                                    <label for="exampleInputEmail1" className="title">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value="" />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label for="exampleInputPassword1" className="title">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button outline color="secondary" onClick={this.toggleModal}>Back</Button>{' '}
                                    <Button outline color="danger" href='/home'>Login</Button>
                                </ModalFooter>
                            </Modal>
                        </NavItem>
                    </NavStrap>
                </Collapse>
            </Navbar>
        );
    }

}
