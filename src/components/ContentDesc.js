import React, { Component } from 'react';

export class ContentDesc extends Component {

    updateList = (event) => {
        this.props.addToList(this.props.item);
    }

    render() {
        return (
            <div className="container-fluid padding pt-2 h-lg">
                <div className="row padding">
                    <div className="flex-md">
                        <div className="text-center col-lg-12 about">
                            <h2 className="display-4">Movie Description</h2>
                            <p>{this.props.item['overview']}</p>
                            <button id="myBtn" className="btn btn-outline-secondary btn-lg" role="button" onClick={this.updateList}>Add to 'Watch Later'</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

