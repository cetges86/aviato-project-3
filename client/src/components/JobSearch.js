import React, { Component } from "react";
import Searchbar from "./Searchbar";
import API from "../util/API";


class JobSearch extends Component {

    state = {
        jobTerm: "",
        location: "",
        jobs: []
    }

    componentDidMount = () => {
        this.jobSearch("full stack web developer", "80015");
    }

    jobSearch = (jobTitle, location) => {
        if (jobTitle !== "" && location !== "") {

            API.getJobs(jobTitle, location).then(res => {
                this.setState({jobs: res});            })
        }
    }


    render() {
        return (
            <div className="box">
                <h4 className="is-size-2">Search for Jobs</h4>
                <Searchbar onSearchTermChange={this.jobSearch} />
                <p className="has-text-centered">Enter Job Title</p>
                <Searchbar onSearchTermChange={this.jobSearch} />
                <p className="has-text-centered">Enter Location (Zip or City Name)</p>
                <button onClick={this.jobSearch(this.state.jobTerm, this.state.location)} className="button is-primary">Search </button>
                <div className="box">
                <JobListing />
                </div>
            </div>
        )
    }

}

export default JobSearch;