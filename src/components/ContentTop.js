import React, { Component } from 'react';

export class ContentTop extends Component {
    render(){
        return(
            <div class="container-fluid padding pt-3">
            <div class="row padding">
                <div class="text-center col-lg-6 about">
                    <h2 class="dark-head display-2">Title</h2>
                    <hr class="red" />
                    <p class="text-white">Genres</p>
                    <p class="text-white">IMDB Rating</p>
                    <p class="text-white">Release Date</p>
                    <p class="text-white">Film Rating</p>
                </div>
    
                <div class="col-lg-6 text-center">
                    <img src="img/disaster.jpg" alt="The Disaster Artist" class="img-fluid cover" />
                </div>
            </div>
        </div>
        );
    }
}