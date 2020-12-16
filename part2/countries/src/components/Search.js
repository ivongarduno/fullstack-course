import React from "react";

const Search = ({searchCountrie, handleSearchCountrie})=>{
    return(
        <div>
        find countries
        <input value={searchCountrie} onChange={handleSearchCountrie} />
      </div>
    )
}

export default Search;