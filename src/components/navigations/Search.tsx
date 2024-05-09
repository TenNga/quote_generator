import React, { useState } from "react";

function Search() {
    const [ term,setTerm ] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setTerm(searchTerm);
    }
    const handleSearch = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        console.log("Search Term: ",term);
    }
    return(
        <form className="ml-6 flex items-center" onSubmit={handleSearch}>
            <input type="text" value={term} placeholder="Search Quote" onChange={handleChange} className="border-neutral-900 pl-4 py-1 rounded" />
            <button type="submit" className=" ml-4 px-4 py-1 border rounded-md font-medium">Submit</button>
        </form>
    )
};

export default Search;