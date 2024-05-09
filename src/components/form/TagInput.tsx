import React, { useState } from "react";

function TagInput() {
    const [ term,setTerm ] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setTerm(searchTerm);
    }
    const handleSubmit = (e:React.FormEvent<EventTarget>) => {
        e.preventDefault();

        console.log("Genarate from submit")
    }
    return(
        <form className="mt-10 mx-6 mb-6 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <button type="submit" className="px-8 text-3xl py-2 border rounded-md font-medium">Generate New Quote</button>
            <input type="text" value={term} placeholder="Enter Tag (Optional)" onChange={handleChange} className="border-b border-neutral-900 mt-4 py-1 text-center" />
        </form>
    )
};

export default TagInput;