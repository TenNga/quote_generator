import React, { useState } from "react";

function TagInput() {
    const [ term,setTerm ] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setTerm(searchTerm);
    }
    const handleSearch = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        console.log("Generate New Quote: ");
    }
    return(
        <form className="mt-10 mx-6 mb-6 flex flex-col justify-center items-center">
            <button type="submit" onSubmit={handleSearch} className="px-8 text-3xl py-2 border rounded-md font-medium">Generate New Quote</button>
            <input type="text" value={term} placeholder="Enter Tag (Optional)" onChange={handleChange} className="border-b border-neutral-900 mt-4 py-1 text-center" />
        </form>
    )
};

export default TagInput;