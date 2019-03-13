import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark">
                <hr className="red" />
                <h5 className="text-center">Contact Us</h5>
                <hr className="red" />
                <div className="col-12 padding text-center">
                    <a href="https://www.facebook.com/" aria-label="Facebook" className="pl-3">
                        <FontAwesomeIcon icon={['fab', 'facebook']} size='3x' /></a>
                    <a href="https://www.twitter.com/" aria-label="Twitter" className="pl-3">
                        <FontAwesomeIcon icon={['fab', 'twitter']} size='3x' /></a>
                    <a href="https://www.instagram.com/" aria-label="Instagram" className="pl-3">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size='3x' /></a>
                    <p className="mt-3">206-432-6542</p>
                    <p>moviepicks@gmail.com</p>
                </div>
            </footer>
        );
    }
}
