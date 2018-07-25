import React, { Component } from "react";

class YearbookCard extends Component {
  render() {
    return (
      <div className="columns">
        <div id="cardDiv" className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={this.props.photo} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left" />
                <div className="media-content">
                  <p className="title is-4">{this.props.name}</p>
                  <p className="subtitle is-6">{this.props.email}</p>
                  <p className="subtitle is-6">{this.props.lang}</p>
                  <p className="subtitle is-6">{this.props.job}</p>
                  <p className="subtitle is-6">{this.props.photo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default YearbookCard;
