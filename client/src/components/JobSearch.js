import React, { Component } from "react";
import Searchbar from "./Searchbar";

class JobSearch extends Component {


    render(){
        return(
            <div className="box">
            <h4 className= "is-size-2">Search for Jobs</h4>
            <Searchbar />
            <Searchbar />
            </div>
        )
    }

}

export default JobSearch;