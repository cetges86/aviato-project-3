import React from 'react';

const ClassmateCard = (props) => {
    return (

        <div className="box">
            <figure className="image is-128x128">
                <img alt="profile" src={props.photo} />
            </figure>
            <label className="has-text-centered">{props.name}</label>
            <p>{props.job}</p>
            <p><a href={`mailto:${props.email}`}>Email</a></p>
        </div>

    )
}

export default ClassmateCard;