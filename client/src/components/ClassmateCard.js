import React from 'react';

const ClassmateCard = (props) => {
    return (
        <div className='column is-third'>
            <figure className="image is-128x128">
                <img alt="profile" src={props.photo} />
            </figure>
        </div>
    )
}

export default ClassmateCard;