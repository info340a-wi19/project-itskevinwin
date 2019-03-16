import React, { Component } from 'react';

export class ContentDesc extends Component {

    updateList = (event) => {
        this.props.addToList(this.props.item);
        this.props.revealUpdate();
        this.props.handleNewMovie();
    }

    render() {
        let btn;
        if(this.props.clickedNewMovie) {
            btn = (<button ref="btn" id="myBtn" className="btn btn-outline-secondary btn-lg" onClick={this.updateList}>Add to 'Watch Later'</button>)
        } else {
            btn = (<button ref="btn" id="myBtn" className="btn btn-outline-secondary btn-lg" onClick={this.updateList} disabled>Add to 'Watch Later'</button>)
        }
        return (
            <div className="container-fluid padding pt-2">
                <div className="row padding justify-content-around">
                    <div className="flex-md">
                        <div className="text-center col-lg-10 mx-auto">
                            <h2 className="display-4">Movie Description</h2>
                            <p className="display-5">{this.props.item['overview']}</p>
                            {btn}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

