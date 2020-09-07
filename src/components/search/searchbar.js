import React from 'react';
import { BsSearch } from 'react-icons/bs';


const SearchBar = (props) => {
    const { handleQueryChange } = props;

    return (
        <div className="container">
            <h2>Search</h2>
            <div id="search-bar">
                <span><BsSearch /></span>
                <input className="space" type="text" name="query" onChange={handleQueryChange} />
            </div>
        </div>
    )

}

export default SearchBar; 