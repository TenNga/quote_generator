import React, { useState, useContext } from "react";
import { useQueryQuote } from "../../hooks/useQueryQuote";
import { QuoteContext } from "../../contexts/quoteContext";

function SearchInput() {
    const [ term,setTerm ] = useState("");
    
    const { data,refetch } = useQueryQuote(term);
    const { setQuotes } = useContext(QuoteContext);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setTerm(searchTerm);
    }
    const handleSubmit = (e:React.FormEvent<EventTarget>) => {
        e.preventDefault();
        // console.log("Submit Clicked:: ",data);
        refetch().then(({data}) => {
            setQuotes((prev) => {
                // console.log("Set Quote Data::: ", data);
                if(prev) {
                    return [...prev, data?.data[0]]
                }
                return data?.data;
            })
        })
        
    }
    return(
        <form className="mt-10 mx-6 mb-6 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <button type="submit" className="px-8 text-3xl py-2 border rounded-md font-medium hover:bg-indigo-400 hover:text-white  max-[400px]:text-xl">Generate New Quote</button>
            <input type="text" value={term} placeholder="Topics (Optional: separate by comma)" onChange={handleChange} className="w-full border-b border-neutral-900 mt-4 py-1 text-center" />
        </form>
    )
};

export default SearchInput;