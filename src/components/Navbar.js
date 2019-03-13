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
            <Navbar color="dark" fixed='top' className="navbar-dark sticky-nav" expand="md">
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
                            <Link className="nav-link" to="/myprofile">Watch Later</Link>
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
            modal: false,
            email: undefined,
            password: undefined
        };
    }

    handleChange = (event) => {
        let field = event.target.name; //which input
        let value = event.target.value; //what value
    
        let changes = {}; //object to hold changes
        changes[field] = value; //change this field
        this.setState(changes); //update state
      }
    
    handleSignIn = (event) => {
        event.preventDefault(); //don't submit
        this.props.signInCallback(this.state.email, this.state.password);
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
            <Navbar color="dark" fixed='top' className="navbar-dark" expand="md">
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
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label for="exampleInputPassword1" className="title">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChange} />
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
