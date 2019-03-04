import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Footer extends Component {
    render(){
        return(
            <footer>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        <hr className="red" />
                        <h5>MoviePicks</h5>
                        <hr className="red" />
                        <p>206-432-6542</p>
                        <p>moviepicks@gmail.com</p>
                        <p>4820 15th Ave NE</p>
                        <p>Seattle, WA 98105</p>
                    </div>

                    <div className="col-md-4">
                        <hr className="red" />
                        <h5>Our Hours</h5>
                        <hr className="red" />
                        <p>Monday-Friday: 12:00pm-6:30pm</p>
                        <p>Weekends: Closed</p>
                    </div>

                    <div className="col-md-4">
                        <hr className="red" />
                        <h5>Follow us</h5>
                        <hr className="red" />
                        <div className="col-12 padding">
                            <a href="https://www.facebook.com/" aria-label="Facebook" className="pl-3">
                            <FontAwesomeIcon icon={['fab', 'facebook']} size='3x' /></a>
                            <a href="https://www.twitter.com/" aria-label="Twitter" className="pl-3">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size='3x' /></a>
                            <a href="https://www.instagram.com/" aria-label="Instagram" className="pl-3">
                            <FontAwesomeIcon icon={['fab', 'instagram']} size='3x' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}
