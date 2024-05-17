import { useQuery } from "react-query";
import React from "react";
import axios from "axios";

const fetchQuote = async (tags?:string) => {
    let BASE_URL = 'https://api.quotable.io/quotes/random';
    if(tags){
        const allTags = tags.split(',');
        const tagsParam = allTags.join('|');
        BASE_URL = `${BASE_URL}/?tag=${tagsParam}`;
    }
    const resp = await axios.get(BASE_URL)
    console.log("Fetch Resp:: ",resp);
    return resp;
}

export const useQueryQuote = (tags?:string) => {
    return useQuery(['random-quote'],()=>fetchQuote(tags),{ enabled: false });
}