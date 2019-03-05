import React, { Component } from 'react';

export class ContentDesc extends Component {
    render() {
        return (
            <div class="container-fluid padding pt-2 h-lg">
                <div class="row padding">
                    <div class="flex-md">
                        <div class="col-lg-6">
                            <img src="img/disaster.jpg" alt="The Disaster Artist" class="img-fluid cover" />
                        </div>

                        <div class="text-center col-lg-6 about">
                            <h2 class="display-4">Movie Description</h2>
                            <p>With 'The Disaster Artist,' James Franco transforms the tragicomic true-story of aspiring
                                filmmaker
                                and infamous Hollywood outsider Tommy Wiseau—an
                                artist whose passion was as sincere as his methods were questionable—into a celebration of
                                friendship, artistic expression, and dreams pursued against
                                insurmountable odds. Based on Greg Sestero best-selling tell-all about the making of
                                Tommy's
                                cult-classic disasterpiece 'The Room' (“The Greatest Bad Movie Ever Made”),
                                'The Disaster Artist' is a hilarious and welcome reminder that there is more than one way
                                to
                                become
                                a legend—and no limit to what you can achieve when you have absolutely
                            no idea what you're doing</p>
                            <button id="myBtn" class="btn btn-outline-secondary btn-lg" role="button">Add to 'Watch Later'</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

