import React, { Component } from "react";
import Searchbar from "./Searchbar";
import API from "../util/API";
import JobListing from "./JobListing";
import _ from "lodash";


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
                this.setState({jobs: res.data});
                console.log(this.state.jobs) 
             })
        }
    }


    render() {

        const jobSearch = _.debounce((term) => { this.jobSearch(term) }, 600);

        return (
            <div className="box">
                <h4 className="is-size-2">Search for Jobs</h4>
                <Searchbar onSearchTermChange={jobSearch} />
                <p className="has-text-centered">Enter Job Title</p>
                {/* <Searchbar onSearchTermChange={this.jobSearch} />
                <p className="has-text-centered">Enter Location (Zip or City Name)</p> */}
                <div className="box">
                <JobListing jobs={this.state.jobs} />
                </div>
            </div>
        )
    }

}

export default JobSearch;