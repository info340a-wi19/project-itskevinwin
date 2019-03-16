import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav as NavStrap,
    NavItem,
    NavLink
} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/database';


export class Nav extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            redirect: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick = () => {
        let curr = ! this.state.redirect;
        this.setState({redirect: curr})
    }

    render() {
        if(this.state.redirect) {
        let userID = firebase.auth().currentUser.uid;
        let rightPath = "/myprofile/" + userID;
        return (
            <Redirect push to={rightPath} />
        )
        }

        // firebase.auth().onAuthStateChanged((user) => {
            if(!this.props.getState().user){
                return(<Redirect push to='/' />)
                }
        // });


        return (
            <Navbar color="dark" fixed='top' className="navbar-dark sticky-nav" expand="md">
                <NavbarBrand href="/home">MoviePicks</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <NavStrap className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/home">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">About</Link>
                        </NavItem>
                        <NavItem>
                            <div className="nav-link"  onClick={this.handleClick}>Watch Later</div>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/search/" onClick={this.emptySearchResults}>Search</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/" onClick={this.props.handleSignOut}>Log Out</Link>
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
            password: undefined,
            goHome: false
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
        this.props.signInCallback(this.state.email, this.state.password);
    }


    onEnter = (event) => {
        if (event.charCode === 13) {
            this.handleSignIn();
            this.setState({goHome : true})
        }
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
        if(this.state.goHome){
            return (
                <Redirect push to='/home' />
            )
        }

        if(this.props.getState().user){
            return(<Redirect push to='home' />);
        }

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
                                                    <label htmlFor="exampleInputEmail1" className="title">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                                </div>
                                                <div className="form-group col-6">
                                                    <label htmlFor="exampleInputPassword1" className="title">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChange} onKeyPress={this.onEnter}/>
                                                </div>
                                            </div>
                                        </div>
                                        <ModalFooter>
                                    <Button outline color="secondary" onClick={this.toggleModal}>Back</Button>{' '}
                                    <Link to='/home' className="btn btn-outline-danger" id="sign-up-button" onClick={this.handleSignIn}>Login</Link>
                                </ModalFooter>
                                    </form>
                                </ModalBody>
                                
                            </Modal>
                        </NavItem>
                    </NavStrap>
                </Collapse>
            </Navbar>
        );
    }

}
