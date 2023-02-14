import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <input 
        className = "pa3 ba b--green bg-light-blue br-4"
        type = "search" 
        placeholder = "search padis"
        onChange= {searchChange}
        />
    );
}

export default SearchBox;