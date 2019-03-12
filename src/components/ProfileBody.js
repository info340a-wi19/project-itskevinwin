import React, { Component } from 'react';

export class ProfileBody extends Component {
    //firebase user content
    render() {
        return(
        <ProfileInfo></ProfileInfo>
        )
    }
}

class ProfileInfo extends Component {
    render() {
        return (
            <div className="text-center">
            <img className="profile-pic mt-4 mb-3" src="https://pbs.twimg.com/profile_images/605545593482547200/9Zotvyw5_400x400.jpg" alt="profile picture"/>
            <h2 id="profile-name">Lucas Woo</h2>
            </div>
        )
    }
}