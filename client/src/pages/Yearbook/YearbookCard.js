import React, { Component } from "react";

class YearbookCard extends Component {
  render() {
    return (
      
        <div className= "column is-4">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by5">
                <img className="profilePhoto" src={this.props.photo} alt="user profile" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left" />
                <div className="media-content">
                  <p className="title is-4">{this.props.name}</p>
                  <p className="subtitle is-6"><a href={"mailto:" +this.props.email}>Email</a></p>
                  <p className="subtitle is-6">{this.props.lang}</p>
                  <p className="subtitle is-6">{
                            (this.props.looking)
                                ? `Desired Job: ${this.props.job}`
                                : `Current Job: ${this.props.job}`
                        } </p>
                  <p className="subtitle is-6">{
                            (this.props.looking)
                                ? "Currently Seeking Employment: Yes" : "Not Currently Seeking Employment"
                        } </p>
                </div>
              </div>
            </div>
          </div>
       </div>
    );
  }
}
export default YearbookCard;
