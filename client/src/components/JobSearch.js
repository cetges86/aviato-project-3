import React, { Component } from "react";
import Searchbar from "./Searchbar";
import API from "../util/API";
import JobListing from "./JobListing";


class JobSearch extends Component {

    state = {
        jobTerm: "",
        location: "",
        jobs: []
    }

    componentDidMount = () => {
        this.jobSearch("full stack web developer");
    }

    jobSearch = (jobTitle) => {
        if (jobTitle !== "") {

            API.getJobs(jobTitle).then(res => {
                this.setState({jobs: res});           
             })
        }
    }


    render() {
        return (
            <div className="box">
                <h4 className="is-size-2">Search for Jobs</h4>
                <Searchbar onSearchTermChange={this.jobSearch} />
                <p className="has-text-centered">Enter Job Title</p>
                {/* <Searchbar onSearchTermChange={this.jobSearch} />
                <p className="has-text-centered">Enter Location (Zip or City Name)</p> */}
                <button onClick={this.jobSearch(this.state.jobTerm)} className="button is-primary">Search </button>
                <div className="box">
                <JobListing jobs={this.state.jobs} />
                </div>
            </div>
        )
    }

}

export default JobSearch;