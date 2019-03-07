import React, { Component } from 'react';

export class ContentDesc extends Component {

    updateList = (event) => {
        this.refs.btn.setAttribute("disabled", "disabled")
        this.props.addToList(this.props.item);
    }

    render() {
        return (
            <div className="container-fluid padding pt-2">
                <div className="row padding justify-content-around">
                    <div className="flex-md">
                        <div className="text-center col-lg-10 mx-auto">
                            <h2 className="display-4">Movie Description</h2>
                            <p className="display-5">{this.props.item['overview']}</p>
                            <button ref="btn" id="myBtn" className="btn btn-outline-secondary btn-lg" role="button" onClick={this.updateList}>Add to 'Watch Later'</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

