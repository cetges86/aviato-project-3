import React from 'react';

const ClassmateCard = (props) => {
    return (
        <div className='column is-third'>
        <div className="box">
            <figure className="image is-128x128">
                <img alt="profile" src={props.photo} />
            </figure>
            <label>{props.name}</label>
            </div>
        </div>
    )
}

export default ClassmateCard;