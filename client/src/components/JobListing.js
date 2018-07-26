import React from 'react';

const JobListing = (props) => {

    if (!props.jobs) {
        return <div>Loading...</div>
    }

    const jobItems = props.jobs.map(job => {
        return (
            <li key={job.id} className="media">
                <figure className="media-left">
                    <img id="company-logo" alt="company logo" src={job.company_logo} />
                </figure>
                <div className="media-content">
                    <h4>{job.title}</h4>
                    <p>{job.location}</p>
                    <p>{job.type}</p>
                    <a href={job.company_url}><p>Company Website</p></a>
                    <a target="_blank" href={job.url}>Link to Posting</a>
                </div>
                <hr />
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