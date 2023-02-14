import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <input 
        className = "pa3 ba b--green bg-lightest-green"
        type = "search" 
        placeholder = "search padis"
        onChange= {searchChange}
        />
    );
}

export default SearchBox;