import React from 'react';

const JobListing = (props) => {

    const jobItems = props.jobs.map(job => {
        return (
           <li>
               <h4>{props.job.title}</h4>
               <p>{props.job.location}</p>
               <p>{props.job.type}</p>
               <a href={props.jobs.url}>Link to Posting</a>
               {props.jobs.how_to_apply}
               </li>
        )
    })



    return (
        <ul className="content">
        {jobItems}
        </ul>
    )

}



export default JobListing;