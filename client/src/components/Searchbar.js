import React, { Component } from 'react';


class Searchbar extends Component {

    state = {
        term: ''
    };

    onInputChange = (term) => {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                placeholder="e.g. developer jobs..."
                className="input is-rounded is-primary"
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} 
                />
            </div>
        );
    }
}


export default Searchbar;